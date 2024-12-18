import { useInView } from "react-intersection-observer";
import { Brain, Linkedin, Youtube } from "lucide-react";

export const Team = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex flex-col items-center">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full border-2 border-[#EE2B6C] animate-[spin_8s_linear_infinite]" />
                  <div className="absolute inset-[2px] rounded-full overflow-hidden bg-black">
                    <img
                      src="/lovable-uploads/me.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  {/* <a
                    href="https://brainli.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#EE2B6C] transition-colors"
                  >
                    <Brain className="w-5 h-5" />
                  </a> */}
                  <a
                    href="https://www.linkedin.com/in/jakub-dzikowski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#EE2B6C] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/JacobDzikowski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#EE2B6C] transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@JacobDzikowski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#EE2B6C] transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Meet The Founder
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  I'm Jakub and I believe we're in an AI revolution, and my goal
                  is to help people with great ideas turn them into AI mini SaaS
                  products quickly and affordably. After building Brainli and
                  working on AI solutions across various industries, I'm now
                  focused on bridging the gap between your vision and the
                  technology to bring it to life.{" "}
                </p>
                <p className="text-lg text-white/80">
                  I personally ensure that your AI vision is brought to life
                  swiftly and cost-effectively, so you can focus on your core
                  business and leave the AI development to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
