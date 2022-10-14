/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // causes double-rendering
  swcMinify: true,
  images: {unoptimized: true}, // to enable static export
}

module.exports = nextConfig
