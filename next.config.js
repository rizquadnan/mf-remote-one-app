const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote-one",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./RemoteOneTitle": "./src/components/RemoteOneTitle.tsx",
          "./ComponentWithRenderError":
            "./src/components/ComponentWithRenderError.tsx",
          "./ComponentWithHandlerError":
            "./src/components/ComponentWithHandlerError.tsx",
        },
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
