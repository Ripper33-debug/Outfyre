"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const reducedMotion = useReducedMotion();

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="section-padding bg-surface/20 backdrop-blur-sm overflow-hidden">
      <ScrollReveal className="mb-16">
        <p className="text-ember text-sm font-medium tracking-widest uppercase mb-4">
          Testimonials
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
          What clients say
        </h2>
      </ScrollReveal>

      <div
        ref={scrollRef}
        className={`flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={`${t.name}-${i}`}
            className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center"
            initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <div
              className={`h-full p-8 rounded-2xl bg-surface border flex flex-col ${
                t.isPlaceholder
                  ? "border-ember/20 border-dashed"
                  : "border-white/[0.06]"
              }`}
            >
              {t.isPlaceholder && (
                <span className="text-xs text-ember/70 uppercase tracking-widest mb-3">
                  Placeholder
                </span>
              )}
              <div className="text-ember text-4xl font-serif mb-4">&ldquo;</div>
              <p className="text-white/90 leading-relaxed flex-1 mb-8">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-fire flex items-center justify-center text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-sm text-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
