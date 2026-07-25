import { motion } from 'framer-motion'

// Trust Strip metrics
const TRUST_METRICS = [
  { val: "250+", label: "Projects Delivered" },
  { val: "98%", label: "Client Satisfaction" },
  { val: "18", label: "Countries" },
  { val: "12+", label: "Years Combined Experience" },
  { val: "99", label: "Average Lighthouse Score" },
  { val: "+61%", label: "Average SEO Improvement" }
]

// Tech Stack
const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "Tailwind CSS", 
  "Prisma", "PostgreSQL", "Supabase", "MongoDB", "AWS", "Docker", 
  "Stripe", "Clerk", "Vercel"
]

// Philosophy Cards
const PHILOSOPHIES = [
  {
    title: "Engineering Before Aesthetics",
    desc: "Every visual decision should improve usability. We build the architecture first, then design the experience around it."
  },
  {
    title: "Performance Before Complexity",
    desc: "Fast, reliable products outperform complicated ones. We ruthlessly eliminate unnecessary dependencies and bloat."
  },
  {
    title: "Partnership Before Projects",
    desc: "We work with clients, not for clients. Our best outcomes come from long-term relationships built on transparency."
  },
  {
    title: "Results Before Recognition",
    desc: "Business growth matters more than awards. We measure success by the measurable outcomes we deliver."
  }
]

export default function BrandFoundation() {
  return (
    <section className="bg-background py-section-y border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        {/* Social Proof Trust Strip */}
        <div className="py-12 border-b border-border/40">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-manrope font-extrabold text-2xl text-text-primary mb-1">{metric.val}</span>
                <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Quote */}
        <div className="py-32 flex justify-center text-center">
          <div className="max-w-3xl">
            <h2 className="font-manrope font-extrabold text-[28px] sm:text-[36px] lg:text-[44px] text-text-primary leading-[1.2] mb-12 tracking-tight">
              "Beautiful interfaces capture attention.<br/>
              <span className="text-text-secondary">Engineered digital experiences build businesses.</span><br/>
              Every project begins with strategy and ends with measurable growth."
            </h2>
            <div className="flex flex-col items-center">
              <span className="font-manrope font-extrabold text-lg text-text-primary">Founder</span>
              <span className="text-sm font-semibold text-text-secondary">NorthPeak Digital</span>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="py-24 border-y border-border/40">
          <div className="text-center mb-12">
            <h3 className="font-manrope font-extrabold text-xl text-text-primary mb-2">Technologies We Build With</h3>
            <p className="text-sm font-semibold text-text-secondary">Enterprise-grade tools for scalable architecture.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {TECH_STACK.map((tech, idx) => (
              <div key={idx} className="px-5 py-2.5 rounded-full border border-border/60 bg-card/30 text-sm font-bold text-text-primary shadow-soft-sm hover:shadow-soft-md transition-shadow">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* The NorthPeak Principles */}
        <div className="pt-32">
          <div className="mb-16">
            <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] text-text-primary tracking-tight">
              The NorthPeak Principles
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {PHILOSOPHIES.map((item, idx) => (
              <div key={idx} className="bg-card border border-border/60 p-10 rounded-3xl shadow-soft-md flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-manrope font-extrabold text-2xl text-text-primary mb-6 pr-4">{item.title}</h3>
                <p className="text-text-secondary font-manrope text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
