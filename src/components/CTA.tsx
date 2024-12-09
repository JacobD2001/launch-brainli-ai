import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useInView } from "react-intersection-observer";

export const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "free-ai-audit-implement-ai-in-your-business",
      });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="py-24 bg-black">
      <div 
        ref={ref}
        className={`container mx-auto px-4 text-center transition-all duration-700 transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build Your AI Product?
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          Let's turn your idea into a revenue-generating AI product. Schedule a free consultation now.
        </p>
        <div className="w-full max-w-4xl mx-auto h-[600px] bg-white/[0.02] rounded-lg border border-white/10 overflow-hidden">
          <Cal
            namespace="free-ai-audit-implement-ai-in-your-business"
            calLink="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
            style={{
              width: "100%",
              height: "100%",
              overflow: "scroll",
            }}
            config={{
              layout: "month_view",
            }}
          />
        </div>
      </div>
    </div>
  );
};