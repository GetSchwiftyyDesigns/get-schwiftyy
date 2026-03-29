'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home Dimension', num: '01' },
  { href: '/work', label: 'Portal Projects', num: '02' },
  { href: '/services', label: 'The Lab', num: '03' },
  { href: '/contact', label: 'Open a Channel', num: '04' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const overlay = (
    <div
      id="mobile-menu"
      className="fixed inset-0 top-[64px] z-[9999] flex flex-col bg-[#070314] px-6 py-10"
    >
      <div className="mb-10 h-[1px] bg-gradient-to-r from-transparent via-[rgba(143,75,255,0.4)] to-transparent" aria-hidden="true" />

      <nav aria-label="Mobile navigation" className="flex-1">
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group flex items-center gap-4 rounded-xl px-4 py-5 transition-colors ${
                    active
                      ? 'bg-[rgba(143,75,255,0.1)] text-[#9ffb4c]'
                      : 'text-slate-300 hover:bg-[rgba(143,75,255,0.08)] hover:text-white'
                  } focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2`}
                >
                  <span className="font-mono text-xs text-[rgba(143,75,255,0.6)]">{link.num}</span>
                  <span className="text-xl font-semibold tracking-tight">{link.label}</span>
                  {active && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#9ffb4c]" aria-hidden="true" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="pt-8 border-t border-[rgba(143,75,255,0.2)]">
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="flex items-center justify-center rounded-xl bg-[#8f4bff] px-6 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(143,75,255,0.35)] transition-all hover:bg-[#7030e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2"
        >
          Start a project
        </Link>
      </div>
    </div>
  )

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-[rgba(143,75,255,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2"
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {mounted && open && createPortal(overlay, document.body)}
    </div>
  )
}
