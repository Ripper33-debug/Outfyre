"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left pointer-events-none"
      style={{ scaleX }}
      aria-hidden
    >
      <div className="h-full w-full bg-gradient-ember shadow-[0_0_12px_rgba(255,106,61,0.6)]" />
    </motion.div>
  );
}
