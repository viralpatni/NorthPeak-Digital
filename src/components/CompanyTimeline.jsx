import { motion } from 'framer-motion'

const TIMELINE_DATA = [
  { year: "2021", title: "NorthPeak Founded", desc: "Started as a dedicated engineering studio focusing on performant React architectures." },
  { year: "2022", title: "First 50 Successful Projects", desc: "Achieved a 100% success rate delivering early-stage startup platforms." },
  { year: "2023", title: "Expanded Internationally", desc: "Opened operations in Europe and North America to serve a global client base." },
  { year: "2024", title: "Enterprise Engineering", desc: "Began scaling monolithic systems and delivering robust microservice architectures." },
  { year: "2025", title: "250+ Projects Delivered", desc: "Crossed the milestone while maintaining a 98% client satisfaction rate." },
  { year: "2026", title: "AI & Transformation Studio", desc: "Launched dedicated teams for enterprise AI integration and automation." }
]

export default function CompanyTimeline() {
  return (
    <section className="py-section-y bg-background border-t border-border/40 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-[700px] mb-24">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
              Brand History
            </span>
          </div>
          <h2 className="font-manrope font-extrabold text-[36px] sm:text-[44px] text-text-primary tracking-tight leading-tight">
            A proven track record of engineering excellence.
          </h2>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Main Horizontal Line */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-border/60" />

          <div className="flex flex-col md:flex-row gap-8 md:gap-4 overflow-x-auto pb-8 snap-x">
            {TIMELINE_DATA.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex-shrink-0 w-full md:w-[260px] snap-start"
              >
                {/* Year Marker */}
                <div className="flex items-center gap-4 md:block md:space-y-6 mb-4 md:mb-0">
                  <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-text-primary font-manrope font-extrabold shadow-sm shrink-0">
                    {item.year.slice(2)}'
                  </div>
                  <div className="md:mt-6">
                    <span className="text-sm font-extrabold text-primary mb-2 block">{item.year}</span>
                    <h4 className="font-manrope font-bold text-lg text-text-primary mb-2 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed pr-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
