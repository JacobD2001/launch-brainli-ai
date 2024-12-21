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
            Choose <span className="text-[#EE2B6C]">Your</span> Path to a Successful AI SaaS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join ambitious founders who are building the next generation of AI products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AI SaaS MVP Sprint Tier */}
          <Card className="relative p-8 bg-black border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
            <div className="absolute -top-3 right-4 bg-primary px-4 py-1 rounded-full text-sm font-medium">
              Temporarily Free - 1 Spot Left
            </div>
            <h3 className="text-2xl font-bold mb-2">AI SaaS MVP Sprint</h3>
            <p className="text-lg mb-2">Get Your Core Feature Live in 3 Weeks</p>
            <div className="mb-6">
              <span className="line-through text-gray-500 text-xl">$10,000</span>
              <div className="text-3xl font-bold text-primary mt-1">FREE</div>
              <div className="text-sm text-gray-400 mt-1">For Select Ambitious Founders</div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-primary">Core MVP Development ($8,000 value)</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Complete AI SaaS MVP with Your Core Feature (Built in 2-3 Weeks)</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Secure Payment System to Start Generating Income</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Professional Landing Page That Converts</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Easy-to-use Admin Dashboard to Manage Customers</span>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-primary">Technical Support & Guidance ($1,750 value)</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">2-3 Weeks Delivery Guarantee or Your Money Back</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Step-by-Step Launch Checklist for Success</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">1 Month Technical Support Post-Launch</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Strategic Planning Session for Market Entry</span>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-primary">Our Triple Guarantee (Priceless)</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">A Guarantee That You Will Get a Working Product</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">2-3 Weeks Delivery Guarantee or Money Back</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">100% Satisfaction Guarantee (30-Day Money Back)</span>
                </div>
              </div>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
              data-cal-config='{"layout":"month_view"}'
            >
              Apply Now (Limited Time Only)
            </Button>
          </Card>

          {/* AI SaaS Growth Accelerator Tier */}
          <Card className="relative p-8 bg-gradient-to-b from-black to-secondary/10 border border-white/20 rounded-xl hover:border-white/30 transition-all duration-300">
            <div className="absolute -top-3 right-4 bg-secondary px-4 py-1 rounded-full text-sm font-medium">
              Temporarily Free - 1 Spot Left
            </div>
            <h3 className="text-2xl font-bold mb-2">AI SaaS Growth Accelerator</h3>
            <p className="text-lg mb-2">3-Month Technical Launch & Optimization Engine</p>
            <div className="mb-6">
              <span className="line-through text-gray-500 text-xl">$20,000</span>
              <div className="text-3xl font-bold text-secondary mt-1">FREE</div>
              <div className="text-sm text-gray-400 mt-1">For Select Ambitious Founders</div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-secondary">Enhanced MVP Development ($14,000 value)</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Everything in the AI SaaS MVP Sprint</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Advanced AI Features Integration & Optimization</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Premium UI/UX Design for Better User Experience</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Custom Technical Architecture Plan for Scalability</span>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-secondary">Extended Support & Mentorship ($10,500 value)</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">3 Months Premium Technical Support</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Ongoing 1-on-1 Micro-SaaS Success Mentorship</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Complete Business Template Library</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Exclusive Founder Community Access</span>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-secondary">Our Triple Guarantee (Priceless)</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">A Guarantee That You Will Get a Working Product</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">2-3 Weeks Delivery Guarantee or Money Back</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">100% Satisfaction Guarantee (30-Day Money Back)</span>
                </div>
              </div>
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