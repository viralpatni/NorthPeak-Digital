const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

const SERVICES_LINKS = [
  'Custom Website Development',
  'UI/UX Design',
  'E-Commerce Development',
  'SEO Optimization',
  'Performance Optimization',
  'Maintenance & Support',
]

const SOCIAL_LINKS = [
  {
    href: 'https://twitter.com',
    label: 'Twitter / X',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com',
    label: 'GitHub',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #000000 100%)' }}
      role="contentinfo"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="flex items-center gap-2.5 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg w-fit"
              aria-label="NorthPeak Digital — Back to top"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="url(#footer-logo-grad)"/>
                <path d="M8 22L16 10L24 22H8Z" fill="white" opacity="0.9"/>
                <path d="M13 22L16 17L19 22H13Z" fill="#06B6D4"/>
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0%" stopColor="#2563EB"/>
                    <stop offset="100%" stopColor="#7C3AED"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-sora font-bold text-lg text-white">
                NorthPeak<span className="gradient-text"> Digital</span>
              </span>
            </a>
            <p className="text-slate-400 font-manrope text-sm leading-relaxed mb-6 max-w-xs">
              Building websites that grow businesses — through performance, design, and strategy.
            </p>
            {/* Social icons */}
            <div className="flex gap-3" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  role="listitem"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick navigation">
            <h3 className="font-sora font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-400 font-manrope text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h3 className="font-sora font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-slate-400 font-manrope text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact CTA */}
          <div>
            <h3 className="font-sora font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Get In Touch
            </h3>
            <p className="text-slate-400 font-manrope text-sm mb-5 leading-relaxed">
              Ready to start your project? We respond within 24 hours.
            </p>
            <a href="#contact" className="btn-primary text-sm">
              Book a Free Call
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <address className="not-italic mt-6 space-y-2">
              <p className="text-slate-400 font-manrope text-xs">
                <a href="mailto:hello@northpeak.digital" className="hover:text-white transition-colors">
                  hello@northpeak.digital
                </a>
              </p>
              <p className="text-slate-400 font-manrope text-xs">
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-manrope">
            <p className="text-slate-500">
              © {year} NorthPeak Digital. All rights reserved.
            </p>

            {/* ⬇️ SUBMISSION VERIFICATION REQUIREMENT — do not remove */}
            <p className="text-slate-500 text-center">
              <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors underline underline-offset-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                Built for Digital Heroes Training Task
              </a>
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
