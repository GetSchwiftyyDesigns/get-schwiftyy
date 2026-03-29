import Link from 'next/link'
import { Container } from './container'
import { MobileNav } from './mobile-nav'

const navLinks = [
  { href: '/', label: 'Home Dimension' },
  { href: '/work', label: 'Portal Projects' },
  { href: '/services', label: 'The Lab' },
  { href: '/contact', label: 'Open a Channel' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(143,75,255,0.25)] bg-[rgba(7,3,20,0.6)] backdrop-blur-md md:backdrop-blur-xl">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3df2ff] to-transparent opacity-30" aria-hidden="true" />
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tight text-white transition-colors hover:text-[#3df2ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2 rounded"
            aria-label="getschwiftyy — home"
          >
            <span style={{ color: '#9ffb4c' }}>get</span>schwiftyy
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm font-medium text-neon-green transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="btn-portal inline-flex items-center justify-center rounded-lg border border-[#8f4bff] px-4 py-2 text-sm font-semibold text-[#8f4bff] transition-all hover:bg-[rgba(143,75,255,0.12)] hover:shadow-[0_0_20px_rgba(143,75,255,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2 cursor-pointer"
            >
              Start a project
            </Link>
          </nav>

          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
