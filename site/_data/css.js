const sass = require("sass"),
	path = require("path");

const compileScss = () => {
  const result = sass.renderSync({
    file: path.join(__dirname, "../src/scss/main.scss")
  });

  if (!result.css) {
    console.log("Error compiling stylesheet");
    return "/* Error compiling styleesheet */";
  }

  return result.css.toString();
};
module.exports = compileScss();