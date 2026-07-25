const TESTIMONIALS = [
  {
    id: 'testimonial-sarah',
    initials: 'SJ',
    name: 'Sarah Johnson',
    company: 'Founder, Lumina Brands',
    avatarGradient: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
    quote:
      "NorthPeak didn't just build us a website — they built us a growth engine. Our conversion rate tripled in the first three months, and the team's attention to detail was extraordinary.",
    rating: 5,
    metric: '+312% Conversions',
  },
  {
    id: 'testimonial-marcus',
    initials: 'MT',
    name: 'Marcus Trent',
    company: 'CTO, Pulse Analytics',
    avatarGradient: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
    quote:
      "The performance optimization work alone paid for itself within weeks. Our Lighthouse score went from 42 to 98, and bounce rate dropped by 40%. These guys are the real deal.",
    rating: 5,
    metric: '98 Lighthouse Score',
  },
  {
    id: 'testimonial-aisha',
    initials: 'AO',
    name: 'Aisha Owusu',
    company: 'CEO, Solara Commerce',
    avatarGradient: 'linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)',
    quote:
      "From the very first call, NorthPeak understood exactly what our e-commerce brand needed. The final product exceeded every expectation — beautiful, fast, and revenue-generating from day one.",
    rating: 5,
    metric: '2x Revenue in Q1',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #111827 100%)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label border-white/20 text-slate-300" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-4"
          >
            Loved by{' '}
            <span className="gradient-text">Founders</span>{' '}
            Worldwide
          </h2>
          <p className="text-slate-400 font-manrope text-lg max-w-xl mx-auto">
            Don't take our word for it — hear from the founders and teams we've helped grow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.id}
              id={t.id}
              className={`testimonial-card reveal reveal-delay-${i + 1} flex flex-col`}
            >
              <StarRating count={t.rating} />

              {/* Quote */}
              <blockquote className="text-slate-300 font-manrope text-sm leading-relaxed flex-1 mb-6">
                <span className="text-2xl text-primary font-sora leading-none" aria-hidden="true">"</span>
                {t.quote}
                <span className="text-2xl text-primary font-sora leading-none" aria-hidden="true">"</span>
              </blockquote>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 mb-5 self-start">
                <div className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-accent text-xs font-manrope font-bold">{t.metric}</span>
              </div>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div
                  className="avatar"
                  style={{ background: t.avatarGradient }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-sora font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 font-manrope text-xs">{t.company}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
