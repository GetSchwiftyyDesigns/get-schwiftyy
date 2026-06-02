import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { PrimaryButton } from '@/components/primary-button'
import { Card } from '@/components/card'

export const metadata: Metadata = {
  title: 'Custom Website vs Template: What\'s the Difference? (2026) | GetSchwiftyy',
  description:
    'A custom website is designed from scratch around your brand. A template is a pre-built layout repainted to look like you. The difference shows in conversion rates, SEO performance, and how your brand is perceived from the first click.',
  alternates: {
    canonical: 'https://www.getschwiftyy.com/custom-website-vs-template',
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
      '@id': 'https://www.getschwiftyy.com/custom-website-vs-template#article',
      headline: 'Custom Website vs Template: What\'s the Difference in 2026?',
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
      mainEntityOfPage: 'https://www.getschwiftyy.com/custom-website-vs-template',
      description:
        'A custom website is designed from scratch around your specific brand, audience, and conversion goals. A template is a pre-built layout used by thousands of other sites, repainted to look like you. This guide breaks down the real differences.',
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the difference between a custom website and a template?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A custom website is designed and built from scratch around your specific brand, audience, and conversion goals - every layout decision, color, component, and content structure is unique to you. A template is a pre-built design framework used by thousands of other sites, modified with your logo and colors. Templates are faster and cheaper upfront but compromise on brand differentiation, conversion optimization, and technical flexibility.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are custom websites worth the investment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Custom websites are worth the investment when your brand needs to stand out in a competitive market, when conversion rate is a primary business metric, or when your site needs specific technical capabilities a template can't deliver. GetSchwiftyy full sites are built with conversion-first architecture, GEO/AEO optimization, and backend automation that template builders don't support out of the box.",
            },
          },
          {
            '@type': 'Question',
            name: 'How long does a custom website take vs a template?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A custom GetSchwiftyy full site takes 3–5 weeks depending on complexity. A landing page takes 1–2 weeks. Template-based sites can launch in days but typically require significant time fighting the template to match your brand - time that compounds into technical debt over months.',
            },
          },
          {
            '@type': 'Question',
            name: "Why doesn't GetSchwiftyy use templates?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "GetSchwiftyy doesn't use templates because templates are built for the average brand, and the average brand converts at average rates. Every design decision - layout hierarchy, spacing, animation, CTA placement - should be made for your specific audience and goal, not borrowed from a layout that was already optimized for someone else's product.",
            },
          },
          {
            '@type': 'Question',
            name: 'How much does a custom website cost at GetSchwiftyy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "GetSchwiftyy pricing is scoped to each project - there's no fixed price list because scope varies significantly. Every engagement starts with a discovery call and design scope session before cost is confirmed. An optional monthly maintenance retainer is available after launch.",
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.getschwiftyy.com/' },
        { '@type': 'ListItem', position: 2, name: 'Custom Website vs Template', item: 'https://www.getschwiftyy.com/custom-website-vs-template' },
      ],
    },
  ],
}

const comparison = [
  {
    factor: 'Brand differentiation',
    template: 'Looks like thousands of other sites using the same framework',
    custom: 'Designed around your specific brand - zero shared visual DNA',
  },
  {
    factor: 'Conversion optimization',
    template: 'Generic layouts built for the average use case',
    custom: 'Every CTA, hierarchy choice, and scroll position made for your audience',
  },
  {
    factor: 'SEO & GEO performance',
    template: 'Bloated markup, shared component libraries, slow Core Web Vitals',
    custom: 'Clean code, fast load times, GEO/AEO schema baked in at build time',
  },
  {
    factor: 'Technical flexibility',
    template: 'Limited by what the template builder supports - workarounds stack up',
    custom: 'Full control - automation, CRM integration, AI workflows, custom logic',
  },
  {
    factor: 'Backend & security',
    template: 'Shared infrastructure, plugin-dependent, security vulnerabilities compound',
    custom: 'Custom backend architecture with security built to your specific requirements',
  },
  {
    factor: 'Timeline',
    template: 'Launch in days - then spend weeks fighting the template to fit your brand',
    custom: 'GetSchwiftyy full sites in 3–5 weeks, landing pages in 1–2 weeks',
  },
  {
    factor: 'Long-term cost',
    template: 'Monthly platform fees + dev time fighting limitations that compound over time',
    custom: 'Higher upfront, lower ongoing - you own the code, no platform lock-in',
  },
]

const whenTemplateIsOk = [
  "You're validating an idea before investing in a real build",
  'You need something live in 48 hours for a one-off event or campaign',
  "You have zero budget and a working template is better than nothing",
  'The site is purely informational with no conversion goal',
]

