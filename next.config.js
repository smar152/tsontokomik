const slugs = [
  "/kickstarter",
  "/smutcomic1",
  "/smutcomic2",
  "/artists",
  "/faq",
];

// next.config.js
const config = {
  trailingSlash: true,
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const paths = {
      "/": { page: "/" },
    };
    slugs.forEach((slug) => {
      paths[slug] = { page: "[page]" };
      paths[`/en${slug}`] = { page: "/en/[page]" };
    });
    return paths;
  },
  basePath: "",
  assetPrefix: "",
  env: {
    assetPrefix: "",
  },
};

const mode = process.env.MODE ? process.env.MODE.trim() : null;

if (mode === "GITHUB") {
  const prefix = "/tsontokomik";
  console.log("Adding github parameters basePath and assetPrefix");
  config.basePath = prefix;
  config.assetPrefix = `${prefix}/`;
  config.env.assetPrefix = prefix;
}

module.exports = config;
