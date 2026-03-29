'use client'

import { useState, useEffect, FormEvent } from 'react'
import { FormField } from './form-field'
import { PrimaryButton } from './primary-button'

interface FormState {
  name: string
  email: string
  brandName: string
  websiteLink: string
  buildType: string
  projectDetails: string
  timeline: string
  nextStep: string
  extraNotes: string
  _honey: string
  _t: number
}

const initialState: FormState = {
  name: '',
  email: '',
  brandName: '',
  websiteLink: '',
  buildType: '',
  projectDetails: '',
  timeline: '',
  nextStep: '',
  extraNotes: '',
  _honey: '',
  _t: 0,
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  useEffect(() => {
    setForm((prev) => ({ ...prev, _t: Date.now() }))
  }, [])

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = (): boolean => {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email address.'
    if (!form.buildType) next.buildType = 'Please select what you want to build.'
    if (!form.projectDetails.trim())
      next.projectDetails = 'Tell me a bit about your project.'
    if (!form.timeline) next.timeline = 'Please select a rough timeline.'
    if (!form.nextStep) next.nextStep = 'Let me know how you want to move forward.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="alert"
        className="rounded-xl border border-[#00ff8830] bg-[#00ff8808] p-8 text-center"
      >
        <div className="mb-3 text-2xl font-bold text-[#00ff88]">Portal opened.</div>
        <p className="text-white leading-relaxed">
          Your message just flew through the portal. I&apos;ll get back to you within 24&ndash;48 Earth hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {status === 'error' && (
        <div role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          Portal glitch. Check the fields and try again.
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="name"
          label="Name"
          required
          placeholder="Your name"
          value={form.name}
          onChange={set('name')}
          error={errors.name}
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={set('email')}
          error={errors.email}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="brandName"
          label="Business / brand name"
          placeholder="Optional"
          value={form.brandName}
          onChange={set('brandName')}
        />
        <FormField
          id="websiteLink"
          label="Website / social link"
          type="url"
          placeholder="Optional"
          value={form.websiteLink}
          onChange={set('websiteLink')}
        />
      </div>

      <FormField
        as="select"
        id="buildType"
        label="What do you want to build?"
        required
        value={form.buildType}
        onChange={set('buildType')}
        error={errors.buildType}
      >
        <option value="" disabled>Select an option</option>
        <option value="Launch Portal">Launch Portal</option>
        <option value="Full Schwiftyy Site">Full Schwiftyy Site</option>
        <option value="Portal + Bots">Portal + Bots</option>
        <option value="Not sure yet / something else">Not sure yet / something else</option>
      </FormField>

      <FormField
        as="textarea"
        id="projectDetails"
        label="Tell me about your project"
        required
        placeholder="What are you building? Who is it for? What does success look like?"
        value={form.projectDetails}
        onChange={set('projectDetails')}
        error={errors.projectDetails}
        helper="The more context the better. Don't hold back."
      />

      <FormField
        as="select"
        id="timeline"
        label="Rough timeline"
        required
        value={form.timeline}
        onChange={set('timeline')}
        error={errors.timeline}
      >
        <option value="" disabled>Select a timeline</option>
        <option value="ASAP – 2–4 weeks">ASAP – 2–4 weeks</option>
        <option value="Soon – 1–2 months">Soon – 1–2 months</option>
        <option value="Later – 3+ months / flexible">Later – 3+ months / flexible</option>
      </FormField>

      {/* Radio group */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-white">
          How do you want to move forward?
          <span className="ml-1 text-[#00ff88]" aria-hidden="true">*</span>
        </legend>
        {errors.nextStep && (
          <p role="alert" className="mb-2 text-xs text-red-400">{errors.nextStep}</p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {[
            { value: 'Quote by email', label: 'Quote by email' },
            { value: 'Quick call', label: 'Quick call' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm text-white transition-colors hover:border-[#00ff8840] ${form.nextStep === option.value ? 'border-[#00ff88] bg-[#00ff8808]' : 'border-[#1f1f1f] bg-[#111111]'}`}
            >
              <input
                type="radio"
                name="nextStep"
                value={option.value}
                checked={form.nextStep === option.value}
                onChange={set('nextStep')}
                className="h-4 w-4 accent-[#00ff88]"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <FormField
        as="textarea"
        id="extraNotes"
        label="Anything else I should know?"
        placeholder="Optional: weird requirements, hard constraints, references you love, etc."
        value={form.extraNotes}
        onChange={set('extraNotes')}
      />

      {/* Honeypot — hidden from humans, bots fill it out */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <input
          type="text"
          name="_honey"
          value={form._honey}
          onChange={set('_honey')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="pt-2">
        <PrimaryButton
          type="submit"
          disabled={status === 'submitting'}
          variant="solid"
          className="w-full py-4 text-base"
        >
          {status === 'submitting' ? 'Sending...' : 'Send this into the portal'}
        </PrimaryButton>
      </div>
    </form>
  )
}
