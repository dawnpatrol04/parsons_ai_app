// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  success: boolean
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` })
  }

  const { name, email, phone, country, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' })
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
    port: Number(process.env.SMTP_PORT), // e.g., 587
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // SMTP username
      pass: process.env.SMTP_PASS, // SMTP password
    },
  })

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: 'hello@parsons.ai', // list of receivers
    subject: 'Website Contact Form', // Subject line
    text: `
      You have a new contact form submission:

      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'N/A'}
      Country: ${country || 'N/A'}
      Message:
      ${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Country:</strong> ${country || 'N/A'}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}
