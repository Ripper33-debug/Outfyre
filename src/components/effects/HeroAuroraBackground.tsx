"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Aurora = dynamic(() => import("@/components/effects/Aurora"), {
  ssr: false,
  loading: () => null,
});

const AURORA_PROPS = {
  colorStops: ["#FF6A3D", "#FF2D78", "#7A1FA2"],
  amplitude: 1.15,
  speed: 0.55,
  blend: 0.62,
};

function StaticAuroraFallback() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-55"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 0%, #7A1FA2 0%, #FF2D78 35%, #FF6A3D 55%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/50 to-charcoal/95" />
    </>
  );
}

export function SiteAuroraBackground() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const auroraOpacity = useTransform(scrollY, [0, 500, 1400], [1, 0.55, 0.2]);
  const scrollScrim = useTransform(
    scrollY,
    [0, 400, 1000, 2000],
    [0, 0.25, 0.55, 0.82]
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {reducedMotion ? (
        <StaticAuroraFallback />
      ) : (
        <motion.div className="absolute inset-0" style={{ opacity: auroraOpacity }}>
          <Aurora {...AURORA_PROPS} />
        </motion.div>
      )}

      {/* Edge vignette — keeps aurora visible in the center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_20%,transparent_0%,rgba(10,10,11,0.45)_100%)]" />

      {/* Top glow bloom */}
      <div className="absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,106,61,0.08)_0%,transparent_70%)]" />

      {/* Scroll-driven readability scrim */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/10 via-charcoal/60 to-charcoal"
        style={{ opacity: scrollScrim }}
      />

      {/* Base tint so body text stays legible site-wide */}
      <div className="absolute inset-0 bg-charcoal/35" />
    </div>
  );
}

export function HeroAuroraBackground() {
  return <SiteAuroraBackground />;
}
