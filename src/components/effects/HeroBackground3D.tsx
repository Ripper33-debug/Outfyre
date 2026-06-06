"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null);
  const orbs = useMemo(() => {
    return Array.from({ length: 12 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8 - 5,
      ] as [number, number, number],
      scale: Math.random() * 0.8 + 0.3,
      speed: Math.random() * 0.3 + 0.1,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      const orb = orbs[i];
      child.position.y = orb.position[1] + Math.sin(t * orb.speed + orb.offset) * 0.5;
      child.position.x = orb.position[0] + Math.cos(t * orb.speed * 0.5 + orb.offset) * 0.3;
    });
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position} scale={orb.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color="#FF4500"
            transparent
            opacity={0.08}
          />
        </mesh>
      ))}
    </group>
  );
}

function HorizonGlow() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as THREE.MeshBasicMaterial;
    material.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  return (
    <mesh ref={meshRef} position={[0, -4, -8]} rotation={[-Math.PI / 2.5, 0, 0]}>
      <planeGeometry args={[30, 15]} />
      <meshBasicMaterial
        color="#FF4500"
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function HeroBackground3D() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-horizon pointer-events-none" />
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.1} />
        <FloatingOrbs />
        <HorizonGlow />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-horizon" />
    </div>
  );
}
