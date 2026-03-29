'use client'

import { Sparkles, Search, ShoppingBag, MessageCircle, Globe, Zap } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import { FEATURES } from '@/lib/constants'

const ICONS = { Sparkles, Search, ShoppingBag, MessageCircle, Globe, Zap } as const

export default function Features() {
  return (
    <section
      id="features"
      style={{
        background: 'var(--color-bg-subtle)',
        padding: '6rem 0',
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <SectionReveal>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)',
                color: 'var(--color-brand-text)',
                letterSpacing: '-0.02em',
                margin: '0 0 0.75rem',
              }}
            >
              Todo lo que necesita tu negocio. Ya incluido.
            </h2>
          </SectionReveal>
          <SectionReveal delay={80}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              Sin plugins de pago. Sin configuraciones. Sin sorpresas.
            </p>
          </SectionReveal>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {FEATURES.map((feature, i) => {
            const IconComponent = ICONS[feature.icon as keyof typeof ICONS]
            return (
              <SectionReveal key={i} delay={i * 60}>
                <div
                  style={{
                    background: 'var(--color-surface)',
                    borderRadius: '16px',
                    padding: '1.75rem',
                    boxShadow: '0 1px 2px rgba(28,35,49,0.05)',
                    border: '1px solid var(--color-border)',
                    transition: 'all 250ms cubic-bezier(0.25,0.46,0.45,0.94)',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(-3px)'
                    el.style.boxShadow = '0 8px 24px rgba(28,35,49,0.12)'
                    el.style.borderColor = 'rgba(43,76,126,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = '0 1px 2px rgba(28,35,49,0.05)'
                    el.style.borderColor = 'var(--color-border)'
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      background: 'var(--color-primary-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <IconComponent size={24} strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.0625rem',
                      color: 'var(--color-brand-text)',
                      margin: '0 0 0.5rem',
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
