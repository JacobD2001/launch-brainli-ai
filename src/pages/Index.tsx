import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="bg-[#0A0A0F] min-h-screen">
      <div className="relative">
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <div id="services">
            <Services />
          </div>
          <div id="process" className="relative bg-black z-20">
            <Process />
          </div>
          <div id="work">
            <CaseStudies />
          </div>
          <div id="team">
            <Team />
          </div>
          <div id="cta">
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;