"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Search,
  PenLine,
  Send,
  CheckCircle2,
} from "lucide-react";
import { AGENTS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ICON_MAP = {
  crown: Crown,
  search: Search,
  pen: PenLine,
  send: Send,
  check: CheckCircle2,
} as const;

export function AgentOrgChart() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="relative bg-charcoal pt-8 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal className="mb-12 md:mb-16">
          <p className="label-mono text-ember mb-4">Your AI team</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream tracking-tight">
            Five agents. One growth engine.
          </h2>
          <p className="mt-4 text-muted max-w-2xl text-lg">
            Hover any agent to see what they do — this is the multi-agent system
            we build and run for you every month.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {AGENTS.map((agent) => {
            const Icon = ICON_MAP[agent.icon];
            const isActive = activeId === agent.id;

            return (
              <StaggerItem key={agent.id}>
                <motion.div
                  className="relative h-full"
                  onHoverStart={() => !reducedMotion && setActiveId(agent.id)}
                  onHoverEnd={() => setActiveId(null)}
                  onFocus={() => setActiveId(agent.id)}
                  onBlur={() => setActiveId(null)}
                  whileHover={reducedMotion ? undefined : { scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div
                    className={`glass p-5 h-full flex flex-col cursor-default transition-all duration-300 ${
                      isActive
                        ? "border-ember/40 shadow-ember-lg bg-white/[0.05]"
                        : "hover:border-white/10"
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isActive}
                    aria-label={`${agent.name}: ${agent.role}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`h-10 w-10 rounded-lg flex items-center justify-center transition-colors ${
                          isActive ? "bg-gradient-ember" : "bg-white/[0.05]"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${isActive ? "text-white" : "text-ember"}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                        {agent.role}
                      </span>
                    </div>

                    <h3 className="font-mono text-sm font-medium text-cream mb-1">
                      {agent.name}
                    </h3>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-xs text-muted leading-relaxed overflow-hidden"
                        >
                          {agent.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {!isActive && (
                      <p className="text-xs text-muted/60 mt-auto pt-2">
                        Hover to explore →
                      </p>
                    )}
                  </div>

                  {isActive && (
                    <motion.div
                      className="absolute -inset-px rounded-xl bg-gradient-ember opacity-20 blur-sm -z-10"
                      layoutId={`glow-${agent.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.25 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
