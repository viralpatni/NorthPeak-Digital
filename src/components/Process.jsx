import { motion } from 'framer-motion'
import { Search, Map, PenTool, Code, CheckCircle, Rocket, TrendingUp } from 'lucide-react'

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery",
    duration: "1 Week",
    icon: <Search size={20} />,
    deliverables: ["Requirements", "Research", "Stakeholder Interviews"]
  },
  {
    num: "02",
    title: "Strategy",
    duration: "3–5 Days",
    icon: <Map size={20} />,
    deliverables: ["Roadmap", "Architecture", "Technology Selection"]
  },
  {
    num: "03",
    title: "Design",
    duration: "1–2 Weeks",
    icon: <PenTool size={20} />,
    deliverables: ["Wireframes", "UI Design", "Prototype"]
  },
  {
    num: "04",
    title: "Development",
    duration: "2–8 Weeks",
    icon: <Code size={20} />,
    deliverables: ["Frontend", "Backend", "CMS", "Testing"]
  },
  {
    num: "05",
    title: "QA",
    duration: "1 Week",
    icon: <CheckCircle size={20} />,
    deliverables: ["Performance", "Accessibility", "Cross-browser", "Security"]
  },
  {
    num: "06",
    title: "Launch",
    duration: "2 Days",
    icon: <Rocket size={20} />,
    deliverables: ["Deployment", "Monitoring", "Documentation", "Training"]
  },
  {
    num: "07",
    title: "Growth",
    duration: "Ongoing",
    icon: <TrendingUp size={20} />,
    deliverables: ["SEO", "Analytics", "Optimization", "Support"]
  }
]

export default function Process() {
  return (
    <section id="process" className="py-section-y bg-section-gray border-t border-border/40 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-[700px] mb-20">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
              Our Methodology
            </span>
          </div>
          <h2 className="font-manrope font-extrabold text-[36px] sm:text-[48px] text-text-primary tracking-tight leading-tight">
            A proven engineering process.
          </h2>
          <p className="text-text-secondary font-manrope text-base sm:text-lg mt-4 max-w-[600px]">
            We follow a rigorous, transparent workflow from discovery to launch, ensuring predictable timelines and exceptional quality.
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-border/60 z-0" />
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 overflow-x-auto pb-8 snap-x">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[280px] bg-card border border-border/60 rounded-3xl p-6 shadow-soft-sm flex flex-col snap-start hover:-translate-y-1 transition-transform"
              >
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-manrope font-extrabold text-[40px] leading-none text-text-muted/30">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-background border border-border/40 flex items-center justify-center text-primary shadow-sm">
                    {step.icon}
                  </div>
                </div>

                {/* Title & Duration */}
                <div className="mb-6">
                  <h3 className="font-manrope font-extrabold text-xl text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary text-[11px] font-bold text-text-secondary uppercase tracking-wide">
                    {step.duration}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mt-auto pt-6 border-t border-border/40">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-3">Deliverables</span>
                  <ul className="space-y-2">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                        <span className="w-1 h-1 rounded-full bg-primary/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
