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
    id: 'forcepeptidesonline',
    tag: 'Full Site',
    title: 'FORCE Peptides Online',
    subtitle: 'Peptide research e-commerce',
    description: 'Full e-commerce brand site for a peptide research supplier.',
    details:
      'Full marketing and e-commerce site for FORCE Peptides Online, a research peptide supplier. Includes a dark, high-trust design system, product catalog, compliance-ready content structure, and integrated contact flow.',
    year: '2025',
    status: 'live',
    url: 'https://www.forcepeptidesonline.com',
  },
  {
    id: 'ibattleme',
    tag: 'Full Site',
    title: 'I Battle Me Daily',
    subtitle: 'Personal growth storefront',
    description: 'Custom storefront site for a personal-growth and self-accountability brand.',
    details:
      'Full multi-page site and storefront for I Battle Me Daily, a personal-growth brand built around daily self-accountability. Custom Next.js build with a bold, motivational design system and integrated storefront flow.',
    year: '2025',
    status: 'live',
    url: 'https://www.ibattleme.com',
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
