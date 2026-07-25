import { motion } from 'framer-motion'

export default function WhyClientsStay() {
  const stats = [
    { value: "91%", label: "Repeat Clients" },
    { value: "98%", label: "On-Time Delivery" },
    { value: "3.8", suffix: "YRS", label: "Average Partnership" },
    { value: "82", label: "Net Promoter Score" },
    { value: "96%", label: "Support Satisfaction" }
  ]

  return (
    <section className="py-section-y bg-section-blue border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Text */}
          <div className="lg:w-1/3 shrink-0">
            <div className="inline-flex items-center gap-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-manrope font-extrabold tracking-wider text-text-secondary uppercase">
                Long-Term Vision
              </span>
            </div>
            <h2 className="font-manrope font-extrabold text-[36px] sm:text-[44px] text-text-primary tracking-tight leading-[1.1] mb-6">
              Why our clients stay.
            </h2>
            <p className="text-text-secondary font-manrope text-base sm:text-lg leading-relaxed">
              We do not treat engineering as a one-time transaction. We believe the true value of software is realized after it launches. By acting as an extension of your team, we focus on continuous optimization, rigorous maintenance, and long-term business growth rather than simply delivering code and moving on.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:w-2/3 w-full grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-manrope font-extrabold text-5xl sm:text-6xl text-primary tracking-tighter">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-sm font-bold text-text-secondary mb-2">{stat.suffix}</span>
                  )}
                </div>
                <span className="text-sm font-bold text-text-primary uppercase tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  )
}
