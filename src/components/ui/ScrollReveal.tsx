"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/components/providers/AppProviders";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 60,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    const el = ref.current;

    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [reducedMotion, delay, y]);

  return (
    <div
      ref={ref}
      className={className}
      style={reducedMotion ? undefined : { opacity: 0 }}
    >
      {children}
    </div>
  );
}
