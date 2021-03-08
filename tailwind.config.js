module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primpink: '#FFB5A7',
				lightpink: '#FCD5CE',
				neutral: '#F8EDEB',
				skin: '#F9DCC4',
				tan: '#FEC89A',
			},
			fontFamily: {
				display: ['Playfair Display', 'serif'],
				header: ['Lustria', 'serif'],
				body: ['Amethysta', 'serif'],
			},
			spacing: {
				'128': '32rem',
				'144': '36rem',
				'192': '48rem',
			},
			maxHeight: {
				'fiftyscreen': '50vh',
				'eightyscreen': '80vh',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
