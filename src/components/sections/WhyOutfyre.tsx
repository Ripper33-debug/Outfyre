"use client";

import { Bot, RefreshCw, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { TiltCard } from "@/components/ui/TiltCard";
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
        <SectionHeader
          label="Why OUTFYRE"
          headline="Not an agency. Your AI growth team."
          align="center"
          className="mb-16"
        />

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <TiltCard className="h-full">
                  <motion.div
                    className="glass p-8 md:p-10 h-full border border-white/[0.05] hover:border-ember/20 transition-colors duration-300"
                    whileHover={reducedMotion ? undefined : { y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="mb-6 h-12 w-12 rounded-xl bg-gradient-ember/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-ember" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-cream mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{feature.description}</p>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
