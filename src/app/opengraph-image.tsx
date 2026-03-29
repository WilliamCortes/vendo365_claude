import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vendo365 — Tu negocio en internet. Desde WhatsApp. En minutos.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #111827 0%, #1A2332 60%, #0f1e35 100%)',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Glow radial */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse at center, rgba(43,76,126,0.4) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(242,153,74,0.15)',
            border: '1px solid rgba(242,153,74,0.4)',
            borderRadius: '9999px',
            padding: '8px 18px',
            marginBottom: '28px',
          }}
        >
          <span style={{ color: '#F2994A', fontSize: '14px', fontWeight: 500, letterSpacing: '0.05em' }}>
            ✦ Ya con clientes activos en Colombia
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '24px',
          }}
        >
          <span
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#F1F3F5',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Tu negocio en internet.
          </span>
          <span
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#25D366',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Desde WhatsApp.
          </span>
          <span
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#F1F3F5',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            En minutos.
          </span>
        </div>

        {/* Subtext */}
        <p
          style={{
            fontSize: '22px',
            color: '#9CA3AF',
            margin: 0,
            maxWidth: '560px',
            lineHeight: 1.5,
          }}
        >
          Sitio web + tienda online + SEO. La IA genera todo. Desde COP 0.
        </p>

        {/* Logo bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '28px',
              fontWeight: 800,
              color: '#F1F3F5',
              letterSpacing: '-0.02em',
            }}
          >
            VENDO365
          </span>
          <span style={{ fontSize: '28px', color: '#F2994A' }}>⚡</span>
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '54px',
            right: '80px',
            display: 'flex',
          }}
        >
          <span style={{ fontSize: '18px', color: '#5A6677' }}>vendo365.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
