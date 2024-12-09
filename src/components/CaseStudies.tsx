import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "AI Content Generator",
    description: "An AI-powered platform that generates high-quality marketing content in seconds.",
    image: "/placeholder.svg",
    tags: ["OpenAI", "React", "Node.js"],
  },
  {
    title: "Smart Analytics Dashboard",
    description: "Real-time AI analytics platform for e-commerce businesses.",
    image: "/placeholder.svg",
    tags: ["Machine Learning", "Python", "React"],
  },
  {
    title: "AI Customer Service Bot",
    description: "Intelligent chatbot that handles customer inquiries 24/7.",
    image: "/placeholder.svg",
    tags: ["NLP", "Python", "AWS"],
  },
];

export const CaseStudies = () => {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
          Featured Work
        </h2>
        <p className="text-lg text-white/80 text-center mb-16 max-w-2xl mx-auto">
          Discover how we've helped businesses transform their ideas into successful AI-powered products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden hover:border-[#2A4BEE]/50 transition-colors"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};