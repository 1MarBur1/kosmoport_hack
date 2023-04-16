/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': '#8569D0',
				'gradient': 'linear-gradient(92.52deg, #4F9EFD 0%, #1635D6 100%)',
				'BGGrey': '#F9F9F9',
				'lightGrey': '#F8F8F8',
				'grey': '#D3D3D3',
				'darkGrey': '#8C888A',
				'red': '#FF5151',
				'landingGrey': '#9F9F9F',
				'green': '#A9E500',
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
