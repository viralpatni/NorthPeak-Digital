import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useAnimations'

export default function App() {
  // Activate scroll reveal for all .reveal elements after mount
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Stats />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
