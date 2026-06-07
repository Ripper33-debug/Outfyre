"use client";

import { METRICS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";

export function Results() {
  return (
    <section id="results" className="section-padding bg-charcoal relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal className="mb-16">
          <p className="label-mono text-ember mb-4">Results</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream max-w-3xl tracking-tight">
            The number that matters:{" "}
            <span className="gradient-text">10+ meetings/month</span>
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="group glass p-8 h-full hover:border-ember/20 transition-all duration-500 hover:shadow-ember">
                <div className="font-mono text-5xl md:text-6xl font-extrabold text-cream mb-3 tabular-nums">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {metric.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
