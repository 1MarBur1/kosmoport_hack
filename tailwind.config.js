/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'green': '#73C66E',
				'violet': '#7552FF',
				'red': '#FF0059',
				'background': '#F9F9F9',
				'black': '#332E2D',
				'grey1': '#45EDA1',
				'grey2': '#828282',
				'grey3': '#BDBDBD',
				'grey4': '#E0E0E0',
			},
		},
	},
	plugins: [],
};
