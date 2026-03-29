import type { Metadata } from 'next'
import LegalPage from '@/components/layout/LegalPage'

export const metadata: Metadata = {
  title: 'Política de Cookies — Vendo365',
  description: 'Política de uso de cookies de Vendo365, conforme a la Ley 1581 de 2012 de Colombia.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://vendo365.com/cookies' },
}

const p = (text: string) => (
  <p style={{ marginBottom: '0.875rem' }}>{text}</p>
)

const table = (rows: [string, string, string, string][]) => (
  <div style={{ overflowX: 'auto', marginBottom: '0.875rem' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
      <thead>
        <tr style={{ background: 'var(--color-bg-subtle)' }}>
          {['Cookie / Tecnología', 'Tipo', 'Finalidad', 'Duración'].map((h) => (
            <th key={h} style={{ padding: '0.625rem 0.75rem', textAlign: 'left', fontWeight: 600, color: 'var(--color-brand-text)', borderBottom: '2px solid var(--color-border)', whiteSpace: 'nowrap' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([name, type, purpose, duration], i) => (
          <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
            <td style={{ padding: '0.625rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-brand-text)' }}>{name}</td>
            <td style={{ padding: '0.625rem 0.75rem' }}>{type}</td>
            <td style={{ padding: '0.625rem 0.75rem' }}>{purpose}</td>
            <td style={{ padding: '0.625rem 0.75rem', whiteSpace: 'nowrap' }}>{duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default function CookiesPage() {
  const sections = [
    {
      title: '1. ¿Qué son las cookies?',
      content: (
        <>
          {p('Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computador, teléfono o tableta) cuando visita un sitio web. Permiten al sitio recordar sus preferencias y mejorar su experiencia de navegación.')}
          {p('Conforme al artículo 4 de la Ley 1581 de 2012, el uso de cookies que implique el tratamiento de datos personales requiere el consentimiento previo, expreso e informado del titular. Esta política le explica qué cookies usamos y cómo puede controlarlas.')}
        </>
      ),
    },
    {
      title: '2. Tipos de cookies que utilizamos',
      content: (
        <>
          <p style={{ marginBottom: '0.75rem' }}><strong>Cookies estrictamente necesarias:</strong> Esenciales para el funcionamiento del sitio. No requieren consentimiento pues son indispensables para la navegación.</p>
          {table([
            ['__vercel_live_token', 'Técnica', 'Autenticación de sesión en la plataforma', 'Sesión'],
            ['_vercel_no_cache', 'Técnica', 'Control de caché de contenido', '1 hora'],
            ['next-auth.session', 'Técnica', 'Gestión de sesión de usuario autenticado', 'Sesión'],
          ])}

          <p style={{ marginBottom: '0.75rem', marginTop: '1.25rem' }}><strong>Cookies de rendimiento y analítica:</strong> Recopilan información anónima sobre cómo los usuarios interactúan con el sitio. Requieren consentimiento.</p>
          {table([
            ['_ga', 'Analítica (Google)', 'Distingue usuarios únicos para estadísticas de tráfico', '2 años'],
            ['_ga_*', 'Analítica (Google)', 'Persiste el estado de la sesión de Google Analytics', '2 años'],
            ['_gid', 'Analítica (Google)', 'Distingue usuarios (sesión corta)', '24 horas'],
          ])}

          <p style={{ marginBottom: '0.75rem', marginTop: '1.25rem' }}><strong>Cookies funcionales:</strong> Recuerdan preferencias del usuario para mejorar la experiencia. Requieren consentimiento.</p>
          {table([
            ['v365_lang', 'Funcional', 'Recuerda el idioma seleccionado por el usuario', '1 año'],
            ['v365_dismissed', 'Funcional', 'Recuerda si el usuario cerró el banner de cookies', '1 año'],
          ])}

          <p style={{ marginBottom: '0.75rem', marginTop: '1.25rem' }}><strong>Cookies de terceros para servicios integrados:</strong></p>
          {table([
            ['_cf_bm', 'Cloudflare (seguridad)', 'Protección contra bots y seguridad del sitio', '30 minutos'],
            ['_fbp', 'Meta / Facebook', 'Seguimiento para anuncios en Meta (si aplica)', '3 meses'],
          ])}
        </>
      ),
    },
    {
      title: '3. Consentimiento y base legal',
      content: (
        <>
          {p('Al ingresar a vendo365.com, le presentamos un banner de consentimiento de cookies. Las cookies estrictamente necesarias se activan automáticamente por ser imprescindibles para el funcionamiento del servicio. Para el resto de categorías, activamos las cookies únicamente si usted otorga su consentimiento.')}
          {p('Su consentimiento es libre, específico, informado e inequívoco, conforme al artículo 9 de la Ley 1581 de 2012. Puede retirar su consentimiento en cualquier momento siguiendo las instrucciones de la sección 5 de esta política.')}
        </>
      ),
    },
    {
      title: '4. Cookies de terceros y transferencias internacionales',
      content: (
        <>
          {p('Algunas cookies son instaladas por terceros cuyos servicios integramos. Vendo365 no controla estas cookies directamente. Le recomendamos consultar las políticas de privacidad de:')}
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            <li>Google Analytics: <a href="https://policies.google.com/privacy" style={{ color: 'var(--color-primary)' }} target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
            <li>Cloudflare: <a href="https://www.cloudflare.com/privacypolicy/" style={{ color: 'var(--color-primary)' }} target="_blank" rel="noopener noreferrer">cloudflare.com/privacypolicy</a></li>
            <li>Meta Platforms: <a href="https://www.facebook.com/privacy/explanation" style={{ color: 'var(--color-primary)' }} target="_blank" rel="noopener noreferrer">facebook.com/privacy/explanation</a></li>
          </ul>
          {p('Las transferencias de datos a proveedores fuera de Colombia (Google, Cloudflare, Meta) se realizan bajo garantías adecuadas conforme al artículo 26 de la Ley 1581 de 2012.')}
        </>
      ),
    },
    {
      title: '5. Cómo gestionar y eliminar cookies',
      content: (
        <>
          {p('Puede controlar y eliminar las cookies en cualquier momento a través de:')}
          <p style={{ marginBottom: '0.375rem', fontWeight: 500, color: 'var(--color-brand-text)' }}>Configuración del navegador:</p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
            <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad → Administrar datos del sitio</li>
            <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
          </ul>
          <p style={{ marginBottom: '0.375rem', fontWeight: 500, color: 'var(--color-brand-text)' }}>Herramientas de opt-out de terceros:</p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            <li>Google Analytics Opt-out: <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: 'var(--color-primary)' }} target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></li>
          </ul>
          {p('Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web o impedir el acceso a algunas áreas del servicio.')}
        </>
      ),
    },
    {
      title: '6. Otras tecnologías de rastreo',
      content: (
        <>
          {p('Además de cookies, podemos utilizar tecnologías similares como:')}
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            <li><strong>Local Storage / Session Storage:</strong> para guardar preferencias de sesión sin enviarlas al servidor.</li>
            <li><strong>Pixel de conversión:</strong> imágenes de 1×1 píxel que nos permiten medir la efectividad de campañas.</li>
          </ul>
          {p('Estas tecnologías se usan bajo los mismos principios y bases legales descritos en esta política.')}
        </>
      ),
    },
    {
      title: '7. Actualizaciones de esta política',
      content: (
        <>
          {p('Podemos actualizar esta Política de Cookies cuando sea necesario, por ejemplo ante cambios en el servicio, en la ley aplicable o en las cookies que utilizamos. Le notificaremos los cambios significativos mediante un nuevo banner de consentimiento o por correo electrónico.')}
          {p('La versión actualizada siempre estará disponible en https://vendo365.com/cookies con la fecha de última actualización.')}
        </>
      ),
    },
    {
      title: '8. Contacto',
      content: (
        <>
          {p('Si tiene preguntas sobre el uso de cookies o desea ejercer sus derechos de protección de datos en relación con las cookies:')}
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            <li>Correo: hola@vendo365.com</li>
            <li>WhatsApp: +57 301 396 9321</li>
            <li>Autoridad de control: Superintendencia de Industria y Comercio — www.sic.gov.co</li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <LegalPage
      title="Política de Cookies"
      subtitle="Información sobre las cookies y tecnologías de rastreo que utilizamos en vendo365.com."
      lastUpdated="28 de marzo de 2026"
      sections={sections}
    />
  )
}
