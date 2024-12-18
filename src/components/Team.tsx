import { useInView } from "react-intersection-observer";
import { Twitter, Linkedin } from "lucide-react";

export const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 bg-black">
      <div 
        ref={ref}
        className={`container mx-auto px-4 text-center transition-all duration-700 transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Meet the <span className="text-[#EE2B6C]">Founder</span>
        </h2>
        <div className="max-w-md mx-auto">
          <div className="relative mb-6">
            <img
              src="/lovable-uploads/me.jpg"
              alt="Jakub Dzikowski"
              className="w-48 h-48 rounded-full mx-auto object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Jakub Dzikowski</h3>
          <p className="text-white/70 mb-6">
            With over 8 years of experience in software development and a passion for AI, 
            help entrepreneurs turn their AI ideas into successful products. Expertise 
            spans from early-stage startups to enterprise solutions, ensuring your project 
            is built with scalability and success in mind.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://twitter.com/jakubdzikowski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#EE2B6C] transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jakub-dzikowski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#EE2B6C] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};