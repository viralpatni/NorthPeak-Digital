export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
      aria-label="Hero — NorthPeak Digital"
    >
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Radial glow blobs */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              <span className="text-slate-300 text-xs font-manrope font-semibold tracking-widest uppercase">
                Award-winning Digital Agency
              </span>
            </div>

            <h1 className="text-white font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none mb-6">
              Building Websites{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                That Grow
              </span>{' '}
              Businesses.
            </h1>

            <p className="text-slate-400 font-manrope text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
              We design lightning-fast, conversion-focused digital experiences that help startups
              and businesses scale with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary text-base justify-center"
                id="hero-cta-primary"
              >
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#services"
                className="btn-secondary text-base justify-center border-white/20 text-slate-300 hover:text-white hover:border-white/50"
                id="hero-cta-secondary"
              >
                View Our Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Social proof bar */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="flex -space-x-3">
                {['#2563EB', '#7C3AED', '#06B6D4', '#0EA5E9'].map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center text-white font-sora font-bold text-sm"
                    style={{ background: color, zIndex: 4 - i }}
                    aria-hidden="true"
                  >
                    {['J', 'S', 'M', 'A'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-slate-400 text-sm font-manrope">
                  <strong className="text-white">150+ clients</strong> love working with us
                </p>
              </div>
            </div>
          </div>

          {/* Right — Abstract floating UI visual */}
          <div className="relative flex justify-center items-center lg:justify-end" aria-hidden="true">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Main card */}
              <div
                className="glass rounded-2xl p-6 shadow-2xl"
                style={{ animation: 'floatSlow 6s ease-in-out infinite' }}
              >
                {/* Browser bar */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 ml-3 h-7 rounded-lg bg-white/10 flex items-center px-3">
                    <span className="text-slate-400 text-xs font-mono">northpeak.digital</span>
                  </div>
                </div>
                {/* Mock chart */}
                <div className="mb-4 bg-white/5 rounded-xl p-4">
                  <p className="text-slate-400 text-xs font-manrope mb-2">Conversion Rate</p>
                  <p className="text-white font-sora font-bold text-2xl">+247%</p>
                  <svg viewBox="0 0 200 60" className="w-full mt-2" aria-label="Conversion rate chart showing upward trend">
                    <polyline
                      points="0,55 30,45 60,38 90,28 120,20 150,12 180,5 200,3"
                      fill="none"
                      stroke="url(#chart-grad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="chart-grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#2563EB"/>
                        <stop offset="100%" stopColor="#06B6D4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* Metric pills */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-slate-400 text-xs mb-1">Avg. Load Time</p>
                    <p className="text-white font-sora font-bold">0.8s</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-slate-400 text-xs mb-1">Lighthouse Score</p>
                    <p className="text-white font-sora font-bold">98/100</p>
                  </div>
                </div>
              </div>

              {/* Floating badge 1 */}
              <div
                className="absolute -top-6 -right-4 glass rounded-xl px-4 py-3 shadow-xl"
                style={{ animation: 'floatMedium 4s ease-in-out infinite' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-sora font-bold">Performance</p>
                    <p className="text-accent text-xs">+320% faster</p>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 shadow-xl"
                style={{ animation: 'floatMedium 5s ease-in-out infinite 1s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
                      <polyline points="22 4 12 14.01 9 11.01" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-sora font-bold">98% Satisfaction</p>
                    <p className="text-slate-400 text-xs">150+ Projects</p>
                  </div>
                </div>
              </div>

              {/* Abstract gradient orbs behind card */}
              <div
                className="absolute inset-0 -z-10 rounded-3xl opacity-40"
                style={{
                  background: 'radial-gradient(ellipse at 30% 50%, #2563EB40 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #7C3AED40 0%, transparent 60%)',
                  filter: 'blur(30px)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-slate-500 text-xs font-manrope tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 border-2 border-slate-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full" style={{ animation: 'floatSlow 1.5s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  )
}
