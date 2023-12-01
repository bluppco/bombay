/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Customizing Font Family
			fontFamily: {

				// Adding Josefin Sans to the Font Family
				"josefin": [ "Josefin Sans", "sans-serif" ],
				// Adding Inconsolata to the Font Family
				"inconsolata": [ "Inconsolata", "monospace" ]

			}

		},
	},
	plugins: [],
}
