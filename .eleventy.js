const svgPlugin = require('@jamshop/eleventy-plugin-svg')

module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);

	eleventyConfig.addPlugin(svgPlugin, {
		input: "site/src/img/"
	});

	eleventyConfig.addFilter('log', value => {
		console.log(value)
	})

	return {
		dir: {
			input: "site",
			markdownTemplateEngine: 'njk'
		},
	}
};