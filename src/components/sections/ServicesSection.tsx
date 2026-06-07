"use client";

import { motion } from "framer-motion";
import { Rocket, Workflow } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ICON_MAP = {
  rocket: Rocket,
  workflow: Workflow,
} as const;

export function ServicesSection() {
  const reducedMotion = useReducedMotion();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-charcoal relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal className="mb-16 text-center">
          <p className="label-mono text-ember mb-4">Services</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream tracking-tight">
            Built and run on retainer
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            Not one-off projects. Ongoing partnerships where we build, deploy,
            and operate your AI systems every month.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <StaggerItem key={service.name}>
                <motion.div
                  className="glass p-8 md:p-10 h-full flex flex-col"
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { y: -6, boxShadow: "0 20px 60px rgba(255,106,61,0.15)" }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-ember/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-ember" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs text-ember uppercase tracking-wider px-3 py-1 rounded-full border border-ember/20 bg-ember/5">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-cream mb-3">
                    {service.name}
                  </h3>
                  <p className="text-muted leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  <p className="font-mono text-sm text-ember font-medium mb-6">
                    → {service.highlight}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-ember flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <MagneticButton
                    variant="outline"
                    className="w-full sm:w-auto self-start"
                    onClick={scrollToContact}
                  >
                    Book a Call
                  </MagneticButton>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
