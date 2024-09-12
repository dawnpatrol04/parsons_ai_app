'use client'

import { motion } from "framer-motion"

export default function AboutSection() {
  const benefits = ['Innovative Solutions', 'Expert Team', 'Cutting-edge Research', 'Industry Partnerships']

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <h2 className="text-5xl font-bold mb-10 text-center">About Parsons AI</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {benefits.map((benefit, index) => (
          <motion.div 
            key={benefit}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-xl w-64"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
            <p className="text-gray-200">Parsons AI is at the forefront of AI and robotics technology, delivering innovative solutions for businesses and pushing the boundaries of what's possible.</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}