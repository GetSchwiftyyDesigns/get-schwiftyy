import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#070314',
          borderRadius: 7,
          position: 'relative',
        }}
      >
        {/* Outer portal ring */}
        <div
          style={{
            position: 'absolute',
            width: 24,
            height: 24,
            left: 4,
            top: 4,
            border: '1.5px solid rgba(143,75,255,0.85)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        {/* Inner ring */}
        <div
          style={{
            position: 'absolute',
            width: 14,
            height: 14,
            left: 9,
            top: 9,
            border: '1px solid rgba(61,242,255,0.5)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        {/* Center glow dot */}
        <div
          style={{
            width: 6,
            height: 6,
            background: '#8f4bff',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
