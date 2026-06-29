import { ContactSection } from "@/components/landing/contact-section";
import { DestinationsSection } from "@/components/landing/destinations-section";
import { FeaturesStrip } from "@/components/landing/features-strip";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/navbar";
import { ServicesSection } from "@/components/landing/services-section";
import { StatsBar } from "@/components/landing/stats-bar";
import { TeamSection } from "@/components/landing/team-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background">
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <ServicesSection />
        <FeaturesStrip />
        <DestinationsSection />
        <StatsBar />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
