/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "bi.im-g.pl",
      "www.audiklub.org",
      "i.ebayimg.com",
      "maxtondesign.pl",
      "i.pinimg.com",
      "i.wpimg.pl",
      "ireland.apollo.olxcdn.com"
    ],
  },
};

module.exports = nextConfig;
