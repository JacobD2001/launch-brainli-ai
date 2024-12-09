import { Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container relative z-10 mx-auto px-4 animate-fade-up">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Turn your{" "}
            <span className="bg-clip-text text-transparent bg-[#EE2B6C] animate-pulse">
              AI Ideas
            </span>{" "}
            into
            <br />
            Revenue-Generating Products
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We build AI-powered MVPs and micro-SaaS products in weeks, not months.
            Transform your vision into reality with our rapid development approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button 
              size="lg" 
              className="bg-[#2A4BEE] hover:bg-[#2A4BEE]/90 text-white w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/example', '_blank')}
            >
              <Calendar className="mr-2 h-4 w-4" /> Book a Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 hover:bg-white/5 text-white w-full sm:w-auto"
              onClick={() => window.open('https://forms.example.com/vision', '_blank')}
            >
              <FileText className="mr-2 h-4 w-4" /> Share Your Vision
            </Button>
          </div>
          <div className="inline-block bg-[#EE2B6C]/10 border border-[#EE2B6C]/20 rounded-full px-4 py-1">
            <p className="text-sm text-[#EE2B6C]">
              🔥 Limited Availability: Only 3 spots left for December
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};