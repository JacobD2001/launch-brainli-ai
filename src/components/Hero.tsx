import { Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useCalendar } from "@/hooks/useCalendar";
import { RocketAnimation } from "./RocketAnimation";
import { AuroraBackground } from "./ui/aurora-background";

declare global {
  interface Window {
    Tally: {
      openPopup: (formId: string, options?: any) => void;
    };
  }
}

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

  const handleVisionShare = () => {
    window.Tally.openPopup('mB8Jd5', {
      layout: 'modal',
      width: 700,
      emoji: {
        text: '🚀',
        animation: 'wave'
      },
      autoClose: 500,
      onSubmit: () => {
        console.log('Form submitted successfully');
      }
    });
  };

  return (
    <AuroraBackground className="bg-black">
      <div className="container relative z-10 mx-auto px-4 animate-fade-up">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Turn your{" "}
            <span className="inline-block min-w-[140px] md:min-w-[180px]">
              <span className="text-[#EE2B6C]">AI</span>{" "}
              <span className="text-[#EE2B6C]">Ideas</span>
            </span>{" "}
            into Revenue-Generating Products{" "}
            <span className="text-[#EE2B6C] inline-block min-w-[140px]">
              {text}
              {!isComplete && <span className="animate-pulse">|</span>}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Start generating revenue with your AI product in weeks. Validate your idea quickly and turn it into a profitable business with a proven development approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg" 
              className="bg-[#EE2B6C] hover:bg-[#EE2B6C]/90 text-white w-full sm:w-auto text-base py-5"
              data-cal-link="jakubdzikowski/turn-your-ai-vision-into-reality"
              data-cal-config='{"layout":"month_view"}'
            >
              <Calendar className="mr-2 h-5 w-5" /> Book Strategy Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 hover:bg-white/5 text-white w-full sm:w-auto text-base py-5"
              onClick={handleVisionShare}
            >
              <FileText className="mr-2 h-5 w-5" /> Share Your Vision
            </Button>
          </div>
          <div className="inline-block bg-[#EE2B6C]/10 border border-[#EE2B6C]/20 rounded-full px-5 py-1.5">
            <p className="text-sm md:text-base text-[#EE2B6C]">
              🔥 Limited Availability: Only 2 spots left for January
            </p>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};