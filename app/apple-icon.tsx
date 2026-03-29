import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#070314',
          borderRadius: 40,
          position: 'relative',
        }}
      >
        {/* Outer portal ring */}
        <div
          style={{
            position: 'absolute',
            width: 136,
            height: 136,
            left: 22,
            top: 22,
            border: '2px solid rgba(143,75,255,0.85)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        {/* Mid ring */}
        <div
          style={{
            position: 'absolute',
            width: 96,
            height: 96,
            left: 42,
            top: 42,
            border: '1.5px solid rgba(61,242,255,0.45)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        {/* Inner ring */}
        <div
          style={{
            position: 'absolute',
            width: 58,
            height: 58,
            left: 61,
            top: 61,
            border: '1px solid rgba(159,251,76,0.3)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        {/* Center glow dot */}
        <div
          style={{
            width: 24,
            height: 24,
            background: '#8f4bff',
            borderRadius: '50%',
            display: 'flex',
            boxShadow: '0 0 20px rgba(143,75,255,0.9), 0 0 40px rgba(143,75,255,0.4)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
