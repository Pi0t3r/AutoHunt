/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "ireland.apollo.olxcdn.com"
    ],
  },
};

module.exports = nextConfig;
