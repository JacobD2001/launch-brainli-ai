import { useInView } from "react-intersection-observer";
import { PhoneCall, Target, Rocket, BarChart3, DollarSign } from "lucide-react";

export const HowItWorks = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const steps = [
    {
      icon: <PhoneCall className="h-8 w-8 text-[#EE2B6C]" />,
      title: "Discovery Call",
      description: "Understand what you want to achieve and explore your vision for success.",
    },
    {
      icon: <Target className="h-8 w-8 text-[#EE2B6C]" />,
      title: "MVP Strategy",
      description: "Identify the essential features that will validate your idea quickly.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-[#EE2B6C]" />,
      title: "Rapid Launch",
      description: "Your MVP goes live in weeks, ready to capture early users.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#EE2B6C]" />,
      title: "Data-Driven Growth",
      description: "Analyze user feedback and metrics to guide product evolution.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#EE2B6C]" />,
      title: "Revenue Generation",
      description: "Transform your validated idea into a profitable AI product.",
    },
  ];

  return (
    <div className="py-24 bg-black/50" id="process">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`transition-all duration-700 transform ${
            titleInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            How to Turn Your <span className="text-[#EE2B6C]">AI Ideas</span> Into <span className="text-[#EE2B6C]">Reality</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <div 
                key={index} 
                ref={ref}
                className={`relative flex items-start mb-16 last:mb-0 transition-all duration-700 transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-[27px] top-10 w-[2px] h-[calc(100%+64px)] bg-gradient-to-b from-[#EE2B6C] to-white/20" />
                )}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-6 relative z-10">
                  {step.icon}
                </div>
                <div className="flex-1 pt-2">
                  <div className="bg-white/[0.03] border border-white/10 rounded-lg p-6 hover:border-[#EE2B6C]/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-[#EE2B6C]/5 transition-all">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};