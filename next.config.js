/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bdsm-profile',
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
}

module.exports = nextConfig