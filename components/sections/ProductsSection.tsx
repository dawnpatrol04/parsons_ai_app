'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Database, Mail, Shield, MessageSquare, Wrench, FileText, BookOpen, TrendingUp, PieChart } from 'lucide-react'

export default function ProductsSection() {
  const products = [
    {
      title: "Talk to Your Database",
      description: "Speak directly to AI to write code, retrieve data, and visualize information from your database.",
      icon: Database,
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "AI Email Processing",
      description: "Process incoming emails automatically with AI that understands and follows human instructions.",
      icon: Mail,
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Robotics Safety Software",
      description: "Use vision-based AI to detect hazards and engage safety features in robotic systems.",
      icon: Shield,
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "AI-Powered Customer Service Chatbot",
      description: "Intelligent chatbot that handles inquiries, troubleshoots issues, and escalates complex problems to human agents.",
      icon: MessageSquare,
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Predictive Maintenance for Industrial Equipment",
      description: "Machine learning algorithms analyze sensor data to predict potential failures and schedule proactive maintenance.",
      icon: Wrench,
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "AI-Enhanced Document Processing",
      description: "Automatically extract, categorize, and analyze information from various document types for streamlined data management.",
      icon: FileText,
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Personalized AI Learning Assistant",
      description: "AI-powered learning platform that adapts to individual students' needs, providing personalized curriculum recommendations.",
      icon: BookOpen,
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "AI-Driven Supply Chain Optimization",
      description: "Use AI to forecast demand, optimize inventory levels, and suggest improvements in logistics and supply chain management.",
      icon: TrendingUp,
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "AI-Powered Financial Advisory",
      description: "Analyze market trends, financial data, and risk profiles to provide personalized investment advice and portfolio management.",
      icon: PieChart,
      image: "/placeholder.svg?height=400&width=600"
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-cyan-400">AI Solutions</span>
        </motion.h2>
        
        {products.map((product, index) => (
          <motion.div 
            key={product.title}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center">
                {product.icon && <product.icon className="w-8 h-8 mr-3" />}
                {product.title}
              </h3>
              <p className="text-lg text-gray-300 mb-6">{product.description}</p>
              <Button className="bg-cyan-400 text-gray-900 hover:bg-cyan-300 transition-colors">
                Learn More
              </Button>
            </div>
            <div className="md:w-1/2 md:px-8">
              <img 
                src={product.image} 
                alt={product.title} 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}