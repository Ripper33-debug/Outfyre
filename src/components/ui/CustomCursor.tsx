"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useReducedMotion, useMediaQuery } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.5 });
  const trailY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.5 });
  const orbX = useSpring(cursorX, { stiffness: 400, damping: 30, mass: 0.2 });
  const orbY = useSpring(cursorY, { stiffness: 400, damping: 30, mass: 0.2 });
  const scale = useSpring(1, { stiffness: 500, damping: 30 });
  const isHovering = useRef(false);

  useEffect(() => {
    if (reducedMotion || !isDesktop) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onEnter = () => {
      isHovering.current = true;
      scale.set(1.8);
    };
    const onLeave = () => {
      isHovering.current = false;
      scale.set(1);
    };

    window.addEventListener("mousemove", move);

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor='hover']"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll(
        "a, button, [data-cursor='hover']"
      );
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      observer.disconnect();
    };
  }, [reducedMotion, isDesktop, cursorX, cursorY, scale]);

  if (reducedMotion || !isDesktop) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember/30"
          style={{ x: trailX, y: trailY, scale }}
        />
        <motion.div
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember shadow-[0_0_20px_rgba(255,69,0,0.8)]"
          style={{ x: orbX, y: orbY, scale }}
        />
        <motion.div
          className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/10 blur-xl"
          style={{ x: orbX, y: orbY }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
