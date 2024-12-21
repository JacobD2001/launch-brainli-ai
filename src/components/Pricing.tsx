import { useCalendar } from "@/hooks/useCalendar";
import { PricingTier } from "./pricing/PricingTier";

export const Pricing = () => {
  useCalendar();

  const tiers = [
    {
      title: "AI SaaS MVP Sprint",
      description: "Bring your AI idea to reality in 3 weeks",
      price: "Starting at $1,999",
      originalPrice: "$2,999",
      priceSubtext: "For Early Adopters",
      spotText: "Only 2 Spots Left",
      color: "primary" as const,
      features: [
        {
          title: "Fully Functional MVP Development",
          value: "$8,500 value",
          items: [
            { text: "Complete AI SaaS MVP built in 2-3 weeks" },
            { text: "Web app/mobile app with modern UI" },
            { text: "Payment, authorization & user management" },
            { text: "Professional landing page that converts" },
          ],
        },
        {
          title: "Technical Support & Guidance",
          value: "$5,500 value",
          items: [
            { text: "2-3 Weeks delivery guarantee or money back" },
            { text: "Step-by-step launch checklist for success" },
            { text: "1 month technical support post-launch" },
            { text: "Strategic planning session for market entry" },
          ],
        },
        {
          title: "Our Triple Guarantee",
          value: "Priceless",
          items: [
            { text: "Guaranteed working product ready for launch" },
            { text: "2-3 weeks delivery or money back" },
            { text: "100% satisfaction with iterative feedback" },
          ],
        },
      ],
    },
    {
      title: "AI SaaS Growth Accelerator",
      description: "Launch and scale your AI SaaS with expert guidance",
      price: "$4,999",
      originalPrice: "$7,999",
      priceSubtext: "For Select Ambitious Founders",
      spotText: "Only 1 Spot Left",
      color: "secondary" as const,
      features: [
        {
          title: "Enhanced MVP Development",
          value: "$14,000 value",
          items: [
            { text: "Everything in the AI SaaS MVP Sprint" },
            { text: "Advanced AI features integration & optimization" },
            { text: "Premium UI/UX design for better experience" },
            { text: "Custom integrations with your tools and CRMs" },
          ],
        },
        {
          title: "Extended Support & Mentorship",
          value: "$10,500 value",
          items: [
            { text: "3 months premium technical support" },
            { 
              text: "1-on-1 Micro-SaaS success mentorship",
              tooltip: "Access to book strategic calls with our team (2 calls per month) to help guide your development and growth"
            },
            { text: "Complete business template library for launches" },
            { 
              text: "Access to exclusive founder community & support",
              tooltip: "Join our small, exclusive community where founders communicate daily and help each other grow their AI SaaS businesses"
            },
          ],
        },
        {
          title: "Our Triple Guarantee",
          value: "Priceless",
          items: [
            { text: "Guaranteed working product ready for launch" },
            { text: "2-3 weeks delivery or money back" },
            { text: "100% satisfaction with iterative feedback" },
          ],
        },
      ],
    },
  ];

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
          {tiers.map((tier, index) => (
            <PricingTier
              key={index}
              {...tier}
              onBookCall={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};