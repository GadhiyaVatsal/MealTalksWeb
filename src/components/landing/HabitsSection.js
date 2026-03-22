export default function HabitsSection() {
  return (
    <section data-testid="habits-section" className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left content */}
        <div className="flex-1 max-w-md order-2 lg:order-1">
          <h2
            data-testid="habits-heading"
            className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#3D281B] leading-tight mb-6"
          >
            Build Healthy Habits, One Day at a Time
          </h2>
          <p className="text-base md:text-lg text-[#8C7E77] leading-relaxed">
            Stay consistent with your food logging and watch your streak grow — because small wins every day lead to big results.
          </p>
        </div>

        {/* Right - Single phone with blob background */}
        <div className="flex-1 flex justify-center items-center relative order-1 lg:order-2">
          {/* Blob background from Figma */}
          <img
            src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/26g7q52z_Vector%203.png"
            alt=""
            className="absolute w-[400px] md:w-[520px] pointer-events-none z-0 opacity-90"
          />

          <img
            src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/zq27nntg_3.png"
            alt="MealTalks Day Streak screen"
            className="w-[220px] md:w-[280px] relative z-10 drop-shadow-[0_20px_50px_rgba(30,27,75,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
