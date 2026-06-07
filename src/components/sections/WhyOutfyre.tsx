"use client";

import { Bot, Server, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ICON_MAP = {
  bot: Bot,
  server: Server,
  "trending-up": TrendingUp,
} as const;

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
            AI-first. Fully managed. Built to evolve.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon];
            return (
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
                    <Icon className="w-6 h-6 text-ember" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
