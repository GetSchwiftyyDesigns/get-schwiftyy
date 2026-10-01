import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { PrimaryButton } from '@/components/primary-button'
import { Card } from '@/components/card'

export const metadata: Metadata = {
  title: 'Website Design for Therapists & Counseling Practices in Denver',
  description:
    'Custom website design for Denver therapists, counselors, and private practices. HIPAA-aware contact forms, scheduling-ready layouts, and SEO built for how clients search for care.',
  alternates: {
    canonical: 'https://www.getschwiftyy.com/web-design-for-therapists',
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
      '@id': 'https://www.getschwiftyy.com/web-design-for-therapists#article',
      headline: 'Website Design for Therapists & Counseling Practices',
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
      mainEntityOfPage: 'https://www.getschwiftyy.com/web-design-for-therapists',
      description:
        'getschwiftyy builds custom websites for Denver therapists and counseling practices — HIPAA-aware forms, scheduling integration, and SEO for client-search terms.',
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do therapy practices need a custom website, or is a directory profile enough?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "A Psychology Today or TherapyDen profile helps with discovery, but it's a rented listing you don't control and can't fully customize. A custom website gives your practice a real home online, lets you rank in Google for your own name and specialties, and gives prospective clients a lower-pressure way to learn about you before reaching out.",
            },
          },
          {
            '@type': 'Question',
            name: 'Can my therapy practice website be HIPAA-compliant?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'getschwiftyy builds contact and intake forms with HIPAA-aware practices in mind — avoiding unnecessary collection of protected health information on public forms, using secure form handling, and routing sensitive communication through compliant channels. Full HIPAA compliance for any backend systems (EHR, scheduling, billing) depends on the specific tools you use alongside the site.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should a therapist website include?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At minimum: a clear description of your specialties and approach, your credentials, a simple way to request an appointment or consultation, an FAQ addressing common client concerns (insurance, what to expect in a first session), and local SEO structure so you show up for searches like "therapist near me" or "[specialty] counselor Denver."',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does a therapy practice website take to build?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A focused single-practitioner site typically ships in 1–3 weeks. A multi-provider group practice site with more pages ships in 3–5 weeks depending on content and feedback cycles.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.getschwiftyy.com/' },
        { '@type': 'ListItem', position: 2, name: 'Website Design for Therapists', item: 'https://www.getschwiftyy.com/web-design-for-therapists' },
      ],
    },
  ],
}

const includes = [
  {
    title: 'HIPAA-aware contact & intake forms',
    body: 'Forms built to avoid over-collecting sensitive information publicly, with secure handling and clear next steps for prospective clients.',
  },
  {
    title: 'Scheduling-ready layouts',
    body: 'Pages structured to plug directly into your scheduling tool (SimplePractice, Calendly, or whatever you already use) — no awkward redirects.',
  },
  {
    title: 'SEO for how clients actually search',
    body: 'Content and structure built around real search terms: your specialty, your approach, and your city — not generic "mental health" copy.',
  },
  {
    title: 'A calm, trustworthy design',
    body: "Your site is often a prospective client's first impression of your practice. It should feel as safe and credible as your office does.",
  },
]

const faqs = [
  {
    name: 'Do therapy practices need a custom website, or is a directory profile enough?',
    acceptedAnswer: {
      text: "A Psychology Today or TherapyDen profile helps with discovery, but it's a rented listing you don't control and can't fully customize. A custom website gives your practice a real home online, lets you rank in Google for your own name and specialties, and gives prospective clients a lower-pressure way to learn about you before reaching out.",
    },
  },
  {
    name: 'Can my therapy practice website be HIPAA-compliant?',
    acceptedAnswer: {
      text: 'getschwiftyy builds contact and intake forms with HIPAA-aware practices in mind — avoiding unnecessary collection of protected health information on public forms, using secure form handling, and routing sensitive communication through compliant channels. Full HIPAA compliance for any backend systems (EHR, scheduling, billing) depends on the specific tools you use alongside the site.',
    },
  },
  {
    name: 'What should a therapist website include?',
    acceptedAnswer: {
      text: 'At minimum: a clear description of your specialties and approach, your credentials, a simple way to request an appointment or consultation, an FAQ addressing common client concerns (insurance, what to expect in a first session), and local SEO structure so you show up for searches like "therapist near me" or "[specialty] counselor Denver."',
    },
  },
  {
    name: 'How long does a therapy practice website take to build?',
    acceptedAnswer: {
      text: 'A focused single-practitioner site typically ships in 1–3 weeks. A multi-provider group practice site with more pages ships in 3–5 weeks depending on content and feedback cycles.',
    },
  },
]

export default function TherapistWebDesignPage() {
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
              Denver · Therapy &amp; Counseling Practices
            </p>
            <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Website Design for Therapists &amp; Counseling Practices
            </h1>
            <p className="font-sans mb-8 text-xl text-white leading-relaxed">
              A custom website for your Denver practice — built to earn trust at first glance, make it easy to book a consultation, and show up in Google when someone searches for the exact kind of support you offer.
            </p>
            <PrimaryButton href="/contact">Talk about your practice site</PrimaryButton>
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
            Built for how therapy practices actually run
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
            Common questions from therapists and counselors
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
              Ready for a website that fits your practice?
            </h2>
            <p className="font-sans mb-8 text-white leading-relaxed">
              Tell me about your practice and your ideal client. I&apos;ll tell you what it&apos;ll take to launch.
            </p>
            <PrimaryButton href="/contact">Start a project</PrimaryButton>
            <p className="mt-6 text-sm text-slate-400">
              Serving a different kind of Denver business?{' '}
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
