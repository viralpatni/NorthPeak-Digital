import { motion, useScroll, useSpring } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandFoundation from './components/BrandFoundation'
import TrustSection from './components/TrustSection'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import CompanyTimeline from './components/CompanyTimeline'
import WhyClientsStay from './components/WhyClientsStay'
import Comparison from './components/Comparison'
import CaseStudies from './components/CaseStudies'
import TechnologyPhilosophy from './components/TechnologyPhilosophy'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Insights from './components/Insights'
import Resources from './components/Resources'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-background min-h-screen text-text-primary"
    >
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <CustomCursor />
      <BackToTop />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero />
        <BrandFoundation />
        <TrustSection />
        <Services />
        <WhyChooseUs />
        <Process />
        <CompanyTimeline />
        <WhyClientsStay />
        <Comparison />
        <CaseStudies />
        <TechnologyPhilosophy />
        <Team />
        <Testimonials />
        <Pricing />
        <Insights />
        <Resources />
        <FAQ />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
    </motion.div>
  )
}
