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
  const jsonLd = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is telehealth and how does a virtual nephrology consult work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Telehealth utilizes encrypted digital tele-communications to bridge geographic barriers. During a Horizon virtual consult, our board-certified nephrologist connects via a secure, high-definition camera terminal placed bedside. The local attending nurse acts as the specialist's physical hands (operating the digital stethoscope, checking vitals, and adjusting camera angles) while the remote physician assesses the patient face-to-face and reviews chart data in real-time."
          }
        },
        {
          "@type": "Question",
          "name": "What are the primary benefits of virtual specialty care for rural communities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Telehealth provides three core benefits: it eliminates exhausting and costly travel burdens for patients; it empowers local clinicians with on-demand specialist support; and it allows community hospitals to keep care local, retaining essential census and ancillary diagnostic revenue (such as labs and imaging) that would otherwise be lost to transfers."
          }
        },
        {
          "@type": "Question",
          "name": "How does Horizon integrate with our hospital's Electronic Health Records (EHR)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our specialists operate directly within your existing technological workflows. We credential our nephrologists on your local EHR systems so that all consult notes, order prescriptions, and follow-up directives are documented directly in the patient's primary record, keeping local and remote care teams fully aligned."
          }
        },
        {
          "@type": "Question",
          "name": "Is the video connection secure and compliant with HIPAA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Horizon Virtual Care uses enterprise-grade end-to-end encryption for all video and data transmissions, fully compliant with HIPAA, HITECH, and SOC2 safety guidelines to ensure complete patient confidentiality."
          }
        },
        {
          "@type": "Question",
          "name": "How does a community hospital handle billing for virtual consultations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We structure our programs to align with standard Medicare, Medicaid, and private payer telehealth reimbursement guidelines. Depending on the custom program design (e.g. outpatient clinic vs. inpatient consult service), we coordinate billing details directly with your billing department to ensure clean claims submission."
          }
        }
      ]
    }
  ];

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
