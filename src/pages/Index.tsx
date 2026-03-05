import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModalidadesSection from "@/components/ModalidadesSection";
import AreasSection from "@/components/AreasSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ModalidadesSection />
      <AreasSection />
      <TimelineSection />
      <ContactSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
