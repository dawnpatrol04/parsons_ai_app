'use client'

import { motion } from "framer-motion"
import { Lightbulb, Users, Microscope, Handshake } from 'lucide-react'

export default function AboutSection() {
  const benefits = [
    {
      title: 'Innovative Solutions',
      description: 'Parsons AI is at the forefront of AI and robotics technology, delivering cutting-edge solutions that transform businesses.',
      icon: Lightbulb,
    },
    {
      title: 'Expert Team',
      description: 'Our team of world-class AI researchers and engineers brings decades of combined experience to every project.',
      icon: Users,
    },
    {
      title: 'Cutting-edge Research',
      description: 'We continuously push the boundaries of AI and robotics, turning theoretical breakthroughs into practical applications.',
      icon: Microscope,
    },
    {
      title: 'Industry Partnerships',
      description: 'Parsons AI collaborates with leading companies and institutions to drive innovation across various sectors.',
      icon: Handshake,
    }
  ]

  return (
    <section className="pt-40 pb-20 bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-cyan-400">Parsons AI</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <benefit.icon className="w-10 h-10 text-cyan-400 mr-4" />
                <h3 className="text-xl font-bold text-cyan-400">{benefit.title}</h3>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Parsons AI, we're committed to pushing the boundaries of artificial intelligence and robotics. 
            Our mission is to create intelligent solutions that solve complex problems and drive innovation across industries.
          </p>
        </motion.div>
      </div>
    </section>
  )
}