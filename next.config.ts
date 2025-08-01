import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false, // 👈 Disable Dev Tools completely
  experimental: {},
  images: {
    unoptimized: true, // 🔥 Disable image optimizer on Plesk
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'www.salihkaankoc.net',
        pathname: '/nata-core/**',
      },
      {
        protocol: 'http',
        hostname: 'www.salihkaankoc.net',
        pathname: '/nata-core/**',
      }
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
