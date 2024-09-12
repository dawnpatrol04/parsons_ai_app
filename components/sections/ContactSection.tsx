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
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.p 
          className="text-xl mb-12 text-center text-indigo-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
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
            <Label htmlFor="name" className="text-indigo-200 mb-2 block">Name</Label>
            <div className="relative">
              <Input 
                id="name" 
                name="name" 
                required 
                className="pl-10 bg-white/10 border-indigo-300/30 text-white placeholder-indigo-300/50 focus:border-indigo-400 focus:ring focus:ring-indigo-400/30"
                placeholder="Your Name"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-300/70" />
            </div>
          </div>
          <div className="relative">
            <Label htmlFor="email" className="text-indigo-200 mb-2 block">Email</Label>
            <div className="relative">
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="pl-10 bg-white/10 border-indigo-300/30 text-white placeholder-indigo-300/50 focus:border-indigo-400 focus:ring focus:ring-indigo-400/30"
                placeholder="your.email@example.com"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-300/70" />
            </div>
          </div>
          <div className="relative">
            <Label htmlFor="message" className="text-indigo-200 mb-2 block">Message</Label>
            <div className="relative">
              <Textarea 
                id="message" 
                name="message" 
                required 
                className="pl-10 bg-white/10 border-indigo-300/30 text-white placeholder-indigo-300/50 focus:border-indigo-400 focus:ring focus:ring-indigo-400/30"
                placeholder="Your message here..."
                rows={4}
              />
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-indigo-300/70" />
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <motion.div
                className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin"
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