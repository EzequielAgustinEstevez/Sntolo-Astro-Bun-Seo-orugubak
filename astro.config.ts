import { defineConfig } from "astro/config"
import type { AstroIntegration } from "astro"

// Astro integration imports
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import { VitePWA } from "vite-plugin-pwa"

// Helper imports
import { manifest, seoConfig } from "./utils/seoConfig"

/**
 * `astro-compress` pulls in `sharp` (native bindings) at import time.
 * Loading it during `astro dev` / `preview` blocks the whole config if the
 * platform binary is missing or was installed for another OS/arch.
 * Compression only matters for production builds, so we load it then.
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
		return [compress()]
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error)
		console.warn(
			"[astro.config] Skipping astro-compress — sharp failed to load.\n" +
				"  Rebuild for this OS/arch: pnpm rebuild sharp  (or: npm rebuild sharp)\n" +
				`  Details: ${message.split("\n")[0]}`
		)
		return []
	}
}

export default defineConfig({
	site: seoConfig.baseURL,
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
				path: "./tailwind.config.js"
			}
		}),
		sitemap(),
		...(await loadCompressIntegration())
	],
	vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
					globDirectory: "dist",
					globPatterns: [
						"**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"
					],
					// Don't fallback on document based (e.g. `/some-page`) requests
					// This removes an errant console.log message from showing up.
					navigateFallback: null
				}
			})
		]
	}
})
