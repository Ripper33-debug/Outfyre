"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/components/providers/AppProviders";
import { PROCESS_STEPS } from "@/lib/constants";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function StepIcon({ type }: { type: (typeof PROCESS_STEPS)[number]["icon"] }) {
  const icons = {
    target: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#FF4500" strokeWidth="1.5" opacity="0.3" />
        <circle cx="24" cy="24" r="14" stroke="#FF4500" strokeWidth="1.5" opacity="0.5" />
        <circle cx="24" cy="24" r="8" stroke="#FF4500" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="#FF4500" />
      </svg>
    ),
    data: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <circle cx="12" cy="24" r="4" fill="#FF4500" />
        <circle cx="24" cy="12" r="4" fill="#FF4500" opacity="0.7" />
        <circle cx="36" cy="24" r="4" fill="#FF4500" opacity="0.5" />
        <circle cx="24" cy="36" r="4" fill="#FF4500" opacity="0.3" />
        <line x1="12" y1="24" x2="24" y2="12" stroke="#FF4500" strokeWidth="1" opacity="0.4" />
        <line x1="24" y1="12" x2="36" y2="24" stroke="#FF4500" strokeWidth="1" opacity="0.4" />
        <line x1="36" y1="24" x2="24" y2="36" stroke="#FF4500" strokeWidth="1" opacity="0.4" />
        <line x1="24" y1="36" x2="12" y2="24" stroke="#FF4500" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect x="6" y="14" width="36" height="24" rx="3" stroke="#FF4500" strokeWidth="1.5" />
        <path d="M6 17l18 12 18-12" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 14l-8 8" stroke="#FF4500" strokeWidth="1" opacity="0.5" strokeLinecap="round" className="animate-pulse" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect x="8" y="10" width="32" height="30" rx="3" stroke="#FF4500" strokeWidth="1.5" />
        <line x1="8" y1="20" x2="40" y2="20" stroke="#FF4500" strokeWidth="1.5" />
        <line x1="16" y1="6" x2="16" y2="14" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="6" x2="32" y2="14" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 30l4 4 8-10" stroke="#FF4500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };
  return icons[type];
}

export function HowItWorks() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !pinRef.current || !trackRef.current) return;

    const pin = pinRef.current;
    const track = trackRef.current;

    const ctx = gsap.context(() => {
      const getScrollDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, pin);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="how-it-works" className="relative bg-void">
      <div className="px-6 md:px-12 lg:px-20 pt-12 pb-6">
        <ScrollReveal>
          <p className="text-ember text-sm font-medium tracking-widest uppercase mb-4">
            Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            How it works
          </h2>
        </ScrollReveal>
      </div>

      <div ref={pinRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className={`flex gap-8 px-6 md:px-12 lg:px-20 pb-16 ${
            reducedMotion ? "flex-wrap" : "w-max"
          }`}
        >
          {PROCESS_STEPS.map((step) => (
            <SpotlightCard
              key={step.number}
              className={`flex-shrink-0 ${
                reducedMotion ? "w-full md:w-[calc(50%-1rem)]" : "w-[85vw] md:w-[420px]"
              }`}
            >
              <div className="p-8 md:p-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <StepIcon type={step.icon} />
                  <span className="font-display text-5xl font-extrabold text-white/[0.06]">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
