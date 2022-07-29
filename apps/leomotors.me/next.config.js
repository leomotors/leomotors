// @ts-check

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
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
