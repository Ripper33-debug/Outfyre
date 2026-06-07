"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
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
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
    margin: "0px 0px -100px 0px",
  });
  const reducedMotion = useReducedMotion();
  const hasRun = useRef(false);
  const [display, setDisplay] = useState(() => formatValue(0, decimals, suffix));

  useEffect(() => {
    if (!isInView || hasRun.current) return;
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
  }, [isInView, value, suffix, decimals, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
