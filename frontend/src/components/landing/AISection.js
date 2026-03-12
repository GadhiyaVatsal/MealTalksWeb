export default function AISection() {
  return (
    <section data-testid="ai-section" className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F9F3EF]/30 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#FFF0E6]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left - Phone mockup (actual Figma image) */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#FFF0E6] blur-2xl pointer-events-none" />
          <img
            src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/vbh5rbcw_4.png"
            alt="MealTalks AI Chat screen"
            className="w-[240px] md:w-[300px] relative z-10 drop-shadow-[0_20px_50px_rgba(30,27,75,0.25)]"
            style={{ transform: "rotate(-5deg)" }}
          />
        </div>

        {/* Right content */}
        <div className="flex-1 max-w-md">
          <h2
            data-testid="ai-heading"
            className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#3D281B] leading-tight mb-6"
          >
            Smart AI Conversations About Your Food
          </h2>
          <p className="text-base md:text-lg text-[#8C7E77] leading-relaxed">
            Our AI doesn&apos;t just log your meals — it understands your eating patterns, gives real-time feedback, and helps you make better choices.
          </p>
        </div>
      </div>
    </section>
  );
}
