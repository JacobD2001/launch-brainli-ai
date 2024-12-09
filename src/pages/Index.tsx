import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="bg-[#0A0A0F] min-h-screen">
      <Navbar />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="process">
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
  );
};

export default Index;