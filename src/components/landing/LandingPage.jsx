// # LandingPage — Komposisi lengkap beranda Mbah AI (Versi Aman & Anti-Freeze)
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import PillarSection from "./PillarSection";
import TestimonialSection from "./TestimonialSection";
import Footer from "./Footer";

export default function LandingPage({ onStartChat, onNavigate, activePage }) {
  return (
    <div className="min-h-screen bg-white selection:bg-amber-100 selection:text-amber-900">
      {/* # Navigation Bar */}
      <Navbar
        onStartChat={onStartChat}
        onNavigate={onNavigate}
        activePage={activePage}
      />

      {/* # Hero Section */}
      <HeroSection onStartChat={onStartChat} />

      {/* # Pillar Section (Tiga Pilar Ketajaman Penasihat Mbah AI) */}
      <PillarSection />

      {/* # Testimonial Section */}
      <TestimonialSection onStartChat={onStartChat} />

      {/* # Footer */}
      <Footer />
    </div>
  );
}
