export default function AISection() {
  return (
    <section data-testid="ai-section" className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left - Single phone with blob background */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Blob background from Figma */}
          <img
            src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/8u9en63y_Vector%204.png"
            alt=""
            className="absolute w-[400px] md:w-[520px] pointer-events-none z-0 opacity-90"
          />

          <img
            src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/vbh5rbcw_4.png"
            alt="MealTalks AI Chat screen"
            className="w-[220px] md:w-[280px] relative z-10 drop-shadow-[0_20px_50px_rgba(30,27,75,0.25)]"
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
