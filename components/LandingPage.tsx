// components/LandingPage.tsx
'use client'

import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

export default function LandingPage() {
  const [activeColor, setActiveColor] = useState('indigo')

  return (
    <div className={`min-h-screen theme-gradient theme-${activeColor} text-white flex flex-col`}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}