import Link from 'next/link'
import WhatsAppChat from '@/components/ui/WhatsAppChat'
import { SITE_CONFIG } from '@/lib/constants'

const waHref = `https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(SITE_CONFIG.waMessage)}`

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100dvh',
        background: 'var(--color-dark-bg)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '68px',
      }}
    >
      {/* Radial gradient backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(43,76,126,0.28) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle dot particles */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(232,238,246,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-container hero-grid"
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          paddingBlock: '5rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left — copy */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            maxWidth: '600px',
          }}
        >
          {/* Overline badge */}
          <div
            className="overline-badge"
            style={{
              alignSelf: 'flex-start',
              animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both',
              animationDelay: '0ms',
            }}
          >
            ✦ Ya con clientes activos en Colombia
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
              color: 'var(--color-dark-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              margin: 0,
              animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both',
              animationDelay: '80ms',
            }}
          >
            Tu negocio
            <br />
            en internet.
            <br />
            Desde{' '}
            <span style={{ color: '#25D366' }}>WhatsApp</span>.
            <br />
            En minutos.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              color: 'var(--color-dark-muted)',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: '480px',
              animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both',
              animationDelay: '160ms',
            }}
          >
            Describe tu negocio por WhatsApp. La IA crea tu sitio web, tu tienda y tu SEO.
            Sin saber de tecnología. Sin gastar de más.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.875rem',
              animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both',
              animationDelay: '240ms',
            }}
          >
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-secondary"
              style={{ padding: '16px 32px', fontSize: '1rem' }}
            >
              Crear mi sitio gratis →
            </a>
            <Link
              href="#how-it-works"
              className="btn-base btn-outline"
              style={{ padding: '16px 28px', fontSize: '1rem' }}
            >
              Ver demo en vivo
            </Link>
          </div>

          {/* Social proof */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem 1.25rem',
              animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both',
              animationDelay: '320ms',
            }}
          >
            {['Sin tarjeta de crédito', 'Listo en 3 minutos', 'Desde COP 0'].map((item, i) => (
              <span
                key={item}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--color-dark-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {i > 0 && <span style={{ opacity: 0.3 }}>·</span>}
                <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right — mockup */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
            animationDelay: '400ms',
          }}
        >
          {/* Browser mockup wrapping the WA chat */}
          <div
            style={{
              width: '100%',
              maxWidth: '360px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '12px',
              backdropFilter: 'blur(8px)',
              transform: 'rotate(2deg)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
            }}
          >
            {/* Fake browser chrome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '10px',
                paddingInline: '4px',
              }}
            >
              {['#FF5F57', '#FFBD2E', '#28C840'].map((c) => (
                <span key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, display: 'block' }} />
              ))}
              <div
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.6875rem',
                  color: 'rgba(255,255,255,0.35)',
                  fontFamily: 'var(--font-mono)',
                  marginLeft: '6px',
                }}
              >
                soluciones-el-vecino.vendo365.com
              </div>
            </div>
            <WhatsAppChat />
          </div>
        </div>
      </div>

      {/* Desktop 2-col layout override */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 60fr 40fr !important; align-items: center; }
        }
      `}</style>
    </section>
  )
}
