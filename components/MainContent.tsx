'use client'

import HeroSection from './sections/HeroSection'
import CustomSolutionsSection from './sections/CustomSolutionsSection'
import ProductsSection from './sections/ProductsSection' 
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'

export default function MainContent() {
  return (
    <main className="flex-grow pt-16">
      <HeroSection />
      <CustomSolutionsSection />
      <ProductsSection /> 
      <AboutSection />
      <ContactSection />
    </main>
  )
}