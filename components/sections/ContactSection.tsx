'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, User, Mail, MessageSquare } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Reset form or show success message here
  }

  return (
    <section className="pt-40 bg-gradient-to-b from-indigo-800 to-blue-900 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo-800 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact <span className="text-cyan-400">Parsons AI</span>
        </motion.h2>
        <motion.p 
          className="text-xl mb-12 text-center text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a question or want to learn more about our AI solutions? We're here to help you navigate the future of technology.
        </motion.p>
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative">
            <Label htmlFor="name" className="text-gray-300 mb-2 block">Name</Label>
            <div className="relative">
              <Input 
                id="name" 
                name="name" 
                required 
                className="pl-10 bg-white bg-opacity-10 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30"
                placeholder="Your Name"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="relative">
            <Label htmlFor="email" className="text-gray-300 mb-2 block">Email</Label>
            <div className="relative">
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="pl-10 bg-white bg-opacity-10 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30"
                placeholder="your.email@example.com"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="relative">
            <Label htmlFor="message" className="text-gray-300 mb-2 block">Message</Label>
            <div className="relative">
              <Textarea 
                id="message" 
                name="message" 
                required 
                className="pl-10 bg-white bg-opacity-10 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30"
                placeholder="Your message here..."
                rows={4}
              />
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-cyan-400 text-gray-900 hover:bg-cyan-300 transition-colors text-lg px-8 py-3 rounded-md flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <motion.div
                className="h-5 w-5 border-t-2 border-r-2 border-gray-900 rounded-full animate-spin"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}