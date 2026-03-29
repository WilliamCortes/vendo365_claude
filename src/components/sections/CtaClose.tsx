import SectionReveal from '@/components/ui/SectionReveal'
import { SITE_CONFIG } from '@/lib/constants'

const waHref = `https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(SITE_CONFIG.waMessage)}`

export default function CtaClose() {
  return (
    <section
      style={{
        background: 'var(--color-dark-bg)',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(43,76,126,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1.5rem',
        }}
      >
        <SectionReveal>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3.25rem)',
              color: 'var(--color-dark-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              margin: 0,
              maxWidth: '680px',
            }}
          >
            ¿Listo para que te encuentren en Google?
          </h2>
        </SectionReveal>

        <SectionReveal delay={80}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              color: 'var(--color-dark-muted)',
              margin: 0,
              maxWidth: '480px',
            }}
          >
            Únete a los negocios que ya encontraron su vitrina digital.
          </p>
        </SectionReveal>

        <SectionReveal delay={160}>
          <div style={{ position: 'relative' }}>
            {/* Ambient glow behind button */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '120px',
                background: 'var(--color-primary)',
                opacity: 0.15,
                filter: 'blur(60px)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-secondary"
              style={{
                padding: '18px 40px',
                fontSize: '1.0625rem',
                position: 'relative',
              }}
            >
              Crear mi sitio gratis →
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={220}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--color-dark-muted)',
              margin: 0,
              opacity: 0.7,
            }}
          >
            Sin tarjeta de crédito · Sin instalar nada · Lista en 3 minutos
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
