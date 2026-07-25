import { motion } from 'framer-motion'
import { Server, Database, Code, Cloud, Layout, Zap } from 'lucide-react'

const TECH_DATA = [
  { tech: "React", icon: <Code size={20} />, reason: "Component-driven interfaces", desc: "Allows us to build highly interactive, modular UIs that can be tested in isolation and updated seamlessly." },
  { tech: "Next.js", icon: <Zap size={20} />, reason: "SEO and performance", desc: "Server-side rendering and static generation ensure your application loads instantly and ranks perfectly on search engines." },
  { tech: "Node.js", icon: <Server size={20} />, reason: "Scalable backend systems", desc: "Provides an event-driven, non-blocking architecture capable of handling thousands of concurrent connections efficiently." },
  { tech: "AWS", icon: <Cloud size={20} />, reason: "Reliable cloud infrastructure", desc: "Enterprise-grade hosting with auto-scaling logic guarantees 99.9% uptime, regardless of traffic spikes." },
  { tech: "Prisma", icon: <Database size={20} />, reason: "Safe database access", desc: "Type-safe database ORM prevents run-time errors and ensures our backend logic remains strictly reliable." },
  { tech: "TailwindCSS", icon: <Layout size={20} />, reason: "Consistent design systems", desc: "Utility-first CSS enforces a rigorous design language, maintaining exact brand guidelines across the entire platform." }
]

export default function TechnologyPhilosophy() {
  return (
    <section className="py-section-y bg-section-gray border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
              Engineering Architecture
            </span>
          </div>
          <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] text-text-primary tracking-tight leading-tight mb-4">
            Technology chosen for a reason.
          </h2>
          <p className="text-text-secondary font-manrope text-base sm:text-lg">
            We don't chase trends. We select enterprise-grade tools based exclusively on their ability to deliver speed, scalability, and long-term stability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_DATA.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border/60 rounded-3xl p-8 shadow-soft-sm hover:-translate-y-1 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-background border border-border/40 flex items-center justify-center text-primary mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-manrope font-extrabold text-xl text-text-primary mb-1">
                {item.tech}
              </h3>
              <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider block mb-4">
                {item.reason}
              </span>
              <p className="text-text-secondary font-manrope text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
