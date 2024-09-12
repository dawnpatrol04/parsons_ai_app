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
    <section id="custom" className="py-20 px-6 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
      <h2 className="text-5xl font-bold mb-10 text-center">Custom Solutions</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-8 text-center">
          At Parsons AI, we don't just offer ready-made products — we specialize in building custom solutions tailored to meet your specific business needs. Whether you need to extend the functionality of existing systems or create new ones from the ground up, our expert team can deliver cutting-edge AI and robotics solutions that align with your goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-xl mb-6">
            Partner with Parsons AI to revolutionize your business with innovative, customized technologies.
          </p>
          <Button className="bg-white text-indigo-500 hover:bg-indigo-100 text-lg px-8 py-3 rounded-full">
            Get Custom Solution
          </Button>
        </div>
      </div>
    </section>
  )
}