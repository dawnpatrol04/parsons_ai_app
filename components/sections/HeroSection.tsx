'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-20">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-cyan-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Automation for the 21st Century
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-cyan-400">AI-Powered</span> Solutions, Simplified
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            With Parsons AI Automated Solutions, our experienced team and purpose-built technology will keep your AI systems up-to-date, and provide actionable insights at the touch of a button.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="bg-cyan-400 text-black hover:bg-cyan-300 transition-colors text-lg px-8 py-3 rounded-full">
              Schedule a Demo
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-3/4 z-0">
        <Image
          src="/ai-dashboard.png"
          alt="AI Dashboard"
          layout="fill"
          objectFit="contain"
          className="opacity-50"
        />
      </div>
    </section>
  )
}