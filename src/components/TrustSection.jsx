import { motion } from 'framer-motion'

export default function TrustSection() {
  const metrics = [
    { value: "250+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "18", label: "Countries Served" },
    { value: "12+", label: "Years Combined Experience" },
    { value: "40M+", label: "Revenue Influenced" },
    { value: "24/7", label: "Enterprise Support" },
    { value: "99", label: "Average Lighthouse" },
    { value: "61%", label: "Average SEO Improvement" },
    { value: "37%", label: "Average Conversion Increase" }
  ]

  return (
    <section className="py-section-y bg-background border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] text-text-primary tracking-tight leading-tight">
            Trusted by Ambitious Businesses Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 justify-center flex-wrap">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-card border border-border/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-soft-sm hover:shadow-soft-md transition-shadow"
            >
              <span className="font-manrope font-extrabold text-3xl sm:text-4xl text-text-primary mb-2 block">
                {metric.value}
              </span>
              <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider block">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
