import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { Card } from "../ui/card";
import { PricingFeatureSection } from "./PricingFeatureSection";
import { PricingTooltip } from "./PricingTooltip";

interface PricingTierProps {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  priceSubtext: string;
  spotText: string;
  color: "primary" | "secondary";
  features: {
    title: string;
    value: string;
    items: Array<{
      text: string;
      tooltip?: string;
    }>;
  }[];
  onBookCall: () => void;
}

export const PricingTier = ({
  title,
  description,
  price,
  originalPrice,
  priceSubtext,
  spotText,
  color,
  features,
  onBookCall,
}: PricingTierProps) => {
  return (
    <Card 
      className={`relative p-8 ${
        color === "primary" 
          ? "bg-black border border-white/10 hover:border-white/20" 
          : "bg-gradient-to-b from-black to-secondary/10 border border-white/20 hover:border-white/30"
      } rounded-xl transition-all duration-300`}
    >
      <div className={`absolute -top-3 right-4 bg-${color} px-4 py-1 rounded-full text-sm font-medium`}>
        {spotText}
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg mb-2 h-[48px]">{description}</p>
      <div className="mb-6">
        <span className="line-through text-gray-500 text-xl">{originalPrice}</span>
        <div className={`text-3xl font-bold text-${color} mt-1`}>{price}</div>
        <div className="text-sm text-gray-400 mt-1">{priceSubtext}</div>
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((section, index) => (
          <PricingFeatureSection
            key={index}
            title={section.title}
            value={section.value}
            items={section.items}
            color={color}
          />
        ))}
      </div>

      <Button 
        className={`w-full bg-${color} hover:bg-${color}/90`}
        data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
        data-cal-config='{"layout":"month_view"}'
        onClick={onBookCall}
      >
        Book Your Strategy Call
      </Button>
    </Card>
  );
};