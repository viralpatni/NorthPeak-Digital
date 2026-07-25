import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: "How long does a project usually take?",
    answer: "Timelines depend on scope. A focused landing page typically takes 3–4 weeks. Multi-page platforms with CMS integration take 6–8 weeks. Full-stack web applications with backend logic can take 8–16 weeks. We provide a detailed timeline during our discovery session before any commitment."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in React, Next.js, Node.js, and modern cloud infrastructure (AWS, Vercel). For databases we use PostgreSQL with Prisma ORM. For styling we use Tailwind CSS with custom design tokens. Every technology choice is driven by your project's specific performance, scalability, and maintenance requirements."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes. Many of our clients come to us with an existing platform that needs modernization. We conduct a thorough audit of your current site's performance, SEO, and architecture before proposing a migration strategy that preserves your existing SEO equity while dramatically improving the user experience."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Absolutely. All packages include a post-launch support period (30–60 days depending on the plan). Beyond that, we offer monthly maintenance retainers that cover performance monitoring, security updates, content changes, and continuous optimization. Many of our clients have been with us for over three years."
  },
  {
    question: "Will our website be SEO optimized?",
    answer: "SEO is built into our engineering process from day one. We implement semantic HTML, structured schema markup, dynamic sitemaps, optimized Core Web Vitals, and proper meta tag architecture. Our clients see an average 61% improvement in organic search visibility within six months of launch."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes. We routinely work with clients in regulated industries including fintech, healthcare, and enterprise SaaS. We are happy to sign mutual NDAs before any project discussion begins. Confidentiality is a standard part of our engagement process."
  },
  {
    question: "Can you work with our internal team?",
    answer: "This is one of our core strengths. We frequently embed within client engineering teams, participating in standups, using shared project management tools, and contributing directly to existing repositories. We adapt to your workflow rather than imposing our own."
  },
  {
    question: "How is pricing determined?",
    answer: "Pricing is based on project scope, complexity, and timeline rather than hourly rates. After a free discovery session, we provide a detailed proposal that breaks down every deliverable with transparent costs. There are no hidden fees. If scope changes during the project, we document and approve adjustments before any additional work begins."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-section-y bg-section-blue border-t border-border/40">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
              Common Questions
            </span>
          </div>
          <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] text-text-primary tracking-tight leading-tight mb-4">
            Everything you need to know.
          </h2>
          <p className="text-text-secondary font-manrope text-base sm:text-lg">
            Honest answers to the questions we hear most from prospective clients.
          </p>
        </div>

        <div className="space-y-3" role="list">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-card rounded-2xl border border-border/60 overflow-hidden shadow-soft-sm"
                role="listitem"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-manrope font-bold text-base sm:text-lg text-text-primary pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-text-secondary flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      role="region"
                    >
                      <div className="px-6 sm:px-8 pb-6 font-manrope text-sm sm:text-base text-text-secondary leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
