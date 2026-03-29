export const SITE_CONFIG = {
  waNumber: '573013969321',
  waMessage: 'Hola, quiero crear mi sitio web con Vendo365',
  email: 'hola@vendo365.com',
  instagram: 'https://instagram.com/vendo365',
}

export const NAV_LINKS = [
  { label: 'Características', href: '#features' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Precios', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
]

export const LOGO_BRANDS = [
  { name: 'WhatsApp Business', key: 'whatsapp' },
  { name: 'Google', key: 'google' },
  { name: 'Instagram', key: 'instagram' },
  { name: 'Cloudflare', key: 'cloudflare' },
  { name: 'OpenAI', key: 'openai' },
  { name: 'Wompi', key: 'wompi' },
]

export const PROBLEM_CARDS = [
  {
    quote: '"No sé cómo crear un sitio web y contratar a alguien cuesta demasiado."',
    author: 'Artesana, Pasto',
  },
  {
    quote: '"Probé Wix pero me perdí a los 5 minutos. Cerré la pestaña y nunca volví."',
    author: 'Restaurante familiar, Medellín',
  },
  {
    quote: '"Mis clientes me buscan en Google y no me encuentran. Pierdo ventas todos los días."',
    author: 'Terapeuta, Bogotá',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    icon: 'MessageCircle',
    title: 'Nos cuentas tu negocio',
    description:
      'Respondemos unas preguntas simples por WhatsApp. Nombre, servicios, foto, colores.',
  },
  {
    number: '02',
    icon: 'Sparkles',
    title: 'La IA trabaja por ti',
    description:
      'GPT-4 genera tus textos, tu branding, tu SEO y la estructura de tu sitio. Todo en segundos.',
  },
  {
    number: '03',
    icon: 'Globe',
    title: 'Tu sitio está listo',
    description:
      'Recibe el link por WhatsApp. Empieza a aparecer en Google desde el primer día.',
  },
]

export const WA_CHAT_SCRIPT = [
  { delay: 800,  text: 'Quiero crear mi tienda online',              isBot: false },
  { delay: 600,  text: '',                                            isBot: true, isTyping: true },
  { delay: 1200, text: '¡Hola! ¿Cómo se llama tu negocio?',          isBot: true  },
  { delay: 1000, text: 'Soluciones El Vecino',                        isBot: false },
  { delay: 700,  text: '',                                            isBot: true, isTyping: true },
  { delay: 1100, text: '¡Perfecto! ¿Qué servicios o productos ofreces?', isBot: true },
  { delay: 900,  text: 'Plomería, electricidad y pintura a domicilio', isBot: false },
  { delay: 600,  text: '',                                            isBot: true, isTyping: true },
  { delay: 1400, text: '✅ ¡Tu sitio está listo! soluciones-el-vecino.vendo365.com', isBot: true },
]

export const FEATURES = [
  {
    icon: 'Sparkles',
    title: 'IA que escribe por ti',
    description: 'Textos únicos para tu negocio. Nunca genéricos, siempre contextuales.',
  },
  {
    icon: 'Search',
    title: 'SEO desde el día 1',
    description: 'Aparece en Google sin tocar nada. Meta tags, sitemap, schema.org automáticos.',
  },
  {
    icon: 'ShoppingBag',
    title: 'Tienda online',
    description: 'Catálogo de productos, carrito y pago contra entrega o Wompi integrado.',
  },
  {
    icon: 'MessageCircle',
    title: 'Onboarding por WhatsApp',
    description: 'Crea tu sitio sin abrir un navegador. Solo responde por WA.',
  },
  {
    icon: 'Globe',
    title: 'Subdominio gratis',
    description:
      'tuNegocio.vendo365.com disponible en segundos. Dominio propio en plan Pro.',
  },
  {
    icon: 'Zap',
    title: 'Listo en minutos',
    description:
      'No días, no semanas. Tu sitio profesional existe antes de terminar el café.',
  },
]

export const METRICS = [
  { value: 43, suffix: '', label: 'años de experiencia', color: 'primary' },
  { value: 500, suffix: '+', label: 'pacientes atendidos', color: 'primary' },
  { value: '#1', suffix: '', label: 'resultado en Google', color: 'accent', isStatic: true },
]

export const PRICING_PLANS = [
  {
    name: 'Gratis',
    tagline: 'Para empezar',
    price: 'COP 0',
    period: '/mes',
    featured: false,
    cta: 'Empezar gratis',
    ctaVariant: 'btn-outline-light',
    features: [
      { text: 'Landing básica', included: true },
      { text: 'Subdominio .vendo365.com', included: true },
      { text: 'SEO básico', included: true },
      { text: 'Sin marca propia', included: false },
      { text: 'Sin tienda online', included: false },
    ],
  },
  {
    name: 'Emprendedor',
    tagline: 'El más elegido',
    price: 'COP 24.900',
    period: '/mes',
    featured: true,
    badge: 'Más popular',
    cta: 'Elegir Emprendedor',
    ctaVariant: 'btn-primary',
    features: [
      { text: 'Todo de Gratis', included: true },
      { text: 'Sin marca Vendo365', included: true },
      { text: 'SEO completo', included: true },
      { text: 'Hasta 10 productos', included: true },
      { text: 'Onboarding por WhatsApp', included: true },
    ],
  },
  {
    name: 'Negocio',
    tagline: 'Para crecer',
    price: 'COP 49.900',
    period: '/mes',
    featured: false,
    cta: 'Elegir Negocio',
    ctaVariant: 'btn-outline-light',
    features: [
      { text: 'Todo de Emprendedor', included: true },
      { text: 'Hasta 50 productos', included: true },
      { text: 'Pago online (Wompi)', included: true },
      { text: 'Contenido para redes', included: true },
      { text: 'Contenido 3x por semana', included: true },
    ],
  },
]

export const FAQ_ITEMS = [
  {
    q: '¿Cuánto tiempo tarda en crearse mi sitio web con Vendo365?',
    a: 'Menos de 10 minutos desde el primer mensaje por WhatsApp. El proceso es así: respondes unas preguntas simples sobre tu negocio, la IA genera tu sitio completo con textos, SEO y estructura, y recibes el link listo para compartir. Sin esperas, sin formularios largos, sin reuniones.',
  },
  {
    q: '¿Necesito saber de tecnología o diseño para usar Vendo365?',
    a: 'No. Si sabes usar WhatsApp, puedes crear tu sitio con Vendo365. No necesitas instalar ningún programa, no necesitas saber HTML, CSS ni diseño. La inteligencia artificial hace todo el trabajo técnico por ti. Está diseñado para personas que tienen un negocio, no para programadores.',
  },
  {
    q: '¿Mi sitio web va a aparecer en Google?',
    a: 'Sí. Vendo365 genera automáticamente todo el SEO técnico que Google necesita: meta tags, sitemap XML, datos estructurados (schema.org), Open Graph y descripciones optimizadas. Desde el primer día tu sitio puede ser indexado. Don Alfonso Alvira, terapeuta de Villavicencio, hoy aparece en los primeros resultados de Google desde su sitio en alfonsoalvira.vendo365.com.',
  },
  {
    q: '¿Qué incluye el plan gratuito? ¿Hay letra pequeña?',
    a: 'El plan gratuito incluye una landing page profesional, un subdominio propio (tuNegocio.vendo365.com) y SEO básico. No requiere tarjeta de crédito ni compromiso de pago. La única diferencia con los planes de pago es que aparece la marca "Vendo365" en el sitio, tienes menos funciones y no incluye tienda online. Sin sorpresas.',
  },
  {
    q: '¿Puedo vender productos online desde Colombia?',
    a: 'Sí. Los planes Emprendedor y Negocio incluyen tienda online con catálogo de productos. El plan Negocio añade pago online integrado con Wompi, el procesador de pagos más usado en Colombia, que acepta tarjetas de crédito, débito y PSE. También puedes activar pago contra entrega.',
  },
  {
    q: '¿Qué es Wompi y por qué lo usan?',
    a: 'Wompi es la pasarela de pagos de Bancolombia, la más usada y confiable en Colombia. Permite recibir pagos con tarjeta de crédito, débito, PSE y Nequi. Al ser colombiana, no hay costos de conversión de divisas ni complicaciones de activación. Es el estándar para e-commerce en Colombia.',
  },
  {
    q: '¿Puedo usar mi propio dominio (.com o .co)?',
    a: 'Sí. En el plan Pro puedes conectar tu dominio propio (por ejemplo, tunegocio.com o tunegocio.com.co). Los planes anteriores incluyen un subdominio gratuito en tuNegocio.vendo365.com, que funciona perfectamente para empezar y para Google.',
  },
  {
    q: '¿En qué se diferencia Vendo365 de Wix o WordPress?',
    a: 'La diferencia principal es el proceso de creación: Wix y WordPress requieren que tú diseñes el sitio desde cero en un navegador. Vendo365 crea el sitio por ti respondiendo preguntas en WhatsApp — sin abrir el computador si no quieres. Además, está optimizado para el contexto colombiano (Wompi, español colombiano, SEO local) y cuesta desde COP 0, mientras que Wix cobra desde USD 17/mes sin características locales.',
  },
  {
    q: '¿Vendo365 sirve para médicos, terapeutas o profesionales de salud?',
    a: 'Sí, es uno de los perfiles más comunes. El primer cliente de Vendo365 es Don Alfonso Alvira, terapeuta especialista en columna de Villavicencio con 43 años de experiencia. Su sitio incluye presentación de servicios, información de contacto y aparece en Google. El sistema genera automáticamente el schema.org correcto para profesionales de salud (MedicalBusiness), lo que mejora el posicionamiento en búsquedas locales.',
  },
  {
    q: '¿En qué ciudades de Colombia funciona Vendo365?',
    a: 'En toda Colombia. Bogotá, Medellín, Cali, Barranquilla, Villavicencio, Pasto, Bucaramanga, Manizales, Pereira, Cartagena, Santa Marta, Cúcuta, Ibagué y ciudades intermedias. El servicio es 100% digital y funciona desde cualquier lugar con WhatsApp. También está disponible para México, Perú, Ecuador y el resto de Latinoamérica.',
  },
  {
    q: '¿Puedo cancelar mi plan en cualquier momento?',
    a: 'Sí, sin cargos por cancelación. Puedes cancelar desde tu perfil o escribiendo a hola@vendo365.com. No hay permanencia mínima. Si eres usuario nuevo de un plan pago, tienes derecho a retracto dentro de los 5 días hábiles siguientes a la primera suscripción, conforme a la Ley 1480 de 2011.',
  },
  {
    q: '¿Los textos de mi sitio los escribe la IA o tengo que escribirlos yo?',
    a: 'La IA los escribe todos. A partir de las respuestas que das por WhatsApp (nombre del negocio, servicios, ciudad, descripción), GPT-4 genera los textos del sitio, los títulos SEO, las meta descriptions, el contenido de cada sección y los datos estructurados. Son textos únicos, escritos en español colombiano, optimizados para buscadores. Tú solo revisas y, si quieres, pides ajustes.',
  },
]

export const FOOTER_LINKS = {
  Producto: [
    { label: 'Características', href: '#features' },
    { label: 'Precios', href: '#pricing' },
    { label: 'Cómo funciona', href: '#how-it-works' },
    { label: 'Blog', href: '#blog' },
  ],
  Legal: [
    { label: 'Términos', href: '/terminos' },
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Cookies', href: '/cookies' },
  ],
  Contacto: [
    { label: 'hola@vendo365.com', href: 'mailto:hola@vendo365.com' },
    { label: 'WhatsApp directo', href: `https://wa.me/573013969321` },
    { label: 'Instagram', href: 'https://instagram.com/vendo365' },
  ],
}
