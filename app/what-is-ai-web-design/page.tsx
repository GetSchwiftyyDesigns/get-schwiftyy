import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { PrimaryButton } from '@/components/primary-button'
import { Card } from '@/components/card'

export const metadata: Metadata = {
  title: 'What Is AI Web Design? | GetSchwiftyy',
  description:
    'AI web design uses artificial intelligence in the build process and the finished product - custom layouts, automation-ready architecture, and conversion-first structure. GetSchwiftyy builds from scratch in 3–5 weeks.',
  alternates: {
    canonical: 'https://www.getschwiftyy.com/what-is-ai-web-design',
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
      '@id': 'https://www.getschwiftyy.com/what-is-ai-web-design#article',
      headline: 'What Is AI Web Design?',
      datePublished: '2026-06-02',
      dateModified: '2026-06-02',
      author: {
        '@type': 'Person',
        name: 'Diyon Clark',
        jobTitle: 'Founder, GetSchwiftyy',
        url: 'https://www.getschwiftyy.com/contact',
        sameAs: ['https://www.linkedin.com/in/diyon-clark'],
      },
      publisher: { '@id': 'https://www.getschwiftyy.com/#organization' },
      mainEntityOfPage: 'https://www.getschwiftyy.com/what-is-ai-web-design',
      description:
        'AI web design uses artificial intelligence in both the build process and the finished product - enabling dynamic personalization, AI-powered automation, and conversion optimization baked into the site architecture from day one.',
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is AI web design?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI web design uses artificial intelligence in both the build process and the finished website - enabling faster custom design generation, AI-powered automation workflows, and conversion-first architecture baked in from the start. GetSchwiftyy builds every site from scratch using AI-assisted design systems, with no templates and no cookie-cutter layouts.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is included in a GetSchwiftyy full site?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A GetSchwiftyy full site includes frontend design, backend architecture and security, marketing automation, SEO and GEO optimization, platform optimization, and detailed multi-page structure (Home, About, Services, Work, Contact, and additional pages as scoped). Every full site is custom-built around your brand - no shared templates or stock layouts.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does an AI web design project take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GetSchwiftyy full multi-page sites ship in 3–5 weeks depending on complexity, number of pages, and content availability. Landing pages (2–3 pages maximum) ship in 1–2 weeks. Timeline begins after the design and project scope call is complete and the proposal is approved.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between a full site and a landing page at GetSchwiftyy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A GetSchwiftyy full site is a complete web presence with multi-page architecture, backend design and security, automation, SEO/GEO optimization, and detailed content pages. A landing page is 2–3 pages maximum, focused on a single conversion goal - a product launch, lead generation campaign, or service page. Pricing and timelines differ accordingly.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does AI web design cost at GetSchwiftyy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GetSchwiftyy pricing is customized to the scope of each project. Every engagement starts with a discovery call and design scope session before any cost is confirmed. An optional monthly retainer for maintenance and updates is available after handoff.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.getschwiftyy.com/' },
        { '@type': 'ListItem', position: 2, name: 'What Is AI Web Design?', item: 'https://www.getschwiftyy.com/what-is-ai-web-design' },
      ],
    },
  ],
}

const fullSiteIncludes = [
  'Frontend design - custom system built around your brand, zero templates',
  'Backend architecture and security setup',
  'Marketing automation and CRM integrations',
  'SEO and GEO/AEO optimization baked in at build time',
  'Platform optimization (speed, Core Web Vitals, mobile-first)',
  'Multi-page structure with detailed, conversion-first content pages',
  'Handoff with full documentation and optional monthly maintenance retainer',
]

const landingPageIncludes = [
  '2–3 pages maximum, built around one conversion goal',
  'Custom design - no templates, no stock layouts',
  'Single CTA flow (lead form, booking link, or purchase)',
  'Mobile-first, fast-loading, SEO-ready',
  'Delivered ready to connect to your tool stack',
  'Handoff with optional monthly maintenance retainer',
]

const processSteps = [
  {
    step: '01',
    heading: 'Discovery Call',
    body: "Tell me what you're building, who it's for, and what done looks like. I ask the pointed questions that save weeks of back-and-forth later.",
  },
  {
    step: '02',
    heading: 'Design & Project Scope Call',
    body: 'A deeper session where we map the full site architecture, define your visual direction, and agree on exactly what gets built - before a single line of code is written.',
  },
  {
    step: '03',
    heading: 'Web Design Proposal & Stack',
    body: "You receive a full proposal: design system direction, page list, tech stack, timeline, and cost. Nothing moves forward until you've approved it.",
  },
  {
    step: '04',
    heading: 'Website Build',
    body: 'I build. You review. We refine. Full sites in 3–5 weeks depending on complexity. Landing pages in 1–2 weeks. Every decision documented as we go.',
  },
  {
    step: '05',
    heading: 'Handoff + Optional Retainer',
    body: "You get the keys - full code access, hosting setup, and documentation so you're never dependent on me to make changes. Monthly maintenance retainer available if you want ongoing support.",
  },
]

