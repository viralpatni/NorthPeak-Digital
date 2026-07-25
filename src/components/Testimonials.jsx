import { motion } from 'framer-motion'
import { BadgeCheck, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: "We reduced our bounce rate by 34% and doubled qualified leads within six months of launching the new platform. Their engineering approach is incredibly rigorous.",
    name: 'Eleanor Vance',
    role: 'VP of Product',
    company: 'FinTech Solutions',
    industry: 'Financial Services',
    country: 'United Kingdom',
    initials: 'EV',
    color: 'bg-blue-900/20 text-blue-800'
  },
  {
    quote: "Our platform now loads in under one second, and our conversion rate increased by 58%. NorthPeak became part of our internal team rather than an external agency.",
    name: 'David Chen',
    role: 'Founder & CEO',
    company: 'Lumina Labs',
    industry: 'SaaS',
    country: 'United States',
    initials: 'DC',
    color: 'bg-emerald-900/20 text-emerald-800'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-section-y bg-section-lavender border-t border-border/40 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
              Client Outcomes
            </span>
          </div>
          <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] text-text-primary tracking-tight leading-tight mb-4">
            Don't just take our word for it.
          </h2>
          <p className="text-text-secondary font-manrope text-base sm:text-lg">
            We judge our success by the measurable business growth of our partners.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border/60 rounded-3xl p-8 sm:p-10 relative flex flex-col justify-between shadow-soft-sm hover:shadow-soft-md transition-all duration-300"
            >
              {/* 5-Star Rating */}
              <div className="flex items-center gap-1 mb-6 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="font-manrope text-text-primary text-lg sm:text-xl leading-relaxed mb-10 font-semibold">
                "{t.quote}"
              </p>
              
              <div className="flex items-start justify-between border-t border-border/40 pt-6">
                <div className="flex items-center gap-4">
                  {/* Portrait Placeholder */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-manrope font-extrabold text-sm shadow-sm ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-manrope font-bold text-text-primary text-base leading-none mb-1.5 flex items-center gap-1.5">
                      {t.name}
                    </h4>
                    <p className="font-manrope text-[13px] font-semibold text-text-secondary mb-1">{t.role}, {t.company}</p>
                    <p className="font-manrope text-[11px] font-bold text-text-muted uppercase tracking-wider">
                      {t.industry} • {t.country}
                    </p>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-success/10 rounded-full text-[11px] font-manrope font-extrabold text-success uppercase tracking-wider shrink-0 mt-1">
                  <BadgeCheck size={14} />
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
