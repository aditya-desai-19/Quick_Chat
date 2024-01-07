/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
			}
		},
	},
	plugins: [],
}