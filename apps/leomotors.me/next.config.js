// @ts-check

/** @type {import("next").NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
