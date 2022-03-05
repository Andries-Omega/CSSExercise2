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
			backgroundImage: {
				"blog-news": "url('./src/assets/images/blog_pic_1.jpg')",
				"blog-technology": "url('./src/assets/images/blog_pic_2.jpg')",
				"blog-business": "url('./src/assets/images/blog_pic_3.jpg')",
				"team-bg": "url('./src/assets/images/team_bg_image.jpg')",
			},
			width: {
				width: "180px",
			},
		},
	},
	plugins: [],
};
