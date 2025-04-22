import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  optimizeFonts: true,
  experimental: {
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
