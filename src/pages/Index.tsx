import { useState, useEffect } from 'react'
import Preloader from '@/components/Preloader'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import FacilitiesSection from '@/components/FacilitiesSection'
import TeamSection from '@/components/TeamSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handlePreloaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {/* Main Website Content */}
      {!isLoading && (
        <>
          {/* Navigation */}
          <Navigation />
          
          {/* Hero Section */}
          <HeroSection />
          
          {/* About Section */}
          <AboutSection />
          
          {/* Services Section */}
          <ServicesSection />
          
          {/* Process Section */}
          <ProcessSection />
          
          {/* Facilities Section */}
          <FacilitiesSection />
          
          {/* Team Section */}
          <TeamSection />
          
          {/* Contact Section */}
          <ContactSection />
          
          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  )
}

export default Index
