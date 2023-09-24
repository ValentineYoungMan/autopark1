/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.supercars.net'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
