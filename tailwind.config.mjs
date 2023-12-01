/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			// Screen size breakpoints for responsive design
			screens: {

				"sm": "640px",   // Small screens, such as mobile phones
				"md": "768px",   // Medium screens, such as tablets
				"lg": "1024px",  // Large screens, such as laptops
				"xl": "1280px",  // Extra-large screens
				"mac": "1440px", // Screens with a width typical of macOS devices
				"2xl": "1536px"  // Extra-extra-large screens

			},

			// Customizing Font Family
			fontFamily: {

				// Adding Josefin Sans to the Font Family
				"josefin": [ "Josefin Sans", "sans-serif" ],
				// Adding Inconsolata to the Font Family
				"inconsolata": [ "Inconsolata", "monospace" ]

			},

			// Customizing Colors
			colors: {

				"bombay_yellow": "#fee85d"

			}

		},
	},
	plugins: [],
}
