import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Truck, MapPin, Search, Filter, MoreHorizontal, ShoppingCart, Users, CreditCard, Activity } from 'lucide-react'

// --- Custom Mini-Dashboards ---

const FinTechDashboard = () => (
  <div className="absolute -bottom-4 sm:-bottom-12 -right-4 sm:-right-12 w-[110%] sm:w-[120%] h-[90%] sm:h-[80%] bg-[#0B1120] text-slate-200 rounded-t-3xl border border-slate-800 shadow-2xl p-4 sm:p-6 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 font-sans flex flex-col">
    {/* Window Controls */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
          <Search size={12} className="text-slate-400" />
        </div>
      </div>
    </div>
    
    <div className="flex gap-6 h-full">
      {/* Sidebar */}
      <div className="hidden sm:flex flex-col gap-4 w-1/4 border-r border-slate-800 pr-4">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Portfolio</div>
        {['Equities', 'Crypto', 'Bonds'].map((item, i) => (
          <div key={i} className={`text-xs font-semibold px-3 py-2 rounded-lg ${i === 0 ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400'}`}>
            {item}
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="text-[10px] text-slate-500 font-semibold mb-1">TOTAL BALANCE</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">$2,458,912.00</div>
          </div>
          <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md text-xs font-bold">
            <ArrowUpRight size={14} /> 12.4%
          </div>
        </div>
        
        {/* SVG Chart */}
        <div className="flex-1 min-h-[100px] border border-slate-800 rounded-xl bg-slate-900/50 relative overflow-hidden p-4">
          <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient-blue" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,100 L0,70 C50,60 100,80 150,40 C200,0 250,50 300,20 C350,-10 400,30 400,10 L400,100 Z" fill="url(#gradient-blue)" />
            <path d="M0,70 C50,60 100,80 150,40 C200,0 250,50 300,20 C350,-10 400,30 400,10" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
            <circle cx="400" cy="10" r="4" fill="#3B82F6" />
          </svg>
          
          {/* Floating Tooltip */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-700 rounded shadow-xl px-2 py-1 flex flex-col items-center">
            <span className="text-[9px] text-slate-400">14:30 PM</span>
            <span className="text-[11px] font-bold text-white">$2.45M</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const LogisticsDashboard = () => (
  <div className="absolute -bottom-4 sm:-bottom-12 -right-4 sm:-right-12 w-[110%] sm:w-[120%] h-[90%] sm:h-[80%] bg-white text-slate-800 rounded-t-3xl border border-slate-200 shadow-2xl p-4 sm:p-6 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 font-sans flex flex-col">
    <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
      <div className="font-bold text-sm flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center"><Truck size={12} /></div>
        NovaFleet™
      </div>
      <div className="flex gap-2">
        <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded flex items-center gap-1"><Filter size={10} /> Filter</span>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
        <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Active Deliveries</div>
        <div className="text-xl font-extrabold text-slate-800">1,284</div>
        <div className="text-[10px] text-emerald-600 mt-1 font-semibold flex items-center gap-1"><ArrowUpRight size={10}/> 98% On Time</div>
      </div>
      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
        <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Fleet Status</div>
        <div className="text-xl font-extrabold text-slate-800">492<span className="text-sm font-medium text-slate-400"> / 500</span></div>
        <div className="text-[10px] text-emerald-600 mt-1 font-semibold flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"/> Vehicles Active</div>
      </div>
    </div>

    {/* Map UI */}
    <div className="flex-1 bg-slate-100 rounded-xl relative overflow-hidden border border-slate-200">
      <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
        <path d="M 20 80 Q 40 40 80 20" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2"/>
      </svg>
      {/* Route Markers */}
      <div className="absolute top-[20%] right-[20%] flex flex-col items-center">
        <div className="w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm z-10"/>
        <div className="bg-white px-1.5 py-0.5 rounded shadow text-[9px] font-bold mt-1 text-slate-700">Hub A</div>
      </div>
      <div className="absolute bottom-[20%] left-[20%] flex flex-col items-center">
        <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm z-10"/>
        <div className="bg-white px-1.5 py-0.5 rounded shadow text-[9px] font-bold mt-1 text-slate-700">Client</div>
      </div>
      {/* Moving vehicle dot */}
      <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-slate-800 rounded-full shadow border border-white animate-pulse"/>
    </div>
  </div>
)

const CommerceDashboard = () => (
  <div className="absolute -bottom-4 sm:-bottom-12 -right-4 sm:-right-12 w-[110%] sm:w-[120%] h-[90%] sm:h-[80%] bg-[#FAF5FF] text-slate-800 rounded-t-3xl border border-purple-100 shadow-2xl p-4 sm:p-6 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 font-sans flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <div className="font-extrabold text-purple-950 flex items-center gap-2">
        <ShoppingCart size={16} className="text-purple-600" /> Analytics
      </div>
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-purple-50 flex items-center justify-center text-slate-400">
          <MoreHorizontal size={12} />
        </div>
      </div>
    </div>
    
    {/* KPI Row */}
    <div className="grid grid-cols-3 gap-3 mb-6">
      {[
        { i: <CreditCard size={12}/>, label: 'Revenue', val: '$84K', color: 'text-purple-600', bg: 'bg-purple-100' },
        { i: <Users size={12}/>, label: 'Visitors', val: '12K', color: 'text-blue-600', bg: 'bg-blue-100' },
        { i: <Activity size={12}/>, label: 'Conversion', val: '4.8%', color: 'text-emerald-600', bg: 'bg-emerald-100' },
      ].map((k, idx) => (
        <div key={idx} className="bg-white p-3 rounded-xl shadow-sm border border-purple-50 flex flex-col gap-2">
          <div className={`w-6 h-6 rounded-md ${k.bg} ${k.color} flex items-center justify-center`}>{k.i}</div>
          <div>
            <div className="text-[9px] font-bold text-slate-400 uppercase">{k.label}</div>
            <div className="text-sm sm:text-base font-extrabold text-slate-800">{k.val}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Funnel/Bar Chart Area */}
    <div className="flex-1 bg-white rounded-xl shadow-sm border border-purple-50 p-4 flex flex-col">
      <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Sales Pipeline</div>
      <div className="flex-1 flex items-end justify-between gap-2">
        {[40, 75, 50, 90, 65, 80, 100].map((h, i) => (
          <div key={i} className="w-full bg-purple-50 rounded-t-sm relative group cursor-pointer" style={{ height: '100%' }}>
            <div 
              className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-300 ${i === 6 ? 'bg-purple-600' : 'bg-purple-200 group-hover:bg-purple-300'}`}
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)

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
    bg: "bg-section-blue",
    Dashboard: FinTechDashboard
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
    bg: "bg-section-lavender",
    Dashboard: LogisticsDashboard
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
    bg: "bg-section-gray",
    Dashboard: CommerceDashboard
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
                
                {/* Custom UI Representation */}
                <study.Dashboard />
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
