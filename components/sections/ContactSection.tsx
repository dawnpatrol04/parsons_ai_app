'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, User, Mail, MessageSquare, Phone, Globe } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formDataForGoogle = new FormData()
    Object.keys(formData).forEach(key => {
      formDataForGoogle.append(key, formData[key])
    })

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzCU7RP8Zv7f2zQM7Nh2CzXo9Wv6Blkme24FoT9Xd3qOqTxNOMHKUM1F6AIZPtwjp5w/exec', {
        method: 'POST',
        body: formDataForGoogle
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          message: '',
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Thank You!</h2>
          <p className="text-xl text-gray-300">Your message has been sent successfully. We'll get back to you soon.</p>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
      <div className="w-full max-w-md">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Contact <span className="text-teal-400">Parsons AI</span>
          </h2>
          <p className="text-xl text-gray-300">
            We're here to help you navigate the future of technology.
          </p>
        </motion.div>
        
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-900 bg-opacity-50 backdrop-blur-lg p-8 rounded-lg shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {error && (
            <motion.div
              className="mb-4 text-red-500 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {error}
            </motion.div>
          )}
          {[
            { name: 'name', label: 'Name', type: 'text', icon: User, autoComplete: 'name' },
            { name: 'email', label: 'Email', type: 'email', icon: Mail, autoComplete: 'email' },
            { name: 'phone', label: 'Phone', type: 'tel', icon: Phone, autoComplete: 'tel', optional: true },
            { name: 'country', label: 'Country', type: 'text', icon: Globe, autoComplete: 'country-name', optional: true },
          ].map((field) => (
            <div key={field.name} className="relative">
              <Label htmlFor={field.name} className="text-gray-300 mb-2 block">
                {field.label} {field.optional && <span className="text-gray-500">(Optional)</span>}
              </Label>
              <div className="relative">
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={!field.optional}
                  className="pl-12 bg-black bg-opacity-50 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/30"
                  placeholder={`Your ${field.label}`}
                  autoComplete={field.autoComplete}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
                <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
          <div className="relative">
            <Label htmlFor="message" className="text-gray-300 mb-2 block">Message</Label>
            <div className="relative">
              <Textarea
                id="message"
                name="message"
                required
                className="pl-12 bg-black bg-opacity-50 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/30"
                placeholder="Your message here..."
                rows={4}
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
              />
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-md flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <motion.div
                className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
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
