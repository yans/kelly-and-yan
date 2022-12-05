/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
