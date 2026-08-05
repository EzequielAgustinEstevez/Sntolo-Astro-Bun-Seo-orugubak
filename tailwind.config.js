/** @type {import('tailwindcss').Config} */
export default {
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
				sans: ["GrenzeGotisch", "ui-serif", "Georgia", "serif"],
				display: ["Cristone", "sans-serif"],
				augusta: ["Augusta", "serif"]
			}
		}
	},
	plugins: []
}
