import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build Your AI Product?
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          Let's turn your idea into a revenue-generating AI product. Our team is ready to start building.
        </p>
        <Button size="lg" className="bg-[#2A4BEE] hover:bg-[#2A4BEE]/90 text-white">
          Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};