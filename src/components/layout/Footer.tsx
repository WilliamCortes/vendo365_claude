'use client'

import Link from 'next/link'
import { Zap } from 'lucide-react'
import { FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-dark-bg)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="section-container" style={{ paddingBlock: '4rem 2rem' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand col */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1rem' }}>
              <Zap size={18} strokeWidth={2} style={{ color: 'var(--color-secondary)', fill: 'var(--color-secondary)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.125rem',
                  color: 'var(--color-dark-text)',
                  letterSpacing: '-0.02em',
                }}
              >
                VENDO365
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--color-dark-muted)',
                lineHeight: 1.65,
                maxWidth: '220px',
              }}
            >
              Tu negocio visible en internet. Desde WhatsApp. En minutos.
            </p>
          </div>

          {/* Link cols */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                  color: 'var(--color-dark-text)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--color-dark-muted)',
                        textDecoration: 'none',
                        transition: 'color 150ms ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-dark-muted)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--color-dark-muted)',
              textAlign: 'center',
            }}
          >
            © 2026 Vendo365.com · Hecho en Colombia 🇨🇴 · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
