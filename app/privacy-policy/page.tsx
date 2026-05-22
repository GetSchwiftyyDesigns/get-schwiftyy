import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Section } from '@/components/section'

export const metadata: Metadata = {
  title: 'Privacy Policy — GetSchwiftyy Design',
  description: 'Privacy Policy for GetSchwiftyy Design. Learn how we collect, use, and protect your information.',
  alternates: {
    canonical: 'https://www.getschwiftyy.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section className="pt-14 md:pt-20">
        <Container>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Legal
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-400">
            Effective Date: May 22, 2026 &nbsp;·&nbsp; Website:{' '}
            <a href="https://www.getschwiftyy.com" className="underline underline-offset-2 hover:text-[#3df2ff]">
              www.getschwiftyy.com
            </a>
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-slate-300">

            <p className="leading-relaxed">
              At GetSchwiftyy Design, we build websites with personality — but when it comes to your
              privacy, we keep things clear, direct, and respectful. This Privacy Policy explains what
              information we collect, how we use it, when we may share it, and what choices you have
              when you visit www.getschwiftyy.com, submit a form, or get in touch about a project.
            </p>
            <p className="leading-relaxed">
              By using this website, contacting us, or submitting information through the site, you
              agree to the practices described below.
            </p>

            <PolicySection title="What We Collect">
              <p>
                When you reach out through the site, we may collect the information you choose to send
                us so we can respond, scope your project, and keep the conversation moving. This may
                include:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company or brand name</li>
                <li>Project details</li>
                <li>Budget, timeline, or goals</li>
                <li>Any other information you include in a message, inquiry form, or intake form</li>
              </ul>
              <p>
                We may also automatically collect basic technical and usage data when you browse the
                site. This may include:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Referring site</li>
                <li>Pages viewed</li>
                <li>Time on site</li>
                <li>Clicks and scroll activity</li>
                <li>Date and time of visits</li>
              </ul>
            </PolicySection>

            <PolicySection title="Cookies and Tracking">
              <p>
                Like most modern websites, GetSchwiftyy may use cookies and similar technologies to
                keep the site running smoothly, understand how people use it, and improve performance
                over time. Depending on the tools connected to the site, that may include analytics
                cookies, form tracking, or marketing pixels.
              </p>
              <p>
                You can usually control cookies through your browser settings, though disabling some
                may affect how parts of the site function.
              </p>
            </PolicySection>

            <PolicySection title="How We Use It">
              <p>We may use your information to:</p>
              <ul>
                <li>Reply to inquiries</li>
                <li>Send proposals or project details</li>
                <li>Deliver design, development, and strategy services</li>
                <li>Improve site performance and user experience</li>
                <li>Review traffic and engagement analytics</li>
                <li>Protect the site from spam, abuse, or misuse</li>
                <li>Send service-related emails</li>
                <li>Send marketing updates if you opt in</li>
                <li>Support connected tools like forms, CRMs, scheduling tools, and automations</li>
              </ul>
            </PolicySection>

            <PolicySection title="When We Share It">
              <p>
                We do not sell your personal information for money. We may share information only when
                needed to operate the site, run the business, fulfill services, or work with trusted
                third-party tools. That may include providers for:
              </p>
              <ul>
                <li>Website hosting</li>
                <li>Analytics</li>
                <li>Contact forms</li>
                <li>Email delivery</li>
                <li>CRM systems</li>
                <li>Scheduling software</li>
                <li>Payment processing, if used</li>
                <li>Automation and workflow tools</li>
                <li>Legal, compliance, or security support</li>
              </ul>
              <p>
                We may also disclose information when required by law, to protect our rights or safety,
                or as part of a merger, acquisition, or business transfer.
              </p>
            </PolicySection>

            <PolicySection title="Email and Communications">
              <p>
                If you reach out to GetSchwiftyy, we may email you back about your inquiry, your
                project, or related services. If you opt into marketing emails, you can unsubscribe at
                any time by using the unsubscribe link or emailing{' '}
                <a href="mailto:diyon@oxmedia.digital" className="underline underline-offset-2 hover:text-[#3df2ff]">
                  diyon@oxmedia.digital
                </a>
                .
              </p>
              <p>
                We may still send non-marketing messages if they relate to an active inquiry, ongoing
                project, billing, or important service updates.
              </p>
            </PolicySection>

            <PolicySection title="Retention and Security">
              <p>
                We keep personal information only for as long as it is reasonably necessary for the
                purposes described in this policy, including communication, project records, legal
                compliance, and business operations.
              </p>
              <p>
                We use reasonable administrative, technical, and organizational safeguards to help
                protect your information, but no system can guarantee absolute security.
              </p>
            </PolicySection>

            <PolicySection title="Your Rights">
              <p>
                Depending on where you live, you may have rights to access, correct, delete, or limit
                how your personal information is used. Colorado residents may have rights under the
                Colorado Privacy Act, including rights related to access, correction, deletion, and
                opting out of certain processing.
              </p>
              <p>
                To make a privacy request, email{' '}
                <a href="mailto:diyon@oxmedia.digital" className="underline underline-offset-2 hover:text-[#3df2ff]">
                  diyon@oxmedia.digital
                </a>{' '}
                with the subject line <strong className="text-white">Privacy Request</strong>. We may
                need to verify your identity before completing certain requests.
              </p>
            </PolicySection>

            <PolicySection title="Colorado Notice">
              <p>
                If you are a Colorado resident, you may have rights under applicable Colorado privacy
                law regarding your personal data. GetSchwiftyy does not knowingly sell personal
                information for monetary compensation.
              </p>
            </PolicySection>

            <PolicySection title="Other Links">
              <p>
                This site may link out to third-party websites, tools, or platforms. If you click
                through to those sites, their privacy practices are governed by their own policies,
                not this one.
              </p>
            </PolicySection>

            <PolicySection title="Children's Privacy">
              <p>
                This website is not intended for children under 13, and we do not knowingly collect
                personal information from children under 13.
              </p>
            </PolicySection>

            <PolicySection title="Policy Updates">
              <p>
                If we update this Privacy Policy to reflect new tools, services, or legal requirements,
                we'll post the revised version here and update the Effective Date at the top of the page.
              </p>
            </PolicySection>

            <PolicySection title="Contact">
              <p>
                If you have questions about this Privacy Policy or want to submit a request related to
                your personal information, contact:
              </p>
              <address className="not-italic leading-relaxed">
                <strong className="text-white">GetSchwiftyy Design</strong><br />
                1050 N Broadway<br />
                Denver, CO 80203<br />
                <a href="mailto:diyon@oxmedia.digital" className="underline underline-offset-2 hover:text-[#3df2ff]">
                  diyon@oxmedia.digital
                </a>
              </address>
            </PolicySection>

          </div>
        </Container>
      </Section>
    </>
  )
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="space-y-3 leading-relaxed [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-slate-400">
        {children}
      </div>
    </div>
  )
}
