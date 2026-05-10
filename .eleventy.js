const { HtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addFilter("absoluteUrl", function (path, base) {
    const baseUrl = base || "https://nomadaligners.com";
    if (!path) return baseUrl;
    if (path.startsWith("http")) return path;
    return baseUrl.replace(/\/$/, "") + (path.startsWith("/") ? path : "/" + path);
  });

  eleventyConfig.addFilter("jsonify", function (value) {
    return JSON.stringify(value);
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
