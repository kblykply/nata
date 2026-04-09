import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {},
  images: {
    unoptimized: true,
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
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com *.googleadservices.com connect.facebook.net *.facebook.com",
              "img-src 'self' data: blob: *.googletagmanager.com *.google-analytics.com *.googleadservices.com *.facebook.com res.cloudinary.com www.salihkaankoc.net",
              "connect-src 'self' *.googletagmanager.com *.google-analytics.com *.googleadservices.com connect.facebook.net *.facebook.com",
              "frame-src *.googletagmanager.com *.facebook.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
            ].join('; ')
          }
        ]
      }
    ];
  }
};

export default withNextIntl(nextConfig);
