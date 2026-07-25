import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true)
    }
  }

  return (
    <section className="py-20 sm:py-24 bg-background border-t border-border/40">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="font-manrope font-extrabold text-[28px] sm:text-[36px] text-text-primary tracking-tight leading-tight mb-4">
          Stay Updated
        </h2>
        <p className="text-text-secondary font-manrope text-base sm:text-lg mb-8 max-w-lg mx-auto">
          Receive practical insights on web development, design systems, SEO, and product strategy.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
            <input 
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-card border border-border/80 rounded-xl px-5 py-3.5 text-text-primary font-manrope text-sm placeholder:text-text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="btn-primary px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shrink-0">
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        ) : (
          <div className="bg-success/10 border border-success/20 rounded-xl px-6 py-4 max-w-md mx-auto">
            <p className="text-success font-manrope font-bold text-sm">You're subscribed. Welcome aboard.</p>
          </div>
        )}

        <p className="text-[11px] text-text-muted font-manrope mt-4">
          No spam. Unsubscribe anytime.
        </p>

      </div>
    </section>
  )
}
