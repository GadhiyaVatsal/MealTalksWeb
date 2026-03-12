import PhoneMockup from "@/components/landing/PhoneMockup";

function StreakPhoneScreen() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const active = [true, true, true, true, true, false, false];

  return (
    <div className="h-[380px] md:h-[440px] bg-white flex flex-col text-left">
      {/* Header */}
      <div className="px-4 pt-6 pb-2 flex items-center justify-between">
        <div>
          <div className="text-[8px] text-[#8C7E77]">Your daily balance</div>
          <div className="text-[16px] font-bold text-[#3D281B]">2,000</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#FF7A45]" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
      </div>

      {/* Streak card */}
      <div className="px-4 mt-3">
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-[#FF7A45] flex items-center justify-center text-[10px] font-bold">5</div>
            <div>
              <div className="text-[10px] font-bold">Day Streak</div>
              <div className="text-[7px] text-gray-300">Log everyday to keep it going!</div>
            </div>
          </div>
          {/* Days row */}
          <div className="flex justify-between mt-3">
            {days.map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="text-[7px] text-gray-400">{day}</div>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold
                  ${active[i] ? "bg-[#FF7A45] text-white" : "bg-gray-700 text-gray-400"}`}>
                  {active[i] ? "✓" : ""}
                </div>
              </div>
            ))}
          </div>
          {/* Next button */}
          <div className="mt-3 bg-[#FF7A45] rounded-lg py-1.5 text-center text-[9px] font-semibold cursor-pointer">
            Next
          </div>
        </div>
      </div>

      {/* Quick log */}
      <div className="px-4 mt-4">
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gray-400" />
          </div>
          <div className="text-[8px] text-[#8C7E77]">Describe your meal...</div>
        </div>
      </div>

      <div className="mt-auto px-4 py-3 flex justify-around text-[#8C7E77]">
        <div className="w-5 h-5 rounded-full bg-gray-100" />
        <div className="w-5 h-5 rounded-full bg-[#FF7A45]/10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#FF7A45]" />
        </div>
        <div className="w-5 h-5 rounded-full bg-gray-100" />
      </div>
    </div>
  );
}

function ProgressPhoneScreen() {
  return (
    <div className="h-[380px] md:h-[440px] bg-[#FAFAFA] flex flex-col text-left">
      <div className="px-4 pt-6 pb-2">
        <div className="text-[8px] text-[#8C7E77]">Weekly Overview</div>
        <div className="text-[12px] font-bold text-[#3D281B]">Great progress!</div>
      </div>

      {/* Mini chart */}
      <div className="px-4 mt-2">
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex items-end justify-between h-20 gap-1">
            {[40, 65, 50, 80, 70, 55, 60].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md bg-[#FF7A45]/80"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[6px] text-[#8C7E77]">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 mt-3 grid grid-cols-2 gap-2">
        <div className="bg-white rounded-xl p-2.5 shadow-sm text-center">
          <div className="text-[14px] font-bold text-[#FF7A45]">1,842</div>
          <div className="text-[7px] text-[#8C7E77]">Avg calories</div>
        </div>
        <div className="bg-white rounded-xl p-2.5 shadow-sm text-center">
          <div className="text-[14px] font-bold text-green-500">92%</div>
          <div className="text-[7px] text-[#8C7E77]">Goal hit rate</div>
        </div>
      </div>

      <div className="mt-auto px-4 py-3 flex justify-around text-[#8C7E77]">
        <div className="w-5 h-5 rounded-full bg-gray-100" />
        <div className="w-5 h-5 rounded-full bg-gray-100" />
        <div className="w-5 h-5 rounded-full bg-[#FF7A45]/10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#FF7A45]" />
        </div>
      </div>
    </div>
  );
}

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

        {/* Right - Phone mockups */}
        <div className="flex-1 flex justify-center items-center relative order-1 lg:order-2">
          <div className="absolute w-[350px] h-[350px] rounded-full bg-[#FFF0E6] blur-2xl pointer-events-none" />

          <div className="relative flex items-start">
            <PhoneMockup tilt="rotate-3" className="z-20 relative">
              <StreakPhoneScreen />
            </PhoneMockup>
            <PhoneMockup tilt="-rotate-6" className="z-10 relative -ml-16 mt-8">
              <ProgressPhoneScreen />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
