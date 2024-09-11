'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef, useEffect } from "react"

export default function LandingPage() {
  const [activeColor, setActiveColor] = useState('indigo')
  const { scrollYProgress } = useScroll()
  const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, 100])

  const parallaxRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const calculateParallax = (depth = 1) => {
    const x = (mousePosition.x - window.innerWidth / 2) / depth
    const y = (mousePosition.y - window.innerHeight / 2) / depth
    return `translate(${x}px, ${y}px)`
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-${activeColor}-900 to-${activeColor}-700 text-white flex flex-col`}>
      <header className="py-4 px-6 sticky top-0 z-10 backdrop-blur-md bg-opacity-30 bg-indigo-900">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Parsons AI</Link>
          <div className="flex space-x-6">
            {['CUSTOM', 'PRODUCTS', 'AI', 'ROBOTICS', 'ABOUT', 'CONTACT'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.a>
            ))}
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="bg-white text-indigo-500 border-white hover:bg-indigo-100">
              GET STARTED
            </Button>
          </motion.div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          />
          <div className="relative z-10 text-center" ref={parallaxRef}>
            <motion.h1
              className="text-7xl font-black mb-4 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ transform: calculateParallax(20) }}
            >
              PARSONS AI
            </motion.h1>
            <motion.p
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ transform: calculateParallax(40) }}
            >
              Revolutionizing AI and robotics with cutting-edge solutions for a smarter, more efficient future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ transform: calculateParallax(60) }}
            >
              <Button className="bg-white text-indigo-500 hover:bg-indigo-100 text-lg px-8 py-3 rounded-full">
                Explore Our Solutions
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Add more sections here */}
      </main>

      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm">Theme:</span>
            {['indigo', 'purple', 'blue'].map((color) => (
              <motion.div 
                key={color}
                className={`w-8 h-8 bg-${color}-500 rounded-full cursor-pointer ${activeColor === color ? 'ring-2 ring-white' : ''}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveColor(color)}
              />
            ))}
          </div>
          <div className="flex space-x-6">
            {['facebook', 'twitter', 'linkedin'].map((social) => (
              <motion.a 
                key={social}
                href="#"
                aria-label={social}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-${social}`}>
                  {social === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>}
                  {social === 'twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>}
                  {social === 'linkedin' && <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>}
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © 2023 Parsons AI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}