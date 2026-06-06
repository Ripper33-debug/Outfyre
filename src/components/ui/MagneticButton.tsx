"use client";

import {
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";
import { motion, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MagneticButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const variants = {
  primary:
    "bg-gradient-fire text-white shadow-ember hover:shadow-ember-lg border border-transparent",
  ghost:
    "bg-transparent text-white border border-white/20 hover:border-ember/50 hover:bg-white/[0.03]",
  outline:
    "bg-transparent text-ember border border-ember/40 hover:bg-ember/10 hover:border-ember",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

export function MagneticButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX ** 2 + distY ** 2);
    const maxDist = 120;

    if (distance < maxDist) {
      const strength = (1 - distance / maxDist) * 0.35;
      x.set(distX * strength);
      y.set(distY * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      data-cursor="hover"
      className={`relative inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={reducedMotion ? undefined : { scale: 0.97 }}
      animate={reducedMotion ? undefined : { scale: isHovered ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
