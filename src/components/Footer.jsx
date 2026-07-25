import { motion } from 'framer-motion'

const Twitter = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
const LinkedinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
const GithubIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
const DribbbleIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>

const COMPANY = [
  { label: 'About', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Blog', href: '#blog' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

const LEGAL = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Accessibility', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Sitemap', href: '#' },
]

const SOCIALS = [
  { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { Icon: GithubIcon, label: 'GitHub', href: '#' },
  { Icon: Twitter, label: 'X', href: '#' },
  { Icon: DribbbleIcon, label: 'Dribbble', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#080E1A] pt-20 pb-8 border-t border-slate-900" role="contentinfo">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2 mb-4 focus-visible:outline-none" aria-label="NorthPeak Digital home">
              <span className="w-5 h-5 rounded-full bg-white flex-shrink-0" />
              <span className="font-manrope font-bold text-sm tracking-tight text-white">
                NorthPeak Digital
              </span>
            </a>
            <p className="text-slate-400 font-manrope text-xs leading-relaxed max-w-[280px] mb-6">
              We design products people enjoy using. We focus on measurable business outcomes. We build systems that continue performing long after launch.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <motion.a 
                  key={label}
                  href={href}
                  whileHover={{ y: -2 }}
                  className="w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Company</span>
            <nav className="flex flex-col gap-2.5" aria-label="Company navigation">
              {COMPANY.map(link => (
                <a key={link.label} href={link.href} className="text-xs text-slate-400 hover:text-white transition-colors font-manrope">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Legal</span>
            <nav className="flex flex-col gap-2.5" aria-label="Legal navigation">
              {LEGAL.map(link => (
                <a key={link.label} href={link.href} className="text-xs text-slate-400 hover:text-white transition-colors font-manrope">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Contact</span>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@northpeakdigital.com" className="text-xs text-slate-400 hover:text-white transition-colors font-manrope">
                hello@northpeakdigital.com
              </a>
              <a href="tel:+15551234567" className="text-xs text-slate-400 hover:text-white transition-colors font-manrope">
                +1 (555) 123-4567
              </a>
              <span className="text-xs text-slate-500 font-manrope">
                Remote-first · Serving clients worldwide
              </span>
              <span className="text-xs text-slate-500 font-manrope">
                Mon – Fri · 9:00 AM – 6:00 PM (EST)
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-[11px] text-slate-500 font-manrope">
            <span>&copy; {year} NorthPeak Digital.</span>
            <span className="hidden sm:inline">·</span>
            <span>Engineering Growth Through Digital Excellence.</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
