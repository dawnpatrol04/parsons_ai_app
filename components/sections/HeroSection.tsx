'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber'
import { ParticleWave } from '@/components/sections/ParticleWave'

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <ParticleWave />
      </Canvas>
      <div className="relative z-10 flex flex-col items-center text-center text-white p-8">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ignite Your Future with <span className="text-teal-400">Innovative Technology</span>
        </motion.h1>
        <p className="text-lg md:text-xl mb-8">
          Elevate your projects with our breakthrough solutions and unparalleled expertise. 
          Dive into the future of technology with us today.
        </p>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg">
          Get Started
        </Button>
      </div>
    </section>
  )
}
