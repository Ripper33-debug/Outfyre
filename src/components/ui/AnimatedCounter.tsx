"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { animate } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CounterProps = {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
};

function formatValue(val: number, decimals: number, suffix: string) {
  const rounded =
    decimals > 0 ? val.toFixed(decimals) : String(Math.round(val));
  return `${rounded}${suffix}`;
}

export function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);
  const [display, setDisplay] = useState(() => formatValue(0, decimals, suffix));

  const runAnimation = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    if (reducedMotion) {
      setDisplay(formatValue(value, decimals, suffix));
      return;
    }

    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(formatValue(latest, decimals, suffix));
      },
    });

    return () => controls.stop();
  }, [value, suffix, decimals, reducedMotion]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      setDisplay(formatValue(value, decimals, suffix));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
    if (inView) {
      runAnimation();
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [value, suffix, decimals, reducedMotion, runAnimation]);

  return (
    <div ref={ref} className="inline-block">
      <span className={className}>{display}</span>
    </div>
  );
}
