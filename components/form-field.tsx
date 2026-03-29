'use client'

import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

type BaseProps = {
  label: string
  id: string
  error?: string
  helper?: string
  required?: boolean
}

type InputProps = BaseProps & {
  as?: 'input'
} & InputHTMLAttributes<HTMLInputElement>

type TextareaProps = BaseProps & {
  as: 'textarea'
} & TextareaHTMLAttributes<HTMLTextAreaElement>

type SelectProps = BaseProps & {
  as: 'select'
  children: React.ReactNode
} & SelectHTMLAttributes<HTMLSelectElement>

type FormFieldProps = InputProps | TextareaProps | SelectProps

const fieldClasses =
  'w-full rounded-lg border border-[#1f1f1f] bg-[#111111] px-4 py-3 text-sm text-white placeholder-[#6b7280] transition-colors duration-150 focus:border-[#00ff88] focus:outline-none focus:ring-1 focus:ring-[#00ff88]'

export function FormField(props: FormFieldProps) {
  const { label, id, error, helper, required, as = 'input', ...rest } = props

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-white">
        {label}
        {required && (
          <span className="ml-1 text-[#00ff88]" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={id}
          className={`${fieldClasses} min-h-[120px] resize-y`}
          aria-required={required}
          aria-describedby={helper ? `${id}-helper` : error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : as === 'select' ? (
        <select
          id={id}
          className={fieldClasses}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          {...(rest as SelectHTMLAttributes<HTMLSelectElement>)}
        >
          {(props as SelectProps).children}
        </select>
      ) : (
        <input
          id={id}
          className={fieldClasses}
          aria-required={required}
          aria-describedby={helper ? `${id}-helper` : error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {helper && !error && (
        <p id={`${id}-helper`} className="text-xs text-white">
          {helper}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
