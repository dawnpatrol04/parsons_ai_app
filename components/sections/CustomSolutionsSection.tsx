'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaRobot, FaBrain, FaChartLine, FaCogs } from 'react-icons/fa'

export default function CustomSolutionsSection() {
  const services = [
    {
      title: "Next-Level AI Development",
      description: "Crafting advanced AI systems that push boundaries and give you a competitive edge.",
      icon: <FaBrain size={40} className="text-teal-400" />
    },
    {
      title: "Smart Robotics Integration",
      description: "Blending cutting-edge robotics into your operations for unmatched innovation.",
      icon: <FaRobot size={40} className="text-teal-400" />
    },
    {
      title: "Data-Driven Insights",
      description: "Transforming your data into actionable strategies that propel your business forward.",
      icon: <FaChartLine size={40} className="text-teal-400" />
    },
    {
      title: "Full-Stack Magic",
      description: "From concept to launch, we build intelligent systems that scale with your ambitions.",
      icon: <FaCogs size={40} className="text-teal-400" />
    }
  ]

  return (
    <section id="custom-solutions" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-extrabold mb-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Transforming Ideas into <span className="text-teal-400">Reality</span> with Cutting-Edge Tech
        </motion.h2>
        <motion.p 
          className="text-xl mb-16 text-center text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Parsons AI, we turn your boldest ideas into powerful, game-changing solutions. Whatever you envision, we'll make it happen with the latest tech and a touch of genius.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl mb-8 text-gray-300">
            Ready to disrupt the norm? Let's build the future together.
          </p>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300">
            Let's Innovate Together
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
