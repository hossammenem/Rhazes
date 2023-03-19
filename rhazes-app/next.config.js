/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "ar",
  },
  async rewrites() {
    return [
      {
        source: "/:lang(ar|en)/:path*",
        destination: "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