const faqs = [
  {
    q: 'What is AI web design?',
    a: "AI web design uses artificial intelligence in both the build process and the finished product - faster custom design generation, automation-ready architecture, and conversion optimization built in from day one. At GetSchwiftyy, it means every site is built from scratch with AI-assisted tools, not generated by a page builder or assembled from a template library.",
  },
  {
    q: "What's included in a full GetSchwiftyy site?",
    a: 'A full site includes frontend and backend design, security, automation integrations, SEO and GEO optimization, platform performance tuning, and a complete multi-page content structure. Every deliverable is custom - there is no shared component library or template base being repainted for your brand.',
  },
  {
    q: 'How long does a GetSchwiftyy project take?',
    a: 'Full sites ship in 3–5 weeks depending on complexity, page count, and how quickly content and feedback comes in. Landing pages (2–3 pages max) ship in 1–2 weeks. The clock starts after the scope call and proposal approval - not after the first message.',
  },
  {
    q: 'Do you offer ongoing maintenance after the build?',
    a: "Yes - every project ends with full handoff documentation so you can manage the site yourself. An optional monthly retainer covers ongoing updates, performance monitoring, and technical support if you'd rather not deal with it.",
  },
  {
    q: 'What is GEO and AEO and does GetSchwiftyy handle it?',
    a: 'GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) are what make your site rankable in AI search tools like ChatGPT, Perplexity, and Google AI Overviews - not just Google blue links. Yes, full site builds include GEO/AEO infrastructure: structured data, answer-first content architecture, and AI crawler configuration.',
  },
]

export default function WhatIsAiWebDesignPage() {
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
              AI Web Design · Custom Builds · No Templates
            </p>
            <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              What Is AI Web Design?
            </h1>
            <p className="font-sans mb-8 text-xl text-white leading-relaxed">
              AI web design uses artificial intelligence in both the build process and the finished product - custom layouts generated around your brand, automation-ready architecture, and conversion-first structure baked in from day one. GetSchwiftyy builds every site from scratch in 3–5 weeks, with no templates and no shared component libraries repainted to look like your brand.
            </p>
            <PrimaryButton href="/contact">Start a project</PrimaryButton>
          </div>
        </Container>
      </Section>

      {/* Full Site vs Landing Page */}
      <Section className="nebula-purple">
        <Container>
          <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
            What You Get
          </p>
          <h2 className="font-heading mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Full Site vs. Landing Page
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="flex flex-col border-[rgba(159,251,76,0.25)] bg-[rgba(159,251,76,0.04)]">
              <div className="mb-2 text-xs font-mono font-semibold tracking-widest text-neon-green uppercase">Full Schwiftyy Site</div>
              <h3 className="font-heading mb-1 text-xl font-bold text-white">Complete Web Presence</h3>
              <p className="mb-1 text-sm font-medium text-neon-green">Ships in 3–5 weeks depending on complexity</p>
              <p className="mb-5 text-sm text-white leading-relaxed">For brands that need more than a landing page - a complete online home that handles objections, tells the full story, and sends the right visitors to the right place.</p>
              <ul className="flex flex-col gap-2 flex-1 mb-6">
                {fullSiteIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white">
                    <span className="mt-0.5 text-neon-green shrink-0" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <PrimaryButton href="/contact" variant="solid" className="w-full">Talk about a full site</PrimaryButton>
            </Card>
            <Card className="flex flex-col">
              <div className="mb-2 text-xs font-mono font-semibold tracking-widest text-white uppercase">Landing Page</div>
              <h3 className="font-heading mb-1 text-xl font-bold text-white">Focused Conversion Page</h3>
              <p className="mb-1 text-sm font-medium text-[#3df2ff]">Ships in 1–2 weeks</p>
              <p className="mb-5 text-sm text-white leading-relaxed">2–3 pages maximum, built around one goal. Perfect for product launches, lead generation campaigns, or ad landing pages that need to convert - not impress.</p>
              <ul className="flex flex-col gap-2 flex-1 mb-6">
                {landingPageIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white">
                    <span className="mt-0.5 text-[#3df2ff] shrink-0" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <PrimaryButton href="/contact" variant="outline" className="w-full">Talk about a landing page</PrimaryButton>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
            The Process
          </p>
          <h2 className="font-heading mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
            How a GetSchwiftyy build actually goes
          </h2>
          <div className="grid gap-8 md:grid-cols-5">
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

      {/* FAQ */}
      <Section className="nebula-green">
        <Container>
          <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
            FAQ
          </p>
          <h2 className="font-heading mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Common questions about AI web design
          </h2>
          <dl className="flex flex-col gap-5 max-w-3xl">
            {faqs.map((item) => (
              <div key={item.q} className="card-scifi p-6">
                <dt className="font-heading font-semibold text-white mb-2">{item.q}</dt>
                <dd className="font-sans text-sm text-slate-300 leading-relaxed">{item.a}</dd>
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
              Ready to build something that actually works?
            </h2>
            <p className="font-sans mb-8 text-white leading-relaxed">
              Tell me what you&apos;re building. I&apos;ll tell you whether you need a full site or a landing page, what it&apos;ll take, and what it&apos;ll cost - no commitment required.
            </p>
            <PrimaryButton href="/contact">Start a project</PrimaryButton>
          </div>
        </Container>
      </Section>
    </>
  )
}
