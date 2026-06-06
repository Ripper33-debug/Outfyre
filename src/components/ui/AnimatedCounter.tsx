"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/components/providers/AppProviders";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;

    if (reducedMotion) {
      ref.current.textContent = `${value}${suffix}`;
      return;
    }

    const obj = { val: 0 };

    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(obj.val)}${suffix}`;
        }
      },
    });
  }, [value, suffix, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
