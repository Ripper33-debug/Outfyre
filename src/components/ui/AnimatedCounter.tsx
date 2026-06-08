"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CounterProps = {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  /** When true, starts the count-up (e.g. from a parent section observer). */
  start?: boolean;
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
  start,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const hasRun = useRef(false);
  const [display, setDisplay] = useState(() => formatValue(0, decimals, suffix));
  const [selfInView, setSelfInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSelfInView(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const shouldStart = start === true || (start === undefined && selfInView);

  useEffect(() => {
    if (!shouldStart || hasRun.current) return;
    hasRun.current = true;

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
  }, [shouldStart, value, suffix, decimals, reducedMotion]);

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {display}
    </span>
  );
}
