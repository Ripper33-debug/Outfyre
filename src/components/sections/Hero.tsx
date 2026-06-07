"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { EmberParticles } from "@/components/effects/EmberParticles";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroBackground3D = dynamic(
  () =>
    import("@/components/effects/HeroBackground3D").then(
      (mod) => mod.HeroBackground3D
    ),
  { ssr: false }
);

const headline = "Your AI growth team. On retainer.".split(" ");

export function Hero() {
  const reducedMotion = useReducedMotion();

  const scrollToHow = () => {
    document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reducedMotion ? 0 : 0.12 + i * 0.08,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <HeroBackground3D />
      <EmberParticles />
      <div className="absolute inset-0 bg-gradient-glow opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20 pt-32 pb-24 text-center">
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

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-cream mb-8 leading-[1.05]">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reducedMotion ? 0 : 0.65, duration: 0.8 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-muted leading-relaxed mb-12"
        >
          We build and run a multi-agent AI system that books your sales team{" "}
          <span className="text-cream font-medium">10+ qualified meetings</span>{" "}
          every month — done for you, every month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reducedMotion ? 0 : 0.85, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton size="lg" onClick={scrollToContact}>
            Book a Call
          </MagneticButton>
          <MagneticButton size="lg" variant="ghost" onClick={scrollToHow}>
            See How It Works
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="label-mono">Scroll</span>
        <div className="animate-scroll-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-ember"
          >
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent z-[2]" />
    </section>
  );
}
