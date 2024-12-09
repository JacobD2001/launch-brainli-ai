import { Zap, Rocket, Code } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const Services = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: descRef, inView: descInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const services = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "MVP Development",
      description: "Launch your AI product in weeks with our rapid MVP development process.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Micro SaaS",
      description: "Build profitable AI-powered micro-SaaS products that solve specific problems.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quick Iteration",
      description: "Validate ideas fast with our agile development approach and expert team.",
    },
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`transition-all duration-700 transform ${titleInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
            Building the Future of AI Products
          </h2>
        </div>
        <div ref={descRef} className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 delay-200 transform ${descInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-lg text-white/80">
            We exclusively focus on rapid development of AI-powered products, helping entrepreneurs and businesses capitalize on the AI revolution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <div
                key={index}
                ref={ref}
                className={`p-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#EE2B6C]/50 transition-all duration-700 transform group ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 relative">
                  <div className="[&_svg]:transition-all [&_svg]:duration-300 [&_svg]:stroke-[url(#gradient)] group-hover:[&_svg]:stroke-[url(#gradient-hover)]">
                    {service.icon}
                  </div>
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2139B3" />
                        <stop offset="100%" stopColor="#EE2B6C" />
                      </linearGradient>
                      <linearGradient id="gradient-hover" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EE2B6C" />
                        <stop offset="100%" stopColor="#2139B3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};