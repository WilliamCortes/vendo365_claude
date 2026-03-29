import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache largo para assets estáticos
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|svg|webp|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache para llms.txt y agents.md — AI crawlers
      {
        source: '/(llms.txt|agents.md)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
    ]
  },

  // Compresión
  compress: true,

  // Optimización de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vendo365.com',
      },
    ],
  },

  // Redirects para SEO — www a non-www
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'www.vendo365.com' }],
        destination: 'https://vendo365.com/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
