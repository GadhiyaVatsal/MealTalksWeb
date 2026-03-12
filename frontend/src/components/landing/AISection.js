import PhoneMockup from "@/components/landing/PhoneMockup";

function ChatPhoneScreen() {
  return (
    <div className="h-[420px] md:h-[480px] bg-white flex flex-col text-left">
      {/* Header */}
      <div className="bg-[#FF7A45] px-4 pt-6 pb-3 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-bold text-white">Meal Talks AI</div>
          <div className="text-[7px] text-white/70">Online</div>
        </div>
      </div>

      <div className="flex-1 px-3 py-3 space-y-3 overflow-hidden">
        {/* AI message */}
        <div className="flex gap-2 items-start">
          <div className="w-5 h-5 rounded-full bg-[#FF7A45] flex-shrink-0 flex items-center justify-center mt-0.5">
            <span className="text-[6px] text-white font-bold">AI</span>
          </div>
          <div className="bg-[#F9F3EF] rounded-xl rounded-tl-sm p-2.5 max-w-[80%]">
            <p className="text-[8px] text-[#3D281B] leading-relaxed">
              Hi! Welcome back. Let&apos;s log your meal. What did you have?
            </p>
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-[#FF7A45] rounded-xl rounded-tr-sm p-2.5 max-w-[80%]">
            <p className="text-[8px] text-white leading-relaxed">
              I had a chicken biryani with raita for lunch, about a regular plate size
            </p>
          </div>
        </div>

        {/* AI response with analysis */}
        <div className="flex gap-2 items-start">
          <div className="w-5 h-5 rounded-full bg-[#FF7A45] flex-shrink-0 flex items-center justify-center mt-0.5">
            <span className="text-[6px] text-white font-bold">AI</span>
          </div>
          <div className="bg-[#F9F3EF] rounded-xl rounded-tl-sm p-2.5 max-w-[85%]">
            <p className="text-[8px] text-[#3D281B] leading-relaxed mb-2">
              Got it! Here&apos;s what I estimated for your chicken biryani + raita:
            </p>
            <div className="bg-white rounded-lg p-2 space-y-1.5">
              <div className="flex justify-between text-[7px]">
                <span className="text-[#8C7E77]">Calories</span>
                <span className="font-semibold text-[#3D281B]">550 kcal</span>
              </div>
              <div className="flex justify-between text-[7px]">
                <span className="text-[#8C7E77]">Protein</span>
                <span className="font-semibold text-[#3D281B]">28g</span>
              </div>
              <div className="flex justify-between text-[7px]">
                <span className="text-[#8C7E77]">Carbs</span>
                <span className="font-semibold text-[#3D281B]">65g</span>
              </div>
              <div className="flex justify-between text-[7px]">
                <span className="text-[#8C7E77]">Fat</span>
                <span className="font-semibold text-[#3D281B]">18g</span>
              </div>
            </div>
            <p className="text-[7px] text-[#FF7A45] font-medium mt-1.5">
              Tip: Try adding a green salad next time for more fiber!
            </p>
          </div>
        </div>

        {/* User reply */}
        <div className="flex justify-end">
          <div className="bg-[#FF7A45] rounded-xl rounded-tr-sm p-2.5 max-w-[80%]">
            <p className="text-[8px] text-white leading-relaxed">
              Thanks! Can you also log a mango lassi?
            </p>
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="px-3 py-2 border-t border-gray-100">
        <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-2">
          <div className="w-4 h-4 rounded-full bg-gray-200" />
          <span className="text-[8px] text-[#8C7E77] flex-1">Type a message...</span>
          <div className="w-5 h-5 rounded-full bg-[#FF7A45] flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AISection() {
  return (
    <section data-testid="ai-section" className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F9F3EF]/30 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#FFF0E6]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left - Phone mockup */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#FFF0E6] blur-2xl pointer-events-none" />
          <PhoneMockup tilt="-rotate-3" className="relative z-10">
            <ChatPhoneScreen />
          </PhoneMockup>
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
