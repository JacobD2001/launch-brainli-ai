import { useInView } from "react-intersection-observer";

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
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Meet The Founder
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  I’m Jakub, and I believe trust is the foundation of success. I
                  build it by sharing my journey transparently—wins, losses, and
                  lessons—on LinkedIn, X, and YouTube.{" "}
                </p>
                <p className="text-lg text-white/80">
                  I believe we’re in an AI revolution, and my goal is to help
                  people with great ideas turn them into AI mini SaaS products
                  quickly and affordably. After building Brainli and working on
                  AI solutions across various industries, I’m now focused on bridging
                  the gap between your vision and the technology to bring it to
                  life.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
