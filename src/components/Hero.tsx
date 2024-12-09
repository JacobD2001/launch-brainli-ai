import { Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ParticleBackground } from "./ParticleBackground";
import { useCalendar } from "@/hooks/useCalendar";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "AI Ideas";
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Turn your{" "}
            <span className="text-[#EE2B6C] inline-block min-w-[120px] md:min-w-[160px]">
              {text}
              {!isComplete && <span className="animate-pulse">|</span>}
            </span>{" "}
            into Revenue-Generating Products
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Build AI-powered MVPs and micro-SaaS products in weeks, not months.
            Transform your vision into reality with our rapid development approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button 
              size="lg" 
              className="bg-[#EE2B6C] hover:bg-[#EE2B6C]/90 text-white w-full sm:w-auto"
              data-cal-namespace="free-ai-audit-implement-ai-in-your-business"
              data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
              data-cal-config='{"layout":"month_view"}'
            >
              <Calendar className="mr-2 h-4 w-4" /> Book a Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 hover:bg-white/5 text-white w-full sm:w-auto"
              onClick={() => window.open('https://app.formbricks.com/s/t11dl0yfcf6as0p991dgvpag', '_blank')}
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