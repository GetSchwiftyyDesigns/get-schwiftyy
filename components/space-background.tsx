'use client'

import { useEffect, useRef } from 'react'

export function SpaceBackground() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const ns = 'http://www.w3.org/2000/svg'
    const starsGroup = svg.getElementById('bg-stars') as SVGGElement
    const particlesGroup = svg.getElementById('bg-particles') as SVGGElement
    if (!starsGroup || !particlesGroup) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const STAR_COUNT = isMobile ? 36 : 240
    const PARTICLE_COUNT = isMobile ? 20 : 140

    // Stars
    const starData: { el: SVGCircleElement; base: number; phase: number; speed: number }[] = []
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElementNS(ns, 'circle') as SVGCircleElement
      const x = Math.random() * 1600
      const y = Math.random() * 900
      const r = Math.random() < 0.12 ? 2.2 + Math.random() * 1.3 : 0.6 + Math.random() * 1.4
      const opacity = 0.18 + Math.random() * 0.7
      const phase = Math.random() * Math.PI * 2
      const speed = 0.18 + Math.random() * 0.6
      star.setAttribute('cx', x.toFixed(2))
      star.setAttribute('cy', y.toFixed(2))
      star.setAttribute('r', r.toFixed(2))
      star.setAttribute('fill', '#d8f5ff')
      star.setAttribute('opacity', opacity.toFixed(3))
      starsGroup.appendChild(star)
      starData.push({ el: star, base: opacity, phase, speed })
    }

    // Particles around portal
    const particleData: {
      el: SVGCircleElement
      bx: number
      by: number
      ampX: number
      ampY: number
      speed: number
      phase: number
    }[] = []

    if (PARTICLE_COUNT > 0) {
      const hueSet = ['#75ff58', '#48efff', '#ff57bf', '#d74dff', '#c8ff40', '#60b7ff']
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = document.createElementNS(ns, 'circle') as SVGCircleElement
        const radiusBand = 65 + Math.random() * 90
        const angle = Math.random() * Math.PI * 2
        const baseX = 480 + Math.cos(angle) * radiusBand + (Math.random() * 50 - 25)
        const baseY = 390 + Math.sin(angle) * radiusBand + (Math.random() * 50 - 25)
        const r = 0.9 + Math.random() * 2.3
        const o = 0.2 + Math.random() * 0.7
        p.setAttribute('cx', baseX.toFixed(2))
        p.setAttribute('cy', baseY.toFixed(2))
        p.setAttribute('r', r.toFixed(2))
        p.setAttribute('fill', hueSet[Math.floor(Math.random() * hueSet.length)])
        p.setAttribute('opacity', o.toFixed(3))
        if (!isMobile) p.setAttribute('filter', 'url(#bg-sparkGlow)')
        particlesGroup.appendChild(p)
        particleData.push({
          el: p,
          bx: baseX,
          by: baseY,
          ampX: 4 + Math.random() * 13,
          ampY: 5 + Math.random() * 16,
          speed: 0.12 + Math.random() * 0.45,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const fpPortal  = svg.getElementById('bg-floatingPortal') as SVGGElement
    const fpArcA    = svg.getElementById('bg-fp-arcSetA')   as SVGGElement
    const fpArcB    = svg.getElementById('bg-fp-arcSetB')   as SVGGElement
    const fpArcC    = svg.getElementById('bg-fp-arcSetC')   as SVGGElement
    const fpVoxA    = svg.getElementById('bg-fp-vortexA')   as SVGGElement
    const fpVoxB    = svg.getElementById('bg-fp-vortexB')   as SVGGElement
    const fpMainGlow = svg.getElementById('bg-fp-mainGlow') as SVGGElement
    const sec1ArcA  = svg.getElementById('bg-s1-arcSetA')   as SVGGElement
    const sec1ArcB  = svg.getElementById('bg-s1-arcSetB')   as SVGGElement
    const sec1ArcC  = svg.getElementById('bg-s1-arcSetC')   as SVGGElement
    const sec1VoxA  = svg.getElementById('bg-s1-vortexA')   as SVGGElement
    const sec1VoxB  = svg.getElementById('bg-s1-vortexB')   as SVGGElement
    const sec1Glow  = svg.getElementById('bg-s1-mainGlow')  as SVGGElement
    const sec2      = svg.getElementById('bg-secPortal2')   as SVGGElement
    const sec3      = svg.getElementById('bg-secPortal3')   as SVGGElement
    const pA        = svg.getElementById('bg-planetA')      as SVGGElement
    const pB        = svg.getElementById('bg-planetB')      as SVGGElement
    const pSmall    = svg.getElementById('bg-planetSmall')  as SVGGElement
    const pC        = svg.getElementById('bg-planetC')      as SVGGElement
    const pD        = svg.getElementById('bg-planetD')      as SVGGElement

    // Mobile: CSS animations handle the portal rings — no JS loop needed
    if (isMobile) {
      const nebulaLayer = svg.getElementById('bg-nebula-layer') as SVGGElement | null
      nebulaLayer?.setAttribute('opacity', '0.45')
      fpMainGlow?.setAttribute('opacity', '0.55')
      return () => {
        starsGroup.replaceChildren()
        particlesGroup.replaceChildren()
      }
    }

    let t = 0
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animId = 0

    function animate() {
      t += 0.026
      if (!reduce) {
        const fpX = (800 + 450 * Math.sin(t * 0.231)).toFixed(1)
        const fpY = (435 + 195 * Math.sin(t * 0.1706 + 1.1)).toFixed(1)
        fpPortal.setAttribute('transform', `translate(${fpX} ${fpY}) scale(0.80)`)
        fpArcA.setAttribute('transform', `rotate(${t * 22})`)
        fpArcB.setAttribute('transform', `rotate(${-t * 16})`)
        fpArcC.setAttribute('transform', `rotate(${t * 10})`)
        fpVoxA.setAttribute('transform', `rotate(${t * 9}) scale(${1 + Math.sin(t * 1.7) * 0.01})`)
        fpVoxB.setAttribute('transform', `rotate(${-t * 6})`)
        fpMainGlow.setAttribute('opacity', (0.58 + Math.sin(t * 1.35) * 0.13).toFixed(3))
        sec1ArcA.setAttribute('transform', `rotate(${t * 18})`)
        sec1ArcB.setAttribute('transform', `rotate(${-t * 13})`)
        sec1ArcC.setAttribute('transform', `rotate(${t * 8})`)
        sec1VoxA.setAttribute('transform', `rotate(${t * 7}) scale(${1 + Math.sin(t * 1.4) * 0.01})`)
        sec1VoxB.setAttribute('transform', `rotate(${-t * 5})`)
        sec1Glow.setAttribute('opacity', (0.55 + Math.sin(t * 1.1 + 1.2) * 0.12).toFixed(3))
        sec2.setAttribute('transform', `translate(${Math.sin(t * 0.46) * 2.5},${Math.cos(t * 0.65) * 2.2}) rotate(${-t * 9} 1140 332)`)
        sec3.setAttribute('transform', `translate(${Math.sin(t * 0.6) * 2},${Math.cos(t * 0.72) * 2.6}) rotate(${t * 11} 1065 706)`)
        pA.setAttribute('transform', `translate(0,${Math.sin(t * 0.42) * 4.6})`)
        pB.setAttribute('transform', `translate(0,${Math.cos(t * 0.36) * 3.8})`)
        pSmall.setAttribute('transform', `translate(0,${Math.sin(t * 0.67) * 3.2})`)
        pC.setAttribute('transform', `translate(0,${Math.cos(t * 0.33) * 5.1})`)
        pD.setAttribute('transform', `translate(0,${Math.sin(t * 0.39) * 4.4})`)
        for (let i = 0; i < particleData.length; i++) {
          const p = particleData[i]
          p.el.setAttribute('cx', (p.bx + Math.cos(t * p.speed + p.phase) * p.ampX).toFixed(2))
          p.el.setAttribute('cy', (p.by + Math.sin(t * (p.speed + 0.08) + p.phase) * p.ampY).toFixed(2))
        }
        for (let i = 0; i < starData.length; i += 3) {
          const s = starData[i]
          s.el.setAttribute('opacity', Math.max(0.08, Math.min(1, s.base + Math.sin(t * s.speed + s.phase) * 0.18)).toFixed(3))
        }
      }
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animId)
      starsGroup.replaceChildren()
      particlesGroup.replaceChildren()
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <style>{`
            @keyframes bg-cw  { to { transform: rotate(360deg);  } }
            @keyframes bg-ccw { to { transform: rotate(-360deg); } }
            @media (max-width: 767px) {
              #bg-nebula-layer { filter: blur(18px); }
            }
          `}</style>
          {/* Background gradient */}
          <linearGradient id="bg-bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d0620" />
            <stop offset="30%" stopColor="#1a0e36" />
            <stop offset="65%" stopColor="#071733" />
            <stop offset="100%" stopColor="#03060f" />
          </linearGradient>

          {/* Nebula gradients */}
          <radialGradient id="bg-nebulaViolet" cx="45%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#bc4dff" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#8a2fff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8a2fff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bg-nebulaPink" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#ff3cae" stopOpacity="0.92" />
            <stop offset="48%" stopColor="#d52ef5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d52ef5" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bg-nebulaBlue" cx="50%" cy="50%" r="62%">
            <stop offset="0%" stopColor="#3db8ff" stopOpacity="0.86" />
            <stop offset="50%" stopColor="#2067ff" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#2067ff" stopOpacity="0" />
          </radialGradient>

          {/* Portal gradients */}
          <radialGradient id="bg-portalBloom" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7dfcff" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#3a8bff" stopOpacity="0.45" />
            <stop offset="68%" stopColor="#c146ff" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#ff39b9" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bg-portalInner" cx="42%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#b0ffff" stopOpacity="0.96" />
            <stop offset="28%" stopColor="#4de0ff" stopOpacity="0.95" />
            <stop offset="52%" stopColor="#3c62ff" stopOpacity="0.9" />
            <stop offset="76%" stopColor="#8d2dff" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#11091e" stopOpacity="1" />
          </radialGradient>

          {/* Ring gradients */}
          <linearGradient id="bg-ringA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dff8b" />
            <stop offset="35%" stopColor="#47e6ff" />
            <stop offset="70%" stopColor="#a64dff" />
            <stop offset="100%" stopColor="#ff48b7" />
          </linearGradient>
          <linearGradient id="bg-ringB" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e3ff3b" />
            <stop offset="30%" stopColor="#43f6ff" />
            <stop offset="65%" stopColor="#4d7eff" />
            <stop offset="100%" stopColor="#f545d9" />
          </linearGradient>
          <linearGradient id="bg-energyStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cfff38" />
            <stop offset="40%" stopColor="#4efff7" />
            <stop offset="75%" stopColor="#9f5bff" />
            <stop offset="100%" stopColor="#ff62c1" />
          </linearGradient>
          <linearGradient id="bg-trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5df7ff" stopOpacity="0" />
            <stop offset="45%" stopColor="#5df7ff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#a654ff" stopOpacity="0" />
          </linearGradient>

          {/* Planet gradients */}
          <radialGradient id="bg-planetGradA" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#88eaff" />
            <stop offset="55%" stopColor="#3571ff" />
            <stop offset="100%" stopColor="#1f1d72" />
          </radialGradient>
          <radialGradient id="bg-planetGradB" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ff8fdf" />
            <stop offset="45%" stopColor="#ff4db6" />
            <stop offset="100%" stopColor="#63259f" />
          </radialGradient>
          <radialGradient id="bg-planetGradC" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#9dfeb4" />
            <stop offset="45%" stopColor="#40e67b" />
            <stop offset="100%" stopColor="#1c8251" />
          </radialGradient>
          <radialGradient id="bg-planetGradD" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#d0a6ff" />
            <stop offset="50%" stopColor="#8649ff" />
            <stop offset="100%" stopColor="#311868" />
          </radialGradient>

          {/* Filters */}
          <filter id="bg-nebulaBlur" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="48" />
          </filter>
          <filter id="bg-rimGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="bg-coreGlow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="12" result="g1" />
            <feGaussianBlur stdDeviation="25" result="g2" />
            <feMerge><feMergeNode in="g2" /><feMergeNode in="g1" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="bg-sparkGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.6" result="g" />
            <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="bg-foregroundSoft" x="-20%" y="-20%" width="140%" height="160%">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          {/* Clip paths */}
          <clipPath id="bg-clipA"><circle cx="250" cy="180" r="84" /></clipPath>
          <clipPath id="bg-clipB"><circle cx="1340" cy="190" r="68" /></clipPath>
          <clipPath id="bg-clipD"><circle cx="1265" cy="565" r="92" /></clipPath>
        </defs>

        {/* Background */}
        <rect width="1600" height="900" fill="url(#bg-bgGrad)" />

        {/* Nebula clouds */}
        <g id="bg-nebula-layer" filter="url(#bg-nebulaBlur)">
          <ellipse cx="280" cy="220" rx="320" ry="190" fill="url(#bg-nebulaViolet)" opacity="0.68" />
          <ellipse cx="1220" cy="180" rx="310" ry="200" fill="url(#bg-nebulaPink)" opacity="0.58" />
          <ellipse cx="980" cy="580" rx="420" ry="240" fill="url(#bg-nebulaBlue)" opacity="0.5" />
          <ellipse cx="540" cy="700" rx="280" ry="180" fill="url(#bg-nebulaPink)" opacity="0.35" />
          <ellipse cx="1380" cy="690" rx="260" ry="170" fill="url(#bg-nebulaViolet)" opacity="0.34" />
        </g>

        {/* Stars (populated by JS) */}
        <g id="bg-stars" />

        {/* Distant planets */}
        <g id="bg-planetA">
          <circle cx="250" cy="180" r="84" fill="url(#bg-planetGradA)" filter="url(#bg-rimGlow)" />
          <g clipPath="url(#bg-clipA)">
            <path d="M155 158 C210 128,292 146,340 172" stroke="#8ffffa" strokeOpacity="0.45" strokeWidth="10" fill="none" />
            <path d="M152 196 C222 168,280 176,345 212" stroke="#d94eff" strokeOpacity="0.35" strokeWidth="11" fill="none" />
            <path d="M165 224 C228 205,292 210,338 236" stroke="#6dff6b" strokeOpacity="0.3" strokeWidth="8" fill="none" />
          </g>
          <circle cx="250" cy="180" r="92" fill="none" stroke="#7fdcff" strokeOpacity="0.35" strokeWidth="2" />
        </g>
        <g id="bg-planetB">
          <circle cx="1340" cy="190" r="68" fill="url(#bg-planetGradB)" filter="url(#bg-rimGlow)" />
          <g clipPath="url(#bg-clipB)">
            <circle cx="1314" cy="180" r="11" fill="#ff9ce9" fillOpacity="0.46" />
            <circle cx="1366" cy="168" r="8" fill="#ffa0e8" fillOpacity="0.42" />
            <circle cx="1348" cy="210" r="14" fill="#ffa8ef" fillOpacity="0.33" />
            <path d="M1282 207 C1310 193,1363 195,1398 214" stroke="#ffcbf2" strokeOpacity="0.25" strokeWidth="6" fill="none" />
          </g>
          <circle cx="1340" cy="190" r="76" fill="none" stroke="#ff6bd1" strokeOpacity="0.35" strokeWidth="2.5" />
        </g>
        <g id="bg-planetSmall">
          <circle cx="900" cy="130" r="36" fill="url(#bg-planetGradC)" filter="url(#bg-rimGlow)" />
          <ellipse cx="900" cy="130" rx="54" ry="12" fill="none" stroke="#86ff8c" strokeOpacity="0.38" strokeWidth="3" transform="rotate(-12 900 130)" />
        </g>

        {/* Mid planets */}
        <g id="bg-planetC">
          <circle cx="305" cy="680" r="122" fill="url(#bg-planetGradD)" filter="url(#bg-rimGlow)" />
          <ellipse cx="305" cy="680" rx="186" ry="36" fill="none" stroke="#8bf4ff" strokeOpacity="0.62" strokeWidth="7" transform="rotate(-12 305 680)" />
          <ellipse cx="305" cy="680" rx="170" ry="28" fill="none" stroke="#ff4fc2" strokeOpacity="0.34" strokeWidth="5" transform="rotate(-12 305 680)" />
          <circle cx="305" cy="680" r="130" fill="none" stroke="#af78ff" strokeOpacity="0.3" strokeWidth="3" />
        </g>
        <g id="bg-planetD">
          <circle cx="1265" cy="565" r="92" fill="url(#bg-planetGradC)" filter="url(#bg-rimGlow)" />
          <g clipPath="url(#bg-clipD)">
            <path d="M1165 520 C1230 498,1320 514,1368 545" stroke="#d8ff58" strokeOpacity="0.35" strokeWidth="10" fill="none" />
            <path d="M1160 560 C1238 541,1310 549,1370 586" stroke="#4affec" strokeOpacity="0.32" strokeWidth="11" fill="none" />
            <path d="M1165 600 C1230 585,1320 592,1372 622" stroke="#7f8dff" strokeOpacity="0.28" strokeWidth="9" fill="none" />
          </g>
          <circle cx="1265" cy="565" r="100" fill="none" stroke="#71ff84" strokeOpacity="0.32" strokeWidth="2.8" />
        </g>

        {/* Secondary portals */}
        <g filter="url(#bg-rimGlow)">
          {/* Duplicate portal at (480,390) — same structure as main, slightly smaller */}
          <g transform="translate(480 390) scale(0.35)">
            <g id="bg-s1-mainGlow" filter="url(#bg-coreGlow)">
              <circle r="286" fill="url(#bg-portalBloom)" opacity="0.55" />
              <circle r="232" fill="url(#bg-portalBloom)" opacity="0.38" />
            </g>
            <g filter="url(#bg-rimGlow)">
              <circle r="226" fill="none" stroke="url(#bg-ringA)" strokeWidth="5" strokeOpacity="0.75" />
              <circle r="214" fill="none" stroke="#a14eff" strokeOpacity="0.4" strokeWidth="2" />
              <circle r="204" fill="none" stroke="#59f4ff" strokeOpacity="0.3" strokeWidth="1.5" />
            </g>
            <g id="bg-s1-arcSetA" filter="url(#bg-rimGlow)">
              <circle r="198" fill="none" stroke="url(#bg-ringB)" strokeWidth="17" strokeLinecap="round" strokeDasharray="180 65 42 97 114 56 70 140 55 90" />
            </g>
            <g id="bg-s1-arcSetB" filter="url(#bg-rimGlow)">
              <circle r="168" fill="none" stroke="url(#bg-ringA)" strokeWidth="12" strokeLinecap="round" strokeDasharray="90 45 30 70 150 65 45 120 55 80" opacity="0.95" />
            </g>
            <g id="bg-s1-arcSetC" filter="url(#bg-rimGlow)">
              <circle r="142" fill="none" stroke="#9ffb4c" strokeOpacity="0.6" strokeWidth="7" strokeLinecap="round" strokeDasharray="22 21 80 32 45 30 60 22 20 45 68 28" />
            </g>
            <g style={{ mixBlendMode: 'screen' }}>
              <path d="M-200 -24 C-130 -72,-44 -80,20 -68 C112 -52,174 0,195 36" fill="none" stroke="#6df8ff" strokeOpacity="0.3" strokeWidth="2.4" />
              <path d="M-180 55 C-110 14,-34 8,28 18 C100 31,160 72,184 104" fill="none" stroke="#ff5dc7" strokeOpacity="0.3" strokeWidth="2.2" />
            </g>
            <g id="bg-s1-vortexA" filter="url(#bg-rimGlow)">
              <path d="M-90 -120 C-28 -128,36 -104,84 -62 C110 -42,118 -13,100 16 C74 58,22 79,-21 84 C-78 90,-125 53,-133 5 C-140 -42,-117 -84,-90 -120 Z" fill="none" stroke="url(#bg-energyStroke)" strokeWidth="4.4" strokeOpacity="0.8" />
              <path d="M-75 -92 C-30 -98,20 -81,53 -52 C74 -33,80 -7,69 18 C52 52,14 66,-19 69 C-60 72,-95 44,-101 10 C-105 -22,-92 -62,-75 -92 Z" fill="none" stroke="#55f6ff" strokeOpacity="0.72" strokeWidth="3.2" />
              <path d="M-52 -67 C-23 -72,8 -62,30 -42 C43 -29,47 -9,40 10 C30 31,7 40,-14 42 C-38 45,-59 29,-62 8 C-65 -10,-57 -44,-52 -67 Z" fill="none" stroke="#ff5ec8" strokeOpacity="0.68" strokeWidth="2.7" />
            </g>
            <g id="bg-s1-vortexB" filter="url(#bg-rimGlow)">
              <path d="M115 -40 C100 -77,55 -111,9 -119 C-64 -132,-140 -95,-176 -28 C-197 10,-198 58,-163 93" fill="none" stroke="#8fff66" strokeOpacity="0.48" strokeWidth="3.1" />
              <path d="M132 12 C122 -24,87 -56,45 -72 C-8 -92,-65 -85,-110 -47 C-148 -14,-153 36,-121 68" fill="none" stroke="#66f6ff" strokeOpacity="0.48" strokeWidth="2.7" />
              <path d="M95 54 C80 38,55 26,29 22 C-11 16,-48 25,-72 49 C-90 67,-90 93,-72 111" fill="none" stroke="#d85cff" strokeOpacity="0.44" strokeWidth="2.4" />
            </g>
            <circle r="112" fill="url(#bg-portalInner)" />
            <ellipse rx="84" ry="60" fill="url(#bg-portalInner)" opacity="0.84" />
            <ellipse rx="52" ry="35" fill="#6cf8ff" fillOpacity="0.2" />
            <circle r="18" fill="#091124" />
            <g filter="url(#bg-sparkGlow)">
              <circle cx="-206" cy="-18" r="3" fill="#9dff4a" />
              <circle cx="-176" cy="-87" r="2.7" fill="#ff65c5" />
              <circle cx="-72" cy="-200" r="2.7" fill="#c8ff37" />
              <circle cx="5" cy="-221" r="2.8" fill="#ff5ebf" />
              <circle cx="73" cy="-198" r="2.2" fill="#53f5ff" />
              <circle cx="134" cy="-152" r="3" fill="#8fff63" />
              <circle cx="214" cy="-32" r="2.4" fill="#67f7ff" />
              <circle cx="178" cy="102" r="2.5" fill="#ff53bc" />
              <circle cx="-9" cy="219" r="2.6" fill="#ff6fcb" />
              <circle cx="-136" cy="145" r="2.7" fill="#c9ff42" />
            </g>
          </g>
          <g id="bg-secPortal2">
            <circle cx="1140" cy="332" r="76" fill="url(#bg-portalBloom)" opacity="0.4" />
            <circle cx="1140" cy="332" r="60" fill="none" stroke="url(#bg-ringA)" strokeWidth="6" />
            <circle cx="1140" cy="332" r="45" fill="none" stroke="url(#bg-ringB)" strokeWidth="4.5" strokeDasharray="18 12 25 20 11 10" />
            <circle cx="1140" cy="332" r="28" fill="url(#bg-portalInner)" opacity="0.9" />
          </g>
          <g id="bg-secPortal3">
            <circle cx="1065" cy="706" r="60" fill="url(#bg-portalBloom)" opacity="0.36" />
            <circle cx="1065" cy="706" r="48" fill="none" stroke="url(#bg-ringA)" strokeWidth="5" />
            <circle cx="1065" cy="706" r="36" fill="none" stroke="url(#bg-ringB)" strokeWidth="4" strokeDasharray="14 10 21 11 16 12" />
            <circle cx="1065" cy="706" r="22" fill="url(#bg-portalInner)" opacity="0.85" />
          </g>
        </g>

        {/* Energy trails */}
        <g style={{ mixBlendMode: 'screen' }}>
          <path d="M180 470 C430 360,620 420,835 486 C1010 540,1210 518,1470 390" fill="none" stroke="url(#bg-trailGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.72" />
          <path d="M120 600 C350 530,560 600,795 655 C1040 712,1235 650,1490 540" fill="none" stroke="url(#bg-trailGrad)" strokeWidth="3.5" strokeLinecap="round" opacity="0.55" />
          <path d="M260 250 C500 300,710 260,875 220 C1070 171,1280 220,1510 296" fill="none" stroke="url(#bg-trailGrad)" strokeWidth="2.8" strokeLinecap="round" opacity="0.5" />
          <path d="M560 95 C690 170,770 260,845 360" fill="none" stroke="url(#bg-energyStroke)" strokeWidth="2.4" opacity="0.42" />
          <path d="M985 90 C925 178,880 255,858 350" fill="none" stroke="url(#bg-energyStroke)" strokeWidth="2.1" opacity="0.38" />
        </g>

        {/* Floating portal — double size, lissajous path across screen */}
        <g id="bg-floatingPortal" transform="translate(800 435) scale(0.80)">
          <g id="bg-fp-mainGlow" filter="url(#bg-coreGlow)">
            <circle r="286" fill="url(#bg-portalBloom)" opacity="0.58" />
            <circle r="232" fill="url(#bg-portalBloom)" opacity="0.42" />
          </g>

          <g filter="url(#bg-rimGlow)">
            <circle r="226" fill="none" stroke="url(#bg-ringA)" strokeWidth="5" strokeOpacity="0.78" />
            <circle r="214" fill="none" stroke="#a14eff" strokeOpacity="0.42" strokeWidth="2" />
            <circle r="204" fill="none" stroke="#59f4ff" strokeOpacity="0.33" strokeWidth="1.5" />
          </g>

          <g id="bg-fp-arcSetA" filter="url(#bg-rimGlow)">
            <circle r="198" fill="none" stroke="url(#bg-ringB)" strokeWidth="17" strokeLinecap="round" strokeDasharray="180 65 42 97 114 56 70 140 55 90" />
          </g>
          <g id="bg-fp-arcSetB" filter="url(#bg-rimGlow)">
            <circle r="168" fill="none" stroke="url(#bg-ringA)" strokeWidth="12" strokeLinecap="round" strokeDasharray="90 45 30 70 150 65 45 120 55 80" opacity="0.95" />
          </g>
          <g id="bg-fp-arcSetC" filter="url(#bg-rimGlow)">
            <circle r="142" fill="none" stroke="#9ffb4c" strokeOpacity="0.65" strokeWidth="7" strokeLinecap="round" strokeDasharray="22 21 80 32 45 30 60 22 20 45 68 28" />
          </g>

          <g style={{ mixBlendMode: 'screen' }}>
            <path d="M-200 -24 C-130 -72,-44 -80,20 -68 C112 -52,174 0,195 36" fill="none" stroke="#6df8ff" strokeOpacity="0.35" strokeWidth="2.4" />
            <path d="M-180 55 C-110 14,-34 8,28 18 C100 31,160 72,184 104" fill="none" stroke="#ff5dc7" strokeOpacity="0.35" strokeWidth="2.2" />
            <path d="M-140 -126 C-64 -140,18 -132,86 -92" fill="none" stroke="#c3ff5a" strokeOpacity="0.29" strokeWidth="2" />
          </g>

          <g id="bg-fp-vortexA" filter="url(#bg-rimGlow)">
            <path d="M-90 -120 C-28 -128,36 -104,84 -62 C110 -42,118 -13,100 16 C74 58,22 79,-21 84 C-78 90,-125 53,-133 5 C-140 -42,-117 -84,-90 -120 Z" fill="none" stroke="url(#bg-energyStroke)" strokeWidth="4.4" strokeOpacity="0.84" />
            <path d="M-75 -92 C-30 -98,20 -81,53 -52 C74 -33,80 -7,69 18 C52 52,14 66,-19 69 C-60 72,-95 44,-101 10 C-105 -22,-92 -62,-75 -92 Z" fill="none" stroke="#55f6ff" strokeOpacity="0.78" strokeWidth="3.2" />
            <path d="M-52 -67 C-23 -72,8 -62,30 -42 C43 -29,47 -9,40 10 C30 31,7 40,-14 42 C-38 45,-59 29,-62 8 C-65 -10,-57 -44,-52 -67 Z" fill="none" stroke="#ff5ec8" strokeOpacity="0.72" strokeWidth="2.7" />
          </g>
          <g id="bg-fp-vortexB" filter="url(#bg-rimGlow)">
            <path d="M115 -40 C100 -77,55 -111,9 -119 C-64 -132,-140 -95,-176 -28 C-197 10,-198 58,-163 93" fill="none" stroke="#8fff66" strokeOpacity="0.52" strokeWidth="3.1" />
            <path d="M132 12 C122 -24,87 -56,45 -72 C-8 -92,-65 -85,-110 -47 C-148 -14,-153 36,-121 68" fill="none" stroke="#66f6ff" strokeOpacity="0.52" strokeWidth="2.7" />
            <path d="M95 54 C80 38,55 26,29 22 C-11 16,-48 25,-72 49 C-90 67,-90 93,-72 111" fill="none" stroke="#d85cff" strokeOpacity="0.48" strokeWidth="2.4" />
          </g>

          <circle r="112" fill="url(#bg-portalInner)" />
          <ellipse rx="84" ry="60" fill="url(#bg-portalInner)" opacity="0.84" />
          <ellipse rx="52" ry="35" fill="#6cf8ff" fillOpacity="0.22" />
          <circle r="18" fill="#091124" />

          <g filter="url(#bg-sparkGlow)">
            <circle cx="-206" cy="-18" r="3" fill="#9dff4a" />
            <circle cx="-192" cy="51" r="2.5" fill="#4df2ff" />
            <circle cx="-176" cy="-87" r="2.7" fill="#ff65c5" />
            <circle cx="-128" cy="-152" r="2.4" fill="#55f0ff" />
            <circle cx="-72" cy="-200" r="2.7" fill="#c8ff37" />
            <circle cx="5" cy="-221" r="2.8" fill="#ff5ebf" />
            <circle cx="73" cy="-198" r="2.2" fill="#53f5ff" />
            <circle cx="134" cy="-152" r="3" fill="#8fff63" />
            <circle cx="180" cy="-96" r="2.6" fill="#ff67cd" />
            <circle cx="214" cy="-32" r="2.4" fill="#67f7ff" />
            <circle cx="207" cy="48" r="2.3" fill="#d2ff49" />
            <circle cx="178" cy="102" r="2.5" fill="#ff53bc" />
            <circle cx="123" cy="154" r="2.8" fill="#59f1ff" />
            <circle cx="58" cy="201" r="2.2" fill="#8bff6b" />
            <circle cx="-9" cy="219" r="2.6" fill="#ff6fcb" />
            <circle cx="-76" cy="196" r="2.3" fill="#61f2ff" />
            <circle cx="-136" cy="145" r="2.7" fill="#c9ff42" />
            <circle cx="-184" cy="83" r="2.5" fill="#ff66c8" />
          </g>
        </g>

        {/* Particles (populated by JS) */}
        <g id="bg-particles" />

        {/* Foreground terrain vignette */}
        <g filter="url(#bg-foregroundSoft)">
          <path d="M-40 850 C120 760,315 748,480 810 C590 850,650 900,650 940 L-40 940 Z" fill="#090618" opacity="0.85" />
          <path d="M970 940 L970 870 C1040 798,1190 742,1370 782 C1490 808,1605 870,1660 940 Z" fill="#090618" opacity="0.88" />
        </g>
      </svg>
    </div>
  )
}
