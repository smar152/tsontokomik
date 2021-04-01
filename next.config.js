// next.config.js
const config = {
  trailingSlash: true,
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/kickstarter": { page: "/[page]" },
      "/smutcomic1": { page: "/[page]" },
      "/smutcomic2": { page: "/[page]" },
      "/artists": { page: "/[page]" },
      "/faq": { page: "/[page]" },
    };
  },
  basePath: "",
  assetPrefix: "",
  env: {
    assetPrefix: "",
  },
  distDir: "out",
};

const mode = process.env.MODE ? process.env.MODE.trim() : null;

if (mode === "GITHUB") {
  const prefix = "/heypano-next";
  console.log("Adding github parameters basePath and assetPrefix");
  config.basePath = prefix;
  config.assetPrefix = `${prefix}/`;
  config.env.assetPrefix = prefix;
}

module.exports = config;
