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
      name: '¿Cómo creo mi sitio web con Vendo365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solo necesitas WhatsApp. Nuestro bot te hace preguntas simples sobre tu negocio — nombre, servicios, colores, fotos — y la IA genera tu sitio web completo en minutos. Sin instalar nada, sin saber de tecnología.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta Vendo365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vendo365 tiene un plan gratuito (COP 0/mes) con landing básica y subdominio .vendo365.com. El plan Emprendedor cuesta COP 24.900/mes e incluye SEO completo y hasta 10 productos. El plan Negocio cuesta COP 49.900/mes con hasta 50 productos y pagos online.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito saber de tecnología para usar Vendo365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Si sabes usar WhatsApp, puedes crear tu sitio con Vendo365. No necesitas instalar ningún programa, no necesitas saber diseño ni programación. La IA hace todo el trabajo técnico por ti.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Mi sitio aparecerá en Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Vendo365 genera automáticamente los meta tags, el sitemap, el schema.org y toda la estructura técnica de SEO que Google necesita para indexar tu sitio. Tus clientes te podrán encontrar en Google desde el primer día.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo vender productos online con Vendo365?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Los planes Emprendedor y Negocio incluyen tienda online con catálogo de productos. El plan Negocio además incluye integración con Wompi para recibir pagos con tarjeta de crédito, débito y PSE.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Vendo365 funciona para negocios en Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vendo365 está diseñado específicamente para el mercado colombiano y latinoamericano. Incluye integración con Wompi (el procesador de pagos más usado en Colombia), WhatsApp Business, y contenido optimizado para el contexto local.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es un subdominio .vendo365.com?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es tu dirección en internet. Por ejemplo: tuNegocio.vendo365.com. Es gratuito y está disponible en segundos. Si quieres tu propio dominio (tuNegocio.com), puedes contratarlo en el plan Pro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Tienen un caso de éxito real?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Don Alfonso Alvira, terapeuta especialista en columna de Villavicencio con 43 años de experiencia, nunca había tenido sitio web. Con Vendo365 creó alfonsoalvira.vendo365.com en menos de 10 minutos por WhatsApp y hoy aparece en Google.',
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
