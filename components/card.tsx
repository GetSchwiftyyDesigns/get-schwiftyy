import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  role?: string
  tabIndex?: number
  'aria-label'?: string
  glow?: 'green' | 'purple' | 'none'
}

export function Card({
  children,
  className = '',
  onClick,
  role,
  tabIndex,
  'aria-label': ariaLabel,
  glow = 'none',
}: CardProps) {
  const interactive = onClick
    ? 'cursor-pointer'
    : ''

  const glowClass = {
    green: 'card-scifi hover:border-[rgba(0,255,136,0.3)]',
    purple: 'card-scifi hover:border-[rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.08)]',
    none: 'card-scifi',
  }[glow]

  return (
    <div
      className={`${glowClass} p-6 ${interactive} ${className}`}
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  )
}
