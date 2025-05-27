import type { NextConfig } from "next";
const { i18n } = require('./next-i18next.config');



const nextConfig: NextConfig = {
  optimizeFonts: true,
  experimental: {
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  headers: async () => {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  }
};



export default nextConfig;
