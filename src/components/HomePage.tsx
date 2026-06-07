"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { AgentOrgChart } from "@/components/sections/AgentOrgChart";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Results } from "@/components/sections/Results";
import { WhyOutfyre } from "@/components/sections/WhyOutfyre";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";

export function HomePage() {
  return (
    <>
      <NoiseOverlay />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <AgentOrgChart />
        <PipelineSection />
        <ServicesSection />
        <Results />
        <WhyOutfyre />
        <Pricing />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
