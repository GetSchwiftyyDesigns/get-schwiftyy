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

export const metadata: Metadata = {
  title: {
    default: 'getschwiftyy: Stupidly good-looking websites',
    template: '%s | getschwiftyy',
  },
  description:
    'High-converting websites for brands that are done being boring. Custom builds, conversion-first layouts, AI-ready foundations.',
  metadataBase: new URL('https://www.getschwiftyy.com'),
  verification: {
    google: 'vp_zwu4SMbgXjqW-Fmg1EQMjNNxPc_91PuCa0BaZLNs',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.getschwiftyy.com',
    siteName: 'getschwiftyy',
    title: 'getschwiftyy: Stupidly good-looking websites',
    description:
      'High-converting websites for brands that are done being boring.',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'getschwiftyy — Stupidly good-looking websites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'getschwiftyy',
    description: 'High-converting websites for brands that are done being boring.',
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
