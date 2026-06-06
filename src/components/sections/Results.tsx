"use client";

import { METRICS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Results() {
  return (
    <section id="results" className="section-padding bg-void">
      <ScrollReveal className="mb-16">
        <p className="text-ember text-sm font-medium tracking-widest uppercase mb-4">
          Results
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl">
          Numbers that speak louder than promises
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((metric, i) => (
          <ScrollReveal key={metric.label} delay={i * 0.1}>
            <div className="group relative p-8 rounded-2xl bg-surface border border-white/[0.06] hover:border-ember/30 transition-all duration-500 hover:shadow-ember">
              <div className="font-display text-5xl md:text-6xl font-extrabold text-white mb-3">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-muted text-sm leading-relaxed">{metric.label}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-fire opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
