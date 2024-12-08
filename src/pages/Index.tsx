import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="bg-[#0A0A0F] min-h-screen">
      <Hero />
      <Services />
      <Process />
      <CTA />
    </div>
  );
};

export default Index;