const whenYouNeedCustom = [
  'Your brand needs to be remembered - not recognized as a Webflow/Squarespace site',
  'Conversion rate is a real business metric you track and optimize',
  'You need automation, CRM integration, or custom backend logic',
  'You want GEO/AEO optimization so AI engines actually recommend you',
  'You\'re selling something and the site is your primary sales asset',
  'You\'ve already launched on a template and it\'s holding you back',
]

const faqs = [
  {
    q: 'What is the difference between a custom website and a template?',
    a: "A custom website is designed from scratch - every layout, component, and content decision made for your specific brand, audience, and goal. A template is a pre-built design framework used by thousands of sites, modified with your logo and colors. The visual surface can look similar. What's underneath is completely different.",
  },
  {
    q: 'Are custom websites actually worth it?',
    a: "When conversion rate matters, when your brand needs to stand out, and when you need technical capabilities templates can't deliver - yes, definitively. GetSchwiftyy builds include GEO/AEO optimization, backend automation, and conversion-first architecture that no template builder supports out of the box.",
  },
  {
    q: 'How long does a custom site take vs a template?',
    a: 'GetSchwiftyy full sites take 3–5 weeks. Landing pages take 1–2 weeks. Templates can launch in days - but most clients who come to us from templates spent months fighting the builder to get the brand right. That time has a cost too.',
  },
  {
    q: "Why doesn't GetSchwiftyy use templates?",
    a: "Because templates are designed for the average brand, and the average brand converts at average rates. Every GetSchwiftyy site is built around your specific audience, your conversion goal, and your visual identity - not borrowed from a framework that was already optimized for someone else.",
  },
  {
    q: 'How much does a custom GetSchwiftyy site cost?',
    a: "Pricing is scoped to the project - every engagement starts with a discovery call and design scope session before any cost is confirmed. There's no fixed price list because full sites and landing pages vary significantly in scope and complexity.",
  },
]

export default function CustomVsTemplatePage() {
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
              Custom vs Template · 2026
            </p>
            <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Custom Website vs Template
            </h1>
            <p className="font-sans mb-8 text-xl text-white leading-relaxed">
              A custom website is designed from scratch around your specific brand, audience, and conversion goals - every layout, component, and content decision is unique to you. A template is a pre-built framework used by thousands of other sites, repainted to look like you. The difference shows in conversion rates, SEO performance, and how your brand is perceived from the first click.
            </p>
            <PrimaryButton href="/contact">Build custom - start here</PrimaryButton>
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section className="nebula-purple">
        <Container>
          <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
            The Real Differences
          </p>
          <h2 className="font-heading mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Custom vs Template: Factor by Factor
          </h2>
          <div className="flex flex-col gap-4 max-w-4xl">
            {comparison.map((row) => (
              <div key={row.factor} className="grid md:grid-cols-[180px_1fr_1fr] gap-4 card-scifi p-5">
                <div className="font-mono text-xs font-semibold tracking-widest text-neon-green uppercase self-center">{row.factor}</div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 text-[#ef4444]">
                      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="font-mono text-[10px] tracking-widest text-[#ef4444] uppercase">Template</span>
                  </div>
                  <p className="text-sm text-white leading-relaxed">{row.template}</p>
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 text-neon-green">
                      <path d="M2.5 8.5L6.5 12.5L13.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-mono text-[10px] tracking-widest text-neon-green uppercase">Custom</span>
                  </div>
                  <p className="text-sm text-white leading-relaxed">{row.custom}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* When each makes sense */}
      <Section>
        <Container>
          <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
            Honest Advice
          </p>
          <h2 className="font-heading mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
            When a template is fine - and when it&apos;s not
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="flex flex-col">
              <h3 className="font-heading mb-5 text-lg font-bold text-white">A template might be OK if...</h3>
              <ul className="flex flex-col gap-3 flex-1">
                {whenTemplateIsOk.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-slate-500">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="flex flex-col border-[rgba(159,251,76,0.25)] bg-[rgba(159,251,76,0.04)]">
              <h3 className="font-heading mb-5 text-lg font-bold text-neon-green">You need custom when...</h3>
              <ul className="flex flex-col gap-3 flex-1">
                {whenYouNeedCustom.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-neon-green">
                      <path d="M2.5 8.5L6.5 12.5L13.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
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
            Custom website questions, answered
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
              Done fighting your template?
            </h2>
            <p className="font-sans mb-8 text-white leading-relaxed">
              Tell me what you&apos;re building. I&apos;ll scope the right solution, show you what it costs, and we&apos;ll decide together whether custom is the right move for where you are.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="/contact">Start a project</PrimaryButton>
              <Link href="/what-is-ai-web-design" className="text-sm font-semibold text-slate-300 hover:text-neon-green transition-colors">
                What is AI web design? →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
