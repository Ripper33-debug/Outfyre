"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MaskRevealProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function MaskReveal({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.07,
  once = true,
  as: Tag = "span",
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5, margin: "0px 0px -80px 0px" });
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");
  const shouldAnimate = reducedMotion || isInView;

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom mr-[0.28em] last:mr-0"
          >
            <motion.span
              className={`inline-block ${wordClassName}`}
              initial={reducedMotion ? false : { y: "110%" }}
              animate={shouldAnimate ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.65,
                delay: reducedMotion ? 0 : delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
