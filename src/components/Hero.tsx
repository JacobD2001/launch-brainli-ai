import { Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ParticleBackground } from "./ParticleBackground";
import { useCalendar } from "@/hooks/useCalendar";
import { RocketAnimation } from "./RocketAnimation";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Fast.";
  const [isComplete, setIsComplete] = useState(false);
  useCalendar();

  useEffect(() => {
    const startTyping = () => {
      let currentIndex = 0;
      setIsComplete(false);
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
          
          setTimeout(() => {
            setText("");
            startTyping();
          }, 3000);
        }
      }, 150);

      return () => {
        clearInterval(typingInterval);
      };
    };

    startTyping();
  }, []);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      <ParticleBackground />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container relative z-10 mx-auto px-4 animate-fade-up">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Turn your{" "}
            <span className="inline-block min-w-[160px] md:min-w-[200px]">
            <span className="text-[#EE2B6C]">AI</span>{" "}
            <span className="text-[#EE2B6C]">Ideas</span>
            </span>{" "}
            into Revenue-Generating Products{" "}
            <span className="text-[#EE2B6C] inline-block min-w-[160px]">
              {text}
              {!isComplete && <span className="animate-pulse">|</span>}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
            Start generating revenue with your AI product in weeks. Validate your idea quickly and turn it into a profitable business with a proven development approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg" 
              className="bg-[#EE2B6C] hover:bg-[#EE2B6C]/90 text-white w-full sm:w-auto text-lg py-6"
              data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
              data-cal-config='{"layout":"month_view"}'
            >
              <Calendar className="mr-2 h-5 w-5" /> Book a Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 hover:bg-white/5 text-white w-full sm:w-auto text-lg py-6"
              onClick={() => window.open('https://app.formbricks.com/s/t11dl0yfcf6as0p991dgvpag', '_blank')}
            >
              <FileText className="mr-2 h-5 w-5" /> Share Your Vision
            </Button>
          </div>
          <div className="inline-block bg-[#EE2B6C]/10 border border-[#EE2B6C]/20 rounded-full px-6 py-2">
            <p className="text-base md:text-lg text-[#EE2B6C]">
              🔥 Limited Availability: Only 2 spots left for December
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
