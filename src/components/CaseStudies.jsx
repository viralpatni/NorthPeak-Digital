import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CASE_STUDIES = [
  {
    company: "FinEdge Capital",
    industry: "FinTech",
    problem: "Legacy platform struggling with latency during high-volume trading hours.",
    approach: "Decoupled architecture using Next.js on the edge with a high-performance Rust backend.",
    solution: "Modern React + Node platform",
    results: [
      { val: "217%", label: "Organic Traffic" },
      { val: "3x", label: "Faster Load Speed" },
      { val: "61%", label: "Higher Conversions" }
    ],
    bg: "bg-section-blue"
  },
  {
    company: "Nova Logistics",
    industry: "Supply Chain",
    problem: "Manual operations and disjointed tracking systems slowing down delivery routing.",
    approach: "Built a centralized, real-time dashboard unifying three separate APIs into a single view.",
    solution: "Internal dashboard",
    results: [
      { val: "42%", label: "Faster Operations" },
      { val: "99", label: "Lighthouse Score" },
      { val: "68%", label: "Lower Support Tickets" }
    ],
    bg: "bg-section-lavender"
  },
  {
    company: "Bloom Commerce",
    industry: "Retail",
    problem: "Poor ecommerce conversion rates on mobile devices due to bloated template.",
    approach: "Implemented a headless Shopify integration prioritizing mobile-first layout and instant page loads.",
    solution: "Headless commerce website",
    results: [
      { val: "92%", label: "Revenue Growth" },
      { val: "58%", label: "Conversion Increase" },
      { val: "4.9", label: "Customer Rating" }
    ],
    bg: "bg-section-gray"
  }
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-section-y bg-background border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-1.5 mb-4">
              <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
                Featured Work
              </span>
            </div>
            <h2 className="font-manrope font-extrabold text-[36px] sm:text-[44px] text-text-primary tracking-tight leading-tight">
              Engineering business growth.
            </h2>
          </div>
          <a href="#all-work" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all shrink-0 pb-2">
            View All Case Studies <ArrowRight size={16} />
          </a>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              
              {/* Thumbnail Area (Left) */}
              <div className={`lg:col-span-6 w-full h-[350px] sm:h-[450px] ${study.bg} rounded-[32px] border border-border/60 p-8 flex flex-col justify-between overflow-hidden relative transition-transform duration-500 group-hover:scale-[1.02]`}>
                <div className="flex justify-between items-start z-10 relative">
                  <span className="px-3 py-1 rounded-full bg-background border border-border/60 text-xs font-bold text-text-primary">
                    {study.industry}
                  </span>
                </div>
                
                {/* Abstract UI Representation */}
                <div className="absolute -bottom-12 -right-12 w-[120%] h-[80%] bg-card rounded-t-3xl border border-border/50 shadow-soft-lg p-6 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <div className="h-4 w-1/3 bg-secondary rounded mb-2" />
                  <div className="h-4 w-1/2 bg-secondary rounded" />
                </div>
              </div>

              {/* Content Area (Right) */}
              <div className="lg:col-span-6 flex flex-col">
                <h3 className="font-manrope font-extrabold text-[32px] text-text-primary mb-6">
                  {study.company}
                </h3>
                
                <div className="space-y-6 mb-10">
                  <div>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Challenge</span>
                    <p className="text-text-secondary font-manrope text-sm leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Approach</span>
                    <p className="text-text-secondary font-manrope text-sm leading-relaxed">{study.approach}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Solution</span>
                    <p className="font-manrope font-bold text-text-primary text-sm">{study.solution}</p>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="pt-8 border-t border-border/40 grid grid-cols-3 gap-4">
                  {study.results.map((res, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="font-manrope font-extrabold text-2xl sm:text-3xl text-primary mb-1">{res.val}</span>
                      <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{res.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
