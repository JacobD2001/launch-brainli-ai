import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="bg-[#0A0A0F] min-h-screen relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <Team />
        <CTA />
      </div>
    </div>
  );
};

export default Index;