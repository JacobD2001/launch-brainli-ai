import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useCalendar } from "@/hooks/useCalendar";

export const ProblemsSolutions = () => {
  useCalendar();

  const phases = [
    {
      title: "Pre-Development",
      subtitle: "Stuck at the Starting Line?",
      problems: [
        "Overwhelmed by technical decisions and where to start",
        "Paralyzed by the fear of making costly mistakes",
        "Struggling to define what features truly matter for MVP",
      ],
      solution: "We'll create a clear roadmap together, defining your MVP scope and technical strategy. No more analysis paralysis – just clear direction and confident decisions.",
    },
    {
      title: "Development",
      subtitle: "Frustrated with Development Delays?",
      problems: [
        "Dealing with complex technical challenges and integrations",
        "Watching time and budget slip away without progress",
        "Feeling lost in technical jargon and developer communication",
      ],
      solution: "Our proven development process delivers your MVP in 2-3 weeks. You get clear communication, regular updates, and a working product – guaranteed.",
    },
    {
      title: "Post-Launch",
      subtitle: "Worried About Launch Success?",
      problems: [
        "Uncertain about product validation and market fit",
        "Struggling to gather and implement user feedback",
        "Feeling unsupported after the initial launch",
      ],
      solution: "Get ongoing mentorship, access to our founder community, and step-by-step guidance for gathering user feedback and scaling your AI SaaS.",
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Your <span className="text-[#EE2B6C]">AI Vision</span> into Reality
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Skip the common pitfalls and launch your AI SaaS with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-lg p-8 hover:border-[#EE2B6C]/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-[#EE2B6C]/5 transition-all"
            >
              <h3 className="text-2xl font-bold mb-2 text-white">
                {phase.title}
              </h3>
              <p className="text-[#EE2B6C] font-semibold mb-6">{phase.subtitle}</p>
              <div className="space-y-4 mb-6">
                {phase.problems.map((problem, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#EE2B6C] text-xl leading-tight">•</span>
                    <p className="text-white/70">{problem}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white mb-4">{phase.solution}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#EE2B6C] hover:bg-[#EE2B6C]/90 text-white text-base py-6 px-8"
            data-cal-link="jakubdzikowski/turn-your-ai-vision-into-reality"
            data-cal-config='{"layout":"month_view"}'
          >
            <Calendar className="mr-2 h-5 w-5" /> Schedule Your Strategy Call
          </Button>
          <p className="mt-4 text-white/60 text-sm">
            Limited spots available for January. Book now to secure your slot.
          </p>
        </div>
      </div>
    </section>
  );
};