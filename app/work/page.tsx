import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { PrimaryButton } from '@/components/primary-button'
import { WorkGrid } from '@/components/work-grid'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Some of the universes opened for brands who were done looking like everyone else.',
}

const processBullets = [
  {
    heading: 'Conversion-first from the jump',
    body: 'Every layout decision is made with one question: does this get the visitor closer to clicking, booking, or buying?',
  },
  {
    heading: 'Design and code in the same brain',
    body: 'No handoff lag between designer and developer. I do both, so nothing gets lost in translation.',
  },
  {
    heading: 'Built to grow',
    body: 'Clean code, clear structure, no spaghetti. Add pages, connect tools, or hand it off to a team. It all still works.',
  },
]

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
              Work
            </p>
            <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Work
            </h1>
            <p className="font-sans text-xl text-white leading-relaxed">
              Some of the universes I&apos;ve opened for brands who were done looking like everyone else.
            </p>
          </div>
        </Container>
      </Section>

      {/* Work Grid */}
      <Section className="pt-0">
        <Container>
          <WorkGrid />
        </Container>
      </Section>

      {/* Process Strip */}
      <Section>
        <Container>
          <h2 className="font-heading mb-10 text-2xl font-bold tracking-tight text-white md:text-3xl">
            How I build in other dimensions
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {processBullets.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-neon-green text-xs font-bold text-neon-green">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-white">{item.heading}</h3>
                </div>
                <p className="pl-10 text-sm text-white leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-white">
              Want your brand in this gallery next?
            </h2>
            <p className="font-sans mb-8 text-white">
              Let&apos;s talk about what you&apos;re building and how weird we can make it.
            </p>
            <PrimaryButton href="/contact">Start a project</PrimaryButton>
          </div>
        </Container>
      </Section>
    </>
  )
}
