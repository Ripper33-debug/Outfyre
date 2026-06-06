"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 50, y: 50 });
      }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl p-[1px] transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0.3,
          background: `radial-gradient(600px circle at ${position.x}% ${position.y}%, rgba(255,69,0,0.4), transparent 40%)`,
        }}
      />
      <div className="relative h-full rounded-2xl bg-surface-elevated/80 backdrop-blur-sm border border-white/[0.06]">
        {children}
      </div>
    </motion.div>
  );
}
