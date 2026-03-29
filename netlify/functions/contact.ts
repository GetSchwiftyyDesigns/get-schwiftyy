import type { Handler, HandlerEvent } from '@netlify/functions'
import { Resend } from 'resend'

interface ContactPayload {
  name: string
  email: string
  brandName?: string
  websiteLink?: string
  buildType: string
  projectDetails: string
  timeline: string
  nextStep: string
  extraNotes?: string
  _honey?: string
  _t?: number
}

const resend = new Resend(process.env.RESEND_API_KEY)

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  let payload: ContactPayload

  try {
    payload = JSON.parse(event.body ?? '{}') as ContactPayload
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    }
  }

  // Bot checks
  if (payload._honey) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  }
  if (!payload._t || Date.now() - payload._t < 3000) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  }

  const { name, email, buildType, projectDetails, timeline, nextStep } = payload

  // Validate required fields
  const missing: string[] = []
  if (!name?.trim()) missing.push('name')
  if (!email?.trim()) missing.push('email')
  if (!buildType?.trim()) missing.push('buildType')
  if (!projectDetails?.trim()) missing.push('projectDetails')
  if (!timeline?.trim()) missing.push('timeline')
  if (!nextStep?.trim()) missing.push('nextStep')

  if (missing.length > 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields', fields: missing }),
    }
  }

  const emailBody = `
New project inquiry from getschwiftyy.com

Name: ${name}
Email: ${email}
Business / Brand: ${payload.brandName || '—'}
Website / Social: ${payload.websiteLink || '—'}

What they want to build: ${buildType}
Timeline: ${timeline}
How to move forward: ${nextStep}

Project details:
${projectDetails}

Anything else:
${payload.extraNotes || '—'}
`.trim()

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? '',
      to: process.env.RESEND_TO ?? '',
      replyTo: [email],
      subject: `New inquiry from ${name} — ${buildType}`,
      text: emailBody,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    }
  } catch (err) {
    console.error('Resend error:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message. Please try again.' }),
    }
  }
}
