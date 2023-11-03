/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ireland.apollo.olxcdn.com', 'firebasestorage.googleapis.com'],
  },
  env: {
    FIREBASE_KEY: process.env.FIREBASE_KEY,
    FIREBASE_DOMAIN: process.env.FIREBASE_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_BUCKET: process.env.FIREBASE_BUCKET,
    SENDER_ID: process.env.SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
  output: 'export',
};

module.exports = nextConfig;
