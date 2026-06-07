"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { PIPELINE_STAGES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function PipelineSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(trackRef, { once: true, amount: 0.3 });
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-surface/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-horizon pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal className="mb-12 text-center">
          <p className="label-mono text-ember mb-4">The pipeline</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-cream tracking-tight">
            From lead to booked meeting
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Watch a lead flow through your AI team — fully automated, every step
            of the way.
          </p>
        </ScrollReveal>

        <div ref={trackRef} className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-8 left-8 right-8 h-px bg-white/[0.08]" />

          {/* Animated dot */}
          {!reducedMotion && isInView && (
            <motion.div
              className="hidden md:block absolute top-8 h-2 w-2 rounded-full bg-gradient-ember shadow-ember -translate-y-1/2"
              initial={{ left: "2rem", opacity: 0 }}
              animate={{
                left: ["2rem", "calc(100% - 2rem)"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3">
            {PIPELINE_STAGES.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                animate={
                  isInView || reducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                transition={{
                  delay: reducedMotion ? 0 : i * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="glass p-4 text-center h-full">
                  <div className="hidden md:flex h-8 items-center justify-center mb-3">
                    <div
                      className={`h-3 w-3 rounded-full border-2 ${
                        i === PIPELINE_STAGES.length - 1
                          ? "bg-gradient-ember border-transparent"
                          : "border-ember/50 bg-charcoal"
                      }`}
                    />
                  </div>
                  <p className="font-mono text-[10px] text-ember uppercase tracking-wider mb-2">
                    {stage.agent}
                  </p>
                  <p className="text-sm text-cream font-medium leading-snug">
                    {stage.label}
                  </p>
                </div>

                {i < PIPELINE_STAGES.length - 1 && (
                  <ArrowRight className="md:hidden w-4 h-4 text-muted mx-auto my-2 rotate-90" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Final outcome */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={
              isInView || reducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ delay: reducedMotion ? 0 : 0.8, duration: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-ember/10 border border-ember/30 glow-ember">
              <CalendarCheck className="w-5 h-5 text-ember" />
              <span className="font-mono text-sm text-cream">
                Qualified meeting on your calendar
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
