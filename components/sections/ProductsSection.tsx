'use client'

import { motion } from "framer-motion"
import { FaDatabase, FaEnvelopeOpenText, FaShieldAlt, FaComments, FaWrench, FaFileAlt, FaBookOpen, FaChartLine, FaChartPie } from 'react-icons/fa'

export default function ProductsSection() {
  const products = [
    {
      title: "Talk to Your Database",
      description: "Speak directly to AI to write code, retrieve data, and visualize information from your database.",
      icon: <FaDatabase size={60} className="text-teal-400 mb-4" />,
    },
    {
      title: "AI Email Processing",
      description: "Process incoming emails automatically with AI that understands and follows human instructions.",
      icon: <FaEnvelopeOpenText size={60} className="text-teal-400 mb-4" />,
    },
    {
      title: "Robotics Safety Software",
      description: "Use vision-based AI to detect hazards and engage safety features in robotic systems.",
      icon: <FaShieldAlt size={60} className="text-teal-400 mb-4" />,
    },
    {
      title: "AI-Powered Customer Service Chatbot",
      description: "Intelligent chatbot that handles inquiries, troubleshoots issues, and escalates complex problems to human agents.",
      icon: <FaComments size={60} className="text-teal-400 mb-4" />,
    },
    {
      title: "Predictive Maintenance",
      description: "Algorithms analyze sensor data to predict failures and schedule proactive maintenance.",
      icon: <FaWrench size={60} className="text-teal-400 mb-4" />,
    },
    {
      title: "AI Document Processing",
      description: "Extract, categorize, and analyze information from documents for streamlined management.",
      icon: <FaFileAlt size={60} className="text-teal-400 mb-4" />,
    },
    {
      title: "Personalized Learning Assistant",
      description: "AI-powered platform that adapts to individual needs, providing personalized recommendations.",
      icon: <FaBookOpen size={60} className="text-teal-400 mb-4" />,
    },
    {
      title: "Supply Chain Optimization",
      description: "Use AI to forecast demand, optimize inventory, and improve logistics management.",
      icon: <FaChartLine size={60} className="text-teal-400 mb-4" />,
    },
    {
      title: "Financial Advisory AI",
      description: "Analyze market trends to provide personalized investment advice and portfolio management.",
      icon: <FaChartPie size={60} className="text-teal-400 mb-4" />,
    }
  ]

  return (
    <section id="products" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-extrabold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Discover Our <span className="text-teal-400">Innovative Solutions</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.title}
              className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center">
                {product.icon}
                <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
                <p className="text-gray-300">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
