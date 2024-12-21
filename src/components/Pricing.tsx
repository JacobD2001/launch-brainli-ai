import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Card } from "./ui/card";
import { useCalendar } from "@/hooks/useCalendar";

export const Pricing = () => {
  useCalendar();

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Choose Your Path to a Successful AI SaaS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your AI idea into a successful SaaS product with our expert guidance and development services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* MVP Launchpad Tier */}
          <Card className="relative p-8 bg-black border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
            <div className="absolute -top-3 right-4 bg-primary px-4 py-1 rounded-full text-sm font-medium">
              Limited Time Offer
            </div>
            <h3 className="text-2xl font-bold mb-2">MVP Launchpad</h3>
            <div className="mb-6">
              <span className="line-through text-gray-500 text-xl">$7,000</span>
              <div className="text-3xl font-bold text-primary mt-1">FREE</div>
              <div className="text-sm text-gray-400 mt-1">(Limited Spots Available)</div>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Core AI SaaS MVP Development",
                "1 Month Technical Support Post-Launch",
                'One "Quick-Start" Strategy Call',
                "Essential Launch Template"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
              data-cal-config='{"layout":"month_view"}'
            >
              Apply Now for a Free Spot
            </Button>
          </Card>

          {/* AI SaaS Launch Accelerator Tier */}
          <Card className="relative p-8 bg-gradient-to-b from-black to-secondary/10 border border-white/20 rounded-xl hover:border-white/30 transition-all duration-300">
            <div className="absolute -top-3 right-4 bg-secondary px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">AI SaaS Launch Accelerator</h3>
            <div className="mb-6">
              <span className="line-through text-gray-500 text-xl">$15,000</span>
              <div className="text-3xl font-bold text-secondary mt-1">FREE</div>
              <div className="text-sm text-gray-400 mt-1">(Limited Spots Available)</div>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Everything in the MVP Launchpad Tier",
                "3 Months Technical Support Post-Launch",
                "Ongoing 1-on-1 Micro-SaaS Coaching & Mentorship",
                "Customized 'Ultimate Launch Strategy' Plan",
                "Private Community Access",
                "Complete Business Template Library",
                "Conditional Guarantee: We will work with you for free until your AI SaaS MVP is working",
                "Unconditional Guarantee: You can get a full refund if not satisfied within the first 30 days"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="w-full bg-secondary hover:bg-secondary/90"
              data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
              data-cal-config='{"layout":"month_view"}'
            >
              Apply Now for a Free Spot
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};