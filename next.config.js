/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dynamic.bonfireassets.com',
        pathname: '/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'glenechoravine.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig; 