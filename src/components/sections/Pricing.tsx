"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useBooking } from "@/components/providers/AppProviders";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Pricing() {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();

  return (
    <section id="pricing" className="section-padding bg-void">
      <ScrollReveal className="mb-16 text-center">
        <p className="text-ember text-sm font-medium tracking-widest uppercase mb-4">
          Pricing
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          Build once. Partner ongoing.
        </h2>
        <p className="text-muted max-w-xl mx-auto">
          A website build to get you live, managed hosting to keep you running,
          and a custom AI retainer to keep you ahead.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PRICING_TIERS.map((tier, i) => (
          <ScrollReveal key={tier.name} delay={i * 0.1}>
            <motion.div
              className={`relative rounded-2xl p-8 md:p-10 h-full flex flex-col ${
                tier.highlighted
                  ? "bg-surface-elevated border-2 border-ember/50 shadow-ember-lg"
                  : "bg-surface border border-white/[0.06]"
              }`}
              whileHover={
                reducedMotion
                  ? undefined
                  : { y: -6, borderColor: "rgba(255, 69, 0, 0.4)" }
              }
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-fire text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-xl font-bold text-white mb-2">
                {tier.name}
              </h3>
              <div className="mb-2">
                <span className="font-display text-4xl md:text-5xl font-extrabold text-white">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-muted text-sm">{tier.period}</span>
                )}
              </div>
              <p className="text-ember text-sm font-medium mb-8">
                {tier.subtitle}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <svg
                      className="w-4 h-4 text-ember mt-0.5 flex-shrink-0"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <MagneticButton
                variant={tier.highlighted ? "primary" : "ghost"}
                className="w-full"
                onClick={openBooking}
              >
                {tier.cta}
              </MagneticButton>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
