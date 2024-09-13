'use client'

import { useMemo, useRef } from 'react'
import { useFrame, extend, useThree } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { Noise } from 'noisejs'

// Custom shader material
const ParticleMaterial = shaderMaterial(
  { uTime: 0 },
  // Vertex Shader
  `
    uniform float uTime;
    attribute float aSize;
    attribute vec3 aColor;
    varying vec3 vColor;

    void main() {
      vColor = aColor;
      vec3 newPosition = position;

      // Calculate point size based on distance from the camera
      vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
      gl_PointSize = aSize * (300.0 / -mvPosition.z);

      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  // Fragment Shader
  `
    varying vec3 vColor;

    void main() {
      // Draw points as circles
      float dist = length(gl_PointCoord - vec2(0.5));
      if (dist > 0.5) discard;

      gl_FragColor = vec4(vColor, 1.0);
    }
  `
)

extend({ ParticleMaterial })

export function ParticleWave() {
  const points = useRef()
  const { mouse } = useThree()
  const particlesCount = 15000 // Increased particle count
  const noise = useMemo(() => new Noise(Math.random()), [])
  const positions = useMemo(() => new Float32Array(particlesCount * 3), [particlesCount])
  const sizes = useMemo(() => new Float32Array(particlesCount), [particlesCount])
  const colors = useMemo(() => new Float32Array(particlesCount * 3), [particlesCount])

  // Initialize particles
  useMemo(() => {
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3

      // Position
      positions[i3] = (Math.random() - 0.5) * 30 // Increased spread
      positions[i3 + 1] = (Math.random() - 0.5) * 30
      positions[i3 + 2] = (Math.random() - 0.5) * 30

      // Size
      sizes[i] = Math.random() * 5 + 1 // Sizes between 1 and 6

      // Color (varying shades of cyan)
      colors[i3] = 0
      colors[i3 + 1] = Math.random() * 0.5 + 0.5 // Between 0.5 and 1.0
      colors[i3 + 2] = 1
    }
  }, [particlesCount, positions, sizes, colors])

  useFrame(({ clock }) => {
    if (points.current) {
      const time = clock.elapsedTime * 0.1
      const positionsArray = points.current.geometry.attributes.position.array

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3

        // Original position
        const x = positions[i3]
        const y = positions[i3 + 1]
        const z = positions[i3 + 2]

        // Noise-based movement
        positionsArray[i3] = x + noise.simplex3(x * 0.05, y * 0.05, time) * 0.5
        positionsArray[i3 + 1] = y + noise.simplex3(x * 0.05, y * 0.05, time + 100) * 0.5
        positionsArray[i3 + 2] = z + noise.simplex3(x * 0.05, y * 0.05, time + 200) * 0.5
      }
      points.current.geometry.attributes.position.needsUpdate = true
      points.current.material.uniforms.uTime.value = clock.elapsedTime

      // Parallax effect
      points.current.rotation.y = mouse.x * 0.5
      points.current.rotation.x = -mouse.y * 0.5
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={particlesCount}
        />
        <bufferAttribute
          attach="attributes-aSize"
          array={sizes}
          itemSize={1}
          count={particlesCount}
        />
        <bufferAttribute
          attach="attributes-aColor"
          array={colors}
          itemSize={3}
          count={particlesCount}
        />
      </bufferGeometry>
      <particleMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
