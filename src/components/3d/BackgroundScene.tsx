import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSystem = () => {
  const ref = useRef<THREE.Points>(null);

  // Generate random positions for the particles
  const positions = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00F5A0"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

export const BackgroundScene = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[var(--background)]">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <fog attach="fog" args={['#030712', 10, 40]} />
        <ambientLight intensity={0.5} />
        
        {/* Futuristic Grid */}
        <gridHelper args={[100, 100, '#00E5FF', '#08111F']} position={[0, -5, 0]} />
        <gridHelper args={[100, 100, '#00E5FF', '#08111F']} position={[0, 5, 0]} rotation={[0, 0, Math.PI]} />

        <ParticleSystem />
      </Canvas>
    </div>
  );
};
