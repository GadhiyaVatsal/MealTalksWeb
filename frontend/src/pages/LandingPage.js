import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HabitsSection from "@/components/landing/HabitsSection";
import AISection from "@/components/landing/AISection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div data-testid="landing-page" className="min-h-screen bg-white overflow-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HabitsSection />
      <AISection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
