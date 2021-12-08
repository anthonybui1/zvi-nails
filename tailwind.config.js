module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// primpink: '#FFB5A7',
				// lightpink: '#FCD5CE',
				// neutral: '#F8EDEB',
				primpink: '#D0B27A',
				lightpink: '#FFF2D9',
				neutral: '#FFFAF1',
				// darkgold: '#D0B27A',
				// gold: '#F5EDB3',
				// lightgold: '#FFF2D9',


			},
			fontFamily: {
				display: ['Playfair Display', 'serif'],
				header: ['Lustria', 'serif'],
				body: ['Amethysta', 'serif'],
			},
			spacing: {
				'128': '32rem',
				'144': '36rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
