import { CheckCircle, Rocket, Code2 } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const Process = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const steps = [
    {
      icon: <CheckCircle className="h-6 w-6 text-[#EE2B6C]" />,
      title: "Initial Consultation",
      description: "We discuss your idea and define clear objectives for your AI product.",
    },
    {
      icon: <Code2 className="h-6 w-6 text-[#EE2B6C]" />,
      title: "Rapid Development",
      description: "Our team brings your idea to life using cutting-edge AI technologies.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-[#EE2B6C]" />,
      title: "Launch & Iterate",
      description: "We launch your product and help you gather user feedback for improvements.",
    },
  ];

  return (
    <div className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`transition-all duration-700 transform ${titleInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            From <span className="text-[#EE2B6C]">Idea</span> to <span className="text-[#EE2B6C]">Launch</span> in Weeks
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
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-6">
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