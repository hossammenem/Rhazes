/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "ar",
    localeDetection: false,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/:lang(en|ar)/:path*",
        destination: "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
