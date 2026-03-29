'use client'

import { useState, useRef } from 'react'
import { Plus, Minus } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import { FAQ_ITEMS, SITE_CONFIG } from '@/lib/constants'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      style={{ background: 'var(--color-bg-base)', padding: '6rem 0' }}
    >
      <div className="section-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
          <SectionReveal>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.75rem',
                color: 'var(--color-secondary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              ✦ Preguntas frecuentes
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)',
                color: 'var(--color-brand-text)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                margin: '0 0 1rem',
              }}
            >
              Todo lo que necesitas saber antes de empezar
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.0625rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Respuestas directas. Si no encuentras la tuya,{' '}
              <a
                href={`https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent('Hola, tengo una pregunta sobre Vendo365')}`}
                style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 500 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                escríbenos por WhatsApp
              </a>
              .
            </p>
          </SectionReveal>
        </div>

        {/* Two-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: '0 3rem',
            alignItems: 'start',
            maxWidth: '1120px',
            margin: '0 auto',
          }}
        >
          {/* Left column: items 0-5 */}
          <div>
            {FAQ_ITEMS.slice(0, 6).map((item, i) => (
              <FaqItem
                key={i}
                index={i}
                question={item.q}
                answer={item.a}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>

          {/* Right column: items 6-11 */}
          <div>
            {FAQ_ITEMS.slice(6).map((item, i) => {
              const idx = i + 6
              return (
                <FaqItem
                  key={idx}
                  index={idx}
                  question={item.q}
                  answer={item.a}
                  isOpen={open === idx}
                  onToggle={() => setOpen(open === idx ? null : idx)}
                />
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <SectionReveal delay={200}>
          <div
            style={{
              marginTop: '3.5rem',
              padding: '2rem 2.5rem',
              background: 'var(--color-bg-subtle)',
              borderRadius: '1rem',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap',
              maxWidth: '860px',
              margin: '3.5rem auto 0',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.0625rem',
                  color: 'var(--color-brand-text)',
                  margin: '0 0 0.25rem',
                }}
              >
                ¿Tu pregunta no está aquí?
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                }}
              >
                Respuesta en menos de 5 minutos por WhatsApp.
              </p>
            </div>
            <a
              href={`https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent('Hola, tengo una pregunta sobre Vendo365')}`}
              className="btn-whatsapp"
              style={{ padding: '12px 24px', fontSize: '0.9375rem', whiteSpace: 'nowrap', borderRadius: '0.625rem', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}

/* ─── Accordion Item ─────────────────────────────────────────── */
interface FaqItemProps {
  index: number
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FaqItem({ question, answer, isOpen, onToggle, index }: FaqItemProps) {
  const bodyRef = useRef<HTMLDivElement>(null)

  return (
    <SectionReveal delay={index * 40}>
      <div
        style={{
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '1.25rem 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9375rem',
              color: isOpen ? 'var(--color-primary)' : 'var(--color-brand-text)',
              lineHeight: 1.4,
              transition: 'color 200ms ease',
            }}
          >
            {question}
          </span>
          <span
            style={{
              flexShrink: 0,
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: isOpen ? 'var(--color-primary)' : 'var(--color-bg-subtle)',
              border: `1px solid ${isOpen ? 'var(--color-primary)' : 'var(--color-border)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 200ms ease',
            }}
          >
            {isOpen
              ? <Minus size={14} strokeWidth={2.5} style={{ color: '#fff' }} />
              : <Plus size={14} strokeWidth={2.5} style={{ color: 'var(--color-text-secondary)' }} />
            }
          </span>
        </button>

        {/* Answer — always in DOM for SEO crawlers, height-animated */}
        <div
          ref={bodyRef}
          style={{
            overflow: 'hidden',
            maxHeight: isOpen ? '600px' : '0px',
            transition: 'max-height 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.75,
              padding: '0 0 1.25rem',
              margin: 0,
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </SectionReveal>
  )
}
