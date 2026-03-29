'use client'

import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function WhatsAppFloat() {
  const href = `https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(SITE_CONFIG.waMessage)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Crear mi sitio por WhatsApp"
      className="group"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 40,
        display: 'block',
      }}
    >
      {/* Tooltip */}
      <span
        style={{
          position: 'absolute',
          right: '68px',
          top: '50%',
          transform: 'translateY(-50%)',
          whiteSpace: 'nowrap',
          background: '#111827',
          color: '#F1F3F5',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          fontSize: '0.8125rem',
          padding: '6px 12px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 150ms ease',
        }}
        className="group-hover:!opacity-100"
      >
        Crea tu sitio por WhatsApp
      </span>

      {/* Button */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '9999px',
          background: '#25D366',
          color: '#fff',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          animation: 'pulse-wa 4s ease-in-out infinite',
        }}
        className="group-hover:scale-110"
      >
        <MessageCircle size={26} strokeWidth={1.75} />
      </span>
    </a>
  )
}
