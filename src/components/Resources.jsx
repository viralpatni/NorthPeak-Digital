import { motion } from 'framer-motion'
import { Download, FileText, Search, Layout, Rocket, CheckSquare } from 'lucide-react'

const RESOURCES = [
  {
    icon: <CheckSquare size={20} />,
    title: "Website Performance Checklist",
    desc: "A 40-point audit to ensure your website loads fast, ranks well, and converts visitors.",
    type: "PDF Checklist"
  },
  {
    icon: <Search size={20} />,
    title: "SEO Audit Guide",
    desc: "Step-by-step technical SEO audit covering schema, sitemaps, Core Web Vitals, and indexing.",
    type: "PDF Guide"
  },
  {
    icon: <Layout size={20} />,
    title: "Design System Starter Kit",
    desc: "A practical starting framework for building consistent, scalable component libraries.",
    type: "Figma + Code"
  },
  {
    icon: <Rocket size={20} />,
    title: "Website Launch Checklist",
    desc: "Everything you need to verify before going live, from DNS to analytics to accessibility.",
    type: "PDF Checklist"
  },
  {
    icon: <FileText size={20} />,
    title: "UX Best Practices",
    desc: "Research-backed guidelines for building interfaces that feel intuitive and drive engagement.",
    type: "PDF Guide"
  }
]

export default function Resources() {
  return (
    <section className="py-section-y bg-section-gray border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
              Free Resources
            </span>
          </div>
          <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] text-text-primary tracking-tight leading-tight mb-4">
            Tools to help you build better.
          </h2>
          <p className="text-text-secondary font-manrope text-base sm:text-lg">
            Practical resources we've created from years of engineering experience. No email required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((resource, idx) => (
            <motion.a 
              key={idx}
              href="#"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft-sm hover:shadow-soft-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary">
                  {resource.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-background border border-border/60 flex items-center justify-center text-text-muted group-hover:text-primary group-hover:border-primary/30 transition-colors">
                  <Download size={14} />
                </div>
              </div>
              
              <h3 className="font-manrope font-bold text-lg text-text-primary mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-text-secondary font-manrope text-sm leading-relaxed mb-4 flex-1">
                {resource.desc}
              </p>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                {resource.type}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
