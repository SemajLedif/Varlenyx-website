const path = require("path");
const nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
  // Shared UI components live in packages/ui/components (MBO §17) —
  // wire that folder into Nunjucks' include/extends search path alongside
  // this app's own _includes.
  const nunjucksEnv = new nunjucks.Environment([
    new nunjucks.FileSystemLoader(path.join(__dirname, "src/_includes")),
    new nunjucks.FileSystemLoader(path.join(__dirname, "../../packages/ui/components")),
  ]);
  eleventyConfig.setLibrary("njk", nunjucksEnv);

  // Design tokens + shared component CSS are authored once in packages/,
  // copied into the built site — no bundler, per MBO §17.
  eleventyConfig.addPassthroughCopy({
    "../../packages/design-tokens/tokens.css": "assets/css/tokens.css",
    "../../packages/ui/styles/base.css": "assets/css/base.css",
    "../../packages/ui/styles/components.css": "assets/css/components.css",
  });
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");

  eleventyConfig.addFilter("date", (value, format) => {
    const d = new Date();
    if (format === "Y") return d.getFullYear();
    return d.toISOString();
  });

  // Breadcrumb trail (MBO §7 locked rule: VARLENYX > Section > Subsection).
  // Auto-derives the "Section" crumb by matching the current page's url
  // against site.nav. Pages can pass frontmatter `breadcrumb: [{label,url}, ...]`
  // to supply a fully custom trail instead (see packages/ui/components/breadcrumb.njk).
  eleventyConfig.addFilter("breadcrumbTrail", (pageUrl, nav, override, pageTitle) => {
    const trail = [{ label: "VARLENYX", url: "/" }];
    if (override && override.length) {
      return trail.concat(override);
    }
    const match = (nav || []).find((item) => pageUrl.indexOf(item.url) === 0);
    if (match) {
      trail.push({ label: match.label, url: match.url });
      if (pageUrl !== match.url && pageTitle) {
        trail.push({ label: pageTitle });
      }
    } else if (pageTitle) {
      trail.push({ label: pageTitle });
    }
    return trail;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
