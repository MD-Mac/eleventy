module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "content",           // where your markdown lives
            includes: "../_includes",   // for layouts and components
            output: "_site",
            data: "_data"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: true
    };
};