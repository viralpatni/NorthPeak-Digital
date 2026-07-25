import { useState, useId } from 'react'

const PROJECT_TYPES = [
  { value: '', label: 'Select project type...' },
  { value: 'custom-website', label: 'Custom Website' },
  { value: 'ecommerce', label: 'E-Commerce Store' },
  { value: 'uiux-design', label: 'UI/UX Design' },
  { value: 'seo', label: 'SEO Optimization' },
  { value: 'performance', label: 'Performance Optimization' },
  { value: 'maintenance', label: 'Maintenance & Support' },
  { value: 'other', label: 'Other' },
]

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

function validate(fields) {
  const errors = {}
  if (!fields.fullName.trim()) errors.fullName = 'Full name is required.'
  else if (fields.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.'

  if (!fields.email.trim()) errors.email = 'Email address is required.'
  else if (!EMAIL_REGEX.test(fields.email.trim())) errors.email = 'Please enter a valid email address.'

  if (!fields.phone.trim()) errors.phone = 'Phone number is required.'
  else if (!PHONE_REGEX.test(fields.phone.trim())) errors.phone = 'Please enter a valid phone number (e.g. +1 234 567 8900).'

  if (!fields.projectType) errors.projectType = 'Please select a project type.'

  if (!fields.message.trim()) errors.message = 'Message is required.'
  else if (fields.message.trim().length < 20) errors.message = 'Please describe your project in at least 20 characters.'

  return errors
}

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="error-message" aria-live="polite">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
      {message}
    </p>
  )
}

const INITIAL = { fullName: '', email: '', phone: '', projectType: '', message: '' }

