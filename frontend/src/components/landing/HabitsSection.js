export default function HabitsSection() {
  return (
    <section data-testid="habits-section" className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-[#FFF0E6]/60 blur-3xl pointer-events-none" />

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

        {/* Right - Phone mockups (actual Figma images) */}
        <div className="flex-1 flex justify-center items-center relative order-1 lg:order-2">
          <div className="absolute w-[350px] h-[350px] rounded-full bg-[#FFF0E6] blur-2xl pointer-events-none" />

          <div className="relative flex items-end">
            <img
              src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/zq27nntg_3.png"
              alt="MealTalks Day Streak screen"
              className="w-[200px] md:w-[260px] relative z-20 drop-shadow-[0_20px_50px_rgba(30,27,75,0.25)]"
              style={{ transform: "rotate(5deg)" }}
            />
            <img
              src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/r1g9w49w_2.png"
              alt="MealTalks plan screen"
              className="w-[200px] md:w-[260px] relative z-10 -ml-16 drop-shadow-[0_20px_50px_rgba(30,27,75,0.25)]"
              style={{ transform: "rotate(-6deg)", marginBottom: "20px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
