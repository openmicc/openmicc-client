/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {unoptimized: true}, // to enable static export
}

module.exports = nextConfig
