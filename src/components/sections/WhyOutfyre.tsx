"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function FeatureIcon({
  type,
}: {
  type: (typeof FEATURES)[number]["icon"];
}) {
  const icons = {
    moon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <path
          d="M21 14.5A8.5 8.5 0 1111.5 3a6.5 6.5 0 109.5 11.5z"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="7" r="1" fill="#FF4500" opacity="0.6" />
        <circle cx="19" cy="10" r="0.75" fill="#FF4500" opacity="0.4" />
      </svg>
    ),
    pen: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <path
          d="M12 20h9"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="6" r="1.5" fill="#FF4500" opacity="0.5" />
      </svg>
    ),
    "calendar-check": (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          stroke="#FF4500"
          strokeWidth="1.5"
        />
        <path d="M3 10h18" stroke="#FF4500" strokeWidth="1.5" />
        <path
          d="M8 2v4M16 2v4"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9 15l2 2 4-4"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return icons[type];
}

export function WhyOutfyre() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-surface/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-horizon opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal className="mb-16 text-center">
          <p className="text-ember text-sm font-medium tracking-widest uppercase mb-4">
            Why OUTFYRE
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Built different. Built to burn.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.15}>
              <motion.div
                className="group relative p-8 md:p-10 rounded-2xl glass h-full"
                whileHover={
                  reducedMotion
                    ? undefined
                    : { y: -8, boxShadow: "0 20px 60px rgba(255, 69, 0, 0.2)" }
                }
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-fire opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="mb-6 h-12 w-12 rounded-xl bg-ember/10 flex items-center justify-center">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
