export function PortalRing({ className = '' }: { className?: string }) {
  // Generate 12 tick marks
  const ticks = Array.from({ length: 12 }, (_, i) => ({
    angle: i * 30,
    tall: i % 3 === 0,
  }))

  return (
    <div className={`portal-ring animate-float ${className}`} aria-hidden="true">
      {/* Outer glow ring */}
      <div className="ring-outer" />
      {/* Mid ring (reverse spin) */}
      <div className="ring-mid" />
      {/* Inner dashed ring */}
      <div className="ring-inner" />
      {/* Vortex core */}
      <div className="ring-core">
        <div className="ring-vortex" />
      </div>
      {/* Center */}
      <div className="ring-center">
        <div className="ring-dot" />
      </div>
      {/* HUD tick marks */}
      <div className="ring-ticks">
        {ticks.map((tick, i) => (
          <div
            key={i}
            className="ring-tick"
            style={{
              transform: `rotate(${tick.angle}deg) translateX(-50%)`,
              height: tick.tall ? '10px' : '5px',
              opacity: tick.tall ? 0.8 : 0.4,
            }}
          />
        ))}
      </div>
    </div>
  )
}
