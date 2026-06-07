"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useBooking } from "@/components/providers/AppProviders";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CTASection() {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ember/20 via-flame/10 to-void" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={
          reducedMotion
            ? undefined
            : {
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(255,69,0,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(196,30,58,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(255,69,0,0.3) 0%, transparent 50%)",
                ],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6">
            Ready to build something that lasts?
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let&apos;s talk about your platform, your AI tools, and a partnership
            that grows with you.
          </p>
          <MagneticButton size="lg" onClick={openBooking}>
            Book Your Free Strategy Call
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
