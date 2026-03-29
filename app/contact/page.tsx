import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell me what you\'re building and how weird you want to get. Get a quote or book a call.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
              Contact
            </p>
            <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Open a Portal
            </h1>
            <p className="font-sans text-xl text-white leading-relaxed">
              Tell me what you&apos;re trying to build, how weird you want to get, and whether you&apos;d rather hop on a call or get a quote straight to your inbox.
            </p>
          </div>
        </Container>
      </Section>

      {/* Form */}
      <Section className="pt-0 pb-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  )
}
