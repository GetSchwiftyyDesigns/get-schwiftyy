import Link from 'next/link'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { PrimaryButton } from '@/components/primary-button'
import { Card } from '@/components/card'

// ─── Page data ────────────────────────────────────────────────────────────────

const services = [
  {
    title: 'Schwiftyy Sites',
    description:
      'Full multi-page websites designed from scratch. Every page built to convert, every pixel intentional.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: 'Launch & Landing Pages',
    description:
      'Single-purpose pages built around one goal. Perfect for product launches, lead gen, or ad campaigns.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Automation-Ready Foundations',
    description:
      'Sites wired to work with AI tools, CRMs, and bots so your digital presence works while you sleep.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
]

const featuredWork = [
  {
    id: 'oxmedia',
    tag: 'Full Site',
    title: 'Ox Media Digital',
    description: 'AI-powered e-commerce brand site.',
    color: 'green',
  },
  {
    id: 'bylostudio',
    tag: 'Full Site',
    title: 'Soft Rituals Digital',
    description: 'Clean, Rich Girl Financial Freedom Aesthetic.',
    color: 'purple',
  },
  {
    id: 'launchportal-concept',
    tag: 'Landing Page',
    title: 'Launch Portal',
    description: 'High-conversion SaaS launch page concept.',
    color: 'green',
  },
  {
    id: 'localservice-concept',
    tag: 'Landing Page',
    title: 'Local Service',
    description: 'Lead-gen page for a service business concept.',
    color: 'purple',
  },
]

const templateComparison = {
  templates: [
    'Looks like 10,000 other sites',
    'Generic layout, generic results',
    'You fight the template to fit your brand',
    'No strategy, just drag and drop',
  ],
  schwiftyy: [
    'Custom-built around your specific brand',
    'Conversion-first structure from day one',
    'Your brand shapes every decision',
    'Strategy baked in at every scroll position',
  ],
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 py-24 md:py-32">
        {/* Subtle radial overlay so text pops against the background portal */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(7,3,20,0.3)_0%,rgba(7,3,20,0.55)_60%,rgba(7,3,20,0.75)_100%)]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* HUD badge */}
          <div className="mb-6 inline-block rounded-full border border-[rgba(61,242,255,0.3)] bg-[rgba(61,242,255,0.06)] px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3df2ff] backdrop-blur-sm">
            Portal Active
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Get{' '}
            <span className="text-gradient-portal">Schwiftyy</span>
            <br />With Your Website
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-7 text-slate-300 md:text-xl">
            I build stupidly good-looking, high-converting websites for brands that are done being boring.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="btn-portal inline-flex items-center justify-center rounded-lg bg-[#8f4bff] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(143,75,255,0.4)] transition-all hover:bg-[#7030e0] hover:shadow-[0_0_36px_rgba(143,75,255,0.6)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2 cursor-pointer"
            >
              Start a project
            </Link>
            <Link
              href="/work"
              className="text-sm font-semibold text-slate-300 transition-colors hover:text-[#3df2ff] cursor-pointer"
            >
              See the work →
            </Link>
          </div>

          <p className="mt-8 font-mono text-xs text-neon-green tracking-widest uppercase">
            Custom builds · Conversion-first layouts · AI-ready foundations
          </p>
        </div>
      </section>


      {/* ── 2. What I Do ────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 nebula-purple overflow-hidden">
        <Container>
          {/* HUD corner decorations */}
          <div className="relative">
            <div className="mb-12">
              <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
                What I Do
              </p>
              <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Wild visuals.{' '}
                <span className="text-neon-green">Serious performance.</span>
              </h2>
              <p className="max-w-2xl font-sans text-lg text-white leading-relaxed">
                Every site I build is designed to stop the scroll and start the conversation. No templates. No cookie-cutter layouts. Just websites that actually do the job.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} glow="green" className="flex flex-col gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(159,251,76,0.2)] bg-[rgba(159,251,76,0.06)] text-[#9ffb4c]">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">{service.title}</h3>
                  <p className="font-sans text-sm text-white leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* ── 3. Featured Work ─────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 nebula-green overflow-hidden">
        <Container>
          <div className="mb-4">
            <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
              Selected Work
            </p>
            <h2 className="font-heading mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Dimensions I&apos;ve{' '}
              <span className="text-gradient-portal">Opened</span>
            </h2>
            <p className="font-sans text-lg text-white">
              A few portals built for brands done looking like everyone else.
            </p>
          </div>
          <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWork.map((project) => (
              <Link
                key={project.id}
                href="/work"
                className={`group block card-scifi p-6 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2`}
              >
                <span
                  className={`mb-3 inline-block rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium ${
                    project.color === 'green'
                      ? 'border-[rgba(159,251,76,0.2)] text-[#9ffb4c]'
                      : 'border-[rgba(143,75,255,0.2)] text-[#8f4bff]'
                  }`}
                >
                  {project.tag}
                </span>
                <h3 className="font-heading mb-1 font-semibold text-white group-hover:text-[#9ffb4c] transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-white">{project.description}</p>
                <p className="mt-4 font-mono text-xs text-white group-hover:text-[#9ffb4c] transition-colors">
                  View project →
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/work"
            className="font-sans text-sm font-semibold text-neon-green hover:text-[#3df2ff] transition-colors underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2 rounded cursor-pointer"
          >
            View all work →
          </Link>
        </Container>
      </section>


      {/* ── 4. Template vs getschwiftyy ─────────────────────────────────── */}
      <section className="relative py-20 md:py-28 nebula-purple overflow-hidden">
        <Container>
          <div className="mb-10">
            <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-neon-green uppercase">
              Why custom
            </p>
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Why not just grab a template?
            </h2>
            <p className="font-sans max-w-2xl text-lg text-white leading-relaxed">
              Templates are fine for placeholders. You&apos;re not building a placeholder. You&apos;re building a brand.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Templates */}
            <div className="card-scifi p-6">
              <h3 className="mb-5 font-mono text-xs font-semibold tracking-widest text-white uppercase">
                Templates
              </h3>
              <ul className="flex flex-col gap-4">
                {templateComparison.templates.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-[#ef4444]">
                      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* getschwiftyy */}
            <div className="card-scifi p-6 border-[rgba(143,75,255,0.25)] bg-[rgba(143,75,255,0.04)] shadow-[0_0_30px_rgba(143,75,255,0.06)]">
              <h3 className="mb-5 font-mono text-xs font-semibold tracking-widest text-[#9ffb4c] uppercase">
                getschwiftyy
              </h3>
              <ul className="flex flex-col gap-4">
                {templateComparison.schwiftyy.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-[#9ffb4c]">
                      <path d="M2.5 8.5L6.5 12.5L13.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>


      {/* ── 5. Micro About ───────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 font-mono text-xs font-semibold tracking-widest text-[#8f4bff] uppercase opacity-60">
              The operator
            </p>
            <h2 className="font-heading mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Who&apos;s behind the{' '}
              <span className="text-gradient-portal">portal?</span>
            </h2>
            <p className="font-sans text-lg text-white leading-relaxed">
              I&apos;m a front-end engineer and designer obsessed with the intersection of visual impact and business results. I&apos;ve built sites for e-commerce brands, service businesses, and creative studios, all with the same goal: make it impossible for visitors to look away. When I&apos;m not building, I&apos;m probably down a rabbit hole of CSS experiments or messing with AI-powered workflows.
            </p>
          </div>
        </Container>
      </section>


      {/* ── 6. Final CTA Strip ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Portal glow behind CTA */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(147,51,234,0.12)_0%,transparent_70%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_50%_50%,rgba(0,255,136,0.06)_0%,transparent_60%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 font-mono text-xs font-semibold tracking-widest text-[#9ffb4c] uppercase opacity-60">
              Ready?
            </p>
            <h2 className="font-heading mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Ready to stop looking like{' '}
              <span className="text-gradient-portal">every other template?</span>
            </h2>
            <p className="font-sans mb-10 text-lg text-white leading-relaxed">
              Tell me what you&apos;re building. I&apos;ll tell you exactly how we make it weird in the best possible way.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="/contact" variant="solid" className="px-10 py-4 text-base">
                Start a project
              </PrimaryButton>
              <Link
                href="/work"
                className="font-sans text-sm font-semibold text-white hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2 rounded cursor-pointer"
              >
                See the work first →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
