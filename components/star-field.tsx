'use client'

import { useEffect, useRef } from 'react'

function makeStars(count: number, width = 2000, height = 2000): string {
  const stars: string[] = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * width)
    const y = Math.floor(Math.random() * height)
    const opacity = 0.3 + Math.random() * 0.7
    stars.push(`${x}px ${y}px rgba(255,255,255,${opacity.toFixed(2)})`)
  }
  return stars.join(', ')
}

export function StarField() {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref1.current) ref1.current.style.boxShadow = makeStars(800)
    if (ref2.current) ref2.current.style.boxShadow = makeStars(400)
    if (ref3.current) ref3.current.style.boxShadow = makeStars(150)
  }, [])

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Nebula hazes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_20%,rgba(147,51,234,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_90%_80%,rgba(0,255,136,0.04)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_10%,rgba(0,200,255,0.03)_0%,transparent_70%)]" />

      {/* Stars layers */}
      <div
        ref={ref1}
        className="stars-sm opacity-70"
        style={{ animation: 'star-drift 80s linear infinite' }}
      />
      <div
        ref={ref2}
        className="stars-md opacity-60"
        style={{ animation: 'star-drift 120s linear infinite' }}
      />
      <div
        ref={ref3}
        className="stars-lg opacity-50"
        style={{ animation: 'star-drift 160s linear infinite' }}
      />
    </div>
  )
}
