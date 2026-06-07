"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CTASection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ember/15 via-magenta/5 to-charcoal" />
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={
          reducedMotion
            ? undefined
            : {
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(255,106,61,0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(255,45,120,0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(255,106,61,0.2) 0%, transparent 50%)",
                ],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="label-mono text-ember mb-4">Get started</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream mb-4 tracking-tight">
            Book your strategy call
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            30 minutes to map your AI growth system — no commitment, no pitch
            deck. Just a conversation about 10+ meetings on your calendar.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div
            className="glass overflow-hidden rounded-xl border border-white/[0.08] glow-ember"
            data-lenis-prevent
          >
            {/* TODO: Swap CALENDLY_URL in src/lib/constants.ts with your real link */}
            <iframe
              src={CALENDLY_URL}
              title="Book a strategy call with OUTFYRE"
              className="w-full border-0"
              style={{ minHeight: "700px" }}
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
