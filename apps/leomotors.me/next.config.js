/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE == "true",
});

/** @type {import("next").NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/cocoa-discord-utils/(.*)",
        destination: "https://leomotors.github.io/cocoa-discord-utils",
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
