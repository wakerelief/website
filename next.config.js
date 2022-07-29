/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  images: {
    loader: 'akamai',
    path: '',
  },
  optimizeFonts: false
}

module.exports = nextConfig
