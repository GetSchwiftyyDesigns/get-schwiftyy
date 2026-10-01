import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { PrimaryButton } from '@/components/primary-button'
import { Card } from '@/components/card'

export const metadata: Metadata = {
  title: 'Denver Web Design & Custom Website Development Agency',
  description:
    'getschwiftyy builds custom websites for Denver, Colorado businesses — e-commerce brands, service firms, therapy practices, and cannabis dispensaries. No templates, conversion-first, built from scratch.',
  alternates: {
    canonical: 'https://www.getschwiftyy.com/denver-web-design',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.getschwiftyy.com/denver-web-design#article',
      headline: 'Denver Web Design & Custom Website Development',
      datePublished: '2026-10-01',
      dateModified: '2026-10-01',
      author: {
        '@type': 'Person',
        name: 'Diyon Clark',
        jobTitle: 'Founder, GetSchwiftyy',
        url: 'https://www.getschwiftyy.com/contact',
        sameAs: ['https://www.linkedin.com/in/diyon-clark'],
      },
      publisher: { '@id': 'https://www.getschwiftyy.com/#organization' },
      mainEntityOfPage: 'https://www.getschwiftyy.com/denver-web-design',
      description:
        'getschwiftyy is a Denver, Colorado web design agency building custom, high-converting websites for local businesses across every industry.',
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does getschwiftyy build websites for Denver businesses specifically?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. getschwiftyy is based in Denver, Colorado and specializes in custom websites for local businesses, including e-commerce brands, service firms, therapy practices, and cannabis dispensaries across the Denver metro area.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why hire a local Denver web design agency instead of a national freelancer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A local agency understands Denver-specific search behavior, local competitors, and regulations that affect certain industries (like cannabis advertising restrictions in Colorado). getschwiftyy also optimizes for local SEO signals — Google Business Profile, local citations, and Denver-specific content — that a generic freelancer may not prioritize.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does a custom website cost in Denver?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'getschwiftyy pricing is scoped per project based on complexity. Most Denver small-business sites fall in the custom freelance-to-small-agency range, well below national agency pricing, while remaining fully custom — no templates.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to launch a Denver business website?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A focused landing page typically ships in 1–2 weeks. A full multi-page website ships in 3–5 weeks depending on content and feedback cycles.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.getschwiftyy.com/' },
        { '@type': 'ListItem', position: 2, name: 'Denver Web Design', item: 'https://www.getschwiftyy.com/denver-web-design' },
      ],
    },
  ],
}

const whyLocal = [
  {
    title: 'Local SEO built in',
    body: 'Google Business Profile optimization, Denver-specific schema markup, and local citation strategy baked into every build — not bolted on after launch.',
  },
  {
    title: 'Denver market knowledge',
    body: "I know what Denver's competitive landscape looks like across industries, from boutique retail to regulated spaces like cannabis and healthcare.",
  },
  {
    title: 'A real person, not a ticket queue',
    body: "You work directly with the person designing and building your site. No account managers, no handoffs, no overseas dev team you've never met.",
  },
]

const industries = [
  {
    href: '/web-design-for-therapists',
    title: 'Therapy & Counseling Practices',
    body: 'HIPAA-aware contact forms, scheduling-ready layouts, and content structured for how people actually search for a therapist in Denver.',
  },
  {
    href: '/web-design-for-cannabis-dispensaries',
    title: 'Cannabis Dispensaries',
    body: "A compliant, SEO-driven website is one of the few channels Colorado doesn't restrict for dispensary advertising.",
  },
  {
    href: '/work',
    title: 'E-commerce & Service Brands',
    body: 'Full storefronts, service-business marketing sites, and conversion-first landing pages for Denver brands ready to stop blending in.',
  },
]

const faqs = [
  {
    name: 'Does getschwiftyy build websites for Denver businesses specifically?',
    acceptedAnswer: {
      text: 'Yes. getschwiftyy is based in Denver, Colorado and specializes in custom websites for local businesses, including e-commerce brands, service firms, therapy practices, and cannabis dispensaries across the Denver metro area.',
    },
  },
  {
    name: 'Why hire a local Denver web design agency instead of a national freelancer?',
    acceptedAnswer: {
      text: 'A local agency understands Denver-specific search behavior, local competitors, and regulations that affect certain industries (like cannabis advertising restrictions in Colorado). getschwiftyy also optimizes for local SEO signals — Google Business Profile, local citations, and Denver-specific content — that a generic freelancer may not prioritize.',
    },
  },
  {
    name: 'How much does a custom website cost in Denver?',
    acceptedAnswer: {
      text: 'getschwiftyy pricing is scoped per project based on complexity. Most Denver small-business sites fall in the custom freelance-to-small-agency range, well below national agency pricing, while remaining fully custom — no templates.',
    },
  },
  {
    name: 'How long does it take to launch a Denver business website?',
    acceptedAnswer: {
      text: 'A focused landing page typically ships in 1–2 weeks. A full multi-page website ships in 3–5 weeks depending on content and feedback cycles.',
    },
  },
]

export default function DenverWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <Section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-mono font-semibold tracking-widest text-neon-green uppercase">
              Denver, Colorado · Custom Web Design
            </p>
            <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Denver Web Design &amp; Custom Website Development
            </h1>
            <p className="font-sans mb-8 text-xl text-white leading-relaxed">
              getschwiftyy builds custom, high-converting websites for Denver businesses — no templates, no cookie-cutter layouts. If you&apos;re searching for a Denver web design agency that actually understands your local market, you&apos;re in the right dimension.
            </p>
            <PrimaryButton href="/contact">Start a Denver project</PrimaryButton>
          </div>
        </Container>
      </Section>

      {/* Why local */}
      <Section className="nebula-purple">
        <Container>
          <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
            Why Local
          </p>
          <h2 className="font-heading mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Why work with a Denver-based web designer
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {whyLocal.map((item) => (
              <Card key={item.title} glow="green" className="flex flex-col gap-3">
                <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                <p className="font-sans text-sm text-white leading-relaxed">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries */}
      <Section>
        <Container>
          <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
            Industries
          </p>
          <h2 className="font-heading mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Denver industries I build for
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {industries.map((item) => (
              <Link key={item.href} href={item.href} className="block">
                <Card glow="green" className="flex h-full flex-col gap-3">
                  <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                  <p className="font-sans text-sm text-white leading-relaxed">{item.body}</p>
                  <span className="mt-auto font-mono text-xs text-neon-green">Learn more →</span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="nebula-green">
        <Container>
          <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
            FAQ
          </p>
          <h2 className="font-heading mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Common questions about Denver web design
          </h2>
          <dl className="flex flex-col gap-5 max-w-3xl">
            {faqs.map((item) => (
              <div key={item.name} className="card-scifi p-6">
                <dt className="font-heading font-semibold text-white mb-2">{item.name}</dt>
                <dd className="font-sans text-sm text-slate-300 leading-relaxed">{item.acceptedAnswer.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-white">
              Ready to build a Denver website that converts?
            </h2>
            <p className="font-sans mb-8 text-white leading-relaxed">
              Tell me about your business and I&apos;ll tell you exactly what it&apos;ll take to launch — no commitment required.
            </p>
            <PrimaryButton href="/contact">Start a project</PrimaryButton>
          </div>
        </Container>
      </Section>
    </>
  )
}
