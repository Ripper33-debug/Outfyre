"use client";

import { Bot, RefreshCw, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ICON_MAP = {
  bot: Bot,
  "refresh-cw": RefreshCw,
  "calendar-check": CalendarCheck,
} as const;

export function WhyOutfyre() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-surface/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-horizon opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal className="mb-16 text-center">
          <p className="label-mono text-ember mb-4">Why OUTFYRE</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream tracking-tight">
            Not an agency. Your AI growth team.
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="glass p-8 md:p-10 h-full"
                  whileHover={
                    reducedMotion
                      ? undefined
                      : {
                          y: -8,
                          boxShadow: "0 20px 60px rgba(255,106,61,0.18)",
                        }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="mb-6 h-12 w-12 rounded-xl bg-gradient-ember/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-ember" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-cream mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
