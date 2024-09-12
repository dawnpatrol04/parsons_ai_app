'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function AISection() {
  return (
    <section id="ai" className="py-20 px-6 bg-gradient-to-r from-indigo-800 to-purple-800 text-white">
      <h2 className="text-5xl font-bold mb-10 text-center">Artificial Intelligence</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-3xl font-semibold mb-4">Cutting-edge AI Solutions</h3>
          <p className="text-gray-300 mb-4">
            Our AI technologies are at the forefront of innovation, providing intelligent solutions for complex problems.
            From natural language processing to computer vision, we're pushing the boundaries of what's possible.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Advanced machine learning algorithms</li>
            <li>Natural language understanding and generation</li>
            <li>Computer vision and image recognition</li>
            <li>Predictive analytics and decision support systems</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/ai-illustration.jpg"
              alt="AI Technology Illustration"
              width={500}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}