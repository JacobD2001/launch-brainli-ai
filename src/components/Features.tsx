import { useInView } from "react-intersection-observer";
import { 
  Sparkles, 
  Database, 
  CreditCard, 
  BarChart3, 
  Cloud, 
  Brain 
} from "lucide-react";

const features = [
  {
    title: "Beautiful & Fast Frontend",
    description: "Build interfaces that are responsive, stunning, and lightning fast. Your users will love the experience.",
    icon: Sparkles,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Robust Backend",
    description: "A powerful, secure backend to manage your data, logic, and workflows efficiently.",
    icon: Database,
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    title: "Secure Payments",
    description: "Start earning confidently with seamless payment systems, subscriptions, and checkout flows.",
    icon: CreditCard,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Smart Analytics",
    description: "Track user behavior and app performance to make smarter decisions and grow faster.",
    icon: BarChart3,
    gradient: "from-purple-500 to-violet-500"
  },
  {
    title: "Scalable Deployment",
    description: "Deploy quickly and securely to ensure your app scales as your users grow.",
    icon: Cloud,
    gradient: "from-orange-500 to-amber-500"
  },
  {
    title: "AI-Driven Features",
    description: "Supercharge your app with intelligent tools like advanced search and recommendations.",
    icon: Brain,
    gradient: "from-cyan-500 to-teal-500"
  }
];

export const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-[#EE2B6C]">Succeed</span>
          </h2>
          <p className="text-xl text-white/80">
            We build complete, production-ready applications with all the essential features your business needs to thrive.
          </p>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transform transition-all duration-700 ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 h-full border border-white/10 hover:border-[#EE2B6C]/30 transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-2.5 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#EE2B6C] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};