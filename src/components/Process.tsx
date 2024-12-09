import { CheckCircle, Rocket, Code2, Gauge } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      icon: <CheckCircle className="h-6 w-6 text-[#2A4BEE]" />,
      title: "Initial Consultation",
      description: "We discuss your idea and define clear objectives for your AI product.",
    },
    {
      icon: <Code2 className="h-6 w-6 text-[#EE2B6C]" />,
      title: "Rapid Development",
      description: "Our team builds your MVP using cutting-edge AI technologies.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-[#2A4BEE]" />,
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
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex items-start mb-16 last:mb-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] top-10 w-[2px] h-[calc(100%+64px)] bg-gradient-to-b from-[#2A4BEE] to-transparent" />
              )}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-6">
                {step.icon}
              </div>
              <div className="flex-1 pt-2">
                <div className="bg-white/[0.03] border border-white/10 rounded-lg p-6 hover:border-[#2A4BEE]/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};