import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Monitor, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeContext'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Cycle theme: light -> dark -> system -> light
  const toggleThemeCycle = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="flex items-center justify-between w-full max-w-[900px] px-6 py-2.5 rounded-full border border-border/40 bg-background/70 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-colors duration-300">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 focus-visible:outline-none">
            <span className="w-5 h-5 rounded-full bg-primary flex-shrink-0" />
            <span className="font-manrope font-bold text-sm tracking-tight text-text-primary">
              NorthPeak
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs font-manrope font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            
            {/* Minimal Understated Theme Toggle (Cycle) */}
            <button
              onClick={toggleThemeCycle}
              className="p-1.5 rounded-full text-text-secondary hover:text-text-primary hover:bg-secondary transition-all"
              aria-label={`Current theme is ${theme}. Click to change.`}
              title={`Theme: ${theme.toUpperCase()} (Click to cycle)`}
            >
              {theme === 'light' ? (
                <Sun size={15} className="stroke-[2]" />
              ) : theme === 'dark' ? (
                <Moon size={15} className="stroke-[2]" />
              ) : (
                <Monitor size={15} className="stroke-[2]" />
              )}
            </button>

            {/* Micro CTA Button */}
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-manrope font-semibold bg-text-primary text-background hover:bg-primary hover:text-white transition-all rounded-full shadow-sm"
            >
              Book a Call
            </a>
            
            {/* Mobile Hamburger menu */}
            <button
              className="md:hidden p-1 text-text-primary focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center pt-16"
          >
            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-text-primary font-manrope font-bold text-2xl hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                href="#contact"
                className="mt-4 px-6 py-2.5 text-sm font-semibold bg-primary text-white rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                Book a Call
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
