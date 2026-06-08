"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/components/providers/AppProviders";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HowItWorksPinned() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !pinRef.current) return;

    const section = sectionRef.current;
    const pin = pinRef.current;
    const stepCount = HOW_IT_WORKS_STEPS.length;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * stepCount * 0.85}`,
        pin: pin,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.min(
            stepCount - 1,
            Math.floor(self.progress * stepCount)
          );
          setActiveStep(index);
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <section id="how-it-works" className="section-padding relative">
        <SectionHeader
          label="How it works"
          headline="Four steps to a full pipeline"
          description="We build, deploy, and run your multi-agent outbound system — you show up to close."
          className="mb-12"
        />
        <div className="space-y-6 max-w-2xl">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.number} className="glass p-8">
              <span className="font-mono text-ember text-sm">{step.number}</span>
              <h3 className="font-display text-2xl font-bold text-cream mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="how-it-works" ref={sectionRef} className="relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />

      <div ref={pinRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20">
        <SectionHeader
          label="How it works"
          headline="Four steps to a full pipeline"
          description="We build, deploy, and run your multi-agent outbound system — you show up to close."
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <div className="relative max-w-3xl">
          {/* Progress rail */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.08] hidden sm:block">
            <div
              className="absolute left-0 w-full bg-gradient-ember transition-all duration-300 ease-out origin-top"
              style={{
                height: `${((activeStep + 1) / HOW_IT_WORKS_STEPS.length) * 100}%`,
              }}
            />
          </div>

          <div className="space-y-4 sm:pl-10">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const isActive = i === activeStep;
              const isComplete = i < activeStep;

              return (
                <div
                  key={step.number}
                  className={`glass p-6 md:p-8 transition-all duration-500 ${
                    isActive
                      ? "border-ember/40 shadow-ember-lg opacity-100"
                      : isComplete
                        ? "opacity-40"
                        : "opacity-25"
                  } ${isActive ? "translate-x-1" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-sm flex-shrink-0 transition-colors duration-300 ${
                        isActive ? "text-ember" : "text-muted"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${
                          isActive ? "text-cream" : "text-cream/60"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm md:text-base leading-relaxed transition-all duration-500 ${
                          isActive
                            ? "text-muted max-h-40 opacity-100"
                            : "text-muted/50 max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
