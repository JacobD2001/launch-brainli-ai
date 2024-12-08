import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container relative z-10 mx-auto px-4 animate-fade-up">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EE2B6C] to-[#2A4BEE] mb-6">
            Turn Your AI Ideas Into
            <br />
            Revenue-Generating Products
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We build AI-powered MVPs and micro-SaaS products in weeks, not months.
            Transform your vision into reality with our rapid development approach.
          </p>
          <Button size="lg" className="bg-[#EE2B6C] hover:bg-[#EE2B6C]/90 text-white">
            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};