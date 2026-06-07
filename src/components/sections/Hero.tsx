"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { EmberParticles } from "@/components/effects/EmberParticles";
import { useBooking } from "@/components/providers/AppProviders";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroBackground3D = dynamic(
  () =>
    import("@/components/effects/HeroBackground3D").then(
      (mod) => mod.HeroBackground3D
    ),
  { ssr: false }
);

// Alt headlines:
//   "We start the fire." — original energy, works as brand line
//   "AI tools. Built to last." — emphasizes longevity + AI-first
//   "Your platform. Powered by AI." — leads with platform + AI layer
const headline = "We build AI tools.".split(" ");

export function Hero() {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();

  const scrollToHow = () => {
    document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reducedMotion ? 0 : 0.15 + i * 0.12,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <HeroBackground3D />
      <EmberParticles />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-ember/20 bg-ember/5 px-4 py-1.5 text-xs font-medium text-ember backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          AI Studio + Web Platform · Now Accepting Clients
        </motion.div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight text-white mb-8">
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
          transition={{ delay: reducedMotion ? 0 : 0.7, duration: 0.8 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-muted leading-relaxed mb-12"
        >
          Custom AI systems and the websites that power them — built, hosted,
          and evolved as one ongoing partnership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reducedMotion ? 0 : 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton size="lg" onClick={openBooking}>
            Get Started
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
        <span className="text-xs text-muted tracking-widest uppercase">
          Scroll
        </span>
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-[2]" />
    </section>
  );
}
