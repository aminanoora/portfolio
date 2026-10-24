import { useState, type FormEvent } from 'react'
import { useReveal } from '../hooks/useReveal'

const EMAIL = 'aminanoora003@gmail.com'
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

type Social = {
  name: string
  href: string
  path: string
  rotation: string
  fillRule?: 'evenodd' | 'nonzero'
  clipRule?: 'evenodd' | 'nonzero'
  tape?: boolean
}

const socials: Social[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/aminanoora',
    rotation: 'rotate-[-1deg]',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    path:
      'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amina-noora-52a849377/',
    rotation: 'rotate-[0.6deg]',
    path:
      'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
  },
  {
    name: 'X / Twitter',
    href: 'https://x.com/_amina_noora_',
    rotation: 'rotate-[-0.6deg]',
    path:
      'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/amina_noora_/',
    rotation: 'rotate-[1deg]',
    tape: true,
    path:
      'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
]

function Contact() {
  const { ref, visible } = useReveal<HTMLElement>()
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null,
  )
  const [sending, setSending] = useState(false)
  const [copied, setCopied] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  // Drop a field's inline error as soon as the visitor starts correcting it
  function clearFieldError(field: keyof FormErrors) {
    setErrors((previous) => {
      if (!previous[field]) return previous
      return { ...previous, [field]: undefined }
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    // Inline validation replaces the browser's native validation bubbles
    const nextErrors: FormErrors = {}
    if (!name) nextErrors.name = 'Please add your name so I know who I am replying to.'
    if (!email) nextErrors.email = 'Please add an email address for the reply.'
    else if (!EMAIL_PATTERN.test(email))
      nextErrors.email = 'That address looks incomplete — use the form name@example.com.'
    if (!message) nextErrors.message = 'Please add a short brief so I can scope your build.'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus(null)
      const firstInvalid = Object.keys(nextErrors)[0]
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    setErrors({})
    setSending(true)
    setStatus(null)

    // Never leave the button spinning forever if the relay is slow/unreachable
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 20000)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: 'New dispatch from your portfolio',
          _template: 'table',
        }),
      })

      const result: { success?: boolean | string; message?: string } = await response.json()
      const ok = response.ok && (result.success === true || result.success === 'true')
      if (!ok) throw new Error(result.message ?? 'Submission failed')

      setStatus({
        type: 'success',
        message: 'Dispatch received! You will get a reply within 24 hours.',
      })
      form.reset()
    } catch (error) {
      const reason =
        error instanceof DOMException && error.name === 'AbortError'
          ? 'The request timed out. Please try again.'
          : error instanceof Error && error.message
            ? error.message
            : 'Could not send right now.'
      setStatus({
        type: 'error',
        message: `${reason} You can also email me directly at ${EMAIL}.`,
      })
    } finally {
      window.clearTimeout(timeout)
      setSending(false)
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`pt-space-xl pb-space-lg ${visible ? 'is-visible' : ''}`}
    >
      <div className="relative bg-surface-container-high p-space-lg md:p-space-2xl shadow-[6px_10px_0px_rgba(26,26,26,0.22)] max-w-4xl mx-auto overflow-hidden reveal">
        {/* Postmark stamp motif accent */}
        <div className="absolute top-6 right-6 flex flex-col items-center pointer-events-none opacity-60 z-20">
          <div className="w-16 h-16 rounded-full border border-dashed border-on-surface flex flex-col items-center justify-center rotate-12 stamp-in">
            <span className="font-label-sm text-label-sm uppercase font-mono leading-none">POST</span>
            <span className="font-label-sm text-label-sm uppercase font-mono font-bold">UK-24</span>
          </div>
          <div className="w-20 h-1 bg-on-surface-variant/40 mt-1"></div>
          <div className="w-20 h-1 bg-on-surface-variant/40 mt-0.5"></div>
        </div>

        {/* Simulated kraft / masking tape top accent */}
        <div className="absolute -top-3.5 left-12 w-28 h-6 bg-[#b4ceab]/80 -rotate-2 shadow-xs pointer-events-none z-20 tape-sway-alt"></div>

        <div className="flex flex-col items-start gap-space-lg relative z-10 w-full">
          {/* Header and envelope tag */}
          <div className="flex flex-col items-start gap-space-xs">
            <div className="px-space-sm py-0.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest">
              DIRECT TRANSMISSION
            </div>
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight">
              BUILD SOMETHING TOGETHER
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              Let’s discuss your system requirements, ideas, or build specs.
            </p>
          </div>

          {/* Tactile scrapbook postal form */}
          <form
            className="w-full flex flex-col gap-space-md pt-space-xs"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Honeypot for bots — humans never see or fill this */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md w-full">
              {/* Full name field */}
              <div className="flex flex-col gap-1 relative bg-surface p-space-sm border border-on-surface shadow-[2px_2px_0px_rgba(26,26,26,0.12)] rotate-[-0.4deg]">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="dispatch-name"
                    className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-mono"
                  >
                    01. FULL NAME /
                  </label>
                  <span className="text-[9px] font-mono text-on-surface-variant uppercase">
                    [REQUIRED]
                  </span>
                </div>
                <input
                  id="dispatch-name"
                  name="name"
                  type="text"
                  required
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? 'dispatch-name-error' : undefined}
                  onInput={() => clearFieldError('name')}
                  placeholder="e.g., Elena Vance or Studio Mono"
                  className={`w-full bg-surface-container-low px-space-sm py-2 font-body-md text-on-surface border focus:outline-none focus:bg-surface-container-lowest transition-colors ${
                    errors.name
                      ? 'border-error focus:border-error'
                      : 'border-outline-variant/80 focus:border-on-surface'
                  }`}
                />
                {errors.name && (
                  <p
                    id="dispatch-name-error"
                    role="alert"
                    className="font-label-sm text-label-sm normal-case tracking-normal leading-relaxed text-error"
                  >
                    ✕ {errors.name}
                  </p>
                )}
              </div>

              {/* Email address field */}
              <div className="flex flex-col gap-1 relative bg-surface p-space-sm border border-on-surface shadow-[2px_2px_0px_rgba(26,26,26,0.12)] rotate-[0.4deg]">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="dispatch-email"
                    className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-mono"
                  >
                    02. EMAIL
                  </label>
                  <span className="text-[9px] font-mono text-on-surface-variant uppercase">
                    [REPLY-TO]
                  </span>
                </div>
                <input
                  id="dispatch-email"
                  name="email"
                  type="email"
                  required
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? 'dispatch-email-error' : undefined}
                  onInput={() => clearFieldError('email')}
                  placeholder="e.g., elena@example.com"
                  className={`w-full bg-surface-container-low px-space-sm py-2 font-body-md text-on-surface border focus:outline-none focus:bg-surface-container-lowest transition-colors ${
                    errors.email
                      ? 'border-error focus:border-error'
                      : 'border-outline-variant/80 focus:border-on-surface'
                  }`}
                />
                {errors.email && (
                  <p
                    id="dispatch-email-error"
                    role="alert"
                    className="font-label-sm text-label-sm normal-case tracking-normal leading-relaxed text-error"
                  >
                    ✕ {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Project brief / message field */}
            <div className="flex flex-col gap-1 relative bg-surface p-space-sm border border-on-surface shadow-[2px_2px_0px_rgba(26,26,26,0.12)] rotate-[-0.2deg]">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="dispatch-message"
                  className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-mono"
                >
                  03. PROJECT BRIEF&nbsp;
                </label>
                <span className="text-[9px] font-mono text-on-surface-variant uppercase">
                  DISPATCH MANIFEST
                </span>
              </div>
              <textarea
                id="dispatch-message"
                name="message"
                rows={4}
                required
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? 'dispatch-message-error' : undefined}
                onInput={() => clearFieldError('message')}
                placeholder="Tell us about your project scope, timeline, architectural requirements, and ideas..."
                className={`w-full bg-surface-container-low p-space-sm font-body-md text-on-surface border focus:outline-none focus:bg-surface-container-lowest transition-colors leading-relaxed ${
                  errors.message
                    ? 'border-error focus:border-error'
                    : 'border-outline-variant/80 focus:border-on-surface'
                }`}
              />
              {errors.message && (
                <p
                  id="dispatch-message-error"
                  role="alert"
                  className="font-label-sm text-label-sm normal-case tracking-normal leading-relaxed text-error"
                >
                  ✕ {errors.message}
                </p>
              )}
            </div>

            {/* Actions & submission strip */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md pt-space-xs">
              <div className="bg-surface px-space-md py-2 border border-dashed border-on-surface/40 shadow-[2px_2px_0px_rgba(26,26,26,0.1)] flex items-center justify-between gap-space-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-secondary">drafts</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                    {EMAIL}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="font-label-sm text-label-sm uppercase text-secondary hover:text-on-surface font-bold transition-colors ml-2"
                >
                  {copied ? 'COPIED!' : 'COPY'}
                </button>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="bg-primary text-on-primary px-space-xl py-space-md shadow-[3px_4px_0px_#685d4c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#685d4c] flex items-center justify-center gap-space-xs font-headline-sm text-headline-sm uppercase tracking-wider hover:bg-on-surface transition-all cursor-pointer disabled:opacity-60 disabled:cursor-wait"
              >
                <span>{sending ? 'SENDING…' : 'SEND DISPATCH'}</span>
                <span className="material-symbols-outlined text-base">
                  {sending ? 'hourglass_top' : 'mail'}
                </span>
              </button>
            </div>

            {status && (
              <p
                className={`status-in font-label-sm text-label-sm ${
                  status.type === 'success'
                    ? 'uppercase tracking-widest text-emerald-700'
                    : 'normal-case tracking-normal leading-relaxed text-error'
                }`}
              >
                {status.type === 'success' ? '✓' : '✕'} {status.message}
              </p>
            )}
          </form>

        </div>
      </div>

      {/* Social ephemera cards */}
      <div
        className="relative max-w-4xl mx-auto mt-space-lg flex flex-col items-center gap-space-sm reveal"
        style={{ transitionDelay: '150ms' }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md w-full pt-1">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-between p-space-sm bg-[#FAF7F0] border border-on-surface shadow-[3px_4px_0px_rgba(26,26,26,0.14)] hover:rotate-0 hover:-translate-y-1 hover:shadow-[5px_8px_0px_rgba(26,26,26,0.18)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_2px_0px_rgba(26,26,26,0.15)] transition-all ${social.rotation}`}
            >
              {social.tape && (
                <div className="absolute -top-2 right-4 w-12 h-3.5 bg-[#b4ceab]/80 rotate-[3deg] pointer-events-none shadow-xs"></div>
              )}
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-on-surface transition-transform group-hover:scale-105"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={social.path} fillRule={social.fillRule} clipRule={social.clipRule} />
                </svg>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface">
                    {social.name}
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-sm text-secondary group-hover:text-on-surface transition-colors">
                north_east
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
