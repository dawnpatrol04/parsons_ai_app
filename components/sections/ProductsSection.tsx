'use client'

import { motion } from "framer-motion"

export default function ProductsSection() {
  const products = [
    {
      title: "Talk to Your Database",
      description: "Speak directly to AI to write code, retrieve data, and visualize information from your database.",
      icon: "database"
    },
    {
      title: "AI Email Processing",
      description: "Process incoming emails automatically with AI that understands and follows human instructions.",
      icon: "mail"
    },
    {
      title: "Robotics Safety Software",
      description: "Use vision-based AI to detect hazards and engage safety features in robotic systems.",
      icon: "shield"
    },
    {
      title: "AI-Powered Customer Service Chatbot",
      description: "Intelligent chatbot that handles inquiries, troubleshoots issues, and escalates complex problems to human agents.",
      icon: "message-square"
    },
    {
      title: "Predictive Maintenance for Industrial Equipment",
      description: "Machine learning algorithms analyze sensor data to predict potential failures and schedule proactive maintenance.",
      icon: "tool"
    },
    {
      title: "AI-Enhanced Document Processing",
      description: "Automatically extract, categorize, and analyze information from various document types for streamlined data management.",
      icon: "file-text"
    },
    {
      title: "Personalized AI Learning Assistant",
      description: "AI-powered learning platform that adapts to individual students' needs, providing personalized curriculum recommendations.",
      icon: "book-open"
    },
    {
      title: "AI-Driven Supply Chain Optimization",
      description: "Use AI to forecast demand, optimize inventory levels, and suggest improvements in logistics and supply chain management.",
      icon: "trending-up"
    },
    {
      title: "AI-Powered Financial Advisory",
      description: "Analyze market trends, financial data, and risk profiles to provide personalized investment advice and portfolio management.",
      icon: "pie-chart"
    }
  ]

  return (
    <section id="products" className="py-20 px-6 bg-gray-100 text-gray-800">
      <h2 className="text-5xl font-bold mb-10 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div 
            key={product.title}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {product.icon === "database" && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                )}
                {product.icon === "mail" && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                )}
                {product.icon === "shield" && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                )}
                {product.icon === "message-square" && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                )}
                {product.icon === "tool" && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                )}
                {product.icon === "file-text" && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                )}
                {product.icon === "book-open" && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                )}
                {product.icon === "trending-up" && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                )}
                {product.icon === "bar-chart-2" && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                )}
                {product.icon === "pie-chart" && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                )}
              </svg>
              <h3 className="text-2xl font-semibold">{product.title}</h3>
            </div>
            <p className="text-gray-600">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}