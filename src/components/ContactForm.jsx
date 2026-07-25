import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Clock, MapPin, Mail, Phone, Video, MessageCircle } from 'lucide-react'

export default function ContactForm() {
  const uid = useId()
  const [fields, setFields] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!fields.name.trim()) errs.name = 'Please enter your name.'
    if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!fields.message.trim()) errs.message = 'Please share some details about your project.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  const inputClass = (field) => `w-full bg-background border ${errors[field] ? 'border-red-400' : 'border-border/80'} rounded-xl px-4 py-3.5 text-text-primary font-manrope text-sm placeholder:text-text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none`

  return (
    <section id="contact" className="py-section-y bg-section-gray border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] text-text-primary tracking-tight leading-tight mb-4">
            Let's discuss your project.
          </h2>
          <p className="text-text-secondary font-manrope text-base sm:text-lg">
            No sales pressure. Just an honest conversation about your goals.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* LEFT: Contact Information */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Team placeholder */}
            <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-soft-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-900/20 border-2 border-card flex items-center justify-center text-[10px] font-bold text-blue-800">AS</div>
                  <div className="w-8 h-8 rounded-full bg-purple-900/20 border-2 border-card flex items-center justify-center text-[10px] font-bold text-purple-800">SC</div>
                  <div className="w-8 h-8 rounded-full bg-emerald-900/20 border-2 border-card flex items-center justify-center text-[10px] font-bold text-emerald-800">MJ</div>
                </div>
                <span className="text-sm font-bold text-text-primary">Our team is ready to help.</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-success/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-[11px] font-bold text-success">Usually replies within 2 hours</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="text-sm font-bold text-text-primary block mb-1">Business Hours</span>
                  <span className="text-sm text-text-secondary">Monday – Friday</span>
                  <span className="text-sm text-text-secondary block">9:00 AM – 6:00 PM (EST)</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-sm font-bold text-text-primary block mb-1">Office Location</span>
                  <span className="text-sm text-text-secondary">Remote-first team serving clients worldwide</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-sm font-bold text-text-primary block mb-1">Email</span>
                  <a href="mailto:hello@northpeakdigital.com" className="text-sm text-primary hover:underline">hello@northpeakdigital.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-sm font-bold text-text-primary block mb-1">Phone</span>
                  <a href="tel:+15551234567" className="text-sm text-primary hover:underline">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary shrink-0">
                  <Video size={18} />
                </div>
                <div>
                  <span className="text-sm font-bold text-text-primary block mb-1">Schedule a Call</span>
                  <span className="text-sm text-text-secondary">Book a 30-minute Google Meet call directly.</span>
                  <a href="#" className="text-sm text-primary font-bold hover:underline block mt-1">Open Calendly →</a>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border/60 rounded-2xl p-8 sm:p-10 shadow-soft-sm">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    noValidate
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor={`${uid}-name`} className="text-xs font-bold text-text-primary uppercase tracking-wider">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input 
                          id={`${uid}-name`} 
                          type="text"
                          placeholder="Your full name"
                          className={inputClass('name')}
                          value={fields.name}
                          onChange={e => setFields({...fields, name: e.target.value})}
                          aria-required="true"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <span className="text-xs text-red-500 font-medium" role="alert">{errors.name}</span>}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor={`${uid}-email`} className="text-xs font-bold text-text-primary uppercase tracking-wider">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input 
                          id={`${uid}-email`} 
                          type="email"
                          placeholder="you@company.com"
                          className={inputClass('email')}
                          value={fields.email}
                          onChange={e => setFields({...fields, email: e.target.value})}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && <span className="text-xs text-red-500 font-medium" role="alert">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor={`${uid}-company`} className="text-xs font-bold text-text-primary uppercase tracking-wider">
                        Company <span className="text-text-muted">(Optional)</span>
                      </label>
                      <input 
                        id={`${uid}-company`} 
                        type="text"
                        placeholder="Your company name"
                        className={inputClass('company')}
                        value={fields.company}
                        onChange={e => setFields({...fields, company: e.target.value})}
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor={`${uid}-message`} className="text-xs font-bold text-text-primary uppercase tracking-wider">
                        Project Details <span className="text-red-400">*</span>
                      </label>
                      <textarea 
                        id={`${uid}-message`} 
                        rows={5}
                        placeholder="Tell us about your project, timeline, and goals..."
                        className={`${inputClass('message')} resize-none`}
                        value={fields.message}
                        onChange={e => setFields({...fields, message: e.target.value})}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <span className="text-xs text-red-500 font-medium" role="alert">{errors.message}</span>}
                    </div>

                    {/* Submit */}
                    <button 
                      type="submit" 
                      className="w-full btn-primary py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 mt-2"
                      disabled={submitting}
                    >
                      {submitting ? 'Sending...' : 'Send Inquiry'}
                    </button>

                    <p className="text-center text-[11px] text-text-muted font-manrope mt-3">
                      We respond to every inquiry within two business hours.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-success/15 flex items-center justify-center text-success mb-6">
                      <Check size={24} className="stroke-[3]" />
                    </div>
                    <h3 className="font-manrope text-xl font-extrabold text-text-primary mb-3">Thank you for reaching out.</h3>
                    <p className="font-manrope text-sm text-text-secondary mb-8 max-w-sm leading-relaxed">
                      We've received your inquiry and a member of our team will respond within two hours during business hours. We look forward to learning about your project.
                    </p>
                    <button onClick={() => { setSubmitted(false); setFields({ name: '', email: '', company: '', message: '' }) }} className="btn-secondary py-2.5 px-6 text-xs rounded-xl">
                      Send another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
