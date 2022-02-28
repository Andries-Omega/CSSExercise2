module.exports = {
	content: [
		"./index.html",
		"./src/HeaderComponent/*.tsx",
		"./src/HeroComponent/*.tsx",
		"./src/ServicesComponent/*.tsx",
		"./src/ContactComponent/*.tsx",
		"./src/BlogComponent/*.tsx",
		"./src/TeamComponent/*.tsx",
		"./src/FooterComponent/*.tsx",
	],
	theme: {
		extend: {
			colors: {
				TheGray: "#F3F3F3",
			},
			fontSize: {
				"15xl": "125px",
				"20xl": "200px",
			},
		},
	},
	plugins: [],
};
