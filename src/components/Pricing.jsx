import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const TIERS = [
  {
    name: 'Starter',
    price: '$3,000',
    ideal: 'Early-stage startups launching their first digital product.',
    features: [
      'Custom React frontend',
      'Fully responsive design',
      'Core Web Vitals optimization',
      'Technical SEO foundation',
      'Contact form integration',
      '30-day post-launch support'
    ],
    support: 'Email support, 48h response',
    scope: 'Single-page or landing page',
    timeline: '3–4 weeks',
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Growth',
    price: '$8,000',
    ideal: 'Scaling businesses ready to invest in a serious digital platform.',
    features: [
      'Up to 10 custom pages',
      'Headless CMS integration',
      'Advanced UI microinteractions',
      'Comprehensive SEO audit & setup',
      'Performance monitoring dashboard',
      'Analytics & conversion tracking',
      'Blog or content architecture',
      '60-day post-launch support'
    ],
    support: 'Priority email & calls, 12h response',
    scope: 'Multi-page platform with CMS',
    timeline: '6–8 weeks',
    cta: 'Book a Strategy Call',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    ideal: 'Established companies needing bespoke web applications at scale.',
    features: [
      'Unlimited page architecture',
      'Full-stack application backend',
      'Custom design system & tokens',
      'Dedicated engineering team',
      'API integrations & automation',
      'Role-based access & authentication',
      '24/7 SLA server support',
      'Ongoing maintenance retainer'
    ],
    support: 'Dedicated account manager, 2h SLA',
    scope: 'Full-stack web application',
    timeline: '8–16 weeks',
    cta: 'Contact Sales',
    popular: false
  }
]

const PRICING_FAQS = [
  {
    q: "Do you require payment upfront?",
    a: "We typically structure payments in milestones: 40% at project start, 30% at design approval, and 30% at launch. Enterprise projects have custom payment schedules."
  },
  {
    q: "What if the project scope changes?",
    a: "Scope changes are natural. We handle them transparently with documented change requests that outline the additional time and cost before any work begins."
  },
  {
    q: "Is there a money-back guarantee?",
    a: "We offer a risk-free initial consultation. If after our discovery session you decide not to proceed, there is no charge. Once development begins, milestone payments are non-refundable but fully protected by our delivery guarantee."
  },
  {
    q: "Can I upgrade my plan mid-project?",
    a: "Absolutely. Many clients start with Starter or Growth and expand scope as they see results. We'll adjust the proposal and timeline accordingly."
  }
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section id="pricing" className="py-section-y bg-background border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-[700px] mb-20">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
              Investment
            </span>
          </div>
          <h2 className="font-manrope font-extrabold text-[36px] sm:text-[44px] text-text-primary tracking-tight leading-tight">
            Simple, transparent pricing.
          </h2>
          <p className="text-text-secondary font-manrope text-base sm:text-lg mt-4 max-w-[600px]">
            No hidden costs. Every proposal is tailored to your project. Choose a starting point, and we'll scope the rest together.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col p-8 sm:p-10 rounded-3xl bg-card border transition-all duration-300 ${
                tier.popular 
                  ? 'border-primary shadow-soft-md relative' 
                  : 'border-border/60 shadow-soft-sm hover:border-border'
              }`}
            >
              {/* Most Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-8">
                  <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-manrope font-extrabold text-xl text-text-primary mb-2 mt-2">
                {tier.name}
              </h3>
              <p className="text-text-secondary font-manrope text-sm leading-relaxed mb-6">
                {tier.ideal}
              </p>

              {/* Price */}
              <div className="flex items-baseline text-text-primary font-manrope mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-xs text-text-secondary font-semibold ml-2">/project</span>}
              </div>

              {/* Project Details */}
              <div className="space-y-3 mb-8 pb-6 border-b border-border/40">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted font-semibold">Scope</span>
                  <span className="text-text-primary font-bold">{tier.scope}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted font-semibold">Timeline</span>
                  <span className="text-text-primary font-bold">{tier.timeline}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted font-semibold">Support</span>
                  <span className="text-text-primary font-bold text-right max-w-[180px]">{tier.support}</span>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                      <Check size={12} className="stroke-[2.5]" />
                    </div>
                    <span className="font-manrope text-sm text-text-secondary leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {tier.popular ? (
                <a href="#contact" className="btn-primary w-full text-sm font-semibold py-3.5 rounded-xl">
                  {tier.cta}
                </a>
              ) : (
                <a href="#contact" className="btn-secondary w-full text-sm font-semibold py-3.5 rounded-xl">
                  {tier.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Transparent Pricing Note */}
        <div className="text-center mb-24">
          <p className="text-sm text-text-secondary font-manrope">
            <span className="font-bold text-text-primary">Risk-free consultation.</span> If our discovery session doesn't feel like the right fit, there's no charge. No sales pressure.
          </p>
        </div>

        {/* Frequently Asked Pricing Questions */}
        <div className="max-w-[800px] mx-auto">
          <h3 className="font-manrope font-extrabold text-2xl text-text-primary mb-8">
            Frequently Asked Pricing Questions
          </h3>
          <div className="space-y-3">
            {PRICING_FAQS.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} className="bg-card rounded-2xl border border-border/60 overflow-hidden shadow-soft-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <span className="font-manrope font-bold text-base text-text-primary pr-8">
                      {faq.q}
                    </span>
                    <ChevronDown size={18} className={`text-text-secondary flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 font-manrope text-sm text-text-secondary leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
