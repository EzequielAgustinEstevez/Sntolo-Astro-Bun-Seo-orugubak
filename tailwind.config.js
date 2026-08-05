/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}"],
	theme: {
		extend: {
			screens: {
				sm: "400px"
			},
			colors: {
				primary: "#bc890e",
				secondary: "#ffffff",
				black: "#000000"
			},
			fontFamily: {
				sans: ["GrenzeGotisch", ...defaultTheme.fontFamily.serif],
				display: ["Cristone", "sans-serif"],
				augusta: ["Augusta", "serif"]
			}
		}
	},
	plugins: []
}
