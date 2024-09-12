'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CustomSolutionsSection() {
  const services = [
    {
      title: "Custom AI Development",
      description: "Tailored artificial intelligence systems that solve unique challenges."
    },
    {
      title: "Robotic System Integration",
      description: "Bespoke robotics solutions designed for your industry needs."
    },
    {
      title: "AI and Data Consulting",
      description: "Helping you implement and optimize AI strategies within your organization."
    },
    {
      title: "Full Stack Software Solutions",
      description: "End-to-end development and deployment of intelligent systems."
    }
  ]

  return (
    <section id="custom" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Finally, a <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">simple</span> way to manage your business.
        </motion.h2>
        <motion.p 
          className="text-xl mb-12 text-center text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Parsons AI, we specialize in building custom solutions tailored to meet your specific business needs. Our expert team delivers cutting-edge AI and robotics solutions that align with your goals.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-900 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl mb-6 text-gray-300">
            Partner with Parsons AI to revolutionize your business with innovative, customized technologies.
          </p>
          <Button className="bg-gradient-to-r from-blue-400 to-cyan-400 text-black hover:from-blue-500 hover:to-cyan-500 text-lg px-8 py-3 rounded-full transition-all duration-300">
            Get Custom Solution
          </Button>
        </motion.div>
      </div>
    </section>
  )
}