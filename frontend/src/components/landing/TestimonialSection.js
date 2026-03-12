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
              <img
                data-testid="testimonial-avatar"
                src="https://images.unsplash.com/photo-1734764627105-b5ff03f02b2d?w=200&h=200&fit=crop&crop=face"
                alt="Priya M"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white/30 shadow-lg"
              />
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
