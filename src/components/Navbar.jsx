import { useState, useEffect, useRef, useCallback } from 'react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)
  const firstLinkRef = useRef(null)

  // Detect scroll for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock/unlock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Focus trap inside mobile menu
  useEffect(() => {
    if (!menuOpen) return
    const focusable = menuRef.current?.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    )
    if (!focusable?.length) return
    firstLinkRef.current?.focus()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault()
        ;(e.shiftKey ? last : first).focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="NorthPeak Digital — Home"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="url(#logo-grad)"/>
              <path d="M8 22L16 10L24 22H8Z" fill="white" opacity="0.9"/>
              <path d="M13 22L16 17L19 22H13Z" fill="#06B6D4"/>
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
                  <stop offset="0%" stopColor="#2563EB"/>
                  <stop offset="100%" stopColor="#7C3AED"/>
                </linearGradient>
              </defs>
            </svg>
            <span
              className={`font-sora font-bold text-lg transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-brand-text'
              }`}
            >
              NorthPeak
              <span className="gradient-text"> Digital</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-link transition-colors duration-200 ${
                  scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-primary'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="btn-primary hidden sm:inline-flex text-sm py-2.5 px-5"
            >
              Book a Call
            </a>
            <button
              ref={hamburgerRef}
              className={`hamburger md:hidden ${menuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu md:hidden ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="flex flex-col items-center gap-2 w-full px-8" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              ref={i === 0 ? firstLinkRef : null}
              href={href}
              className="text-white font-sora font-semibold text-2xl py-4 w-full text-center rounded-xl hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-6 w-full justify-center text-lg"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Book a Call
          </a>
        </nav>
      </div>
    </>
  )
}