export default function ContactForm() {
  const uid = useId()
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const ids = {
    fullName: `${uid}-fullName`,
    email: `${uid}-email`,
    phone: `${uid}-phone`,
    projectType: `${uid}-projectType`,
    message: `${uid}-message`,
    fullNameErr: `${uid}-fullName-err`,
    emailErr: `${uid}-email-err`,
    phoneErr: `${uid}-phone-err`,
    projectTypeErr: `${uid}-projectType-err`,
    messageErr: `${uid}-message-err`,
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const newErrors = validate({ ...fields, [name]: value })
      setErrors(prev => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const newErrors = validate(fields)
    setErrors(prev => ({ ...prev, [name]: newErrors[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ fullName: true, email: true, phone: true, projectType: true, message: true })
    const newErrors = validate(fields)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setSubmitting(true)
    // Mock async submission
    await new Promise(resolve => setTimeout(resolve, 1400))
    setSubmitting(false)
    setSubmitted(true)
  }

  const allErrors = validate(fields)
  const isValid = Object.keys(allErrors).length === 0

  if (submitted) {
    return (
      <section
        id="contact"
        className="py-24 lg:py-32 bg-light-bg"
        aria-labelledby="contact-success-heading"
      >
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)' }}
            aria-hidden="true"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <polyline points="22 4 12 14.01 9 11.01" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 id="contact-success-heading" className="font-sora font-extrabold text-3xl text-brand-text mb-4">
            Message Sent! 🎉
          </h2>
          <p className="font-manrope text-slate-500 text-lg mb-8 leading-relaxed">
            Thank you for reaching out,{' '}
            <strong className="text-brand-text">{fields.fullName}</strong>. We'll
            review your project details and get back to you within 1 business day.
          </p>
          <button
            className="btn-primary mx-auto"
            onClick={() => { setSubmitted(false); setFields(INITIAL); setErrors({}); setTouched({}) }}
          >
            Send Another Message
          </button>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-light-bg"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div className="reveal">
            <span className="section-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.63 19.79 19.79 0 01.12 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
              Let's Talk
            </span>
            <h2
              id="contact-heading"
              className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-text mt-4 mb-6"
            >
              Start Your{' '}
              <span className="gradient-text">Project Today</span>
            </h2>
            <p className="text-slate-500 font-manrope text-lg leading-relaxed mb-10">
              Tell us about your vision and we'll put together a tailored proposal within 24 hours.
              No commitments, no pressure — just an honest conversation about what's possible.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#2563EB" strokeWidth="2"/>
                      <polyline points="22,6 12,13 2,6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hello@northpeak.digital',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.56a19.5 19.5 0 01-4.81-4.81 19.79 19.79 0 01-3.36-7.82A2 2 0 015.55 4h3a2 2 0 012 1.72c.13.96.34 1.9.64 2.81a2 2 0 01-.45 2.11L9.91 11.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.91.3 1.85.51 2.81.64A2 2 0 0122 18.92z" stroke="#2563EB" strokeWidth="2"/>
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+1 (555) 123-4567',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="2"/>
                      <polyline points="12 6 12 12 16 14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: 'Response time',
                  value: 'Within 24 business hours',
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-manrope mb-0.5">{label}</p>
                    <p className="text-brand-text font-manrope font-semibold text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal reveal-delay-2">
            <div className="bg-white rounded-2xl shadow-card p-8 lg:p-10 border border-slate-100">
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Project enquiry form"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor={ids.fullName} className="form-label">
                      Full Name <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id={ids.fullName}
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={touched.fullName && !!errors.fullName}
                      aria-describedby={errors.fullName ? ids.fullNameErr : undefined}
                      value={fields.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Jane Smith"
                      className={`form-input ${touched.fullName && errors.fullName ? 'error' : ''}`}
                    />
                    <FieldError id={ids.fullNameErr} message={touched.fullName && errors.fullName} />
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor={ids.email} className="form-label">
                      Email Address <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id={ids.email}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={errors.email ? ids.emailErr : undefined}
                      value={fields.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="jane@company.com"
                      className={`form-input ${touched.email && errors.email ? 'error' : ''}`}
                    />
                    <FieldError id={ids.emailErr} message={touched.email && errors.email} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor={ids.phone} className="form-label">
                      Phone Number <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id={ids.phone}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      aria-required="true"
                      aria-invalid={touched.phone && !!errors.phone}
                      aria-describedby={errors.phone ? ids.phoneErr : undefined}
                      value={fields.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+1 (555) 000-0000"
                      className={`form-input ${touched.phone && errors.phone ? 'error' : ''}`}
                    />
                    <FieldError id={ids.phoneErr} message={touched.phone && errors.phone} />
                  </div>

                  {/* Project Type */}
                  <div className="form-group">
                    <label htmlFor={ids.projectType} className="form-label">
                      Project Type <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <select
                      id={ids.projectType}
                      name="projectType"
                      required
                      aria-required="true"
                      aria-invalid={touched.projectType && !!errors.projectType}
                      aria-describedby={errors.projectType ? ids.projectTypeErr : undefined}
                      value={fields.projectType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input ${touched.projectType && errors.projectType ? 'error' : ''}`}
                    >
                      {PROJECT_TYPES.map(({ value, label }) => (
                        <option key={value} value={value} disabled={!value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <FieldError id={ids.projectTypeErr} message={touched.projectType && errors.projectType} />
                  </div>
                </div>

                {/* Message */}
                <div className="form-group mb-7">
                  <label htmlFor={ids.message} className="form-label">
                    Project Details <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <textarea
                    id={ids.message}
                    name="message"
                    required
                    aria-required="true"
                    aria-invalid={touched.message && !!errors.message}
                    aria-describedby={errors.message ? ids.messageErr : undefined}
                    value={fields.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={5}
                    className={`form-input resize-none ${touched.message && errors.message ? 'error' : ''}`}
                    style={{ minHeight: '120px' }}
                  />
                  <FieldError id={ids.messageErr} message={touched.message && errors.message} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn-primary w-full justify-center text-base"
                  disabled={submitting}
                  aria-disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                        <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400 font-manrope mt-4">
                  🔒 Your information is safe with us. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
