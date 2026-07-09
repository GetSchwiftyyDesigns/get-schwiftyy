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
    id: 'force-gum',
    tag: 'Full Site',
    title: 'FORCE Nootropics',
    subtitle: 'Nootropic gum e-commerce',
    description: 'Full e-commerce site for a nootropic gum brand built for mental performance.',
    details:
      'End-to-end e-commerce site for FORCE Nootropics, a functional gum brand engineered for focus, energy, and recovery. Custom Next.js storefront with Stripe checkout, Supabase auth, product pages for Force Flame and Force Freeze, an FAQ, and a full admin dashboard for order and product management.',
    year: '2025',
    status: 'live',
    url: 'https://www.forcenootropics.com',
  },
  {
    id: 'force-property',
    tag: 'Landing Page',
    title: 'FORCE Property Solutions',
    subtitle: 'Florida property services',
    description: 'Marketing site for a Florida-based owner representation and project management firm.',
    details:
      'Single-page marketing site for FORCE Property Solutions, a Florida firm specializing in Owner Representation and Project Management for HOA boards, condominium associations, and commercial property owners. Features a services grid spanning nine areas of expertise, a vetted contractor network section, and a structured three-phase process breakdown. Built with Next.js and deployed on Vercel.',
    year: '2025',
    status: 'live',
    url: 'https://www.forcepropertysolutions.com',
  },
]
