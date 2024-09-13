import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

const WavyPlane = () => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (ref.current && ref.current.geometry.attributes.position) {
      const time = clock.getElapsedTime()
      const positions = ref.current.geometry.attributes.position.array as Float32Array

      for (let i = 1; i < positions.length; i += 3) {
        positions[i] = Math.sin((positions[i - 1] + positions[i + 1] + time) * 0.5) * 1.5
      }

      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <meshStandardMaterial color="#14b8a6" wireframe />
    </mesh>
  )
}

const AboutSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About <span className="text-teal-400">Parsons AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pioneering the future of AI technology to solve complex challenges and drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              At Parsons AI, we're dedicated to pushing the boundaries of artificial intelligence. 
              Our mission is to develop cutting-edge AI solutions that empower businesses and 
              improve people's lives.
            </p>
            <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>State-of-the-art AI algorithms</li>
              <li>Customized solutions for your unique needs</li>
              <li>Experienced team of AI researchers and engineers</li>
              <li>Commitment to ethical AI development</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[400px] w-full"
          >
            <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <WavyPlane />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection