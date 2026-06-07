"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { EmberParticles } from "@/components/effects/EmberParticles";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroBackground3D = dynamic(
  () =>
    import("@/components/effects/HeroBackground3D").then(
      (mod) => mod.HeroBackground3D
    ),
  { ssr: false }
);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const scrollToHow = () => {
    document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <HeroBackground3D />
      <EmberParticles />

      {/* Drifting ember glows */}
      {!reducedMotion && (
        <>
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,106,61,0.12) 0%, transparent 70%)",
              left: "10%",
              top: "20%",
              y: glowY,
            }}
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,45,120,0.08) 0%, transparent 70%)",
              right: "5%",
              bottom: "25%",
              y: glowY,
            }}
            animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20 pt-32 pb-24 text-center"
        style={reducedMotion ? undefined : { y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-ember/20 bg-ember/5 px-4 py-1.5 font-mono text-xs text-ember backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          AI Growth Team · Now Accepting Retainer Clients
        </motion.div>

        <MaskReveal
          as="h1"
          text="Your AI growth team. On retainer."
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-cream mb-8 leading-[1.05] block"
          delay={0.2}
          stagger={0.08}
          once={false}
        />

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reducedMotion ? 0 : 0.85,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-muted leading-relaxed mb-12"
        >
          We build and run a multi-agent AI system that books your sales team{" "}
          <span className="text-cream font-medium">10+ qualified meetings</span>{" "}
          every month — done for you, every month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reducedMotion ? 0 : 1.05,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton size="lg" onClick={scrollToContact}>
            Book a Call
          </MagneticButton>
          <MagneticButton size="lg" variant="ghost" onClick={scrollToHow}>
            See How It Works
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="label-mono">Scroll</span>
        <div className="animate-scroll-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-ember">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent z-[2]" />
    </section>
  );
}
