import Hero from "@/components/sections/home/Hero";
import MissionSection from "@/components/sections/home/MissionSection";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import PartnersStrip from "@/components/sections/home/PartnersStrip";
import TelehealthExplanation from "@/components/sections/home/TelehealthExplanation";
import WhyHorizon from "@/components/sections/home/WhyHorizon";
import SpecialtyNetwork from "@/components/sections/home/SpecialtyNetwork";
import ContactFormSection from "@/components/sections/home/ContactFormSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <ServicesOverview />
      <PartnersStrip />
      <TelehealthExplanation />
      <WhyHorizon />
      <SpecialtyNetwork />
      <ContactFormSection />
    </>
  );
}
