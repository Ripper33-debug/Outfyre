"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Ember {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
}

export function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let embers: Ember[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createEmber = (): Ember => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.02 + 0.01,
    });

    const init = () => {
      resize();
      embers = Array.from({ length: 80 }, createEmber);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      embers.forEach((ember, i) => {
        ember.y -= ember.speed;
        ember.wobble += ember.wobbleSpeed;
        ember.x += Math.sin(ember.wobble) * 0.5;
        ember.opacity -= 0.001;

        if (ember.y < -20 || ember.opacity <= 0) {
          embers[i] = createEmber();
        }

        const gradient = ctx.createRadialGradient(
          ember.x,
          ember.y,
          0,
          ember.x,
          ember.y,
          ember.size * 2
        );
        gradient.addColorStop(0, `rgba(255, 120, 50, ${ember.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 69, 0, ${ember.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 69, 0, 0)");

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1]"
      aria-hidden
    />
  );
}
