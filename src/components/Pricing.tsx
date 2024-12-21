import { Button } from "./ui/button";
import { Check, Info } from "lucide-react";
import { Card } from "./ui/card";
import { useCalendar } from "@/hooks/useCalendar";
import { Tooltip } from "./ui/tooltip";

export const Pricing = () => {
  useCalendar();

  return (
    <section id="pricing" className="relative py-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Choose <span className="text-[#EE2B6C]">Your</span> Path to 
a Successful AI SaaS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join ambitious founders who are building the next generation of AI products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AI SaaS MVP Sprint Tier */}
          <Card className="relative p-8 bg-black border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
            <div className="absolute -top-3 right-4 bg-primary px-4 py-1 rounded-full text-sm font-medium">
              Only 2 Spots Left
            </div>
            <h3 className="text-2xl font-bold mb-2">AI SaaS MVP Sprint</h3>
            <p className="text-lg mb-2">Bring your AI idea to reality in 3 weeks</p>
            <div className="mb-6">
              <span className="line-through text-gray-500 text-xl">$2,999</span>
              <div className="text-3xl font-bold text-primary mt-1">Starting at $1,999</div>
              <div className="text-sm text-gray-400 mt-1">For Early Adopters</div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-primary">Fully Functional MVP Development</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Complete AI SaaS MVP built in 2-3 weeks</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Web app/mobile app with modern UI</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Payment, authorization & user management</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Professional landing page that converts</span>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-primary">Technical Support & Guidance</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">2-3 Weeks delivery guarantee or money back</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Step-by-step launch checklist for success</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">1 month technical support post-launch</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Strategic planning session for market entry</span>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-primary">Our Triple Guarantee</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">Guaranteed working product ready for launch</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">2-3 weeks delivery or money back</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-300">100% satisfaction with iterative feedback</span>
                </div>
              </div>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Your Strategy Call
            </Button>
          </Card>

          {/* AI SaaS Growth Accelerator Tier */}
          <Card className="relative p-8 bg-gradient-to-b from-black to-secondary/10 border border-white/20 rounded-xl hover:border-white/30 transition-all duration-300">
            <div className="absolute -top-3 right-4 bg-secondary px-4 py-1 rounded-full text-sm font-medium">
              Only 1 Spot Left
            </div>
            <h3 className="text-2xl font-bold mb-2">AI SaaS Growth Accelerator</h3>
            <p className="text-lg mb-2">Launch in 3 weeks and grow your SaaS on user feedback</p>
            <div className="mb-6">
              <span className="line-through text-gray-500 text-xl">$7,999</span>
              <div className="text-3xl font-bold text-secondary mt-1">$4,999</div>
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
                  <span className="text-gray-300">Advanced AI features integration & optimization</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Premium UI/UX design for better experience</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Custom integrations with your tools and CRMs</span>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-secondary">Extended Support & Mentorship ($10,500 value)</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">3 months premium technical support</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300">1-on-1 Micro-SaaS success mentorship</span>
                    <Tooltip content="Access to book strategic calls with our team (2 calls per month) to help guide your development and growth">
                      <Info className="h-4 w-4 text-gray-400 cursor-help" />
                    </Tooltip>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Complete business template library for launches</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Access to exclusive founder community & support</span>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <h4 className="text-lg font-semibold mb-3 text-secondary">Our Triple Guarantee</h4>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">Guaranteed working product ready for launch</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">2-3 weeks delivery or money back</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5" />
                  <span className="text-gray-300">100% satisfaction with iterative feedback</span>
                </div>
              </div>
            </div>

            <Button 
              className="w-full bg-secondary hover:bg-secondary/90"
              data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Your Strategy Call
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
