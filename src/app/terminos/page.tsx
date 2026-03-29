import type { Metadata } from 'next'
import LegalPage from '@/components/layout/LegalPage'

export const metadata: Metadata = {
  title: 'Términos y Condiciones — Vendo365',
  description: 'Términos y condiciones de uso del servicio Vendo365. Condiciones aplicables a usuarios en Colombia y Latinoamérica.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://vendo365.com/terminos' },
}

const p = (text: string) => (
  <p style={{ marginBottom: '0.875rem' }}>{text}</p>
)

const ul = (items: string[]) => (
  <ul style={{ paddingLeft: '1.25rem', marginBottom: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
)

export default function TerminosPage() {
  const sections = [
    {
      title: '1. Identificación del prestador del servicio',
      content: (
        <>
          {p('Vendo365 (en adelante "la Plataforma" o "nosotros") es un servicio de comercio electrónico y creación de presencia digital operado desde Colombia, disponible en https://vendo365.com.')}
          {p('Correo de contacto: hola@vendo365.com · WhatsApp: +57 301 396 9321')}
          {p('En cumplimiento del artículo 91 de la Ley 1480 de 2011 (Estatuto del Consumidor) y el artículo 6 de la Ley 527 de 1999, el proveedor del servicio pone a disposición del usuario esta información antes de la celebración del contrato.')}
        </>
      ),
    },
    {
      title: '2. Aceptación de los términos',
      content: (
        <>
          {p('Al registrarse, acceder o utilizar los servicios de Vendo365, el usuario declara haber leído, comprendido y aceptado los presentes Términos y Condiciones en su totalidad. Si no está de acuerdo con alguna de sus disposiciones, debe abstenerse de utilizar el servicio.')}
          {p('Estos Términos constituyen el acuerdo completo entre el usuario y Vendo365 respecto al uso del servicio, de conformidad con la Ley 527 de 1999 sobre comercio electrónico en Colombia.')}
        </>
      ),
    },
    {
      title: '3. Descripción del servicio',
      content: (
        <>
          {p('Vendo365 es una plataforma SaaS (Software como Servicio) que permite a micro-negocios, emprendedores y profesionales independientes en Colombia y Latinoamérica crear sitios web, tiendas online y contenido SEO a través de un proceso de onboarding por WhatsApp asistido por inteligencia artificial.')}
          <p style={{ marginBottom: '0.5rem' }}>Los servicios incluyen, según el plan contratado:</p>
          {ul([
            'Generación automática de sitio web con subdominio en vendo365.com',
            'Creación de contenido SEO (meta tags, sitemap, schema.org)',
            'Tienda online con catálogo de productos',
            'Integración con pasarelas de pago (Wompi)',
            'Generación de contenido para redes sociales',
            'Soporte a través de WhatsApp',
          ])}
        </>
      ),
    },
    {
      title: '4. Planes, precios y facturación',
      content: (
        <>
          {p('Los precios están expresados en Pesos Colombianos (COP) e incluyen el Impuesto al Valor Agregado (IVA) donde aplique, conforme a la legislación tributaria colombiana vigente.')}
          {p('El Plan Gratuito no requiere tarjeta de crédito ni compromiso de pago. Los planes de pago (Emprendedor, Negocio y Pro) se facturan mensualmente de manera anticipada.')}
          {p('En cumplimiento del artículo 37 de la Ley 1480 de 2011, el usuario tiene derecho a retractarse del contrato dentro de los cinco (5) días hábiles siguientes a la primera suscripción de un plan pago, sin necesidad de justificación, siempre que el servicio no haya comenzado a ejecutarse.')}
          {p('Vendo365 se reserva el derecho de modificar los precios con un aviso mínimo de treinta (30) días calendario. Los cambios no aplicarán retroactivamente a períodos ya facturados.')}
        </>
      ),
    },
    {
      title: '5. Obligaciones del usuario',
      content: (
        <>
          <p style={{ marginBottom: '0.5rem' }}>Al utilizar Vendo365, el usuario se compromete a:</p>
          {ul([
            'Proporcionar información veraz, completa y actualizada sobre su negocio.',
            'No utilizar el servicio para actividades ilegales, fraudulentas o que violen derechos de terceros.',
            'No publicar contenido que infrinja derechos de propiedad intelectual, sea difamatorio, obsceno o discriminatorio.',
            'Mantener la confidencialidad de sus credenciales de acceso.',
            'Notificar de inmediato a Vendo365 ante cualquier uso no autorizado de su cuenta.',
            'Cumplir con la legislación colombiana aplicable a su actividad comercial.',
          ])}
          {p('El incumplimiento de estas obligaciones podrá dar lugar a la suspensión o cancelación de la cuenta, sin perjuicio de las acciones legales que correspondan.')}
        </>
      ),
    },
    {
      title: '6. Propiedad intelectual',
      content: (
        <>
          {p('El software, diseño, código fuente, logotipos, nombres comerciales y demás elementos de la Plataforma Vendo365 son propiedad exclusiva de sus titulares y están protegidos por la Ley 23 de 1982 sobre derechos de autor y la Decisión 486 de la Comunidad Andina sobre propiedad industrial.')}
          {p('El contenido generado por la inteligencia artificial a partir de la información del usuario (textos del sitio web, descripciones de productos, contenido SEO) es propiedad del usuario una vez publicado, sin perjuicio del derecho de Vendo365 de usarlo internamente para mejoras del sistema.')}
          {p('El usuario conserva todos los derechos sobre el contenido original que aporte (fotografías, logos, textos propios).')}
        </>
      ),
    },
    {
      title: '7. Disponibilidad del servicio y limitación de responsabilidad',
      content: (
        <>
          {p('Vendo365 procura mantener una disponibilidad del servicio del 99.5% mensual. Sin embargo, no garantiza una disponibilidad ininterrumpida, ya que pueden presentarse interrupciones por mantenimiento, fuerza mayor o causas ajenas a nuestro control.')}
          {p('En los términos permitidos por la Ley 1480 de 2011 y el Código Civil colombiano, la responsabilidad de Vendo365 frente al usuario se limita al valor pagado por el plan de servicio en el último mes de facturación.')}
          {p('Vendo365 no es responsable por pérdidas de negocio, lucro cesante, daños indirectos o consecuenciales derivados del uso o imposibilidad de uso del servicio.')}
        </>
      ),
    },
    {
      title: '8. Cancelación del servicio',
      content: (
        <>
          {p('El usuario puede cancelar su cuenta en cualquier momento desde la configuración de su perfil o comunicándose con hola@vendo365.com. La cancelación no genera reembolso del período ya pagado, salvo en el caso del derecho de retracto previsto en el artículo 47 de la Ley 1480 de 2011.')}
          {p('Vendo365 podrá suspender o cancelar una cuenta por incumplimiento de estos términos, actividad fraudulenta o uso indebido del servicio, notificando al usuario con un mínimo de 48 horas de anticipación salvo en casos de urgencia o actividad ilícita.')}
          {p('Tras la cancelación, el contenido del usuario estará disponible para descarga durante 30 días, transcurridos los cuales podrá ser eliminado de forma definitiva.')}
        </>
      ),
    },
    {
      title: '9. Resolución de disputas y ley aplicable',
      content: (
        <>
          {p('Ante cualquier inconformidad con el servicio, el usuario puede presentar su queja a través de hola@vendo365.com. Vendo365 responderá dentro de los quince (15) días hábiles siguientes, en cumplimiento del artículo 58 de la Ley 1480 de 2011.')}
          {p('El usuario también podrá acudir a la Superintendencia de Industria y Comercio (SIC) como autoridad de protección al consumidor, de conformidad con el artículo 59 de la Ley 1480 de 2011.')}
          {p('Estos Términos se rigen por la legislación de la República de Colombia. Para la resolución de controversias que no puedan resolverse de manera amigable, las partes se someten a la jurisdicción de los jueces competentes de la ciudad de Bogotá D.C., Colombia.')}
        </>
      ),
    },
    {
      title: '10. Modificaciones a los términos',
      content: (
        <>
          {p('Vendo365 podrá modificar estos Términos y Condiciones en cualquier momento, notificando al usuario por correo electrónico o mediante aviso en la Plataforma con al menos quince (15) días de anticipación. El uso continuado del servicio tras dicho plazo implica la aceptación de los cambios.')}
        </>
      ),
    },
  ]

  return (
    <LegalPage
      title="Términos y Condiciones"
      subtitle="Condiciones de uso del servicio Vendo365 aplicables en Colombia y Latinoamérica."
      lastUpdated="28 de marzo de 2026"
      sections={sections}
    />
  )
}
