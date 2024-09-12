'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function RoboticsSection() {
  return (
    <section id="robotics" className="py-20 px-6 bg-gray-100 text-gray-800">
      <h2 className="text-5xl font-bold mb-10 text-center">Robotics</h2>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-3xl font-semibold mb-4">Innovative Robotics Solutions</h3>
          <p className="text-gray-600 mb-4">
            Our robotics division is dedicated to creating intelligent, safe, and efficient robotic systems.
            We combine cutting-edge hardware with sophisticated software to deliver unparalleled performance.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Advanced sensor integration for environmental awareness</li>
            <li>Real-time decision making and obstacle avoidance</li>
            <li>Human-robot collaboration systems</li>
            <li>Adaptive learning algorithms for improved performance</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/robotics-illustration.jpg"
              alt="Robotics Technology Illustration"
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