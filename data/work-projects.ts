export interface WorkProject {
  id: string
  tag: 'Full Site' | 'Landing Page'
  title: string
  subtitle: string
  description: string
  details: string
  year: string
  status: 'live' | 'concept'
  url?: string
}

export const workProjects: WorkProject[] = [
  {
    id: 'oxmedia',
    tag: 'Full Site',
    title: 'Ox Media Digital',
    subtitle: 'AI-powered e-commerce tools',
    description: 'Brand site for an AI Amazon listing optimization platform.',
    details:
      'Full marketing site for Ox Media Digital, an AI-powered platform that helps e-commerce sellers write optimized Amazon listings at scale. Includes a dark glassmorphism design system, animated hero, service cards, and integrated contact flow.',
    year: '2024',
    status: 'live',
    url: 'https://oxmedia.digital',
  },
  {
    id: 'softritualsdigital',
    tag: 'Full Site',
    title: 'Soft Rituals Digital',
    subtitle: 'Interior design studio',
    description: 'Clean, Rich Girl Financial Freedom Aesthetic.',
    details:
      'Five-page marketing site for a boutique interior design studio. Built with a Sunset Harmony design system: warm creams, copper tones, and soft navy. Features animated scroll reveals, a fluid particle canvas, and Netlify Forms integration.',
    year: '2025',
    status: 'live',
    url: 'https://softritualsdigital.com',
  },
  {
    id: 'launchportal-concept',
    tag: 'Landing Page',
    title: 'Launch Portal: Concept',
    subtitle: 'SaaS launch page',
    description: 'High-conversion launch page concept for a B2B SaaS product.',
    details:
      'Concept landing page designed to drive waitlist signups for a B2B SaaS tool. Features above-the-fold social proof, a benefits-first layout, and a friction-minimized email capture form. Dark mode with electric blue accents.',
    year: '2025',
    status: 'concept',
  },
  {
    id: 'localservice-concept',
    tag: 'Landing Page',
    title: 'Local Service: Concept',
    subtitle: 'Service business lead gen',
    description: 'Conversion-first landing page concept for a local service business.',
    details:
      'Concept single-page site built to turn ad traffic into booked consultations for a local home services business. Trust signals front and center, mobile-first layout, and a single CTA repeated at every scroll position.',
    year: '2025',
    status: 'concept',
  },
]
