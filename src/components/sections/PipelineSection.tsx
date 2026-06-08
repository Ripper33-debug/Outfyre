"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { PIPELINE_STAGES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReducedMotion, useMediaQuery } from "@/hooks/useReducedMotion";

const STAGE_X = [100, 260, 420, 580, 740];
const PATH_D = "M 100 120 L 740 120 Q 740 200 420 280";
const MEETING = { x: 420, y: 280 };

export function PipelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section className="section-padding bg-surface/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-horizon pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeader
          label="The pipeline"
          headline="From lead to booked meeting"
          description="Watch a lead flow through your AI team — fully automated, every step of the way."
          align="center"
          className="mb-12"
        />

        <div ref={containerRef} className="relative">
          {isDesktop && !reducedMotion ? (
            <svg viewBox="0 0 840 340" className="w-full h-auto" aria-hidden>
              <defs>
                <linearGradient id="pipe-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6A3D" />
                  <stop offset="100%" stopColor="#FF2D78" />
                </linearGradient>
                <radialGradient id="dot-glow">
                  <stop offset="0%" stopColor="#FF6A3D" />
                  <stop offset="100%" stopColor="#FF2D78" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Track path */}
              <motion.path
                d={PATH_D}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />

              {/* Active path glow */}
              <motion.path
                d={PATH_D}
                fill="none"
                stroke="url(#pipe-grad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
              />

              {/* Traveling lead dot */}
              {isInView && (
                <motion.circle
                  r="8"
                  fill="url(#dot-glow)"
                  style={{ offsetPath: `path('${PATH_D}')`, offsetRotate: "0deg" }}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.8,
                  }}
                />
              )}
              {isInView && (
                <motion.circle
                  r="4"
                  fill="#FF6A3D"
                  style={{
                    offsetPath: `path('${PATH_D}')`,
                    offsetRotate: "0deg",
                    filter: "drop-shadow(0 0 8px rgba(255,106,61,0.9))",
                  }}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.8,
                  }}
                />
              )}

              {/* Stage nodes */}
              {PIPELINE_STAGES.map((stage, i) => (
                <g key={stage.label}>
                  <motion.circle
                    cx={STAGE_X[i]}
                    cy={120}
                    r="6"
                    fill="#0A0A0B"
                    stroke="#FF6A3D"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  />
                  <foreignObject x={STAGE_X[i] - 65} y={140} width={130} height={80}>
                    <div className="text-center">
                      <p className="font-mono text-[9px] text-ember uppercase tracking-wider mb-1">
                        {stage.agent}
                      </p>
                      <p className="text-[11px] text-cream font-medium leading-tight">
                        {stage.label}
                      </p>
                    </div>
                  </foreignObject>
                </g>
              ))}

              {/* Booked meeting node */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <circle
                  cx={MEETING.x}
                  cy={MEETING.y}
                  r="28"
                  fill="rgba(255,106,61,0.1)"
                  stroke="#FF6A3D"
                  strokeWidth="1.5"
                />
                <foreignObject x={MEETING.x - 60} y={MEETING.y - 14} width={120} height={28}>
                  <p className="font-mono text-[10px] text-cream text-center leading-tight">
                    Booked Meeting ✓
                  </p>
                </foreignObject>
              </motion.g>
            </svg>
          ) : (
            <div className="space-y-4">
              {PIPELINE_STAGES.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-4 flex items-center gap-4"
                >
                  <div className="h-3 w-3 rounded-full bg-ember flex-shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] text-ember uppercase">{stage.agent}</p>
                    <p className="text-sm text-cream">{stage.label}</p>
                  </div>
                </motion.div>
              ))}
              <div className="flex justify-center pt-4">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-ember/10 border border-ember/30">
                  <CalendarCheck className="w-5 h-5 text-ember" />
                  <span className="font-mono text-sm text-cream">Booked Meeting</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
