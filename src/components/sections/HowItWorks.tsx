"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/components/providers/AppProviders";
import { PROCESS_STEPS } from "@/lib/constants";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function StepIcon({ type }: { type: (typeof PROCESS_STEPS)[number]["icon"] }) {
  const icons = {
    compass: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#FF4500" strokeWidth="1.5" opacity="0.3" />
        <circle cx="24" cy="24" r="14" stroke="#FF4500" strokeWidth="1.5" opacity="0.5" />
        <path
          d="M24 8l3 14 13 3-13 3-3 14-3-14-13-3 13-3 3-14z"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="3" fill="#FF4500" />
      </svg>
    ),
    layout: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect x="6" y="8" width="36" height="32" rx="3" stroke="#FF4500" strokeWidth="1.5" />
        <line x1="6" y1="18" x2="42" y2="18" stroke="#FF4500" strokeWidth="1.5" />
        <rect x="10" y="22" width="12" height="14" rx="1" stroke="#FF4500" strokeWidth="1.5" />
        <line x1="28" y1="24" x2="38" y2="24" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="30" x2="36" y2="30" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="28" y1="36" x2="34" y2="36" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    brain: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <path
          d="M18 10c-4 0-7 3-7 7 0 2 .8 3.8 2 5.1C10.8 23.5 10 25.6 10 28c0 4.4 3.6 8 8 8h1"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M30 10c4 0 7 3 7 7 0 2-.8 3.8-2 5.1 2.2 1.4 3 3.5 3 5.9 0 4.4-3.6 8-8 8h-1"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 14c0 4 2 6 4 6s4-2 4-6M20 28c0 4 2 6 4 6s4-2 4-6"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="2" fill="#FF4500" />
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <path
          d="M14 34h22a8 8 0 000-16 10 10 0 00-19.3-3.2A6.5 6.5 0 0014 34z"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M24 26v8M20 30h8"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 38h12"
          stroke="#FF4500"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
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
