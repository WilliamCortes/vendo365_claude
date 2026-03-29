import SectionReveal from '@/components/ui/SectionReveal'
import { PROBLEM_CARDS } from '@/lib/constants'

export default function Problem() {
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
          alignItems: 'start',
        }}
      >
        {/* Left — text + cards */}
        <div style={{ maxWidth: '680px' }}>
          <SectionReveal>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)',
                color: 'var(--color-brand-text)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: '0 0 1.25rem',
              }}
            >
              Millones de negocios en LatAm son invisibles en internet.
            </h2>
          </SectionReveal>

          <SectionReveal delay={80}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                margin: '0 0 2.5rem',
                maxWidth: '520px',
              }}
            >
              Las herramientas existentes son caras, complicadas y están pensadas para otro
              contexto. Las plataformas globales no entienden el negocio local colombiano.
            </p>
          </SectionReveal>

          {/* Pain point cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PROBLEM_CARDS.map((card, i) => (
              <SectionReveal key={i} delay={160 + i * 100} variant="left">
                <div
                  style={{
                    background: 'var(--color-surface)',
                    borderRadius: '0 12px 12px 0',
                    borderLeft: '4px solid var(--color-error)',
                    padding: '1.125rem 1.375rem',
                    boxShadow: '0 1px 2px rgba(28,35,49,0.05)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--color-brand-text)',
                      lineHeight: 1.6,
                      margin: '0 0 0.375rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {card.quote}
                  </p>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      color: 'var(--color-text-tertiary)',
                    }}
                  >
                    — {card.author}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Right — visual contrast (before/after) */}
        <SectionReveal delay={200}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: '400px',
            }}
          >
            {/* Before */}
            <div
              style={{
                background: 'var(--color-surface)',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                boxShadow: '0 4px 12px rgba(28,35,49,0.08)',
                borderTop: '3px solid var(--color-error)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--color-error)',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Antes
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                <div style={{ color: 'var(--color-text-tertiary)' }}>Google Search</div>
                <div style={{ marginTop: '8px', padding: '8px 12px', background: '#FEF2F2', borderRadius: '8px', color: 'var(--color-error)' }}>
                  Sin resultados para &ldquo;plomero cerca de mí&rdquo;
                </div>
              </div>
            </div>

            {/* After */}
            <div
              style={{
                background: 'var(--color-surface)',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                boxShadow: '0 4px 12px rgba(28,35,49,0.08)',
                borderTop: '3px solid var(--color-accent)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--color-accent)',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Con Vendo365
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                <div style={{ color: 'var(--color-text-tertiary)' }}>Google Search</div>
                <div style={{ marginTop: '8px', padding: '8px 12px', background: '#E9F7EF', borderRadius: '8px', color: '#1B7A4A', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontWeight: 500 }}>✓ #1 — Soluciones El Vecino</div>
                  <div style={{ opacity: 0.75, fontSize: '0.75rem' }}>soluciones-el-vecino.vendo365.com</div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .problem-grid { grid-template-columns: 55fr 45fr !important; }
        }
      `}</style>
    </section>
  )
}
