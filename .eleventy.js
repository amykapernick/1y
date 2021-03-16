const svgPlugin = require('@jamshop/eleventy-plugin-svg')

module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);

	eleventyConfig.addPlugin(svgPlugin, {
		input: "site/src/img/"
	});

	return {
		dir: {
			input: "site",
			markdownTemplateEngine: 'njk'
		},
	}
};