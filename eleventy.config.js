module.exports = (eleventyConfig) => {
	eleventyConfig.setQuietMode(true);

	eleventyConfig.addFilter('log', value => {
		console.log(value)
	})

	eleventyConfig.addPassthroughCopy({ "site/src": "." });

	return {
		dir: {
			input: "site",
			markdownTemplateEngine: 'njk'
		},
	}
};