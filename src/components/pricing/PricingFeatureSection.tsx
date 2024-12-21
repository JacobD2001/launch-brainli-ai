import { Check } from "lucide-react";
import { PricingTooltip } from "./PricingTooltip";

interface PricingFeatureSectionProps {
  title: string;
  value: string;
  items: Array<{
    text: string;
    tooltip?: string;
  }>;
  color: "primary" | "secondary";
}

export const PricingFeatureSection = ({
  title,
  value,
  items,
  color,
}: PricingFeatureSectionProps) => {
  return (
    <div className="pt-4 pb-2">
      <h4 className="text-lg font-semibold mb-3">
        <span className={`text-${color}`}>{title}</span>{" "}
        <span className="text-gray-400">({value})</span>
      </h4>
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3 mt-2">
          <Check className={`h-5 w-5 text-${color} mt-0.5`} />
          <div className="flex items-center gap-2">
            <span className="text-gray-300">{item.text}</span>
            {item.tooltip && <PricingTooltip content={item.tooltip} />}
          </div>
        </div>
      ))}
    </div>
  );
};