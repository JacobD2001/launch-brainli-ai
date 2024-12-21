import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";

const caseStudies = [
  {
    title: "Brainli.ai",
    description:
      "Starting point with professional development. Showcased so you know we can deliver a well-designed product.",
    image: "/brainli-case-study.webp",
    tags: ["React", "Gatsby", "JavaScript", "Elevenlabs Assistants"],
    url: "https://brainli.ai/",
  },
  {
    title: "In Progress...",
    description:
      "In Progress...",
    image: "/case-study-placeholder.webp",
    tags: ["Coming", "soon", "stay", "tuned", "."],
    url: "https://tally.so/r/mB8Jd5",
  },
  {
    title: "In Progress...",
    description:
      "In Progress...",
    image: "/case-study-placeholder.webp",
    tags: ["Coming", "soon", "stay", "tuned", "."],
    url: "https://tally.so/r/mB8Jd5",
  },
];

export const CaseStudies = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: descRef, inView: descInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`transition-all duration-700 transform ${
            titleInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
            See how we have <span className="text-[#EE2B6C]">Helped</span>{" "}
            others like <span className="text-[#EE2B6C]">You</span>
          </h2>
        </div>
        <div
          ref={descRef}
          className={`transition-all duration-700 delay-200 transform ${
            descInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-lg text-white/80 text-center mb-16 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their ideas into
            successful AI-powered products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });
            return (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                ref={ref}
                className={`block bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden hover:border-[#EE2B6C]/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-[#EE2B6C]/5 transition-all duration-700 transform ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative w-full pt-[56.25%] bg-black">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                    loading="lazy"
                    style={{
                      imageRendering: 'crisp-edges',
                      maxWidth: '100%',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-white/70 mb-4">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="border-[#EE2B6C]/30 text-[#EE2B6C]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
