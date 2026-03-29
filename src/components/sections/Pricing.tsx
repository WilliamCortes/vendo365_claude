'use client'

import { Check, X } from 'lucide-react'
import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import { PRICING_PLANS, SITE_CONFIG } from '@/lib/constants'

const waHref = `https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(SITE_CONFIG.waMessage)}`

export default function Pricing() {
  return (
    <section
      id="pricing"
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
              Precios que cualquier negocio puede pagar.
            </h2>
          </SectionReveal>
          <SectionReveal delay={80}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text-secondary)',
                margin: 0,
                maxWidth: '520px',
                marginInline: 'auto',
              }}
            >
              Por menos de lo que cuesta un almuerzo diario, tu negocio existe en internet.
            </p>
          </SectionReveal>
        </div>

        {/* Plans grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            alignItems: 'start',
          }}
        >
          {PRICING_PLANS.map((plan, i) => (
            <SectionReveal key={i} delay={i * 80}>
              <div
                style={{
                  background: 'var(--color-surface)',
                  borderRadius: '24px',
                  padding: '2rem',
                  border: plan.featured
                    ? '2px solid var(--color-primary)'
                    : '1px solid var(--color-border)',
                  boxShadow: plan.featured
                    ? '0 4px 20px rgba(43,76,126,0.25)'
                    : '0 1px 2px rgba(28,35,49,0.05)',
                  position: 'relative',
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--color-secondary)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      padding: '4px 14px',
                      borderRadius: '9999px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-tertiary)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '0.625rem',
                  }}
                >
                  {plan.name}
                </div>

                {/* Price */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 400,
                    fontSize: 'clamp(1.5rem, 2vw + 0.5rem, 2rem)',
                    color: 'var(--color-brand-text)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}
                >
                  {plan.price}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-tertiary)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {plan.tagline}
                </div>

                {/* Features */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {plan.features.map((feat, fi) => (
                    <li
                      key={fi}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.625rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        color: feat.included ? 'var(--color-brand-text)' : 'var(--color-text-tertiary)',
                      }}
                    >
                      {feat.included ? (
                        <Check
                          size={16}
                          strokeWidth={2.5}
                          style={{ color: 'var(--color-accent)', flexShrink: 0 }}
                        />
                      ) : (
                        <X
                          size={16}
                          strokeWidth={2.5}
                          style={{ color: 'var(--color-text-tertiary)', flexShrink: 0 }}
                        />
                      )}
                      {feat.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-base ${plan.ctaVariant}`}
                  style={{ width: '100%', padding: '13px 20px' }}
                >
                  {plan.cta}
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Pro footnote */}
        <SectionReveal delay={300}>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-text-secondary)',
              marginTop: '2rem',
            }}
          >
            ¿Necesitas dominio propio o soporte prioritario?{' '}
            <Link
              href="#"
              style={{
                color: 'var(--color-primary)',
                fontWeight: 500,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              → Ver plan Pro (COP 99.900/mes)
            </Link>
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
