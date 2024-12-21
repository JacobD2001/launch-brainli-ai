import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Card } from "./ui/card";
import { useCalendar } from "@/hooks/useCalendar";

export const Pricing = () => {
  useCalendar();

  return (
    <section id="pricing" className="relative py-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Your <span className="text-[#2A4BEE]">AI Vision</span> Into Reality
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join ambitious founders who are building the next generation of AI products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Launch Your AI SaaS in Weeks Tier */}
          <Card className="relative p-8 bg-black border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
            <div className="absolute -top-3 right-4 bg-primary px-4 py-1 rounded-full text-sm font-medium">
              Temporarily Free - 1 Spot Left
            </div>
            <h3 className="text-2xl font-bold mb-2">Launch Your AI SaaS in Weeks</h3>
            <div className="mb-6">
              <span className="line-through text-gray-500 text-xl">$10,000</span>
              <div className="text-3xl font-bold text-primary mt-1">FREE</div>
              <div className="text-sm text-gray-400 mt-1">For Select Ambitious Founders</div>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Complete AI SaaS MVP with Your Core Feature (Built in 2-3 Weeks)",
                "Secure Payment System to Start Generating Income",
                "Professional Landing Page That Converts",
                "Easy-to-use Admin Dashboard to Manage Customers",
                "User Authentication & Management System",
                "2-3 Weeks Delivery Guarantee or Your Money Back",
                "Step-by-Step Launch Checklist for Success",
                "1 Month Technical Support Post-Launch",
                "Strategic Planning Session for Market Entry",
                "A Guarantee That You Will Get a Working Product",
                "100% Satisfaction Guarantee (30-Day Money Back)"
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
              Apply Now (Limited Time Only)
            </Button>
          </Card>

          {/* Complete AI SaaS Solution Tier */}
          <Card className="relative p-8 bg-gradient-to-b from-black to-secondary/10 border border-white/20 rounded-xl hover:border-white/30 transition-all duration-300">
            <div className="absolute -top-3 right-4 bg-secondary px-4 py-1 rounded-full text-sm font-medium">
              Temporarily Free - 1 Spot Left
            </div>
            <h3 className="text-2xl font-bold mb-2">Complete AI SaaS Solution</h3>
            <div className="mb-6">
              <span className="line-through text-gray-500 text-xl">$20,000</span>
              <div className="text-3xl font-bold text-secondary mt-1">FREE</div>
              <div className="text-sm text-gray-400 mt-1">For Select Ambitious Founders</div>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Everything in the Launch Your AI SaaS Package",
                "Advanced AI Features Integration & Optimization",
                "Premium UI/UX Design for Better User Experience",
                "High-Converting Landing Page with A/B Testing",
                "Comprehensive Analytics Dashboard",
                "Email Marketing System Integration",
                "2-3 Weeks Delivery Guarantee or Your Money Back",
                "3 Months Premium Technical Support",
                "Ongoing 1-on-1 Micro-SaaS Success Mentorship",
                "Customized Launch Strategy & Market Entry Plan",
                "Exclusive Founder Community Access",
                "Complete Business Template Library",
                "A Guarantee That You Will Get a Working Product",
                "100% Satisfaction Guarantee (30-Day Money Back)"
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
              Apply Now (Limited Time Only)
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};