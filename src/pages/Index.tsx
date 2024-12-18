import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudies } from "@/components/CaseStudies";
import { Features } from "@/components/Features";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="bg-[#0A0A0F] min-h-screen">
      <Navbar />
      <Hero />
      <div id="process">
        <HowItWorks />
      </div>
      <div id="work">
        <CaseStudies />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="cta">
        <CTA />
      </div>
    </div>
  );
};

export default Index;