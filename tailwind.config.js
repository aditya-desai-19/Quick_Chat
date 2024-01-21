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
		screens: {
			'xsm':'375px',
			'sm': '425px',
			'md': '768px',
			'lg': '1024px' 
		}
	},
	plugins: [],
}