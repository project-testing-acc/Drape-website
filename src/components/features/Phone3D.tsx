import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Environment, Float, PresentationControls, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

interface Phone3DProps {
  imageSrc: string
  className?: string
}

function PhoneModel({ imageSrc }: { imageSrc: string }) {
  const texture = useTexture(imageSrc)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.wrapS = THREE.ClampToEdgeWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!groupRef.current) return
    
    // Calculate scroll progress (0 at top, 1 when scrolled down by one viewport height)
    const scrollY = window.scrollY
    const maxScroll = typeof window !== 'undefined' ? window.innerHeight : 800
    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1)
    
    // Target transforms based on scroll
    const targetRotationY = progress * Math.PI * 0.5 // Rotate right as you scroll down
    const targetRotationX = progress * -0.2 // Tilt back slightly
    const targetPositionY = progress * -6.0 // Move down significantly to drop out of view
    
    // Disappear around halfway through the scroll (scale down to 0)
    let targetScale = 1
    if (progress > 0.3) {
      // Scale from 1 to 0 as progress goes from 0.3 to 0.6
      targetScale = Math.max(1 - (progress - 0.3) * (1 / 0.3), 0)
    }
    
    // Smoothly damp towards the targets
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotationY, 5, delta)
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotationX, 5, delta)
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetPositionY, 5, delta)
    
    const currentScale = THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 5, delta)
    groupRef.current.scale.setScalar(currentScale)
  })

  return (
    <group ref={groupRef} dispose={null}>
      {/* Phone chassis outer metal */}
      <RoundedBox args={[2.3, 4.8, 0.3]} radius={0.3} smoothness={4}>
        <meshStandardMaterial color="#3a3a3c" metalness={0.9} roughness={0.1} />
      </RoundedBox>

      {/* Screen Bezel (black inner edge) */}
      <RoundedBox args={[2.2, 4.7, 0.31]} radius={0.25} smoothness={4}>
        <meshStandardMaterial color="#000000" metalness={0.5} roughness={0.5} />
      </RoundedBox>

      {/* Screen */}
      <mesh position={[0, 0, 0.156]}>
        <planeGeometry args={[2.05, 4.55]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Dynamic Island */}
      <RoundedBox args={[0.7, 0.2, 0.05]} radius={0.1} smoothness={4} position={[0, 2.05, 0.157]}>
        <meshBasicMaterial color="#000000" />
      </RoundedBox>
    </group>
  )
}

export default function Phone3D({ imageSrc, className = '' }: Phone3DProps) {
  return (
    <div className={`w-full h-full min-h-[500px] lg:min-h-[600px] cursor-grab active:cursor-grabbing ${className}`}>
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Environment preset="city" />
        <PresentationControls
          global
          rotation={[0, -0.3, 0]}
          polar={[-0.2, 0.2]}
          azimuth={[-0.5, 0.5]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.6} floatIntensity={0.6} speed={2}>
            <Suspense fallback={null}>
              <PhoneModel imageSrc={imageSrc} />
            </Suspense>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
