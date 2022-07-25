/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cloudflare-ipfs.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  }
}

module.exports = nextConfig
