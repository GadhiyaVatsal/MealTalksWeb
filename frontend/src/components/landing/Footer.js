import { AppStoreButtons } from "@/components/landing/AppStoreButtons";

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-white border-t border-[#EBE0DA]">
      {/* Dot pattern decoration */}
      <div className="absolute top-4 right-4 w-24 h-24 dot-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand column */}
          <div>
            <a href="/" className="font-['Playfair_Display'] text-2xl font-bold text-[#FF7A45] block mb-3">
              Meal talks
            </a>
            <p className="text-sm text-[#8C7E77] leading-relaxed mb-5 max-w-xs">
              Smart food tracking that feels like a conversation.
            </p>
            <AppStoreButtons />
          </div>

          {/* Company column */}
          <div>
            <h4 data-testid="footer-company-heading" className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#3D281B] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Testimonials", "Apps"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    data-testid={`footer-link-${link.toLowerCase()}`}
                    className="text-sm text-[#8C7E77] hover:text-[#FF7A45] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 data-testid="footer-help-heading" className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#3D281B] mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {["Help center", "Contact support", "Instructions", "How it works"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    data-testid={`footer-link-${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-sm text-[#8C7E77] hover:text-[#FF7A45] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
