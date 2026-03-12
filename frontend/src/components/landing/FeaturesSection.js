import { Camera, Clock, Target, Settings, BarChart3, HelpCircle } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Photo & Chat Logging",
    description: "Let users snap a meal or message what they ate — and the app logs it instantly.",
  },
  {
    icon: Clock,
    title: "Auto Calorie Estimation",
    description: "Get instant calorie and macro breakdowns — no need to search or enter foods manually.",
  },
  {
    icon: Target,
    title: "Personalized Daily Goals",
    description: "Your targets adjust based on your body, lifestyle, and nutrition preferences.",
  },
  {
    icon: Settings,
    title: "Real-Time Food Feedback",
    description: "Understand how each meal affects your goals — get instant tips to stay on track.",
  },
  {
    icon: BarChart3,
    title: "Progress & Trends View",
    description: "Visualize your eating patterns over time with easy-to-read charts and reports.",
  },
  {
    icon: HelpCircle,
    title: "Support for Local Foods",
    description: "Easily log meals from any cuisine — supports diverse dishes and local ingredients.",
  },
];

function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <div
      data-testid={`feature-card-${index}`}
      className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(61,40,27,0.06)] hover:shadow-[0_8px_40px_rgba(61,40,27,0.12)]
                 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="w-12 h-12 rounded-full bg-[#FFF0E6] flex items-center justify-center mb-4
                      group-hover:bg-[#FF7A45] transition-colors duration-300">
        <Icon className="w-5 h-5 text-[#FF7A45] group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
      </div>
      <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#3D281B] mb-2">{title}</h3>
      <p className="text-sm text-[#8C7E77] leading-relaxed">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section data-testid="features-section" className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F9F3EF]/40">
      {/* Subtle background decorations */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#FF7A45]/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#FF7A45]/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2
            data-testid="features-heading"
            className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#3D281B] mb-4"
          >
            The Calorie Tracker Without the Bells & Whistles
          </h2>
          <p className="text-base md:text-lg text-[#8C7E77] leading-relaxed">
            A streamlined food tracking experience that focuses only on what matters. No unnecessary features — just fast, accurate logging built for real life.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <button
            data-testid="launch-app-btn-features"
            className="px-8 py-3 rounded-full border-2 border-[#FF7A45] text-[#FF7A45] font-semibold text-sm
                       hover:bg-[#FF7A45] hover:text-white transition-all duration-300 ease-out
                       hover:shadow-[0_4px_20px_rgba(255,122,69,0.3)]"
          >
            Launch app
          </button>
        </div>
      </div>
    </section>
  );
}
