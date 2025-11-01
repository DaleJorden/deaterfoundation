import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function sortByOrder(collection) {
  return [...collection].sort((a, b) => {
    const orderA = a.data.order ?? 0;
    const orderB = b.data.order ?? 0;
    if (orderA === orderB) {
      return (a.data.title ?? "").localeCompare(b.data.title ?? "");
    }
    return orderA - orderB;
  });
}

function sortByDateDesc(collection) {
  return [...collection].sort((a, b) => {
    const dateA = a.date ?? new Date(0);
    const dateB = b.date ?? new Date(0);
    return dateB - dateA;
  });
}

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/manifest.json": "manifest.json" });

  eleventyConfig.addWatchTarget("./tailwind.config.cjs");
  eleventyConfig.addWatchTarget("./postcss.config.cjs");
  eleventyConfig.addWatchTarget("./src/assets/css/tailwind.css");

  eleventyConfig.addFilter("readableDate", (value) => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(date);
  });

  eleventyConfig.addFilter("dateIso", (value) => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString();
  });

  eleventyConfig.addFilter("initials", (value = "") =>
    value
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("")
  );

  eleventyConfig.addShortcode("year", () => new Date().getFullYear());

  eleventyConfig.addCollection("programs", (collectionApi) =>
    sortByOrder(collectionApi.getFilteredByGlob("src/programs/*.md"))
  );
  eleventyConfig.addCollection("people", (collectionApi) =>
    sortByOrder(collectionApi.getFilteredByGlob("src/people/*.md"))
  );
  eleventyConfig.addCollection("news", (collectionApi) =>
    sortByDateDesc(collectionApi.getFilteredByGlob("src/news/*.md"))
  );

  eleventyConfig.setServerOptions({
    port: 8080,
    showAllHosts: true,
    watch: [join(__dirname, "src")],
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "11ty.js", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
}
