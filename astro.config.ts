import { defineConfig } from "astro/config"
import type { AstroIntegration } from "astro"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { VitePWA } from "vite-plugin-pwa"

import { manifest, seoConfig } from "./utils/seoConfig"

/**
 * `astro-compress` pulls in `sharp` at import time.
 * Only load it for production builds to avoid breaking `astro dev`.
 * CSS compression is disabled: it was stripping all `@media` rules
 * (responsive Tailwind `md:`/`lg:` classes), so Vercel looked different from local.
 */
async function loadCompressIntegration(): Promise<AstroIntegration[]> {
	const command = process.argv.find((arg) =>
		["dev", "build", "preview", "check"].includes(arg)
	)

	if (command !== "build") {
		return []
	}

	try {
		const { default: compress } = await import("astro-compress")
		return [
			compress({
				CSS: false,
				HTML: true,
				Image: true,
				JavaScript: true,
				SVG: true
			})
		]
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error)
		console.warn(
			"[astro.config] Skipping astro-compress — sharp failed to load.\n" +
				"  Rebuild for this OS/arch: pnpm rebuild sharp\n" +
				`  Details: ${message.split("\n")[0]}`
		)
		return []
	}
}

export default defineConfig({
	site: seoConfig.baseURL,
	integrations: [sitemap(), ...(await loadCompressIntegration())],
	vite: {
		plugins: [
			tailwindcss(),
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
					globDirectory: "dist",
					globPatterns: [
						"**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"
					],
					navigateFallback: null
				}
			})
		]
	}
})
