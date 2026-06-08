"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Crown,
  Search,
  PenLine,
  Send,
  CheckCircle2,
} from "lucide-react";
import { AGENTS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReducedMotion, useMediaQuery } from "@/hooks/useReducedMotion";

const ICON_MAP = {
  crown: Crown,
  search: Search,
  pen: PenLine,
  send: Send,
  check: CheckCircle2,
} as const;

const DESKTOP_NODES = [
  { id: "ceo", x: 500, y: 50 },
  { id: "researcher", x: 130, y: 240 },
  { id: "copywriter", x: 310, y: 240 },
  { id: "outreach", x: 690, y: 240 },
  { id: "qualifier", x: 870, y: 240 },
] as const;

const CONNECTORS = [
  "M 500 90 L 130 200",
  "M 500 90 L 310 200",
  "M 500 90 L 690 200",
  "M 500 90 L 870 200",
];

function AgentNode({
  agent,
  x,
  y,
  index,
  isInView,
  isActive,
  onHover,
  onLeave,
  reducedMotion,
}: {
  agent: (typeof AGENTS)[number];
  x: number;
  y: number;
  index: number;
  isInView: boolean;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  reducedMotion: boolean;
}) {
  const Icon = ICON_MAP[agent.icon];

  return (
    <motion.foreignObject
      x={x - 70}
      y={y - 55}
      width={140}
      height={130}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
      animate={
        isInView || reducedMotion
          ? { opacity: 1, scale: isActive ? 1.05 : 1 }
          : { opacity: 0, scale: 0.6 }
      }
      transition={{
        delay: reducedMotion ? 0 : 0.4 + index * 0.12,
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`relative glass p-3 h-full flex flex-col cursor-default transition-all duration-300 ${
          isActive ? "border-ember/50 shadow-ember-lg" : "shadow-[0_0_24px_rgba(255,106,61,0.06)]"
        }`}
        tabIndex={0}
        role="button"
        aria-label={`${agent.name}: ${agent.role}`}
      >
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
              isActive ? "bg-gradient-ember" : "bg-white/[0.06]"
            }`}
          >
            <Icon
              className={`w-4 h-4 ${isActive ? "text-white" : "text-ember"}`}
              strokeWidth={1.5}
            />
          </div>
          <span className="font-mono text-[9px] text-muted uppercase tracking-wider">
            {agent.role}
          </span>
        </div>
        <h3 className="font-mono text-xs font-medium text-cream mb-1">
          {agent.name}
        </h3>
        <AnimatePresence>
          {isActive && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-[10px] text-muted leading-relaxed overflow-hidden"
            >
              {agent.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.foreignObject>
  );
}

export function AgentOrgChart() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  return (
    <section id="agents" className="relative pt-4 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeader
          label="Your AI team"
          headline="Five agents. One growth engine."
          description="Hover any agent to see what they do — this is the multi-agent system we build and run for you every month."
          className="mb-12 md:mb-16"
        />

        <div ref={containerRef}>
          {isDesktop && !reducedMotion ? (
            <svg
              viewBox="0 0 1000 320"
              className="w-full h-auto"
              aria-hidden={false}
              role="img"
              aria-label="Agent organization chart"
            >
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6A3D" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FF2D78" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {CONNECTORS.map((d, i) => (
                <motion.path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { pathLength: 1, opacity: 0.7 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    pathLength: { duration: 1, delay: 0.2 + i * 0.15, ease: "easeInOut" },
                    opacity: { duration: 0.3, delay: 0.2 + i * 0.15 },
                  }}
                />
              ))}

              {AGENTS.map((agent, i) => {
                const node = DESKTOP_NODES.find((n) => n.id === agent.id)!;
                return (
                  <AgentNode
                    key={agent.id}
                    agent={agent}
                    x={node.x}
                    y={node.y}
                    index={i}
                    isInView={isInView}
                    isActive={activeId === agent.id}
                    onHover={() => setActiveId(agent.id)}
                    onLeave={() => setActiveId(null)}
                    reducedMotion={reducedMotion}
                  />
                );
              })}
            </svg>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AGENTS.map((agent, i) => {
                const Icon = ICON_MAP[agent.icon];
                const isActive = activeId === agent.id;
                return (
                  <motion.div
                    key={agent.id}
                    initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onMouseEnter={() => setActiveId(agent.id)}
                    onMouseLeave={() => setActiveId(null)}
                    className={`glass p-5 ${isActive ? "border-ember/40 shadow-ember" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-ember" strokeWidth={1.5} />
                      <span className="font-mono text-xs text-cream">{agent.name}</span>
                    </div>
                    {isActive && (
                      <p className="text-xs text-muted">{agent.description}</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
