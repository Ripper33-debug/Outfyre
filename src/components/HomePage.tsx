"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Results } from "@/components/sections/Results";
import { WhyOutfyre } from "@/components/sections/WhyOutfyre";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { BookingModal } from "@/components/ui/BookingModal";

export function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Results />
        <WhyOutfyre />
        <Pricing />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}
