'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { FaLightbulb, FaUsers, FaMicroscope, FaHandshake } from 'react-icons/fa'
import * as THREE from 'three'

function Particles() {
  const ref = useRef<THREE.Points>(null)
  
  // Create a grid of particles
  const particles = useMemo(() => {
    const count = 500
    const positions = []
    const gridSize = Math.sqrt(count)
    const separation = 2.5

    for (let i = 0; i < count; i++) {
      const x = (i % gridSize - gridSize / 2) * separation
      const y = 0
      const z = Math.floor(i / gridSize - gridSize / 2) * separation
      positions.push(x, y, z)
    }

    return new Float32Array(positions)
  }, [])

  // Animate particles to move up and down like terrain
  useFrame(({ clock }) => {
    if (ref.current && ref.current.geometry.attributes.position) {
      const time = clock.getElapsedTime()
      const positions = ref.current.geometry.attributes.position.array

      for (let i = 1; i < positions.length; i += 3) {
        positions[i] = Math.sin((positions[i - 1] + positions[i + 1] + time) * 0.5) * 1.5
      }

      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#38bdf8" // Teal-400
        size={0.1}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}

export default function AboutSection() {
  const benefits = [
    {
      title: 'Pioneering Innovation',
      description:
        'We lead the frontier of AI and robotics, delivering groundbreaking solutions that transform industries worldwide.',
      icon: <FaLightbulb size={40} className="text-teal-400 mb-4" />,
    },
    {
      title: 'World-Class Team',
      description:
        'Our experts bring unparalleled experience and passion to every project, pushing the boundaries of technology.',
      icon: <FaUsers size={40} className="text-teal-400 mb-4" />,
    },
    {
      title: 'Cutting-Edge Research',
      description:
        'Turning visionary ideas into reality through relentless research and development.',
      icon: <FaMicroscope size={40} className="text-teal-400 mb-4" />,
    },
    {
      title: 'Strategic Partnerships',
      description:
        'Collaborating with industry leaders to amplify impact and drive collective success.',
      icon: <FaHandshake size={40} className="text-teal-400 mb-4" />,
    },
  ]

  return (
    <section id="about" className="py-20 bg-black text-white relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Discover <span className="text-teal-400">Parsons AI</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center">
          {/* Particle System */}
          <div className="w-full lg:w-2/3 mb-16 lg:mb-0 h-96">
            <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} />
              <Particles />
            </Canvas>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/3 lg:pl-16">
            <motion.p
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At Parsons AI, we're not just building technology—we're shaping the future. Our mission is to empower businesses with intelligent solutions that unlock new possibilities and drive transformative growth.
            </motion.p>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}