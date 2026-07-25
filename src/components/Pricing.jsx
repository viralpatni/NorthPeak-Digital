const CHECK_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
    <circle cx="12" cy="12" r="10" fill="rgba(37,99,235,0.15)"/>
    <path d="M9 12l2 2 4-4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CHECK_ICON_LIGHT = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
    <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.15)"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$2,499',
    period: 'one-time',
    tagline: 'Perfect for early-stage businesses.',
    featured: false,
    cta: 'Get Started',
    ctaHref: '#contact',
    features: [
      '5-page custom website',
      'Responsive design',
      'SEO foundation setup',
      'Contact form integration',
      '3 rounds of revisions',
      '30-day post-launch support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$5,999',
    period: 'one-time',
    tagline: 'Our most popular package for scaling teams.',
    featured: true,
    cta: 'Start Your Project',
    ctaHref: '#contact',
    features: [
      'Up to 15 custom pages',
      'Advanced UI/UX design',
      'Full SEO optimization',
      'Performance optimization',
      'CMS integration',
      'Analytics dashboard setup',
      '90-day priority support',
      'Quarterly performance review',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored',
    tagline: 'Full-scale solutions for complex organisations.',
    featured: false,
    cta: 'Book a Strategy Call',
    ctaHref: '#contact',
    features: [
      'Unlimited pages',
      'Custom web application',
      'E-commerce development',
      'Dedicated project manager',
      'API & third-party integrations',
      'Ongoing maintenance retainer',
      'SLA-backed support',
      'Quarterly strategy sessions',
    ],
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 bg-light-bg"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            Transparent Pricing
          </span>
          <h2
            id="pricing-heading"
            className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-text mt-4 mb-4"
          >
            Simple, Honest{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-500 font-manrope text-lg max-w-xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your ambitions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {TIERS.map((tier, i) => (
            <article
              key={tier.id}
              id={`pricing-${tier.id}`}
              className={`pricing-card reveal reveal-delay-${i + 1} ${tier.featured ? 'featured' : ''}`}
            >
              {/* Most popular badge */}
              {tier.featured && (
                <div className="popular-badge" aria-label="Most popular plan">
                  ⭐ Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3
                className={`font-sora font-bold text-xl mb-1 ${tier.featured ? 'text-white' : 'text-brand-text'}`}
              >
                {tier.name}
              </h3>
              <p className={`font-manrope text-sm mb-6 ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                {tier.tagline}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span
                  className={`font-sora font-extrabold text-4xl lg:text-5xl ${
                    tier.featured ? 'text-white' : 'text-brand-text'
                  }`}
                >
                  {tier.price}
                </span>
                {tier.price !== 'Custom' && (
                  <span className={`font-manrope text-sm ml-2 ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {tier.period}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${tier.featured ? 'bg-white/10' : 'bg-slate-200'}`} />

              {/* Features */}
              <ul className="space-y-3 mb-8" aria-label={`${tier.name} features`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-manrope text-sm">
                    {tier.featured ? CHECK_ICON_LIGHT : CHECK_ICON}
                    <span className={tier.featured ? 'text-slate-300' : 'text-slate-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={tier.ctaHref}
                id={`pricing-cta-${tier.id}`}
                className={
                  tier.featured
                    ? 'btn-primary w-full justify-center text-sm'
                    : 'block text-center py-3.5 px-6 rounded-xl border-2 border-slate-200 font-manrope font-700 font-bold text-sm text-brand-text hover:border-primary hover:text-primary transition-colors duration-200 min-h-[44px]'
                }
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Guarantee strip */}
        <div className="mt-16 reveal text-center">
          <p className="text-slate-500 font-manrope text-sm flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#2563EB" strokeWidth="2"/>
            </svg>
            All plans include a&nbsp;<strong className="text-brand-text">30-day money-back guarantee</strong>. No questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
