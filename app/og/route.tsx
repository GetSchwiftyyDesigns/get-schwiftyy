import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export function GET(_req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(ellipse 75% 90% at 50% 50%, rgba(143,75,255,0.22) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 50% 58%, rgba(0,255,136,0.10) 0%, transparent 60%), #070314',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        {/* Portal rings — pixel-centered in 1200×630 */}
        <div
          style={{
            position: 'absolute',
            width: 580,
            height: 580,
            left: 310,
            top: 25,
            border: '1px solid rgba(143,75,255,0.22)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 470,
            height: 470,
            left: 365,
            top: 80,
            border: '1px solid rgba(61,242,255,0.14)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 360,
            height: 360,
            left: 420,
            top: 135,
            border: '1px solid rgba(159,251,76,0.09)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* HUD badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(61,242,255,0.32)',
              background: 'rgba(61,242,255,0.06)',
              borderRadius: 999,
              padding: '7px 20px',
              marginBottom: 28,
              color: '#3df2ff',
              fontSize: 13,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Portal Active
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
            <span
              style={{
                fontSize: 100,
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1,
                letterSpacing: '-3px',
              }}
            >
              Get
            </span>
            <span
              style={{
                fontSize: 100,
                fontWeight: 800,
                color: '#8f4bff',
                lineHeight: 1,
                letterSpacing: '-3px',
              }}
            >
              Schwiftyy
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              color: 'rgba(255,255,255,0.60)',
              marginTop: 20,
              letterSpacing: '-0.2px',
            }}
          >
            Stupidly good-looking, high-converting websites.
          </div>

          {/* Pills */}
          <div style={{ display: 'flex', gap: 12, marginTop: 38 }}>
            {['Custom Builds', 'Conversion-First', 'AI-Ready'].map((label) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  border: '1px solid rgba(159,251,76,0.22)',
                  background: 'rgba(159,251,76,0.05)',
                  borderRadius: 999,
                  padding: '6px 18px',
                  color: '#9ffb4c',
                  fontSize: 13,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            right: 48,
            color: 'rgba(255,255,255,0.22)',
            fontSize: 16,
            letterSpacing: '0.05em',
            display: 'flex',
          }}
        >
          getschwiftyy.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
