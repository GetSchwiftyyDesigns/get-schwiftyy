import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { PrimaryButton } from '@/components/primary-button'
import { Card } from '@/components/card'

export const metadata: Metadata = {
  title: 'Website Design for Cannabis Dispensaries in Denver & Colorado',
  description:
    'Custom, Colorado-compliant website design for cannabis dispensaries. A website is one of the few channels dispensaries can fully own — built for SEO, compliance, and conversion.',
  alternates: {
    canonical: 'https://www.getschwiftyy.com/web-design-for-cannabis-dispensaries',
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
      '@id': 'https://www.getschwiftyy.com/web-design-for-cannabis-dispensaries#article',
      headline: 'Website Design for Cannabis Dispensaries',
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
      mainEntityOfPage: 'https://www.getschwiftyy.com/web-design-for-cannabis-dispensaries',
      description:
        'getschwiftyy builds Colorado-compliant websites for cannabis dispensaries — one of the few advertising channels not restricted by state marijuana advertising rules.',
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why is a website so important for a Colorado dispensary specifically?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Colorado restricts cannabis advertising heavily: no leaf imagery, no mass-market banner ads, no targeting outside the state, and strict audience-age requirements for broadcast and display advertising. A dispensary's own website and SEO are among the few channels not subject to those third-party ad restrictions, making it one of the highest-value marketing assets a dispensary can own.",
            },
          },
          {
            '@type': 'Question',
            name: 'Can a dispensary website be fully compliant with Colorado advertising rules?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes, when built with the restrictions in mind: no imagery or language targeting minors, no false or misleading claims, and no leaf/cannabis-plant imagery per Colorado guidelines. getschwiftyy designs dispensary sites to be fully brand-forward and compliant, with copy reviewed against current Colorado MED advertising guidance.",
            },
          },
          {
            '@type': 'Question',
            name: 'Does a dispensary website replace Weedmaps or Leafly listings?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "No — it complements them. Weedmaps and Leafly are discovery channels with their own built-in audience, but you don't fully control the experience, the branding, or the SEO value. Your own website is the asset you own long-term and can optimize for local search, while directory listings continue driving discovery traffic.",
            },
          },
          {
            '@type': 'Question',
            name: 'How long does a dispensary website take to build?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A single-location dispensary site typically ships in 2–4 weeks. Multi-location sites with menu integrations take 3–5 weeks depending on complexity.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.getschwiftyy.com/' },
        { '@type': 'ListItem', position: 2, name: 'Website Design for Cannabis Dispensaries', item: 'https://www.getschwiftyy.com/web-design-for-cannabis-dispensaries' },
      ],
    },
  ],
}

const includes = [
  {
    title: 'Colorado-compliant by design',
    body: 'Copy and imagery reviewed against Colorado MED advertising rules — no leaf imagery, no claims that cross the line, no mass-market tricks that create compliance risk.',
  },
  {
    title: 'Built for local SEO',
    body: 'Structured for "dispensary near me" and strain/product searches, with Google Business Profile and local citation strategy baked in.',
  },
  {
    title: 'Menu & directory integration',
    body: 'Connects to your existing menu platform (Dutchie, Weedmaps, Leafly, or similar) so your website stays current without manual updates.',
  },
  {
    title: 'A brand that feels premium, not generic',
    body: "Most dispensary sites look the same. A custom build gives you a real point of view that stands out in a crowded Denver market.",
  },
]

const faqs = [
  {
    name: 'Why is a website so important for a Colorado dispensary specifically?',
    acceptedAnswer: {
      text: "Colorado restricts cannabis advertising heavily: no leaf imagery, no mass-market banner ads, no targeting outside the state, and strict audience-age requirements for broadcast and display advertising. A dispensary's own website and SEO are among the few channels not subject to those third-party ad restrictions, making it one of the highest-value marketing assets a dispensary can own.",
    },
  },
  {
    name: 'Can a dispensary website be fully compliant with Colorado advertising rules?',
    acceptedAnswer: {
      text: "Yes, when built with the restrictions in mind: no imagery or language targeting minors, no false or misleading claims, and no leaf/cannabis-plant imagery per Colorado guidelines. getschwiftyy designs dispensary sites to be fully brand-forward and compliant, with copy reviewed against current Colorado MED advertising guidance.",
    },
  },
  {
    name: 'Does a dispensary website replace Weedmaps or Leafly listings?',
    acceptedAnswer: {
      text: "No — it complements them. Weedmaps and Leafly are discovery channels with their own built-in audience, but you don't fully control the experience, the branding, or the SEO value. Your own website is the asset you own long-term and can optimize for local search, while directory listings continue driving discovery traffic.",
    },
  },
  {
    name: 'How long does a dispensary website take to build?',
    acceptedAnswer: {
      text: 'A single-location dispensary site typically ships in 2–4 weeks. Multi-location sites with menu integrations take 3–5 weeks depending on complexity.',
    },
  },
]

export default function CannabisWebDesignPage() {
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
              Denver &amp; Colorado · Cannabis Dispensaries
            </p>
            <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Website Design for Cannabis Dispensaries
            </h1>
            <p className="font-sans mb-8 text-xl text-white leading-relaxed">
              Colorado restricts how dispensaries can advertise. Your own website isn&apos;t one of those restricted channels — it&apos;s the asset you fully own. getschwiftyy builds compliant, conversion-focused dispensary sites built to actually drive foot traffic.
            </p>
            <PrimaryButton href="/contact">Talk about your dispensary site</PrimaryButton>
          </div>
        </Container>
      </Section>

      {/* What's included */}
      <Section className="nebula-purple">
        <Container>
          <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
            What&apos;s Included
          </p>
          <h2 className="font-heading mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Built for how dispensaries actually operate
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {includes.map((item) => (
              <Card key={item.title} glow="green" className="flex flex-col gap-3">
                <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                <p className="font-sans text-sm text-white leading-relaxed">{item.body}</p>
              </Card>
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
            Common questions from dispensary owners
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
              Ready to own your dispensary&apos;s digital presence?
            </h2>
            <p className="font-sans mb-8 text-white leading-relaxed">
              Tell me about your dispensary and I&apos;ll tell you exactly what it&apos;ll take to launch — no commitment required.
            </p>
            <PrimaryButton href="/contact">Start a project</PrimaryButton>
            <p className="mt-6 text-sm text-slate-400">
              Run a different kind of Denver business?{' '}
              <Link href="/denver-web-design" className="underline underline-offset-2 hover:text-[#3df2ff]">
                See all Denver web design services
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
