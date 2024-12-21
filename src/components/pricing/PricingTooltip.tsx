import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface PricingTooltipProps {
  content: string;
}

export const PricingTooltip = ({ content }: PricingTooltipProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Info className="h-4 w-4 text-gray-400 cursor-help" />
        </TooltipTrigger>
        <TooltipContent className="bg-white/90 text-black border border-gray-200">
          <p className="w-[200px]">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};