/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/donate': { page: '/donate'}
    }
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
