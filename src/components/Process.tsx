import { CheckCircle } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We discuss your idea and define clear objectives for your AI product.",
    },
    {
      title: "Rapid Development",
      description: "Our team builds your MVP using cutting-edge AI technologies.",
    },
    {
      title: "Launch & Iterate",
      description: "We launch your product and help you gather user feedback for improvements.",
    },
  ];

  return (
    <div className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          From Idea to Launch in Weeks
        </h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-12 last:mb-0 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mr-4">
                <CheckCircle className="h-6 w-6 text-[#2A4BEE]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};