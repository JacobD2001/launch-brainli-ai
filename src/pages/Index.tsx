import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="bg-[#0A0A0F] min-h-screen">
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <CTA />
    </div>
  );
};

export default Index;