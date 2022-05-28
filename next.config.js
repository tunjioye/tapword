/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/api/check-word': { page: '/api/check-word' },
    }
  },
}

module.exports = nextConfig
