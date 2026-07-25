import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Star } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)

  return (
    <section 
      ref={containerRef} 
      id="home" 
      className="relative min-h-screen pt-40 pb-20 overflow-hidden flex items-center bg-background"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Typography Focus */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-manrope font-extrabold tracking-widest text-text-secondary uppercase">
                Digital Engineering Agency
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="font-manrope font-extrabold text-[44px] sm:text-[64px] lg:text-[72px] text-text-primary leading-[1.08] tracking-tight mb-6">
              Building Digital Products That Help Businesses Grow.
            </h1>
            
            {/* Supporting Paragraph */}
            <p className="text-text-secondary font-manrope text-base sm:text-lg mb-10 max-w-[500px] leading-relaxed">
              NorthPeak combines strategy, engineering, UI/UX and long-term support to build products that generate measurable business outcomes.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#contact" className="btn-primary text-xs font-semibold py-3 px-6 inline-flex items-center gap-2">
                Book a Discovery Call
                <ArrowRight size={14} />
              </a>
              <a href="#work" className="btn-secondary text-xs font-semibold py-3 px-6">
                View Case Studies
              </a>
            </div>

            {/* Trust Metrics & Badges */}
            <div className="flex flex-col gap-6 border-t border-border/60 pt-8 w-full">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <div className="flex flex-col">
                  <span className="font-manrope font-extrabold text-xl text-text-primary">250+</span>
                  <span className="text-xs text-text-secondary">Projects Delivered</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-manrope font-extrabold text-xl text-text-primary">98%</span>
                  <span className="text-xs text-text-secondary">Client Satisfaction</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-manrope font-extrabold text-xl text-text-primary">18</span>
                  <span className="text-xs text-text-secondary">Countries Served</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-manrope font-extrabold text-xl text-text-primary">&lt;2 Hours</span>
                  <span className="text-xs text-text-secondary">Average Response Time</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-text-secondary">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5 text-[#F59E0B]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <span>Rated Excellent</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>Top Rated Digital Engineering Agency</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Custom Abstract Product Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative hidden lg:block"
          >
            {/* Main Window */}
            <div className="w-full bg-card border border-border/50 rounded-2xl shadow-soft-lg overflow-hidden p-6 glass-panel relative">
              {/* Fake UI Header controls */}
              <div className="flex items-center justify-between mb-8 border-b border-border/40 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
                <div className="w-32 h-4 bg-secondary rounded-full border border-border/20" />
                <div className="w-8 h-4 bg-secondary rounded-full border border-border/20" />
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { title: "Revenue", val: "+14.8%", desc: "Direct Growth" },
                  { title: "Conversions", val: "3.42%", desc: "+0.8% this week" },
                  { title: "SEO Score", val: "99", desc: "Global CDN average" },
                  { title: "Traffic", val: "142K", desc: "Monthly active" },
                  { title: "Users", val: "84.2K", desc: "Retained" },
                  { title: "Pipeline", val: "$1.2M", desc: "Projected" }
                ].map((kpi, idx) => (
                  <div key={idx} className="bg-background/40 border border-border/40 p-3 rounded-xl">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">{kpi.title}</span>
                    <span className="font-manrope font-extrabold text-lg text-text-primary block">{kpi.val}</span>
                    <span className="text-[10px] text-text-secondary block mt-1">{kpi.desc}</span>
                  </div>
                ))}
              </div>

              {/* Main SVG Chart Area */}
              <div className="h-[180px] w-full bg-background/30 border border-border/40 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-text-muted font-semibold">
                  <span>WEBSITE PERFORMANCE</span>
                  <span className="text-primary">LIVE UPDATING</span>
                </div>
                
                <div className="w-full h-24 mt-4 relative">
                  <svg viewBox="0 0 500 120" className="w-full h-full overflow-visible">
                    {/* Horizontal grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="3 3" />
                    <line x1="0" y1="60" x2="500" y2="60" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="3 3" />
                    <line x1="0" y1="90" x2="500" y2="90" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="3 3" />
                    
                    {/* Area path */}
                    <path 
                      d="M0,120 L0,90 C50,85 100,100 150,75 C200,50 250,80 300,45 C350,10 400,30 500,15 L500,120 Z" 
                      fill="var(--color-primary)" 
                      opacity="0.04" 
                    />
                    
                    {/* Curved line */}
                    <path 
                      d="M0,90 C50,85 100,100 150,75 C200,50 250,80 300,45 C350,10 400,30 500,15" 
                      fill="none" 
                      stroke="var(--color-primary)" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />

                    {/* Target dot */}
                    <circle cx="500" cy="15" r="4" fill="var(--color-primary)" />
                    <circle cx="500" cy="15" r="8" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" className="animate-ping origin-center" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Subtle floating analytics widgets */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/3 bg-card border border-border/60 p-4 rounded-xl shadow-soft-md glass-panel flex items-center gap-3"
            >
              <div className="w-8.5 h-8.5 rounded-lg bg-success/10 flex items-center justify-center text-success">
                <Check size={16} className="stroke-[3.5]" />
              </div>
              <div>
                <div className="text-[10px] text-text-muted uppercase font-bold tracking-wider leading-none mb-1">Deployment Status</div>
                <div className="text-xs font-extrabold text-text-primary leading-none">Production Active</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 bottom-10 bg-card border border-border/60 p-4 rounded-xl shadow-soft-md glass-panel flex flex-col gap-1"
            >
              <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Recent Activity</span>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] font-manrope font-semibold text-text-secondary">
                  API Integration Complete
                </span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

