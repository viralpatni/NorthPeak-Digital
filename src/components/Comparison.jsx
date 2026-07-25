import { Check, Minus } from 'lucide-react'

const COMPARISON_ROWS = [
  { feature: "Business Strategy", northpeak: <Check size={18} className="text-success mx-auto" />, agency: "Limited", freelancer: <Minus size={18} className="text-border mx-auto" />, builder: <Minus size={18} className="text-border mx-auto" /> },
  { feature: "Dedicated Team", northpeak: <Check size={18} className="text-success mx-auto" />, agency: "Shared", freelancer: "Solo", builder: "None" },
  { feature: "Custom Development", northpeak: <Check size={18} className="text-success mx-auto" />, agency: <Check size={18} className="text-success mx-auto" />, freelancer: "Varies", builder: "Templates" },
  { feature: "Scalable Architecture", northpeak: <Check size={18} className="text-success mx-auto" />, agency: "Sometimes", freelancer: "Rarely", builder: <Minus size={18} className="text-border mx-auto" /> },
  { feature: "Performance Optimization", northpeak: "99+ Lighthouse", agency: "Varies", freelancer: "Varies", builder: "Poor" },
  { feature: "SEO Best Practices", northpeak: <Check size={18} className="text-success mx-auto" />, agency: <Check size={18} className="text-success mx-auto" />, freelancer: "Basic", builder: "Basic" },
  { feature: "Accessibility", northpeak: "WCAG AA", agency: "Basic", freelancer: "Varies", builder: "Varies" },
  { feature: "Security", northpeak: "Enterprise", agency: "Standard", freelancer: "Standard", builder: "Shared" },
  { feature: "Documentation", northpeak: <Check size={18} className="text-success mx-auto" />, agency: "Varies", freelancer: <Minus size={18} className="text-border mx-auto" />, builder: <Minus size={18} className="text-border mx-auto" /> },
  { feature: "Post-launch Support", northpeak: "24/7 Priority", agency: "Retainer", freelancer: "Hourly", builder: "Community" },
  { feature: "Analytics Integration", northpeak: "Custom Dashboards", agency: "Basic Setup", freelancer: "Basic Setup", builder: "Built-in" },
  { feature: "Maintenance", northpeak: "Proactive", agency: "Reactive", freelancer: "Reactive", builder: "Automatic" },
  { feature: "Long-term Partnership", northpeak: <Check size={18} className="text-success mx-auto" />, agency: "Transactional", freelancer: "Transactional", builder: "None" }
]

export default function Comparison() {
  return (
    <section className="py-section-y bg-background border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] text-text-primary tracking-tight leading-tight mb-4">
            Why Growing Companies Choose NorthPeak
          </h2>
          <p className="text-text-secondary font-manrope text-base sm:text-lg">
            We don't compete with template builders or solo freelancers. We deliver enterprise-grade engineering for companies ready to scale.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[800px] border border-border/60 rounded-3xl overflow-hidden bg-card shadow-soft-sm">
            
            {/* Table Header */}
            <div className="grid grid-cols-6 bg-background border-b border-border/60 py-5">
              <div className="col-span-2 px-6 lg:px-8 font-manrope font-bold text-sm text-text-muted uppercase tracking-wider flex items-center">
                Engineering & Strategy
              </div>
              <div className="px-4 font-manrope font-extrabold text-sm text-primary text-center flex items-center justify-center">
                NorthPeak Digital
              </div>
              <div className="px-4 font-manrope font-bold text-sm text-text-primary text-center flex items-center justify-center">
                Traditional Agency
              </div>
              <div className="px-4 font-manrope font-bold text-sm text-text-primary text-center flex items-center justify-center">
                Freelancer
              </div>
              <div className="px-4 font-manrope font-bold text-sm text-text-primary text-center flex items-center justify-center">
                Website Builder
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border/40">
              {COMPARISON_ROWS.map((row, idx) => (
                <div key={idx} className="grid grid-cols-6 py-4 transition-colors hover:bg-background/40">
                  <div className="col-span-2 px-6 lg:px-8 font-manrope font-semibold text-sm text-text-primary flex items-center">
                    {row.feature}
                  </div>
                  <div className="px-4 text-center text-sm font-bold text-text-primary flex items-center justify-center bg-primary/5 rounded-md mx-2 py-1">
                    {row.northpeak}
                  </div>
                  <div className="px-4 text-center text-sm font-medium text-text-secondary flex items-center justify-center">
                    {row.agency}
                  </div>
                  <div className="px-4 text-center text-sm font-medium text-text-secondary flex items-center justify-center">
                    {row.freelancer}
                  </div>
                  <div className="px-4 text-center text-sm font-medium text-text-secondary flex items-center justify-center">
                    {row.builder}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
