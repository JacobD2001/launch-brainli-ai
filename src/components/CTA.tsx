import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { useCalendar } from "@/hooks/useCalendar";

export const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  useCalendar(); // Initializes the calendar
  
  return (
    <div className="py-24 bg-black">
      <div 
        ref={ref}
        className={`container mx-auto px-4 text-center transition-all duration-700 transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build <span className="text-[#EE2B6C]">Your</span> AI Product?
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          Turn your idea into a revenue-generating AI product. Schedule a free strategy call now.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="bg-[#EE2B6C] hover:bg-[#EE2B6C]/90 text-white"
            data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
            data-cal-config='{"layout":"month_view"}'
          >
            <Calendar className="mr-2 h-4 w-4" /> Book Your Strategy Call
          </Button>
          <p className="text-sm text-white/50">
            No commitment required. Explore your idea today.
          </p>
        </div>
      </div>
    </div>
  );
};
