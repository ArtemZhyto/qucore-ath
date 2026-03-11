// Types
import type { NextConfig } from 'next'

const isProd = process.env.MODE === 'prod'

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    externalDir: true,
  },

  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: `${process.env.AUTH_API_URL}/:path*`,
      },
    ]
  },

  images: {
    remotePatterns: [
      {
        protocol: isProd ? 'https' : 'http',
        hostname: isProd ? process.env.NEXT_PUBLIC_SITE! : 'localhost',
        port: isProd ? '' : '3020',
        pathname: '/api/**',
      },
    ],
  },

  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value:
            "frame-src 'self' https://www.google.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; connect-src 'self';",
        },
      ],
    },
  ],
}

export default nextConfig
