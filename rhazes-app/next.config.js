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
        source: "/en",
        destination: `/`,
        permanent: true,
      },
      {
        source: "/:lang(ar|en)/:path*",
        destination: "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
