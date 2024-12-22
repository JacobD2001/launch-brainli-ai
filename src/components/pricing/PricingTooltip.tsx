import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface PricingTooltipProps {
  content: string;
}

export const PricingTooltip = ({ content }: PricingTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip open={isMobile ? isOpen : undefined}>
        <TooltipTrigger onClick={handleClick}>
          <Info className="h-4 w-4 text-gray-400 cursor-help" />
        </TooltipTrigger>
        <TooltipContent 
          className="bg-white text-black border border-gray-200 shadow-lg"
          onPointerDownOutside={() => isMobile && setIsOpen(false)}
        >
          <p className="w-[200px] text-sm">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};