"use client";

import { motion } from "framer-motion";
import { Rocket, Workflow, Globe } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ICON_MAP = {
  rocket: Rocket,
  workflow: Workflow,
  presence: Globe,
} as const;

function ServiceList({
  heading,
  items,
}: {
  heading: string;
  items: readonly string[];
}) {
  return (
    <div>
      <p className="label-mono text-cream/80 mb-4">{heading}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-muted leading-relaxed"
          >
            <span className="mt-2 h-1 w-1 rounded-full bg-ember flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesSection() {
  const reducedMotion = useReducedMotion();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeader
          label="Services"
          headline="Built and run on retainer"
          description="Builds that don't get abandoned — we ship them, then run them with you every month."
          align="center"
          className="mb-16"
        />

        <StaggerReveal className="flex flex-col gap-8">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <StaggerItem key={service.name}>
                <TiltCard>
                  <motion.article
                    className="glass p-8 md:p-12 flex flex-col border border-white/[0.05] hover:border-ember/20 transition-colors duration-300"
                    whileHover={
                      reducedMotion ? undefined : { y: -2 }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="flex items-start gap-4 mb-8">
                      <div className="h-12 w-12 rounded-xl bg-gradient-ember/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-ember" strokeWidth={1.5} />
                      </div>
                      <p className="font-mono text-xs text-ember uppercase tracking-[0.25em] pt-3">
                        {service.label}
                      </p>
                    </div>

                    <h3 className="font-display text-3xl md:text-4xl font-extrabold text-cream tracking-tight mb-4">
                      {service.headline}
                    </h3>

                    <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
                      {service.subhead}
                    </p>

                    <div className="space-y-8 mb-10">
                      {service.buildHeading && service.buildItems.length > 0 && (
                        <ServiceList heading={service.buildHeading} items={service.buildItems} />
                      )}
                      <ServiceList heading={service.monthlyHeading} items={service.monthlyItems} />
                    </div>

                    {service.highlight && (
                      <p className="font-mono text-sm md:text-base text-ember font-medium mb-6 px-4 py-3 rounded-lg bg-ember/5 border border-ember/20">
                        The number that matters: {service.highlight}
                      </p>
                    )}

                    {service.closingLine && (
                      <p className="text-cream/90 text-base font-medium mb-6 italic">
                        {service.closingLine}
                      </p>
                    )}

                    <MagneticButton variant="primary" className="self-start" onClick={scrollToContact}>
                      Book a Call
                    </MagneticButton>
                  </motion.article>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
