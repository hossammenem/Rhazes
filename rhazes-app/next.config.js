/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['En', 'Ar'],
    defaultLocale: 'En',
  },
}

module.exports = nextConfig
