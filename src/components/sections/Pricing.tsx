"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Pricing() {
  const reducedMotion = useReducedMotion();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding relative">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          label="Pricing"
          headline="Monthly retainers. No surprises."
          description="Every tier is a recurring partnership — we build, run, and optimize your AI systems month over month."
          align="center"
          className="mb-16"
        />

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier) => (
            <StaggerItem key={tier.name}>
              <TiltCard className="h-full">
                <motion.div
                  className={`relative rounded-xl p-8 md:p-10 h-full flex flex-col ${
                    tier.highlighted
                      ? "bg-surface-elevated border-2 border-ember/40 shadow-ember-lg"
                      : "glass border border-white/[0.05]"
                  }`}
                  whileHover={reducedMotion ? undefined : { y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-ember text-white font-mono text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-2">
                    <span className="font-mono text-4xl md:text-5xl font-extrabold text-cream tabular-nums">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-muted text-sm">{tier.period}</span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-ember mb-8 uppercase tracking-wide">
                    {tier.subtitle}
                  </p>

                  <ul className="space-y-3 mb-10 flex-1">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-ember mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <MagneticButton
                    variant={tier.highlighted ? "primary" : "ghost"}
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    {tier.cta}
                  </MagneticButton>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
