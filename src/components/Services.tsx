import { Zap, Rocket, Code } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Rocket className="h-8 w-8 text-[#EE2B6C]" />,
      title: "MVP Development",
      description: "Launch your AI product in weeks with our rapid MVP development process.",
    },
    {
      icon: <Code className="h-8 w-8 text-[#2A4BEE]" />,
      title: "Micro SaaS",
      description: "Build profitable AI-powered micro-SaaS products that solve specific problems.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#EE2B6C]" />,
      title: "Quick Iteration",
      description: "Validate ideas fast with our agile development approach and expert team.",
    },
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Building the Future of AI Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#EE2B6C]/50 transition-colors"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};