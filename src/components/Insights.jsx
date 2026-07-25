import { motion } from 'framer-motion'
import { ArrowRight, Clock, User } from 'lucide-react'

const ARTICLES = [
  {
    category: "Strategy",
    title: "How Modern Websites Increase Revenue",
    summary: "A detailed analysis of how performance-optimized, conversion-focused web platforms directly influence quarterly revenue targets for B2B companies.",
    author: "Alex Sterling",
    date: "July 18, 2026",
    readTime: "8 min read"
  },
  {
    category: "Performance",
    title: "The Importance of Core Web Vitals",
    summary: "Google's Core Web Vitals directly impact search rankings. We break down LCP, FID, and CLS with actionable engineering strategies to achieve perfect scores.",
    author: "Marcus Johnson",
    date: "July 10, 2026",
    readTime: "6 min read"
  },
  {
    category: "Engineering",
    title: "Design Systems That Scale",
    summary: "How to build component libraries and design token architectures that maintain brand consistency across complex multi-product organizations.",
    author: "Sarah Chen",
    date: "June 28, 2026",
    readTime: "10 min read"
  }
]

export default function Insights() {
  return (
    <section className="py-section-y bg-background border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-1.5 mb-4">
              <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
                Blog
              </span>
            </div>
            <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] text-text-primary tracking-tight leading-tight">
              Latest Insights
            </h2>
          </div>
          <a href="#blog" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all shrink-0 pb-2">
            View All Articles <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card border border-border/60 rounded-3xl overflow-hidden shadow-soft-sm hover:shadow-soft-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail placeholder */}
              <div className="h-48 bg-section-gray border-b border-border/40 flex items-center justify-center">
                <span className="text-text-muted font-manrope font-bold text-sm uppercase tracking-widest opacity-40">Article</span>
              </div>
              
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Category & Read Time */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-primary/5 text-[10px] font-extrabold text-primary uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-text-muted font-semibold">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-manrope font-extrabold text-xl text-text-primary mb-3 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-text-secondary font-manrope text-sm leading-relaxed mb-6 flex-1">
                  {article.summary}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between pt-5 border-t border-border/40">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                      <User size={12} className="text-text-muted" />
                    </div>
                    <span className="text-[12px] font-bold text-text-primary">{article.author}</span>
                  </div>
                  <span className="text-[11px] text-text-muted font-semibold">{article.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
