import Link from 'next/link'
import { Container } from './container'

const footerLinks = [
  { href: '/', label: 'Home Dimension' },
  { href: '/work', label: 'Portal Projects' },
  { href: '/services', label: 'The Lab' },
  { href: '/contact', label: 'Open a Channel' },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[rgba(143,75,255,0.2)] bg-[rgba(7,3,20,0.7)] backdrop-blur-md md:backdrop-blur-xl py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(143,75,255,0.06)_0%,transparent_70%)]" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-heading text-lg font-bold text-white transition-colors hover:text-[#3df2ff] w-fit"
            >
              <span style={{ color: '#9ffb4c' }}>get</span>schwiftyy
            </Link>
            <p className="max-w-md text-sm text-white leading-relaxed font-body">
              Stupidly good-looking, high-converting websites for brands that are done being boring.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-[#3df2ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2 rounded cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-[rgba(42,26,78,0.8)] pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-xs text-neon-green font-mono">
            Built in this dimension with questionable amounts of caffeine.
          </p>
          <p className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} getschwiftyy
          </p>
        </div>
      </Container>
    </footer>
  )
}
