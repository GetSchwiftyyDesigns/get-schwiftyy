'use client'

export function MobileSpaceBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden md:hidden"
    >
      <style>{`
        @keyframes mb-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes mb-pulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 0.88; }
        }
        @keyframes mb-twinkle {
          0%, 100% { opacity: 0.25; }
          50%       { opacity: 0.85; }
        }
        .mb-float    { animation: mb-float  7s   ease-in-out infinite; }
        .mb-twinkle-a{ animation: mb-twinkle 2.3s ease-in-out infinite; }
        .mb-twinkle-b{ animation: mb-twinkle 3.1s ease-in-out infinite 0.8s; }
        .mb-twinkle-c{ animation: mb-twinkle 1.9s ease-in-out infinite 1.4s; }
        .mb-twinkle-d{ animation: mb-twinkle 2.7s ease-in-out infinite 0.4s; }
        .mb-twinkle-e{ animation: mb-twinkle 3.5s ease-in-out infinite 1.9s; }
      `}</style>

      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0d0620 0%, #1a0e36 30%, #071733 65%, #03060f 100%)',
        }}
      />

      {/* Nebula blobs — no blur filter, just radial gradients (GPU-friendly) */}
      <div
        className="absolute"
        style={{
          top: '-8%', left: '-18%',
          width: '80%', height: '55%',
          background:
            'radial-gradient(ellipse, rgba(188,77,255,0.26) 0%, rgba(138,47,255,0.1) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '5%', right: '-12%',
          width: '65%', height: '48%',
          background:
            'radial-gradient(ellipse, rgba(255,60,174,0.2) 0%, rgba(213,46,245,0.08) 48%, transparent 70%)',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: '18%', right: '-5%',
          width: '70%', height: '50%',
          background:
            'radial-gradient(ellipse, rgba(61,184,255,0.16) 0%, rgba(32,103,255,0.07) 50%, transparent 70%)',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: '0%', left: '-8%',
          width: '55%', height: '38%',
          background:
            'radial-gradient(ellipse, rgba(255,60,174,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Stars + energy trails — single static SVG, no JS */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 390 844"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="mb-trail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#5df7ff" stopOpacity="0" />
            <stop offset="45%"  stopColor="#5df7ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#a654ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Static stars */}
        <circle cx="38"  cy="95"  r="1.1" fill="#d8f5ff" opacity="0.65" />
        <circle cx="312" cy="42"  r="1.4" fill="#d8f5ff" opacity="0.72" />
        <circle cx="155" cy="68"  r="0.9" fill="#d8f5ff" opacity="0.55" />
        <circle cx="88"  cy="180" r="1.2" fill="#d8f5ff" opacity="0.6"  />
        <circle cx="345" cy="160" r="1.0" fill="#d8f5ff" opacity="0.5"  />
        <circle cx="200" cy="130" r="0.8" fill="#d8f5ff" opacity="0.45" />
        <circle cx="62"  cy="240" r="1.3" fill="#d8f5ff" opacity="0.68" />
        <circle cx="280" cy="195" r="0.9" fill="#d8f5ff" opacity="0.52" />
        <circle cx="370" cy="300" r="1.1" fill="#d8f5ff" opacity="0.58" />
        <circle cx="18"  cy="350" r="0.7" fill="#d8f5ff" opacity="0.4"  />
        <circle cx="130" cy="310" r="1.5" fill="#d8f5ff" opacity="0.7"  />
        <circle cx="240" cy="280" r="0.9" fill="#d8f5ff" opacity="0.5"  />
        <circle cx="360" cy="420" r="1.2" fill="#d8f5ff" opacity="0.62" />
        <circle cx="55"  cy="490" r="1.0" fill="#d8f5ff" opacity="0.55" />
        <circle cx="195" cy="460" r="0.8" fill="#d8f5ff" opacity="0.48" />
        <circle cx="320" cy="530" r="1.3" fill="#d8f5ff" opacity="0.65" />
        <circle cx="90"  cy="570" r="0.9" fill="#d8f5ff" opacity="0.5"  />
        <circle cx="160" cy="640" r="1.1" fill="#d8f5ff" opacity="0.6"  />
        <circle cx="280" cy="680" r="0.7" fill="#d8f5ff" opacity="0.42" />
        <circle cx="35"  cy="720" r="1.4" fill="#d8f5ff" opacity="0.7"  />
        <circle cx="350" cy="740" r="1.0" fill="#d8f5ff" opacity="0.55" />
        <circle cx="210" cy="780" r="0.8" fill="#d8f5ff" opacity="0.45" />
        <circle cx="120" cy="820" r="1.2" fill="#d8f5ff" opacity="0.6"  />
        <circle cx="380" cy="620" r="0.9" fill="#d8f5ff" opacity="0.52" />
        <circle cx="15"  cy="150" r="1.0" fill="#d8f5ff" opacity="0.56" />

        {/* Twinkling stars */}
        <circle cx="185" cy="55"  r="1.8" fill="#d8f5ff" className="mb-twinkle-a" />
        <circle cx="310" cy="380" r="1.6" fill="#d8f5ff" className="mb-twinkle-b" />
        <circle cx="75"  cy="660" r="1.7" fill="#d8f5ff" className="mb-twinkle-c" />
        <circle cx="355" cy="500" r="1.5" fill="#d8f5ff" className="mb-twinkle-d" />
        <circle cx="140" cy="200" r="1.6" fill="#d8f5ff" className="mb-twinkle-e" />

        {/* Energy trails — static, no animation */}
        <path
          d="M20 420 C110 380,210 400,310 440 C355 458,385 448,405 430"
          fill="none" stroke="url(#mb-trail)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"
        />
        <path
          d="M-10 530 C80 500,190 520,300 558 C342 574,378 564,410 548"
          fill="none" stroke="url(#mb-trail)" strokeWidth="1.8" strokeLinecap="round" opacity="0.35"
        />
      </svg>

      {/* Portal image — CSS float animation, no JS */}
      <div
        className="absolute"
        style={{
          top: '10%',
          left: '50%',
          marginLeft: '-140px',
          width: '280px',
          height: '280px',
        }}
      >
        <div className="w-full h-full mb-float">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mobile-portal.svg" alt="" className="w-full h-full" />
        </div>
      </div>

      {/* Foreground terrain vignette */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 390 844"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-20 800 C60 750,160 738,240 772 C292 792,325 830,325 860 L-20 860 Z"
          fill="#090618" opacity="0.88"
        />
        <path
          d="M260 860 L260 808 C298 764,355 742,400 762 C422 772,440 808,445 860 Z"
          fill="#090618" opacity="0.85"
        />
      </svg>
    </div>
  )
}
