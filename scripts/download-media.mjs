#!/usr/bin/env node
/**
 * Re-download missing media from Wayback Machine into public/media.
 * Usage: node scripts/download-media.mjs
 */
import fs from "node:fs"
import path from "node:path"
import https from "node:https"
import http from "node:http"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const outRoot = path.join(root, "public/media")
const MEDIA = "https://sntolo.com/wp-content/uploads"

function request(url, redirects = 0) {
	return new Promise((resolve, reject) => {
		if (redirects > 10) return reject(new Error("too many redirects"))
		const lib = url.startsWith("https") ? https : http
		const req = lib.get(
			url,
			{
				headers: {
					"User-Agent":
						"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
					Accept: "*/*"
				},
				timeout: 120000
			},
			(res) => {
				if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
					const next = res.headers.location.startsWith("http")
						? res.headers.location
						: new URL(res.headers.location, url).href
					res.resume()
					return request(next, redirects + 1).then(resolve, reject)
				}
				if (res.statusCode !== 200) {
					res.resume()
					return reject(new Error(`HTTP ${res.statusCode}`))
				}
				const chunks = []
				res.on("data", (c) => chunks.push(c))
				res.on("end", () => resolve(Buffer.concat(chunks)))
				res.on("error", reject)
			}
		)
		req.on("error", reject)
		req.on("timeout", () => {
			req.destroy()
			reject(new Error("timeout"))
		})
	})
}

async function cdxLatest(url) {
	const q = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(url)}&output=json&fl=timestamp,statuscode&filter=statuscode:200&limit=1`
	try {
		const buf = await request(q)
		const json = JSON.parse(buf.toString("utf8"))
		if (Array.isArray(json) && json.length > 1) return json[1][0]
	} catch {
		/* ignore */
	}
	return null
}

async function download(rel) {
	const dest = path.join(outRoot, rel)
	if (fs.existsSync(dest) && fs.statSync(dest).size > 200) {
		return { rel, status: "skip" }
	}
	fs.mkdirSync(path.dirname(dest), { recursive: true })
	const url = `${MEDIA}/${rel}`
	const ts = await cdxLatest(url)
	if (!ts) return { rel, status: "fail", error: "no archive capture" }
	const candidates = [
		`https://web.archive.org/web/${ts}id_/${url}`,
		`https://web.archive.org/web/${ts}/${url}`
	]
	for (const cand of candidates) {
		try {
			const buf = await request(cand)
			if (buf.length < 200) continue
			const head = buf.slice(0, 80).toString("utf8").toLowerCase()
			if (head.includes("<!doctype") || head.includes("<html")) continue
			fs.writeFileSync(dest, buf)
			return { rel, status: "ok", size: buf.length }
		} catch {
			/* try next */
		}
	}
	return { rel, status: "fail", error: "download failed" }
}

const siteData = fs.readFileSync(path.join(root, "utils/siteData.ts"), "utf8")
const needed = [...siteData.matchAll(/media\(["']([^"']+)["']\)/g)].map((m) => m[1])
const missing = needed.filter((rel) => {
	const p = path.join(outRoot, rel)
	return !(fs.existsSync(p) && fs.statSync(p).size > 200)
})

console.log(`Needed: ${needed.length}. Missing: ${missing.length}`)
const results = []
for (const rel of missing) {
	const r = await download(rel)
	console.log(`[${r.status}] ${r.rel}${r.size ? ` (${r.size})` : ""}${r.error ? `: ${r.error}` : ""}`)
	results.push(r)
}
const stillMissing = missing.filter(
	(rel) => !(fs.existsSync(path.join(outRoot, rel)) && fs.statSync(path.join(outRoot, rel)).size > 200)
)
fs.writeFileSync(
	path.join(outRoot, "_download-report.json"),
	JSON.stringify(
		{
			needed: needed.length,
			present: needed.length - stillMissing.length,
			absent: stillMissing
		},
		null,
		2
	)
)
console.log(`Done. Still missing: ${stillMissing.length}`)
