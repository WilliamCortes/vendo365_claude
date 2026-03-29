import Link from 'next/link'

interface Section {
  title: string
  content: React.ReactNode
}

interface LegalPageProps {
  title: string
  subtitle: string
  lastUpdated: string
  sections: Section[]
}

export default function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-dark-bg) 0%, var(--color-dark-bg-subtle) 100%)',
          paddingTop: '8rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="section-container" style={{ maxWidth: '800px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--color-dark-muted)',
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            ← Volver al inicio
          </Link>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              color: 'var(--color-dark-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            {title}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-dark-muted)', marginBottom: '0.5rem' }}>
            {subtitle}
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
            Última actualización: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: 'var(--color-bg-base)', padding: '4rem 0 6rem' }}>
        <div className="section-container" style={{ maxWidth: '800px' }}>
          {sections.map((section, i) => (
            <div
              key={i}
              style={{
                marginBottom: '2.5rem',
                paddingBottom: '2.5rem',
                borderBottom: i < sections.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: 'var(--color-brand-text)',
                  letterSpacing: '-0.01em',
                  marginBottom: '1rem',
                }}
              >
                {section.title}
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.75,
                }}
              >
                {section.content}
              </div>
            </div>
          ))}

          {/* Back link */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              ← Volver a Vendo365
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
