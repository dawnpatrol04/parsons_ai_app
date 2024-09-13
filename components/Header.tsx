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
    <header className="py-4 px-6 bg-black fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 mr-2 transform transition-transform duration-300 hover:scale-110">
            <Image
              src="/logo.png"
              alt="Parsons AI Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 hover:from-teal-500 hover:to-blue-700 transition-all duration-500 ease-in-out shadow-lg">
            PARSONS AI
          </span>
        </Link>

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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black text-white p-4 md:hidden">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="block py-2 px-4 hover:bg-gray-800 transition-colors">{item.name}</a>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
