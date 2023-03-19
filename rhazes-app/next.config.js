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
  async rewrites() {
    return [
      {
        source: "/:lang(en)/:path*",
        destination: "/:path*",
      },
      {
        source: "/:lang(ar)/:path*",
        destination: "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
