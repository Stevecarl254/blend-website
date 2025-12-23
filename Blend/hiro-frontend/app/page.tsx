import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import InstructionSection from "@/components/InstructionSection";
import VisionSection from "@/components/VisionSection";
import WhyHiroSection from "@/components/WhyHeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection/>
      <InstructionSection/>
      <VisionSection/>
      <WhyHiroSection/>
      <TestimonialsSection/>
      <BookingSection/>
      
    </main>
  );
}

