'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const calculateParallax = (depth = 1) => {
    if (windowSize.width === 0 || windowSize.height === 0) return 'translate(0px, 0px)'
    const x = (mousePosition.x - windowSize.width / 2) / depth
    const y = (mousePosition.y - windowSize.height / 2) / depth
    return `translate(${x}px, ${y}px)`
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="relative z-10 text-center" ref={parallaxRef}>
        <motion.h1
          className="text-7xl font-black mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            transform: calculateParallax(20),
            background: 'linear-gradient(45deg, #4F46E5, #7C3AED, #2563EB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          PARSONS AI
        </motion.h1>
        <motion.p
          className="text-xl mb-6 max-w-2xl mx-auto text-white"
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
  )
}