'use client'

import HeroSection from './sections/HeroSection'
import CustomSolutionsSection from './sections/CustomSolutionsSection'
import ProductsSection from './sections/ProductsSection'
import AISection from './sections/AISection'
import RoboticsSection from './sections/RoboticsSection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'

export default function MainContent() {
  return (
    <main className="flex-grow pt-16">
      <HeroSection />
      <CustomSolutionsSection />
      <ProductsSection />
      <AISection />
      <RoboticsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}