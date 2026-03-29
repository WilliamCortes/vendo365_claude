import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import JsonLd from '@/components/seo/JsonLd'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vendo365 — Tu negocio en internet. Desde WhatsApp. En minutos.',
  description:
    'Crea tu sitio web, tienda online y SEO respondiendo preguntas por WhatsApp. La IA genera todo automáticamente. Desde COP 0.',
  metadataBase: new URL('https://vendo365.com'),
  keywords: [
    'crear sitio web gratis Colombia',
    'tienda online Colombia',
    'página web para negocio',
    'SEO automático',
    'vender online WhatsApp',
    'crear tienda online sin saber programar',
    'sitio web para médico Colombia',
    'Wompi pagos online',
    'presencia digital Colombia',
    'marketing digital micro-negocios',
    'vendo365',
  ],
  authors: [{ name: 'Vendo365', url: 'https://vendo365.com' }],
  creator: 'Vendo365',
  publisher: 'Vendo365',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vendo365.com',
  },
  openGraph: {
    title: 'Vendo365 — Tu negocio en internet. Desde WhatsApp.',
    description:
      'Describe tu negocio por WhatsApp. La IA crea tu sitio, tu tienda y tu SEO. Sin saber de tecnología.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Vendo365',
    url: 'https://vendo365.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vendo365 — Tu negocio en internet. Desde WhatsApp. En minutos.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vendo365 — Tu negocio en internet desde WhatsApp',
    description: 'Sitio web + tienda + SEO. En minutos. Desde COP 0.',
    images: ['/og-image.jpg'],
    creator: '@vendo365',
    site: '@vendo365',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
