import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { PrimaryButton } from '@/components/primary-button'
import { Card } from '@/components/card'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Pick your level of Schwiftyy. Custom websites and landing pages built to convert.',
}

const packages = [
  {
    name: 'Launch Portal',
    type: 'Landing Page',
    tagline: 'One page. One mission. Convert.',
    forLine: 'For brands launching something new (a product, a service, a campaign) and need a single focused page that does exactly one thing: convert.',
    bullets: [
      'Full custom design, no templates',
      'Conversion-optimized layout and copy structure',
      'Mobile-first, fast-loading',
      'One integrated form or CTA flow',
      'Delivered ready to connect to your tool stack',
    ],
    outcome: 'You walk away with a landing page that turns ad traffic, email clicks, and referrals into actual leads or sales.',
    ctaLabel: 'Talk about a Launch Portal',
  },
  {
    name: 'Full Schwiftyy Site',
    type: 'Multi-Page',
    tagline: 'Your whole brand, one wild, clear home online.',
    forLine: 'For brands that need more than a landing page: a full web presence that tells the whole story, handles objections, and sends the right visitors to the right place.',
    bullets: [
      'Multi-page architecture (Home, About, Services, Work, Contact)',
      'Custom design system unique to your brand',
      'Responsive across all devices',
      'SEO-ready structure and metadata',
      'Contact form with email delivery built in',
    ],
    outcome: 'You get a complete online home that works 24/7 as your best salesperson, brand representative, and first impression.',
    ctaLabel: 'Talk about a Full Site',
    featured: true,
  },
  {
    name: 'Portal + Bots',
    type: 'Site + Automation',
    tagline: 'Your site plus tiny AI minions.',
    forLine: 'For brands that want their website to do more than sit there: think automated lead follow-up, AI-assisted content, CRM sync, or custom internal tools wired to the front end.',
    bullets: [
      'Everything in Full Schwiftyy Site',
      'AI-powered workflow integration',
      'Automated email sequences or lead routing',
      'CRM or third-party tool connections',
      'Custom internal tools on request',
    ],
    outcome: 'You get a site that actively works for your business, capturing, routing, and nurturing leads while you focus on delivering.',
    ctaLabel: 'Talk about Portal + Bots',
  },
]

const processSteps = [
  {
    step: '01',
    heading: 'You tell me what you\'re building',
    body: 'Fill out the contact form or hop on a quick call. I ask a few pointed questions and get clear on your goal, your audience, and what "done" looks like for you.',
  },
  {
    step: '02',
    heading: 'I design the portal',
    body: 'I build a custom design system and page structure around your brand. You get to see it, react to it, and shape it before a single line of production code is written.',
  },
  {
    step: '03',
    heading: 'We launch it into the dimension',
    body: 'Final build, QA, and handoff. You get a fast, clean, production-ready site with everything documented so you\'re never dependent on me to make changes.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-mono font-semibold tracking-widest text-neon-green uppercase">
              Services
            </p>
            <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Services
            </h1>
            <p className="font-sans mb-8 text-xl text-white leading-relaxed">
              Pick your level of Schwiftyy. You tell me what you&apos;re building, I design the portal that gets people to actually click, book, or buy.
            </p>
            <PrimaryButton href="/contact">Talk about a project</PrimaryButton>
          </div>
        </Container>
      </Section>

      {/* Package Cards */}
      <Section className="nebula-purple">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={
                  pkg.featured
                    ? 'border-[rgba(159,251,76,0.25)] bg-[rgba(159,251,76,0.04)] flex flex-col'
                    : 'flex flex-col'
                }
              >
                {pkg.featured && (
                  <div className="mb-4">
                    <span className="rounded-full bg-[#9ffb4c] px-3 py-1 text-xs font-bold text-[#070314]">
                      Most popular
                    </span>
                  </div>
                )}
                <div className="mb-1 text-xs font-mono font-semibold tracking-widest text-white uppercase">
                  {pkg.type}
                </div>
                <h2 className="mb-2 text-xl font-bold text-white">{pkg.name}</h2>
                <p className="mb-4 text-sm font-medium text-neon-green">{pkg.tagline}</p>
                <p className="mb-5 text-sm text-white leading-relaxed">{pkg.forLine}</p>
                <ul className="mb-6 flex flex-col gap-2 flex-1">
                  {pkg.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white">
                      <span className="mt-0.5 text-neon-green shrink-0" aria-hidden="true">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="mb-6 rounded-lg border border-[rgba(61,242,255,0.15)] bg-[rgba(14,11,31,0.5)] backdrop-blur-sm p-3 text-xs text-[#3df2ff] italic leading-relaxed">
                  {pkg.outcome}
                </p>
                <PrimaryButton
                  href="/contact"
                  variant={pkg.featured ? 'solid' : 'outline'}
                  className="w-full"
                >
                  {pkg.ctaLabel}
                </PrimaryButton>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Strip */}
      <Section>
        <Container>
          <h2 className="font-heading mb-10 text-2xl font-bold tracking-tight text-white md:text-3xl">
            How this actually goes down
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="flex flex-col gap-3">
                <span className="font-mono text-3xl font-bold text-neon-cyan">{step.step}</span>
                <h3 className="font-semibold text-white">{step.heading}</h3>
                <p className="text-sm text-white leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="nebula-green">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-white">
              Not sure which package fits?
            </h2>
            <p className="font-sans mb-8 text-white">
              That&apos;s fine. Tell me what you&apos;re building and I&apos;ll tell you what makes sense.
            </p>
            <PrimaryButton href="/contact">Talk about a project</PrimaryButton>
          </div>
        </Container>
      </Section>
    </>
  )
}
