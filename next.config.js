/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        // pathname: '/my-bucket/**',
      },
    ],
  },
}

module.exports = nextConfig;
