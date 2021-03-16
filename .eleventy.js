module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);

	return {
		dir: {
			input: "site",
			markdownTemplateEngine: 'njk'
		},
	}
};