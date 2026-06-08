"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CounterProps = {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  start?: boolean;
};

function formatValue(val: number, decimals: number, suffix: string) {
  const rounded =
    decimals > 0 ? val.toFixed(decimals) : String(Math.round(val));
  return `${rounded}${suffix}`;
}

function isElementInView(el: Element, ratio = 0.2) {
  const rect = el.getBoundingClientRect();
  const visibleHeight =
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  return visibleHeight >= rect.height * ratio || rect.top < window.innerHeight * 0.85;
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

    const markInView = () => {
      if (isElementInView(el)) setSelfInView(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSelfInView(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -5% 0px", threshold: 0.1 }
    );

    observer.observe(el);
    markInView();

    window.addEventListener("scroll", markInView, { passive: true });
    window.addEventListener("outfyre:scroll-ready", markInView);
    const retry = window.setTimeout(markInView, 400);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", markInView);
      window.removeEventListener("outfyre:scroll-ready", markInView);
      window.clearTimeout(retry);
    };
  }, []);

  const shouldStart = start === true || selfInView;

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
