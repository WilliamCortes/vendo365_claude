'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, X, Menu } from 'lucide-react'
import { useScrollY } from '@/hooks/useScrollY'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'

export default function Navbar() {
  const isScrolled = useScrollY(80)
  const [menuOpen, setMenuOpen] = useState(false)

  const waHref = `https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(SITE_CONFIG.waMessage)}`

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 250ms ease, border-color 250ms ease, backdrop-filter 250ms ease',
        background: isScrolled ? 'rgba(17,24,39,0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
          }}
        >
          <Zap size={20} strokeWidth={2} style={{ color: 'var(--color-secondary)', fill: 'var(--color-secondary)' }} />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.25rem',
              color: 'var(--color-dark-text)',
              letterSpacing: '-0.02em',
            }}
          >
            VENDO365
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '0.9375rem',
                color: 'var(--color-dark-muted)',
                textDecoration: 'none',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-dark-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-dark-muted)')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-secondary hidden-mobile"
          style={{ padding: '10px 20px', fontSize: '0.9375rem' }}
        >
          Crear mi sitio gratis →
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-dark-text)',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {menuOpen ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '400px' : '0',
          transition: 'max-height 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          background: 'rgba(17,24,39,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: menuOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <div className="section-container" style={{ paddingBlock: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '1.0625rem',
                color: 'var(--color-dark-text)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-secondary"
            style={{ padding: '14px 24px', width: '100%', marginTop: '0.5rem' }}
            onClick={() => setMenuOpen(false)}
          >
            Crear mi sitio gratis →
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  )
}
