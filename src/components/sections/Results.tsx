"use client";

import { METRICS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function Results() {
  return (
    <section id="results" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          label="Results"
          headline="The number that matters: 10+ meetings/month"
          className="mb-16"
        />

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric) => (
            <StaggerItem key={metric.label}>
              <TiltCard className="h-full">
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
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
