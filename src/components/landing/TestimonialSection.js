export default function TestimonialSection() {
  return (
    <section data-testid="testimonial-section" className="relative py-16 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Orange gradient card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFB780] via-[#FF9E6B] to-[#FF8C5C] p-8 md:p-12">
          {/* Dot pattern decoration */}
          <div className="absolute top-4 right-4 w-20 h-20 dot-pattern opacity-20 pointer-events-none" />
          <div className="absolute bottom-4 right-8 w-16 h-16 dot-pattern opacity-15 pointer-events-none" />

          {/* Section heading */}
          <h2
            data-testid="testimonial-heading"
            className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-white text-center mb-10"
          >
            What our customer are saying in beta testing
          </h2>

          {/* Testimonial content */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div
                data-testid="testimonial-avatar"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white/30 shadow-lg bg-white flex items-center justify-center overflow-hidden"
              >
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <circle cx="60" cy="60" r="60" fill="#FFE0CC"/>
                  <circle cx="60" cy="45" r="20" fill="#D4A574"/>
                  <path d="M60 25c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z" fill="#D4A574"/>
                  <ellipse cx="60" cy="95" rx="35" ry="25" fill="#FF7A45"/>
                  <path d="M40 30c0-11 9-20 20-20s20 9 20 20c0 3-4 5-8 6-3 1-7 1-12 1s-9 0-12-1c-4-1-8-3-8-6z" fill="#2D1B0E"/>
                  <circle cx="52" cy="42" r="2.5" fill="#2D1B0E"/>
                  <circle cx="68" cy="42" r="2.5" fill="#2D1B0E"/>
                  <path d="M55 52c0 0 2 4 5 4s5-4 5-4" stroke="#2D1B0E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <circle cx="42" cy="20" r="8" fill="#2D1B0E"/>
                  <circle cx="78" cy="20" r="8" fill="#2D1B0E"/>
                  <rect x="42" y="12" width="36" height="16" rx="4" fill="#2D1B0E"/>
                </svg>
              </div>
              <div className="text-center mt-3">
                <div data-testid="testimonial-name" className="text-sm font-bold text-white">Priya M</div>
                <div data-testid="testimonial-role" className="text-xs text-white/80">Founder Circle</div>
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1">
              <blockquote
                data-testid="testimonial-quote"
                className="text-base md:text-lg text-white/95 leading-relaxed font-medium italic"
              >
                &ldquo;Logging food has never felt this easy. I just describe what I ate and the AI handles the rest — no more searching through endless food lists.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
