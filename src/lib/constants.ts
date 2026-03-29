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
