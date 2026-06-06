"use client";

import { SOCIAL_PROOF_ITEMS } from "@/lib/constants";

export function SocialProof() {
  const items = [...SOCIAL_PROOF_ITEMS, ...SOCIAL_PROOF_ITEMS];

  return (
    <section className="relative py-8 border-y border-white/[0.06] bg-surface/50 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 mx-8 text-sm md:text-base font-medium text-muted"
          >
            <span className="text-ember">◆</span>
            <span className="uppercase tracking-widest">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
