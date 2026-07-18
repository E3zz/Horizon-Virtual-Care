import { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import MissionSection from "@/components/sections/home/MissionSection";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import PartnersStrip from "@/components/sections/home/PartnersStrip";
import TelehealthExplanation from "@/components/sections/home/TelehealthExplanation";
import WhyHorizon from "@/components/sections/home/WhyHorizon";
import SpecialtyNetwork from "@/components/sections/home/SpecialtyNetwork";
import ContactFormSection from "@/components/sections/home/ContactFormSection";

export const metadata: Metadata = {
  title: "Horizon Virtual Care | Virtual Nephrology & Kidney Care Specialist",
  description:
    "Horizon Virtual Care delivers board-certified nephrology specialists and virtual clinical programs to rural clinics, community hospitals, and correctional healthcare networks.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Horizon Virtual Care | Virtual Nephrology & Kidney Care Specialist",
    description:
      "Horizon Virtual Care delivers board-certified nephrology specialists and virtual clinical programs to rural clinics, community hospitals, and correctional healthcare networks.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Horizon Virtual Care",
    "url": "https://horizonvirtualcare.com",
    "logo": "https://horizonvirtualcare.com/favicon.png",
    "description": "Horizon Virtual Care delivers board-certified nephrology specialist services and virtual care solutions to rural clinics and community hospitals.",
    "knowsAbout": [
      "Nephrology",
      "Kidney Disease Management",
      "Hypertension Management",
      "Telehealth",
      "Virtual Specialist Consultation"
    ],
    "medicalSpecialty": "Nephrology"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <PartnersStrip />
      <MissionSection />
      <ServicesOverview />
      <TelehealthExplanation />
      <WhyHorizon />
      <SpecialtyNetwork />
      <ContactFormSection />
    </>
  );
}
