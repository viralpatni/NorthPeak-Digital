
import { MonitorSmartphone, Layout, Cloud, Bot, Search, ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-section-y bg-background border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-[700px] mb-20">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="text-[11px] font-manrope font-extrabold tracking-wider text-primary uppercase">
              Engineering Capabilities
            </span>
          </div>
          <h2 className="font-manrope font-extrabold text-[36px] sm:text-[48px] text-text-primary tracking-tight leading-tight">
            Designed for impact. Engineered for scale.
          </h2>
          <p className="text-text-secondary font-manrope text-base sm:text-lg mt-4 max-w-[600px]">
            We build performant web platforms that command trust and drive business growth through precise engineering and beautiful design.
          </p>
        </div>

        {/* Handcrafted Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          
          {/* Featured Service (40% width - spans 5 columns, but maybe better 5/7 split) */}
          <div className="md:col-span-5 lg:col-span-5 md:row-span-2 bg-card border border-border/60 rounded-3xl p-8 sm:p-10 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow">
            <div className="mb-12">
              <h3 className="font-manrope font-extrabold text-[28px] text-text-primary mb-4 leading-tight">
                Custom Web Applications
              </h3>
              <p className="text-text-secondary font-manrope text-base leading-relaxed mb-8">
                We engineer full-stack platforms capable of handling millions of users. From complex dashboards to enterprise SaaS solutions, we focus on scalable architecture and zero-latency interactions.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Discuss a Project <ArrowRight size={16} />
              </a>
            </div>

            {/* Featured Visual: Dashboard Preview & Metrics */}
            <div className="bg-background/50 border border-border/40 rounded-2xl p-5 mt-auto">
              {/* Fake UI Header */}
              <div className="flex items-center gap-1.5 mb-6 pb-4 border-b border-border/30">
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
              
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider block mb-1">Server Response</span>
                  <span className="font-manrope font-extrabold text-3xl text-text-primary block leading-none">42<span className="text-lg text-text-secondary">ms</span></span>
                </div>
                <div className="h-10 w-24 flex items-end gap-1">
                  <div className="w-1/4 bg-primary/20 h-[30%] rounded-t-sm" />
                  <div className="w-1/4 bg-primary/40 h-[60%] rounded-t-sm" />
                  <div className="w-1/4 bg-primary/70 h-[85%] rounded-t-sm" />
                  <div className="w-1/4 bg-primary h-full rounded-t-sm" />
                </div>
              </div>

              {/* Core Technologies Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                <span className="px-2.5 py-1 rounded bg-secondary text-[10px] font-bold text-text-secondary">React</span>
                <span className="px-2.5 py-1 rounded bg-secondary text-[10px] font-bold text-text-secondary">Node.js</span>
                <span className="px-2.5 py-1 rounded bg-secondary text-[10px] font-bold text-text-secondary">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Service 2: UI/UX Design (Spans 4 columns) */}
          <div className="md:col-span-4 lg:col-span-4 bg-card border border-border/60 rounded-3xl p-8 shadow-soft-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary mb-6">
                <Layout size={20} />
              </div>
              <h4 className="font-manrope font-bold text-xl text-text-primary mb-3">UI/UX Design</h4>
              <p className="text-text-secondary font-manrope text-sm leading-relaxed mb-6">
                We craft intuitive, editorial-grade interfaces that guide user behavior and elevate brand perception.
              </p>
            </div>
            <div>
              <div className="text-[11px] font-bold text-text-primary uppercase tracking-wide mb-1">Key Benefit</div>
              <div className="font-manrope font-extrabold text-2xl text-primary leading-none">61% <span className="text-sm text-text-secondary font-semibold">Higher Conversions</span></div>
            </div>
          </div>

          {/* Service 3: Mobile Applications (Spans 3 columns) */}
          <div className="md:col-span-3 lg:col-span-3 bg-card border border-border/60 rounded-3xl p-8 shadow-soft-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary mb-6">
                <MonitorSmartphone size={20} />
              </div>
              <h4 className="font-manrope font-bold text-xl text-text-primary mb-3">Mobile Apps</h4>
              <p className="text-text-secondary font-manrope text-sm leading-relaxed mb-6">
                Native-feeling cross-platform applications built for iOS and Android using modern frameworks.
              </p>
            </div>
            <div>
              <div className="text-[11px] font-bold text-text-primary uppercase tracking-wide mb-1">Key Benefit</div>
              <div className="font-manrope font-extrabold text-2xl text-primary leading-none">60fps <span className="text-sm text-text-secondary font-semibold">Native Performance</span></div>
            </div>
          </div>

          {/* Service 4: Cloud Solutions (Spans 3 columns) */}
          <div className="md:col-span-3 lg:col-span-3 bg-card border border-border/60 rounded-3xl p-8 shadow-soft-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary mb-6">
                <Cloud size={20} />
              </div>
              <h4 className="font-manrope font-bold text-xl text-text-primary mb-3">Cloud Solutions</h4>
              <p className="text-text-secondary font-manrope text-sm leading-relaxed mb-6">
                Serverless architectures and robust API gateways designed to scale automatically with demand.
              </p>
            </div>
            <div>
              <div className="text-[11px] font-bold text-text-primary uppercase tracking-wide mb-1">Key Benefit</div>
              <div className="font-manrope font-extrabold text-2xl text-primary leading-none">99.9% <span className="text-sm text-text-secondary font-semibold">Uptime SLA</span></div>
            </div>
          </div>

          {/* Service 5: AI Integrations (Spans 4 columns) */}
          <div className="md:col-span-4 lg:col-span-4 bg-card border border-border/60 rounded-3xl p-8 shadow-soft-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary mb-6">
                <Bot size={20} />
              </div>
              <h4 className="font-manrope font-bold text-xl text-text-primary mb-3">AI Integrations</h4>
              <p className="text-text-secondary font-manrope text-sm leading-relaxed mb-6">
                Integrating LLMs and custom machine learning pipelines to automate workflows and enhance product capabilities.
              </p>
            </div>
            <div>
              <div className="text-[11px] font-bold text-text-primary uppercase tracking-wide mb-1">Key Benefit</div>
              <div className="font-manrope font-extrabold text-2xl text-primary leading-none">300ms <span className="text-sm text-text-secondary font-semibold">API Response</span></div>
            </div>
          </div>

        </div>

        {/* Service 6: SEO & Performance (Full Width Bottom row, or spans 12) */}
        <div className="mt-6 bg-card border border-border/60 rounded-3xl p-8 sm:p-10 shadow-soft-sm flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-soft-md transition-shadow">
          <div className="max-w-2xl">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-primary mb-6">
              <Search size={20} />
            </div>
            <h4 className="font-manrope font-bold text-2xl text-text-primary mb-3">SEO & Performance Architecture</h4>
            <p className="text-text-secondary font-manrope text-base leading-relaxed">
              We build technical SEO into the foundation. Dynamic sitemaps, structured schema markup, and aggressive asset caching ensure your product dominates search rankings.
            </p>
          </div>
          <div className="bg-background/50 border border-border/40 rounded-2xl p-6 w-full md:w-auto flex-shrink-0 min-w-[250px]">
             <div className="text-[11px] font-bold text-text-muted uppercase tracking-wide mb-2 text-center md:text-left">Verified Metric</div>
             <div className="flex items-end justify-center md:justify-start gap-2">
                <div className="font-manrope font-extrabold text-[56px] leading-none text-success">99</div>
                <div className="pb-2">
                  <span className="text-xs font-bold text-text-primary block">Lighthouse</span>
                  <span className="text-[10px] text-text-secondary block">Performance Score</span>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  )
}
