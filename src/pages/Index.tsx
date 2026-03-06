import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModalidadesSection from "@/components/ModalidadesSection";
import AreasSection from "@/components/AreasSection";
import TimelineSection from "@/components/TimelineSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  StructuredData,
  createLocalBusinessSchema,
  createPhysicianSchema,
  createMedicalBusinessSchema,
} from "@/components/StructuredData";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  // SEO metadata for homepage
  useSEO({
    title: "Médico em Caruaru e Limoeiro - Clínica Geral e Medicina de Família | Dr. Edvaldo",
    description:
      "Médico de Família em Caruaru e Limoeiro. Atendimento especializado em clínica geral, medicina de família e comunitária. Consultas presenciais e teleconsultas com Dr. Edvaldo Jerônimo.",
    keywords:
      "médico caruaru, médico limoeiro, clínica geral caruaru, médico de família, medicina de família caruaru, atendimento médico caruaru, consultório médico caruaru, teleconsulta caruaru, médico em caruaru",
    ogTitle:
      "Médico de Família em Caruaru e Limoeiro - Dr. Edvaldo Jerônimo",
    ogDescription:
      "Consultas especializadas em clínica geral, medicina de família e comunitária em Caruaru e Limoeiro. Atendimento presencial e online.",
    twitterTitle:
      "Médico de Família em Caruaru e Limoeiro",
    twitterDescription:
      "Médico especialista em clínica geral e medicina de família. Consultas presenciais e teleconsultas em Caruaru e Limoeiro.",
  });

  // Local Business Schema
  const localBusinessSchema = createLocalBusinessSchema({
    name: "Dr. Edvaldo Jerônimo da Silva Júnior",
    description:
      "Médico de Família especialista em clínica geral e medicina comunitária em Caruaru e Limoeiro",
    telephone: "+55 81 99287-1707",
    address: "Rua Padre Antônio Tomaz, nº 91 - Mauricio de Nassau",
    city: "Caruaru",
    state: "PE",
    postalCode: "55000-000",
    latitude: -8.2867,
    longitude: -35.9779,
    image: "https://storage.googleapis.com/...",
    url: "https://edvaldojeronimo.com/",
  });

  // Physician Schema
  const physicianSchema = createPhysicianSchema({
    name: "Dr. Edvaldo Jerônimo da Silva Júnior",
    description:
      "Médico de Família especialista em clínica geral e medicina comunitária",
    telephone: "+55 81 99287-1707",
    address: "Rua Padre Antônio Tomaz, nº 91 - Mauricio de Nassau",
    city: "Caruaru",
    state: "PE",
    postalCode: "55000-000",
    image: "https://storage.googleapis.com/...",
    url: "https://edvaldojeronimo.com/",
  });

  // Medical Business Schema
  const medicalBusinessSchema = createMedicalBusinessSchema();

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dr. Edvaldo Jerônimo",
    url: "https://edvaldojeronimo.com/",
    logo: "https://storage.googleapis.com/...",
    sameAs: [
      "https://www.facebook.com/edvaldo",
      "https://www.instagram.com/edvaldo",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Padre Antônio Tomaz, nº 91 - Mauricio de Nassau",
      addressLocality: "Caruaru",
      addressRegion: "PE",
      postalCode: "55000-000",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Agendamento",
      telephone: "+55 81 99287-1707",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data Components */}
      <StructuredData schema={localBusinessSchema} />
      <StructuredData schema={physicianSchema} />
      <StructuredData schema={medicalBusinessSchema} />
      <StructuredData schema={organizationSchema} />

      <Navbar />
      <HeroSection />
      <AboutSection />
      <ModalidadesSection />
      <AreasSection />
      <TimelineSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
