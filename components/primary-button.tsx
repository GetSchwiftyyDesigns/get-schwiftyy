import Link from 'next/link'
import { ReactNode } from 'react'

interface PrimaryButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'solid' | 'outline' | 'portal'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export function PrimaryButton({
  href,
  onClick,
  children,
  variant = 'solid',
  type = 'button',
  disabled = false,
  className = '',
}: PrimaryButtonProps) {
  const base =
    'btn-portal inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f4bff] focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer'

  const variants = {
    solid:
      'bg-[#8f4bff] text-white hover:bg-[#7030e0] active:scale-[0.98] shadow-[0_0_20px_rgba(143,75,255,0.35)] hover:shadow-[0_0_32px_rgba(143,75,255,0.55)]',
    outline:
      'border border-[#8f4bff] text-[#8f4bff] hover:bg-[rgba(143,75,255,0.1)] active:scale-[0.98] shadow-[0_0_10px_rgba(143,75,255,0.12)] hover:shadow-[0_0_20px_rgba(143,75,255,0.25)]',
    portal:
      'border border-[#3df2ff] text-[#3df2ff] hover:bg-[rgba(61,242,255,0.08)] active:scale-[0.98] shadow-[0_0_10px_rgba(61,242,255,0.15)] hover:shadow-[0_0_20px_rgba(61,242,255,0.3)]',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) return <Link href={href} className={classes}>{children}</Link>

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
