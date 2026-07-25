import { useCountUp } from '../hooks/useAnimations'

const STATS = [
  { value: '150+', numeric: 150, label: 'Projects Delivered', suffix: '+', description: 'Across industries worldwide' },
  { value: '98%', numeric: 98, label: 'Client Satisfaction', suffix: '%', description: 'Based on post-project surveys' },
  { value: '12+', numeric: 12, label: 'Countries Served', suffix: '+', description: 'Global reach, local care' },
  { value: '5+', numeric: 5, label: 'Years Experience', suffix: '+', description: 'Refined expertise and craft' },
]

function StatCounter({ stat }) {
  const ref = useCountUp(stat.value, 2000)

  return (
    <div className="text-center px-6 py-2">
      <div
        ref={ref}
        className="stat-number"
        aria-label={`${stat.value} ${stat.label}`}
      >
        0{stat.suffix}
      </div>
      <p className="font-sora font-bold text-white text-lg mt-1 mb-1">{stat.label}</p>
      <p className="text-slate-400 font-manrope text-sm">{stat.description}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-24 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #111827 50%, #0F172A 100%)' }}
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label border-white/20 text-slate-300" style={{ background: 'rgba(255,255,255,0.06)' }}>
            By the Numbers
          </span>
          <h2
            id="stats-heading"
            className="font-sora font-extrabold text-3xl sm:text-4xl text-white mt-4 mb-4"
          >
            Results That{' '}
            <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-slate-400 font-manrope text-lg max-w-xl mx-auto">
            Our track record is built on measurable outcomes, not just great-looking websites.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 reveal">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} relative`}
            >
              {/* Divider between stats (desktop only) */}
              {i > 0 && (
                <div
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-20 w-px bg-white/10"
                  aria-hidden="true"
                />
              )}
              <StatCounter stat={stat} />
            </div>
          ))}
        </div>

        {/* Trust logos row */}
        <div className="mt-20 reveal">
          <p className="text-center text-slate-500 font-manrope text-sm mb-8 tracking-wider uppercase">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-40">
            {['Acme Corp', 'Zenith Labs', 'Pulse Media', 'Nova Tech', 'Vertex Co'].map((name) => (
              <span
                key={name}
                className="text-slate-300 font-sora font-bold text-lg tracking-tight whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
