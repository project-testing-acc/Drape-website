import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/features/Hero'
import BrandLogos from '@/components/features/BrandLogos'
import Features from '@/components/features/Features'
import VideoDemo from '@/components/features/VideoDemo'
import HowItWorks from '@/components/features/HowItWorks'
import AppShowcase from '@/components/features/AppShowcase'
import Testimonials from '@/components/features/Testimonials'
import Pricing from '@/components/features/Pricing'
import WaitlistForm from '@/components/features/WaitlistForm'
import CTASection from '@/components/features/CTASection'
import { useScrollReveal } from '@/hooks/useScrollReveal'

function PageTransition({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.opacity = '0'
    document.body.style.transition = 'opacity 0.4s ease'
    const t = setTimeout(() => {
      document.body.style.opacity = '1'
    }, 30)
    return () => clearTimeout(t)
  }, [])
  return <>{children}</>
}

export default function App() {
  useScrollReveal()

  return (
    <PageTransition>
      <div
        className="min-h-screen"
        style={{ backgroundColor: '#050506', color: '#EDEDEF' }}
      >
        <Navbar />
        <main>
          <Hero />
          <div className="section-sep mx-auto max-w-5xl" />
          <BrandLogos />
          <div className="section-sep mx-auto max-w-5xl" />
          <Features />
          <div className="section-sep mx-auto max-w-5xl" />
          <VideoDemo />
          <div className="section-sep mx-auto max-w-5xl" />
          <HowItWorks />
          <div className="section-sep mx-auto max-w-5xl" />
          <AppShowcase />
          <div className="section-sep mx-auto max-w-5xl" />
          <Testimonials />
          <div className="section-sep mx-auto max-w-5xl" />
          <Pricing />
          <div className="section-sep mx-auto max-w-5xl" />
          <WaitlistForm />
          <CTASection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}

