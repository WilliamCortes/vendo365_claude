// Server Component — no 'use client' needed

const BASE_URL = 'https://vendo365.com'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vendo365',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  description:
    'Plataforma SaaS que permite a micro-negocios en Latinoamérica crear su sitio web, tienda online y SEO respondiendo preguntas por WhatsApp. La IA genera todo automáticamente.',
  foundingLocation: {
    '@type': 'Place',
    addressCountry: 'CO',
    addressLocality: 'Colombia',
  },
  areaServed: ['Colombia', 'México', 'Perú', 'Ecuador', 'Venezuela', 'Latinoamérica'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: 'Spanish',
    contactOption: 'TollFree',
  },
  sameAs: [
    'https://instagram.com/vendo365',
    'https://wa.me/573013969321',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vendo365',
  url: BASE_URL,
  description:
    'Tu negocio en internet. Desde WhatsApp. En minutos. Crea tu sitio web, tienda online y SEO sin saber de tecnología.',
  inLanguage: 'es-CO',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Vendo365',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'WebsiteBuilder',
  operatingSystem: 'Web, WhatsApp',
  url: BASE_URL,
  description:
    'Crea tu sitio web, tienda online y contenido SEO respondiendo preguntas por WhatsApp. La IA de Vendo365 genera todo automáticamente en minutos.',
  screenshot: `${BASE_URL}/screenshot.jpg`,
  featureList: [
    'Creación de sitio web por WhatsApp',
    'SEO automático desde el día 1',
    'Tienda online con catálogo de productos',
    'Integración con Wompi para pagos',
    'Subdominio gratuito .vendo365.com',
    'Generación de contenido con IA (GPT-4)',
    'Meta tags y schema.org automáticos',
    'Sitemap generado automáticamente',
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'Plan Gratis',
      description: 'Landing básica con subdominio .vendo365.com y SEO básico',
      price: '0',
      priceCurrency: 'COP',
      priceValidUntil: '2027-01-01',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/#pricing`,
    },
    {
      '@type': 'Offer',
      name: 'Plan Emprendedor',
      description:
        'Sin marca Vendo365, SEO completo, hasta 10 productos, onboarding por WhatsApp',
      price: '24900',
      priceCurrency: 'COP',
      priceValidUntil: '2027-01-01',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/#pricing`,
    },
    {
      '@type': 'Offer',
      name: 'Plan Negocio',
      description:
        'Hasta 50 productos, pago online con Wompi, contenido para redes sociales 3x por semana',
      price: '49900',
      priceCurrency: 'COP',
      priceValidUntil: '2027-01-01',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/#pricing`,
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo tarda en crearse mi sitio web con Vendo365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Menos de 10 minutos desde el primer mensaje por WhatsApp. Respondes unas preguntas simples sobre tu negocio, la IA genera tu sitio completo con textos, SEO y estructura, y recibes el link listo para compartir. Sin esperas, sin formularios largos, sin reuniones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito saber de tecnología o diseño para usar Vendo365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Si sabes usar WhatsApp, puedes crear tu sitio con Vendo365. No necesitas instalar ningún programa, no necesitas saber HTML, CSS ni diseño. La inteligencia artificial hace todo el trabajo técnico por ti.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Mi sitio web va a aparecer en Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Vendo365 genera automáticamente todo el SEO técnico que Google necesita: meta tags, sitemap XML, datos estructurados (schema.org), Open Graph y descripciones optimizadas. Don Alfonso Alvira, terapeuta de Villavicencio, aparece en los primeros resultados de Google desde alfonsoalvira.vendo365.com.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye el plan gratuito de Vendo365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El plan gratuito incluye una landing page profesional, un subdominio propio (tuNegocio.vendo365.com) y SEO básico. No requiere tarjeta de crédito. La diferencia con los planes de pago es que aparece la marca Vendo365 en el sitio y no incluye tienda online.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo vender productos online desde Colombia con Vendo365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Los planes Emprendedor y Negocio incluyen tienda online. El plan Negocio añade pago online integrado con Wompi (Bancolombia), que acepta tarjetas de crédito, débito, PSE y Nequi.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es Wompi y por qué lo usan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wompi es la pasarela de pagos de Bancolombia, la más usada y confiable en Colombia. Permite recibir pagos con tarjeta de crédito, débito, PSE y Nequi sin costos de conversión de divisas. Es el estándar para e-commerce en Colombia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar mi propio dominio .com o .co con Vendo365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. En el plan Pro puedes conectar tu dominio propio (tunegocio.com o tunegocio.co). Los planes anteriores incluyen un subdominio gratuito en tuNegocio.vendo365.com, que funciona perfectamente para Google.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia Vendo365 de Wix o WordPress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vendo365 crea el sitio por ti respondiendo preguntas en WhatsApp, sin abrir el computador. Wix y WordPress requieren que diseñes el sitio desde cero. Además, Vendo365 tiene integración con Wompi, está en español colombiano y cuesta desde COP 0, mientras Wix cobra desde USD 17/mes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Vendo365 sirve para médicos, terapeutas y profesionales de salud en Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El primer cliente es Don Alfonso Alvira, terapeuta especialista en columna de Villavicencio con 43 años de experiencia. El sistema genera automáticamente el schema.org correcto para profesionales de salud (MedicalBusiness), mejorando el posicionamiento en búsquedas locales.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué ciudades de Colombia funciona Vendo365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En toda Colombia: Bogotá, Medellín, Cali, Barranquilla, Villavicencio, Pasto, Bucaramanga, Manizales, Pereira, Cartagena, Cúcuta, Ibagué y ciudades intermedias. También disponible en México, Perú, Ecuador y el resto de Latinoamérica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo cancelar mi plan de Vendo365 en cualquier momento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, sin cargos por cancelación. Puedes cancelar desde tu perfil o escribiendo a hola@vendo365.com. No hay permanencia mínima. Los usuarios nuevos de plan pago tienen derecho a retracto dentro de los 5 días hábiles, conforme a la Ley 1480 de 2011.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Los textos de mi sitio los escribe la IA o tengo que escribirlos yo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La IA los escribe todos. GPT-4 genera los textos del sitio, títulos SEO, meta descriptions y datos estructurados a partir de tus respuestas por WhatsApp. Son textos únicos en español colombiano, optimizados para buscadores.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: BASE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Características',
      item: `${BASE_URL}/#features`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Cómo funciona',
      item: `${BASE_URL}/#how-it-works`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Precios',
      item: `${BASE_URL}/#pricing`,
    },
  ],
}

export default function JsonLd() {
  const schemas = [
    organizationSchema,
    websiteSchema,
    softwareApplicationSchema,
    faqSchema,
    breadcrumbSchema,
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
