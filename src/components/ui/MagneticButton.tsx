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
    "bg-gradient-ember text-white border border-transparent",
  ghost:
    "bg-transparent text-cream border border-white/10 hover:border-ember/40 hover:bg-white/[0.03]",
  outline:
    "bg-transparent text-ember border border-ember/30 hover:bg-ember/10 hover:border-ember/60",
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

  const x = useSpring(0, { stiffness: 280, damping: 18 });
  const y = useSpring(0, { stiffness: 280, damping: 18 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX ** 2 + distY ** 2);
    const maxDist = 140;

    if (distance < maxDist) {
      const strength = (1 - distance / maxDist) * 0.4;
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

  const isPrimary = variant === "primary";

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
      animate={
        reducedMotion
          ? undefined
          : {
              scale: isHovered ? 1.03 : 1,
              boxShadow: isHovered && isPrimary
                ? "0 0 40px rgba(255,106,61,0.45), 0 0 80px rgba(255,45,120,0.2)"
                : isPrimary
                  ? "0 0 20px rgba(255,106,61,0.15)"
                  : "0 0 0px transparent",
            }
      }
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
