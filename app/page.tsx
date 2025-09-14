
// LumniLandingPage.js (Componente principal refatorado)
'use client'

import React, { useState, useEffect } from 'react';
import Navigation from '@/app/src/components/Navbar';
import HeroSection from '@/app/src/components/HeroSection';
import ServicesSection from '@/app/src/components/Services';
import ProjectsSection from '@/app/src/components/Projects';
import AboutSection from '@/app/src/components/About';
import CTASection from '@/app/src/components/CTA';
import Footer from '@/app/src/components/Footer';
import TechStack from '@/app/src/components/TechStack'

export default function LumniLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<div className="min-h-screen  bg-[#0C2233] text-gray-900 overflow-hidden">      <Navigation 
        scrolled={scrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <CTASection />
      <TechStack />
      <Footer />
    </div>
  );
}