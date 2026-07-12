import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  trailingSlash: "always",
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};

export default config;
