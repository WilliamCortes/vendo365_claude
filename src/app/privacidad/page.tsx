import type { Metadata } from 'next'
import LegalPage from '@/components/layout/LegalPage'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Vendo365',
  description: 'Política de tratamiento de datos personales de Vendo365, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://vendo365.com/privacidad' },
}

const p = (text: string) => (
  <p style={{ marginBottom: '0.875rem' }}>{text}</p>
)

const ul = (items: string[]) => (
  <ul style={{ paddingLeft: '1.25rem', marginBottom: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
)

export default function PrivacidadPage() {
  const sections = [
    {
      title: '1. Responsable del tratamiento',
      content: (
        <>
          {p('En cumplimiento de la Ley Estatutaria 1581 de 2012 "Por la cual se dictan disposiciones generales para la protección de datos personales" y el Decreto Reglamentario 1377 de 2013, Vendo365 actúa como Responsable del Tratamiento de los datos personales de sus usuarios.')}
          <p style={{ marginBottom: '0.5rem' }}>Datos del responsable:</p>
          {ul([
            'Nombre comercial: Vendo365',
            'Sitio web: https://vendo365.com',
            'Correo electrónico para ejercicio de derechos ARCO: hola@vendo365.com',
            'WhatsApp: +57 301 396 9321',
            'País: Colombia',
          ])}
        </>
      ),
    },
    {
      title: '2. Marco legal aplicable',
      content: (
        <>
          <p style={{ marginBottom: '0.5rem' }}>Esta política se fundamenta en:</p>
          {ul([
            'Ley Estatutaria 1581 de 2012 — Protección de Datos Personales',
            'Decreto 1377 de 2013 — Reglamentario de la Ley 1581',
            'Decreto Único Reglamentario 1074 de 2015 (Sector Comercio)',
            'Circular Única de la Superintendencia de Industria y Comercio (SIC)',
            'Ley 1266 de 2008 — Habeas Data Financiero (para datos de pago)',
          ])}
        </>
      ),
    },
    {
      title: '3. Datos personales que recopilamos',
      content: (
        <>
          <p style={{ marginBottom: '0.5rem' }}>Recopilamos los siguientes datos con el consentimiento del titular:</p>
          <p style={{ marginBottom: '0.375rem', fontWeight: 500, color: 'var(--color-brand-text)' }}>Datos de identificación y contacto:</p>
          {ul([
            'Nombre completo o nombre del negocio',
            'Número de teléfono (WhatsApp)',
            'Correo electrónico',
            'Ciudad y departamento en Colombia',
          ])}
          <p style={{ marginBottom: '0.375rem', fontWeight: 500, color: 'var(--color-brand-text)' }}>Datos del negocio:</p>
          {ul([
            'Descripción de la actividad comercial',
            'Servicios o productos ofrecidos',
            'Fotografías e imágenes del negocio',
            'Información para generación de sitio web',
          ])}
          <p style={{ marginBottom: '0.375rem', fontWeight: 500, color: 'var(--color-brand-text)' }}>Datos de uso del servicio:</p>
          {ul([
            'Dirección IP y datos del dispositivo',
            'Páginas visitadas y tiempo de sesión',
            'Interacciones con el bot de WhatsApp',
            'Historial de facturación (sin datos de tarjeta — procesados por Wompi)',
          ])}
          {p('No recopilamos datos sensibles conforme al artículo 6 de la Ley 1581 de 2012 (datos sobre origen racial, salud, orientación sexual, etc.).')}
        </>
      ),
    },
    {
      title: '4. Finalidades del tratamiento',
      content: (
        <>
          <p style={{ marginBottom: '0.5rem' }}>Tratamos sus datos personales para las siguientes finalidades, de acuerdo con el principio de finalidad del artículo 4 de la Ley 1581 de 2012:</p>
          {ul([
            'Prestación del servicio de creación de sitios web contratado.',
            'Generación del contenido del sitio web mediante inteligencia artificial.',
            'Gestión de la cuenta, facturación y soporte al cliente.',
            'Envío de comunicaciones relacionadas con el servicio (notificaciones, actualizaciones).',
            'Envío de comunicaciones comerciales y de marketing (con posibilidad de baja en cualquier momento).',
            'Cumplimiento de obligaciones legales y fiscales.',
            'Mejora del servicio y análisis estadístico agregado y anonimizado.',
            'Prevención de fraude y seguridad de la plataforma.',
          ])}
        </>
      ),
    },
    {
      title: '5. Base legal del tratamiento',
      content: (
        <>
          <p style={{ marginBottom: '0.5rem' }}>El tratamiento de datos se realiza con base en:</p>
          {ul([
            'Consentimiento expreso del titular, otorgado al registrarse en la plataforma (art. 9, Ley 1581/2012).',
            'Ejecución del contrato de prestación de servicios entre el usuario y Vendo365.',
            'Cumplimiento de obligaciones legales aplicables a Vendo365 en Colombia.',
            'Interés legítimo para la prevención del fraude y mejora del servicio.',
          ])}
        </>
      ),
    },
    {
      title: '6. Derechos del titular (ARCO)',
      content: (
        <>
          {p('De conformidad con el artículo 8 de la Ley 1581 de 2012, el titular de los datos tiene los siguientes derechos:')}
          {ul([
            'Acceso: Conocer los datos personales que conservamos sobre usted y cómo los usamos.',
            'Rectificación: Solicitar la corrección de datos inexactos o incompletos.',
            'Cancelación/Supresión: Solicitar la eliminación de sus datos cuando no sean necesarios para la finalidad para la que fueron recabados.',
            'Oposición: Oponerse al tratamiento de sus datos para finalidades específicas, en particular para envío de comunicaciones comerciales.',
            'Portabilidad: Recibir sus datos en formato estructurado.',
            'Revocación del consentimiento: Revocar el consentimiento otorgado en cualquier momento, sin efecto retroactivo.',
          ])}
          {p('Para ejercer cualquiera de estos derechos, envíe su solicitud a hola@vendo365.com con el asunto "Ejercicio de derechos ARCO" indicando su nombre, número de teléfono registrado y el derecho que desea ejercer.')}
          {p('Daremos respuesta dentro de los diez (10) días hábiles siguientes a la recepción de la solicitud, conforme al artículo 14 de la Ley 1581 de 2012. Si la solicitud requiere más tiempo, se le informará el motivo y el plazo máximo adicional de ocho (8) días hábiles.')}
          {p('Si considera que su solicitud no fue atendida adecuadamente, puede acudir a la Superintendencia de Industria y Comercio (SIC) en www.sic.gov.co.')}
        </>
      ),
    },
    {
      title: '7. Transferencia y transmisión de datos',
      content: (
        <>
          {p('Para la prestación del servicio, compartimos datos con los siguientes terceros en calidad de Encargados del Tratamiento:')}
          {ul([
            'OpenAI (Estados Unidos): procesamiento de lenguaje natural para generación de contenido. Cuenta con cláusulas contractuales tipo adecuadas.',
            'Wompi / Bancolombia: procesamiento de pagos en Colombia, bajo su propia política de privacidad.',
            'Cloudflare (Estados Unidos): alojamiento y seguridad del servicio.',
            'Meta Platforms (WhatsApp Business API): canal de comunicación del servicio.',
            'Google Analytics: análisis de tráfico de forma anonimizada.',
          ])}
          {p('No vendemos, alquilamos ni cedemos sus datos personales a terceros con fines comerciales propios de dichos terceros.')}
          {p('Las transferencias internacionales de datos se realizan bajo las garantías adecuadas previstas en el artículo 26 de la Ley 1581 de 2012 y en la Circular Externa 05 de 2017 de la SIC.')}
        </>
      ),
    },
    {
      title: '8. Conservación de los datos',
      content: (
        <>
          {p('Conservamos sus datos personales durante el tiempo que sea necesario para las finalidades descritas y mientras subsista la relación contractual. Una vez cancelada la cuenta, los datos se conservarán por un período máximo de cinco (5) años para atender posibles reclamaciones legales o fiscales, transcurrido el cual serán eliminados de forma segura.')}
          {p('Los datos de facturación se conservan por diez (10) años conforme a las obligaciones tributarias del Estatuto Tributario colombiano.')}
        </>
      ),
    },
    {
      title: '9. Medidas de seguridad',
      content: (
        <>
          {p('Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, pérdida, alteración o destrucción, conforme al principio de seguridad del artículo 4 de la Ley 1581 de 2012. Estas incluyen:')}
          {ul([
            'Cifrado de datos en tránsito (TLS/HTTPS) y en reposo.',
            'Control de acceso basado en roles.',
            'Monitoreo continuo de seguridad.',
            'Políticas internas de manejo de datos para empleados y colaboradores.',
          ])}
          {p('En caso de incidente de seguridad que afecte sus datos, le notificaremos dentro de los plazos establecidos por la SIC.')}
        </>
      ),
    },
    {
      title: '10. Menores de edad',
      content: (
        <>
          {p('Vendo365 no está dirigido a menores de dieciocho (18) años. No recopilamos datos personales de menores de forma intencionada. Si detectamos que hemos recibido datos de un menor sin el consentimiento de su representante legal, procederemos a eliminarlos de inmediato.')}
        </>
      ),
    },
    {
      title: '11. Modificaciones a esta política',
      content: (
        <>
          {p('Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos los cambios significativos por correo electrónico o mediante aviso en la plataforma con un mínimo de quince (15) días de anticipación. La versión vigente siempre estará disponible en https://vendo365.com/privacidad.')}
        </>
      ),
    },
    {
      title: '12. Contacto y autoridad de control',
      content: (
        <>
          {p('Para cualquier consulta sobre esta política o el tratamiento de sus datos: hola@vendo365.com')}
          {p('Autoridad de control en Colombia:')}
          {ul([
            'Superintendencia de Industria y Comercio (SIC)',
            'Carrera 13 # 27-00, Bogotá D.C.',
            'www.sic.gov.co · Línea gratuita: 01 8000 910165',
          ])}
        </>
      ),
    },
  ]

  return (
    <LegalPage
      title="Política de Privacidad"
      subtitle="Tratamiento de datos personales conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013."
      lastUpdated="28 de marzo de 2026"
      sections={sections}
    />
  )
}
