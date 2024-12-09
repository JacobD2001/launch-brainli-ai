import { useInView } from "react-intersection-observer";

export const Team = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-700 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="relative w-64 h-64 flex-shrink-0">
                <div className="absolute inset-0 rounded-lg border-2 border-[#EE2B6C] animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-[2px] rounded-lg overflow-hidden bg-black">
                  <img
                    src="/lovable-uploads/4a5a736b-3177-4e17-974c-59acd17131cb.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-6">Who You'll Work With</h2>
                <p className="text-lg text-white/80 mb-6">
                  Hey! I'm a dedicated AI product builder and entrepreneur who believes in building in public and sharing the journey. With expertise in developing AI-powered solutions, I focus on creating scalable products that deliver real value.
                </p>
                <p className="text-lg text-white/80">
                  My approach combines technical expertise with transparent communication, ensuring you're always part of the development process. I'm passionate about scaling projects effectively and sharing insights along the way, making the entire journey both educational and rewarding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};