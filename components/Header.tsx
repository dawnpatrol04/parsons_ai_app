'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(79, 70, 229, 0.9)', 'rgba(255, 255, 255, 0.9)']
  )
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 1)', 'rgba(79, 70, 229, 1)']
  )

  const currentTextColor = useTransform(textColor, latest => latest)
  const currentBackgroundColor = useTransform(backgroundColor, latest => latest)

  const navItems = ['CUSTOM', 'PRODUCTS', 'AI', 'ROBOTICS', 'ABOUT', 'CONTACT']

  return (
    <motion.header 
      className="py-4 px-6 fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: currentBackgroundColor }}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 mr-4">
            <Image
              src="/logo.png"
              alt="Parsons AI Logo"
              layout="fill"
              objectFit="contain"
              className="mr-2"
            />
          </div>
          <motion.span className="text-2xl font-bold" style={{ color: currentTextColor }}>Parsons AI</motion.span>
        </Link>
        
        <motion.button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{ color: currentTextColor }}
        >
          <Menu size={24} />
        </motion.button>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium relative"
              style={{ color: currentTextColor }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: currentTextColor }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>

        {isMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 md:hidden"
            style={{ backgroundColor: currentBackgroundColor }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 px-4 text-sm font-medium hover:bg-opacity-10 hover:bg-white"
                style={{ color: currentTextColor }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}

        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            className="border-2 hover:bg-opacity-10"
            style={{ 
              color: currentTextColor, 
              borderColor: currentTextColor,
              backgroundColor: 'transparent'
            }}
          >
            GET STARTED
          </Button>
        </motion.div>
      </nav>
    </motion.header>
  )
}