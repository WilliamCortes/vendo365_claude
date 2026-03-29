'use client'

import SectionReveal from '@/components/ui/SectionReveal'
import CounterNumber from '@/components/ui/CounterNumber'

export default function Evidence() {
  return (
    <section
      style={{
        background: 'var(--color-bg-base)',
        padding: '6rem 0',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          alignItems: 'center',
        }}
      >
        {/* Left — case study */}
        <div>
          <SectionReveal>
            <div
              className="overline-badge"
              style={{
                marginBottom: '1.5rem',
                display: 'inline-flex',
                background: 'rgba(43,76,126,0.1)',
                borderColor: 'rgba(43,76,126,0.25)',
                color: 'var(--color-primary)',
              }}
            >
              ✦ CASO REAL
            </div>
          </SectionReveal>

          <SectionReveal delay={80}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)',
                color: 'var(--color-brand-text)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: '0 0 2rem',
              }}
            >
              De &ldquo;no tengo sitio web&rdquo; a aparecer en Google en un día.
            </h2>
          </SectionReveal>

          <SectionReveal delay={160}>
            <blockquote
              style={{
                position: 'relative',
                margin: '0 0 1.75rem',
                padding: '1.5rem 1.75rem',
                background: 'var(--color-surface)',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(28,35,49,0.08)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '20px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '5rem',
                  lineHeight: 1,
                  color: 'var(--color-primary-light)',
                  fontWeight: 800,
                }}
              >
                &ldquo;
              </span>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.0625rem',
                  color: 'var(--color-brand-text)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  margin: '0 0 1.25rem',
                  paddingTop: '0.5rem',
                }}
              >
                Llevo 43 años atendiendo pacientes y nunca había podido tener mi propia
                página. Me preguntaron por WhatsApp y en menos de 10 minutos ya tenía mi
                sitio listo.
              </p>

              <footer>
                <strong
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    color: 'var(--color-brand-text)',
                    display: 'block',
                  }}
                >
                  Don Alfonso Alvira
                </strong>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Terapeuta especialista en columna — Villavicencio, Meta
                </span>
                <a
                  href="https://alfonsoalvira.vendo365.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    marginTop: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    transition: 'opacity 150ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  → alfonsoalvira.vendo365.com
                </a>
              </footer>
            </blockquote>
          </SectionReveal>

          {/* Metrics */}
          <SectionReveal delay={240}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                padding: '1.5rem',
                background: 'var(--color-surface)',
                borderRadius: '16px',
                border: '1px solid var(--color-border)',
                boxShadow: '0 1px 2px rgba(28,35,49,0.05)',
              }}
            >
              {/* Metric 1 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2rem)',
                    color: 'var(--color-primary)',
                    lineHeight: 1.1,
                    marginBottom: '0.375rem',
                  }}
                >
                  <CounterNumber to={43} suffix="" />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.3,
                  }}
                >
                  años de<br />experiencia
                </div>
              </div>

              {/* Metric 2 */}
              <div style={{ textAlign: 'center', borderInline: '1px solid var(--color-border)' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2rem)',
                    color: 'var(--color-primary)',
                    lineHeight: 1.1,
                    marginBottom: '0.375rem',
                  }}
                >
                  <CounterNumber to={500} suffix="+" />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.3,
                  }}
                >
                  pacientes<br />atendidos
                </div>
              </div>

              {/* Metric 3 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2rem)',
                    color: 'var(--color-accent)',
                    lineHeight: 1.1,
                    marginBottom: '0.375rem',
                  }}
                >
                  #1
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.3,
                  }}
                >
                  resultado<br />en Google
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Right — browser mockup */}
        <SectionReveal delay={200}>
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(28,35,49,0.16)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                background: '#F4F6F8',
                borderBottom: '1px solid var(--color-border)',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {['#FF5F57', '#FFBD2E', '#28C840'].map((c) => (
                <span key={c} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c, display: 'block', flexShrink: 0 }} />
              ))}
              <div
                style={{
                  flex: 1,
                  background: '#fff',
                  borderRadius: '6px',
                  padding: '5px 12px',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid var(--color-border)',
                  marginLeft: '4px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                alfonsoalvira.vendo365.com
              </div>
            </div>

            {/* Site preview */}
            <div
              style={{
                background: 'linear-gradient(135deg, #1A2332 0%, #111827 100%)',
                padding: '2rem',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  color: '#F1F3F5',
                  letterSpacing: '-0.02em',
                }}
              >
                Dr. Alfonso Alvira
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: '#9CA3AF',
                  lineHeight: 1.5,
                  maxWidth: '280px',
                }}
              >
                Especialista en columna vertebral con 43 años de experiencia en Villavicencio
              </div>
              <div
                style={{
                  display: 'inline-block',
                  background: '#25D366',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  width: 'fit-content',
                }}
              >
                Agendar cita →
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .evidence-grid { grid-template-columns: 60fr 40fr !important; }
        }
      `}</style>
    </section>
  )
}
