import Link from 'next/link'
import { Container } from '@/components/container'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center">
      <Container>
        <div className="mx-auto max-w-lg py-20 text-center">
          <p className="mb-4 text-sm font-mono font-semibold tracking-widest text-[#00ff88] uppercase">
            404
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            You found a dead timeline.
          </h1>
          <p className="mb-8 text-lg text-white leading-relaxed">
            This page doesn&apos;t exist in this universe. Try heading back home.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#00ff88] px-6 py-3 text-sm font-semibold text-[#080808] hover:bg-[#00cc6a] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff88] focus-visible:outline-offset-2"
          >
            Back to home
          </Link>
        </div>
      </Container>
    </div>
  )
}
