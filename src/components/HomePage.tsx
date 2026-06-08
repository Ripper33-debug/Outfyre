"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorksPinned } from "@/components/sections/HowItWorksPinned";
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
import { SiteAuroraBackground } from "@/components/effects/HeroAuroraBackground";
import { ScrollProgressBar } from "@/components/effects/ScrollProgressBar";

export function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <SiteAuroraBackground />
      <NoiseOverlay />
      <CustomCursor />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <SocialProof />
        <HowItWorksPinned />
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
