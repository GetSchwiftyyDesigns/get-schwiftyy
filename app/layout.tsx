import type { Metadata } from 'next'
import { Archivo, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SpaceBackground } from '@/components/space-background'
import { MobileSpaceBackground } from '@/components/mobile-space-background'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.getschwiftyy.com/#organization',
      name: 'getschwiftyy',
      alternateName: 'Get Schwiftyy',
      url: 'https://www.getschwiftyy.com',
      description:
        'AI-powered web design agency building custom, high-converting websites for brands done being boring.',
      foundingDate: '2024',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'hello@getschwiftyy.com',
        url: 'https://www.getschwiftyy.com/contact',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.getschwiftyy.com/#website',
      url: 'https://www.getschwiftyy.com',
      name: 'getschwiftyy',
      description: 'AI web design agency — custom websites that convert.',
      publisher: { '@id': 'https://www.getschwiftyy.com/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.getschwiftyy.com/#service-org',
      name: 'getschwiftyy — AI Web Design Agency',
      url: 'https://www.getschwiftyy.com',
      description:
        'Custom AI-powered web design and website development for brands that want to convert.',
      areaServed: { '@type': 'Country', name: 'United States' },
      serviceType: [
        'Web Design',
        'Website Development',
        'AI Web Design',
        'Landing Page Design',
        'Custom Website Development',
      ],
      parentOrganization: { '@id': 'https://www.getschwiftyy.com/#organization' },
    },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'AI Web Design Agency | Custom Websites That Convert — getschwiftyy',
    template: '%s | getschwiftyy',
  },
  description:
    'getschwiftyy is an AI-powered web design agency building custom, high-converting websites. Custom website development, landing pages, and AI-ready foundations for brands done being boring.',
  metadataBase: new URL('https://www.getschwiftyy.com'),
  verification: {
    google: 'vp_zwu4SMbgXjqW-Fmg1EQMjNNxPc_91PuCa0BaZLNs',
    other: {
      'msvalidate.01': 'E9A0D26124A26CC00E51E9F0DBD2D2C8',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.getschwiftyy.com',
    siteName: 'getschwiftyy',
    title: 'AI Web Design Agency | Custom Websites That Convert — getschwiftyy',
    description:
      'Custom AI-powered websites built to convert. getschwiftyy builds high-quality custom websites for brands done being boring.',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'getschwiftyy — AI Web Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'getschwiftyy | AI Web Design Agency',
    description: 'Custom AI-powered websites built to convert for brands done being boring.',
    images: ['/og'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070314] text-white antialiased">
        <div className="relative min-h-screen overflow-x-clip">
          {/* Desktop background — hidden on mobile */}
          <div className="hidden md:block">
            <SpaceBackground />
          </div>
          {/* Mobile background — CSS-only animations, no JS loop */}
          <MobileSpaceBackground />

          <div className="relative z-10 flex min-h-screen flex-col">
            <SiteHeader />

            <main id="main-content" className="flex-1">
              {children}
            </main>

            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  )
}
