const SERVICES = [
  {
    id: 'custom-website',
    title: 'Custom Website Development',
    description: 'Hand-crafted, performant websites built for your unique business needs.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 8l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, user-first interfaces that convert visitors into loyal customers.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    description: 'High-converting online stores with seamless checkout experiences.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.08)',
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies that drive organic traffic and top rankings.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: '#0EA5E9',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Sub-second load times and perfect Core Web Vitals for every platform.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Proactive monitoring, updates, and 24/7 support to keep you online.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-light-bg"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            What We Do
          </span>
          <h2
            id="services-heading"
            className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-text mt-4 mb-4"
          >
            Services Built for{' '}
            <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-slate-500 font-manrope text-lg max-w-2xl mx-auto">
            From concept to conversion, we deliver end-to-end digital solutions
            engineered for performance and results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              id={`service-${service.id}`}
              className={`service-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: service.bg, color: service.color }}
              >
                {service.icon}
              </div>

              <h3 className="font-sora font-bold text-lg text-brand-text mb-2">
                {service.title}
              </h3>
              <p className="text-slate-500 font-manrope text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow link */}
              <div className="mt-5 flex items-center gap-2 font-manrope font-600 text-sm" style={{ color: service.color }}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
