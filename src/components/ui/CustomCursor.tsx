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
  const glowX = useSpring(cursorX, { stiffness: 80, damping: 25, mass: 0.8 });
  const glowY = useSpring(cursorY, { stiffness: 80, damping: 25, mass: 0.8 });
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
      scale.set(1.6);
    };
    const onLeave = () => {
      isHovering.current = false;
      scale.set(1);
    };

    window.addEventListener("mousemove", move);

    const bindInteractives = () => {
      const els = document.querySelectorAll("a, button, [data-cursor='hover']");
      els.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
      return els;
    };

    let interactives = bindInteractives();
    const observer = new MutationObserver(() => {
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      interactives = bindInteractives();
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
        {/* Soft trailing ember glow */}
        <motion.div
          className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            x: glowX,
            y: glowY,
            background:
              "radial-gradient(circle, rgba(255,106,61,0.14) 0%, rgba(255,45,120,0.06) 40%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />
        <motion.div
          className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember/25"
          style={{ x: orbX, y: orbY, scale }}
        />
        <motion.div
          className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember"
          style={{
            x: orbX,
            y: orbY,
            scale,
            boxShadow: "0 0 16px rgba(255,106,61,0.9), 0 0 32px rgba(255,45,120,0.4)",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
