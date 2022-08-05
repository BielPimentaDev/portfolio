/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			black: {
				100: '#121212',
				200: '#151515',
			},
			white: '#FFFFFF',
			graylight: '#C4C4C4',
			blue: '#00D2DF',
		},
	},
	plugins: [],
};
