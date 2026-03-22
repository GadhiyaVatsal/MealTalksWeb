const features = [
  {
    iconUrl: "https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/geb52242_s1.png",
    title: "Photo & Chat Logging",
    description: "Let users snap a meal or message what they ate — and the app logs it instantly.",
  },
  {
    iconUrl: "https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/371kdu36_s2.png",
    title: "Auto Calorie Estimation",
    description: "Get instant calorie and macro breakdowns — no need to search or enter foods manually.",
  },
  {
    iconUrl: "https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/36r8yu17_s3.png",
    title: "Personalized Daily Goals",
    description: "Your targets adjust based on your body, lifestyle, and nutrition preferences.",
  },
  {
    iconUrl: "https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/o521ija9_s4.png",
    title: "Real-Time Food Feedback",
    description: "Understand how each meal affects your goals — get instant tips to stay on track.",
  },
  {
    iconUrl: "https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/6sx7cong_s5.png",
    title: "Progress & Trends View",
    description: "Visualize your eating patterns over time with easy-to-read charts and reports.",
  },
  {
    iconUrl: "https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/zrdp0kb9_s6.png",
    title: "Support for Local Foods",
    description: "Easily log meals from any cuisine — supports diverse dishes and local ingredients.",
  },
];

function FeatureIcon({ url, fallback }) {
  if (url) {
    return (
      <img src={url} alt="" className="w-14 h-14 rounded-full object-cover" />
    );
  }
  // Fallback: CSS gradient circle with globe SVG for "Support for Local Foods"
  return (
    <div className="w-14 h-14 rounded-full flex items-center justify-center"
         style={{ background: "linear-gradient(180deg, #FF7A45 0%, #FFB088 100%)" }}>
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </div>
  );
}

function FeatureCard({ iconUrl, iconFallback, title, description, index }) {
  return (
    <div
      data-testid={`feature-card-${index}`}
      className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(61,40,27,0.06)] hover:shadow-[0_8px_40px_rgba(61,40,27,0.12)]
                 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="mb-4">
        <FeatureIcon url={iconUrl} fallback={iconFallback} />
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
