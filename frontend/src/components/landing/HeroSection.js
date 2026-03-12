import PhoneMockup from "@/components/landing/PhoneMockup";
import { AppStoreButtons } from "@/components/landing/AppStoreButtons";

function HeroPhoneScreen1() {
  return (
    <div className="h-[380px] md:h-[440px] bg-[#FAFAFA] flex flex-col text-left">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 text-[10px] text-gray-500">
        <span className="font-medium">2,000</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#FF7A45]" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
      </div>

      {/* Calorie circle */}
      <div className="px-4 py-3 flex items-center gap-3">
        <div className="relative w-16 h-16 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#f0f0f0" strokeWidth="3" />
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#FF7A45" strokeWidth="3" strokeDasharray="70 100" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold text-[#3D281B]">1,450</span>
            <span className="text-[6px] text-[#8C7E77]">kcal left</span>
          </div>
        </div>
        <div className="flex gap-3 text-[8px]">
          <div className="text-center">
            <div className="w-8 h-1.5 rounded-full bg-gray-200 mb-0.5"><div className="w-5 h-full rounded-full bg-blue-400" /></div>
            <span className="text-[#8C7E77]">Protein</span>
          </div>
          <div className="text-center">
            <div className="w-8 h-1.5 rounded-full bg-gray-200 mb-0.5"><div className="w-6 h-full rounded-full bg-yellow-400" /></div>
            <span className="text-[#8C7E77]">Carbs</span>
          </div>
          <div className="text-center">
            <div className="w-8 h-1.5 rounded-full bg-gray-200 mb-0.5"><div className="w-3 h-full rounded-full bg-pink-400" /></div>
            <span className="text-[#8C7E77]">Fat</span>
          </div>
        </div>
      </div>

      {/* Today's meals */}
      <div className="px-4 mt-1">
        <div className="text-[9px] font-semibold text-[#3D281B] mb-2">Today&apos;s meals</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-white rounded-xl p-2 shadow-sm">
            <img src="https://images.unsplash.com/photo-1747292718361-c838a9968ec7?w=80&h=80&fit=crop" alt="meal" className="w-8 h-8 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <div className="text-[8px] font-semibold text-[#3D281B] truncate">Grilled Chicken Salad</div>
              <div className="text-[7px] text-[#8C7E77]">Lunch &middot; 420 kcal</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-xl p-2 shadow-sm">
            <img src="https://images.unsplash.com/photo-1761315600943-d8a5bb0c499f?w=80&h=80&fit=crop" alt="meal" className="w-8 h-8 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <div className="text-[8px] font-semibold text-[#3D281B] truncate">Avocado Toast</div>
              <div className="text-[7px] text-[#8C7E77]">Breakfast &middot; 280 kcal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav hint */}
      <div className="mt-auto px-4 py-3 flex justify-around text-[#8C7E77]">
        <div className="w-5 h-5 rounded-full bg-[#FF7A45]/10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#FF7A45]" />
        </div>
        <div className="w-5 h-5 rounded-full bg-gray-100" />
        <div className="w-5 h-5 rounded-full bg-gray-100" />
      </div>
    </div>
  );
}

function HeroPhoneScreen2() {
  return (
    <div className="h-[380px] md:h-[440px] bg-white flex flex-col text-left">
      {/* Header */}
      <div className="px-4 pt-6 pb-3">
        <div className="text-[10px] font-semibold text-[#3D281B]">Scan plan is ready!</div>
        <div className="text-[7px] text-[#8C7E77] mt-0.5">Personalized for your goals</div>
      </div>

      {/* Meal card */}
      <div className="px-4">
        <div className="bg-[#FFF0E6] rounded-xl p-3 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <img src="https://images.unsplash.com/photo-1747292718361-c838a9968ec7?w=80&h=80&fit=crop" alt="food" className="w-10 h-10 rounded-lg object-cover" />
            <div>
              <div className="text-[9px] font-semibold text-[#3D281B]">Quinoa Bowl</div>
              <div className="text-[7px] text-[#8C7E77]">Suggested for dinner</div>
            </div>
          </div>
          <div className="flex gap-2 text-[7px]">
            <span className="px-2 py-0.5 bg-white rounded-full text-[#FF7A45] font-medium">380 kcal</span>
            <span className="px-2 py-0.5 bg-white rounded-full text-[#8C7E77]">High Protein</span>
          </div>
        </div>

        {/* Nutrition bars */}
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-[7px] mb-0.5">
              <span className="text-[#3D281B] font-medium">Calories</span>
              <span className="text-[#FF7A45] font-semibold">65%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full">
              <div className="w-[65%] h-full bg-[#FF7A45] rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[7px] mb-0.5">
              <span className="text-[#3D281B] font-medium">Protein</span>
              <span className="text-blue-500 font-semibold">45%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full">
              <div className="w-[45%] h-full bg-blue-400 rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[7px] mb-0.5">
              <span className="text-[#3D281B] font-medium">Carbs</span>
              <span className="text-yellow-500 font-semibold">72%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full">
              <div className="w-[72%] h-full bg-yellow-400 rounded-full" />
            </div>
          </div>
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

        {/* Right - Phone mockups */}
        <div className="flex-1 flex justify-center items-center relative animate-fade-in-up animate-delay-200" style={{ opacity: 0 }}>
          {/* Soft glow behind phones */}
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#FFF0E6] blur-2xl pointer-events-none" />

          <div className="relative flex items-start gap-0">
            <PhoneMockup tilt="-rotate-3" className="z-10 relative -mr-8">
              <HeroPhoneScreen1 />
            </PhoneMockup>
            <PhoneMockup tilt="rotate-6" className="z-20 relative mt-12">
              <HeroPhoneScreen2 />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
