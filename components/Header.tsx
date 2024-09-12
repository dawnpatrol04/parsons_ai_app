'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    <header className="py-4 px-6 bg-black fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <div className="relative w-8 h-8 mr-2">
            <Image
              src="/logo.png"
              alt="Parsons AI Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="text-2xl font-bold text-white">PARSONS AI</span>
        </Link>
        
        <button 
          className="md:hidden text-white"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-cyan-400 text-black hover:bg-cyan-300 transition-colors">
            Schedule a Demo
          </Button>
        </motion.div>
      </nav>
    </header>
  )
}