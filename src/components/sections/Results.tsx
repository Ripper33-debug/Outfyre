"use client";

import { useEffect, useRef, useState } from "react";
import { METRICS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { TiltCard } from "@/components/ui/TiltCard";

function isSectionInView(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.15;
}

export function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const check = () => {
      if (isSectionInView(section)) {
        setCountersStarted(true);
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("outfyre:scroll-ready", check);
    const retry = window.setTimeout(check, 500);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("outfyre:scroll-ready", check);
      window.clearTimeout(retry);
    };
  }, []);

  return (
    <section id="results" ref={sectionRef} className="section-padding relative">
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
                      start={countersStarted}
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
