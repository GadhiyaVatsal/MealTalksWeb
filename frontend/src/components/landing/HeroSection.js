import { AppStoreButtons } from "@/components/landing/AppStoreButtons";

export default function HeroSection() {
  return (
    <section data-testid="hero-section" className="relative px-6 md:px-12 lg:px-20 pt-8 pb-16 md:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-12 left-4 w-28 h-28 dot-pattern pointer-events-none" />
      <div className="absolute top-40 right-[30%] w-[400px] h-[400px] rounded-full bg-[#FF7A45]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left content */}
        <div className="flex-1 max-w-xl animate-fade-in-up" style={{ opacity: 0 }}>
          <h1
            data-testid="hero-heading"
            className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-[#3D281B] mb-6"
          >
            Revolutionize How You Track Food
          </h1>
          <p
            data-testid="hero-subtext"
            className="text-base md:text-lg text-[#8C7E77] leading-relaxed mb-8 max-w-md"
          >
            Join early users getting instant, AI-powered nutrition tracking — smarter, faster, and tailored to your goals.
          </p>
          <AppStoreButtons />
        </div>

        {/* Right - Phone mockups (actual Figma images) */}
        <div className="flex-1 flex justify-center items-center relative animate-fade-in-up animate-delay-200" style={{ opacity: 0 }}>
          {/* Blob background shape from Figma */}
          <img
            src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/9ynwd7v6_Vector.png"
            alt=""
            className="absolute w-[450px] md:w-[600px] pointer-events-none z-0 opacity-90"
          />

          {/* Combined phone mockup image from Figma */}
          <img
            src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/pywzgh5l_vector%202.png"
            alt="MealTalks app screens"
            data-testid="hero-phones"
            className="relative z-10 w-[340px] md:w-[480px] lg:w-[540px] drop-shadow-[0_20px_60px_rgba(30,27,75,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
