const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const packageJson = require("./package.json")

const API_SOURCE = process.env.API_SOURCE || "http://localhost:8888";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_SOURCE,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_SOURCE}/:path*`,
      },
    ];
  },
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
          "./RemoteOneTestAuth": "./src/components/RemoteOneTestAuth.tsx",
          "./RemoteOneTitle": "./src/components/RemoteOneTitle.tsx",
          // later better to define way for modules / components / etc that are shared for all remotes
          // like these files below
          "./ComponentWithRenderError":
            "./src/components/ComponentWithRenderError.tsx",
          "./ComponentWithHandlerError":
            "./src/components/ComponentWithHandlerError.tsx",
        },
        shared: {
          antd: {
            singleton: true,
            requiredVersion: packageJson.dependencies.antd,
            eager: true,
          },
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
