import { MessageCircle, Sparkles, Globe } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import WhatsAppChat from '@/components/ui/WhatsAppChat'
import { HOW_IT_WORKS_STEPS } from '@/lib/constants'

const ICONS = { MessageCircle, Sparkles, Globe } as const

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        background: 'var(--color-dark-bg)',
        padding: '6rem 0',
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionReveal>
            <div className="overline-badge" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
              ✦ EN 3 PASOS
            </div>
          </SectionReveal>
          <SectionReveal delay={80}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)',
                color: 'var(--color-dark-text)',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              De WhatsApp a tu sitio web en minutos.
            </h2>
          </SectionReveal>
        </div>

        {/* Content: steps + chat */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }}>
            {/* Vertical connector */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '20px',
                top: '60px',
                bottom: '60px',
                width: '1px',
                background: 'linear-gradient(to bottom, transparent, rgba(43,76,126,0.4) 20%, rgba(43,76,126,0.4) 80%, transparent)',
              }}
            />

            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const IconComponent = ICONS[step.icon as keyof typeof ICONS]
              return (
                <SectionReveal key={i} delay={i * 120}>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    {/* Number + Icon stack */}
                    <div
                      style={{
                        flexShrink: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(43,76,126,0.25)',
                          border: '1px solid rgba(43,76,126,0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-accent)',
                        }}
                      >
                        <IconComponent size={20} strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Text */}
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 500,
                          fontSize: '2rem',
                          color: 'var(--color-secondary)',
                          opacity: 0.55,
                          lineHeight: 1,
                          marginBottom: '0.375rem',
                        }}
                      >
                        {step.number}
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: 'clamp(1.125rem, 1.5vw + 0.5rem, 1.375rem)',
                          color: 'var(--color-dark-text)',
                          margin: '0 0 0.5rem',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '1rem',
                          color: 'var(--color-dark-muted)',
                          lineHeight: 1.6,
                          margin: 0,
                          maxWidth: '380px',
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              )
            })}
          </div>

          {/* WhatsApp demo */}
          <SectionReveal delay={300}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <WhatsAppChat />
            </div>
          </SectionReveal>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          #how-it-works .section-container > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
