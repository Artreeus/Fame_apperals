'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Fabric Piece Component
function FabricPiece({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <planeGeometry args={[2, 3, 16, 16]} />
        <meshStandardMaterial
          color={color}
          side={THREE.DoubleSide}
          roughness={0.4}
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

// T-Shirt Shape Component
function TShirtShape({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Create T-shirt silhouette
    shape.moveTo(-1, -1.5);
    shape.lineTo(-1, 0.5);
    shape.lineTo(-1.5, 0.8);
    shape.lineTo(-1.5, 1.2);
    shape.lineTo(-0.8, 1.2);
    shape.lineTo(-0.5, 1.5);
    shape.lineTo(0.5, 1.5);
    shape.lineTo(0.8, 1.2);
    shape.lineTo(1.5, 1.2);
    shape.lineTo(1.5, 0.8);
    shape.lineTo(1, 0.5);
    shape.lineTo(1, -1.5);
    shape.lineTo(-1, -1.5);
    
    return new THREE.ExtrudeGeometry(shape, { depth: 0.1, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshStandardMaterial
          color="#ff6b6b"
          roughness={0.3}
          metalness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

// Dress Shape Component
function DressShape({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Create dress silhouette
    shape.moveTo(-0.5, 1.5);
    shape.lineTo(-0.3, 1.2);
    shape.lineTo(-0.8, 0.5);
    shape.lineTo(-1.2, -1.5);
    shape.lineTo(1.2, -1.5);
    shape.lineTo(0.8, 0.5);
    shape.lineTo(0.3, 1.2);
    shape.lineTo(0.5, 1.5);
    shape.lineTo(-0.5, 1.5);
    
    return new THREE.ExtrudeGeometry(shape, { depth: 0.08, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshStandardMaterial
          color="#4ecdc4"
          roughness={0.2}
          metalness={0.3
          }
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

// Floating Particles Component
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.02} transparent opacity={0.6} />
    </points>
  );
}

// Main Scene Component
export function ThreeScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={['#0a0a0a']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#ff6b6b" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#4ecdc4" />

        {/* Environment */}
        <Environment preset="night" />

        {/* Sparkles effect */}
        <Sparkles count={100} scale={10} size={2} speed={0.4} color="#ffffff" />

        {/* Fabric pieces */}
        <FabricPiece position={[-4, 2, -2]} color="#ff9999" scale={0.8} />
        <FabricPiece position={[4, -1, -3]} color="#99ccff" scale={1.2} />
        <FabricPiece position={[-2, -3, -1]} color="#ffcc99" scale={0.9} />
        <FabricPiece position={[3, 3, -4]} color="#cc99ff" scale={1.1} />

        {/* Garment shapes */}
        <TShirtShape position={[-2, 1, 0]} />
        <DressShape position={[2, -0.5, 1]} />
        <TShirtShape position={[4, 2, -1]} />

        {/* Floating particles */}
        <FloatingParticles />
      </Canvas>
    </div>
  );
}