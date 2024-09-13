'use client'

import { motion } from 'framer-motion'
import { FaLightbulb, FaUsers, FaMicroscope, FaHandshake } from 'react-icons/fa'

export default function AboutSection() {
  const benefits = [
    {
      title: 'Pioneering Innovation',
      description: 'We lead the way in AI and robotics, delivering groundbreaking solutions that redefine industries.',
      icon: <FaLightbulb size={50} className="text-teal-400 mb-4" />,
    },
    {
      title: 'World-Class Team',
      description: 'Our experts bring unparalleled experience and passion to every project, pushing the boundaries of technology.',
      icon: <FaUsers size={50} className="text-teal-400 mb-4" />,
    },
    {
      title: 'Cutting-Edge Research',
      description: 'Turning visionary ideas into reality through relentless research and development.',
      icon: <FaMicroscope size={50} className="text-teal-400 mb-4" />,
    },
    {
      title: 'Strategic Partnerships',
      description: 'Collaborating with industry leaders to amplify impact and drive collective success.',
      icon: <FaHandshake size={50} className="text-teal-400 mb-4" />,
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Meet <span className="text-teal-400">Parsons AI</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                {benefit.icon}
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Parsons AI, we're not just building technology—we're shaping the future. Our mission is to empower businesses with intelligent solutions that unlock new possibilities and drive transformative growth.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
