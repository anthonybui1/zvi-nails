module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				accent: '#D0B27A', // dark-gold
				primary: '#FFFAF1', // light-gold
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
