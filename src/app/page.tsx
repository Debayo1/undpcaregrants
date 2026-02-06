"use client";
import { MainDiv } from "@/components/base-components/main-div";
import { HeroSection } from "@/components/base-components/hero-section";
import { Cta1Section } from "@/components/base-components/cta1-section";
import { Cta2Section } from "@/components/base-components/cta2-section";
import { Cta3Section } from "@/components/base-components/cta3-section";
import { Cta4Section } from "@/components/base-components/cta4-section";
import { RecentEventSection } from "@/components/base-components/recent-event-section";
import { TestimonialSection } from "@/components/base-components/testimonial-section";

export default function Home() {
  //
  //
  return (
    <MainDiv className="!px-0 mb-[90px]">
      <HeroSection />
      <Cta1Section />
      <Cta2Section />
      <Cta3Section />
      <Cta4Section />
      <RecentEventSection />
      <TestimonialSection />
    </MainDiv>
  );
}
