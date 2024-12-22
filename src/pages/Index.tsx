import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudies } from "@/components/CaseStudies";
import { Features } from "@/components/Features";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { ProblemsSolutions } from "@/components/ProblemsSolutions";

const Index = () => {
  return (
    <div className="bg-[#0A0A0F] min-h-screen">
      <Navbar />
      <Hero />
      <ProblemsSolutions />
      <div id="process">
        <HowItWorks />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="work">
        <CaseStudies />
      </div>
      <Pricing />
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