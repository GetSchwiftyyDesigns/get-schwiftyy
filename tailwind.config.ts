import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Portal palette
        bg:             '#070314',
        surface:        '#0e0b1f',
        'surface-2':    '#160d2e',
        border:         '#2a1a4e',
        'border-bright':'#3d2566',
        // Primary accent: violet
        accent:         '#8f4bff',
        'accent-dim':   '#7030e0',
        'accent-glow':  'rgba(143,75,255,0.18)',
        // Secondary: cyan
        cyan:           '#3df2ff',
        'cyan-dim':     '#1ec8d8',
        'cyan-glow':    'rgba(61,242,255,0.18)',
        // Tertiary: acid green
        acid:           '#9ffb4c',
        'acid-dim':     '#7dcc30',
        // Hot pink
        pink:           '#ff4fbf',
        'pink-dim':     '#d93ea0',
        // Legacy aliases (keep header/footer working)
        portal:         '#8f4bff',
        'portal-dim':   '#7030e0',
        'portal-glow':  'rgba(143,75,255,0.15)',
        muted:          '#6b7280',
        subtle:         '#374151',
        star:           '#ffffff',
        // Space tokens
        space: {
          base:  '#070314',
          panel: '#0e0b1f',
          line:  '#2a1a4e',
        },
        nebula: {
          purple: '#8f4bff',
          pink:   '#ff4fbf',
          blue:   '#3df2ff',
        },
        neon: {
          green:  '#9ffb4c',
          violet: '#8f4bff',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        site: '1200px',
      },
      boxShadow: {
        glow:        '0 0 0 1px rgba(143,75,255,0.35), 0 0 24px rgba(61,242,255,0.2)',
        'glow-cyan': '0 0 20px rgba(61,242,255,0.4)',
        'glow-acid': '0 0 20px rgba(159,251,76,0.4)',
      },
      animation: {
        'spin-slow':             'spin 8s linear infinite',
        'spin-reverse':          'spin-reverse 12s linear infinite',
        'spin-reverse-fast':     'spin-reverse 6s linear infinite',
        'float':                 'float 6s ease-in-out infinite',
        'nebula-drift':          'nebula-drift 42s ease-in-out infinite',
        'nebula-drift-reverse':  'nebula-drift-reverse 55s ease-in-out infinite',
        'nebula-drift-slow':     'nebula-drift-slow 64s ease-in-out infinite',
        'star-twinkle':          'star-twinkle 5.5s ease-in-out infinite',
        'portal-pulse':          'portal-pulse 4s ease-in-out infinite',
        'portal-spin':           'portal-spin 18s linear infinite',
        'float-slow':            'float-slow 6s ease-in-out infinite',
        'star-drift':            'star-drift 60s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to:   { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'nebula-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%':      { transform: 'translate3d(24px,-18px,0) scale(1.06)' },
        },
        'nebula-drift-reverse': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%':      { transform: 'translate3d(-26px,16px,0) scale(1.04)' },
        },
        'nebula-drift-slow': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%':      { transform: 'translate3d(18px,20px,0) scale(1.08)' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.2' },
          '50%':      { opacity: '0.85' },
        },
        'portal-spin': {
          from: { transform: 'translate(-50%,-50%) rotate(0deg)' },
          to:   { transform: 'translate(-50%,-50%) rotate(360deg)' },
        },
        'portal-pulse': {
          '0%, 100%': { opacity: '0.8', transform: 'translate(-50%,-50%) scale(1)' },
          '50%':      { opacity: '0.55', transform: 'translate(-50%,-50%) scale(1.06)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'star-drift': {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2000px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
