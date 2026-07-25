import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-section-y bg-background border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Editorial Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-manrope font-extrabold tracking-wider text-text-secondary uppercase">
                Our Foundation
              </span>
            </div>
            
            <h2 className="font-manrope font-extrabold text-[36px] sm:text-[44px] text-text-primary tracking-tight leading-[1.1] mb-8">
              Why Growing Businesses Choose NorthPeak
            </h2>
            
            <div className="space-y-6 text-text-secondary font-manrope text-base sm:text-lg leading-relaxed">
              <p>
                We started NorthPeak with a simple observation: beautiful design is often hindered by poor engineering, and robust engineering is often plagued by confusing design. We bridge that gap.
              </p>
              <p>
                Our mission is to help ambitious companies build digital products that scale flawlessly. We don't just deliver code; we become your dedicated engineering partner, aligning every technical decision with your business objectives.
              </p>
              <div className="pt-4 pb-2">
                <h4 className="text-text-primary font-extrabold text-lg mb-3">Core Principles</h4>
                <ul className="space-y-3">
                  {['Business-first architecture', 'Radical transparency', 'Long-term partnerships', 'Performance obsessed'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded bg-secondary flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: Engineering Workflow Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-card border border-border/60 rounded-[32px] p-8 sm:p-12 shadow-soft-sm"
          >
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider">The NorthPeak Workflow</span>
            </div>

            <div className="relative max-w-sm mx-auto">
              {/* Connecting Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2 z-0" />
              
              {/* Steps */}
              <div className="relative z-10 space-y-4">
                {[
                  "Business Discovery",
                  "Research",
                  "UX Strategy",
                  "Wireframes",
                  "Development",
                  "Testing",
                  "Launch",
                  "Growth"
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center group">
                    <div className="bg-background border border-border/80 rounded-xl py-2.5 px-6 shadow-sm w-48 text-center transition-colors group-hover:border-primary/50 group-hover:bg-primary/5">
                      <span className="font-manrope font-bold text-sm text-text-primary group-hover:text-primary transition-colors">{step}</span>
                    </div>
                    {/* Down arrow indicator except on last item */}
                    {idx < 7 && (
                      <div className="h-4 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-border">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  )
}
