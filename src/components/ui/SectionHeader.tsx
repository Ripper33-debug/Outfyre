"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type SectionHeaderProps = {
  label: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export function SectionHeader({
  label,
  headline,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const reducedMotion = useReducedMotion();
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`${alignClass} ${className}`}>
      <motion.p
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="label-mono text-ember mb-4"
      >
        {label}
      </motion.p>
      <MaskReveal
        as="h2"
        text={headline}
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream tracking-tight block ${alignClass}`}
        delay={0.1}
      />
      {description && (
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 text-muted max-w-2xl text-lg ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
