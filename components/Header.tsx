'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'CUSTOM', href: '#custom-solutions' },
    { name: 'PRODUCTS', href: '#products' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' }
  ]

  return (
    <header className="py-4 px-6 bg-black fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 hover:from-teal-500 hover:to-blue-700 transition-all duration-500 ease-in-out shadow-lg">
          PARSONS AI
        </div>

        <button 
          className="md:hidden text-white hover:text-cyan-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </nav>
    </header>
  )
}
