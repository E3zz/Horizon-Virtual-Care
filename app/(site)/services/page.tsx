import { Metadata } from "next";
import ServicesPageContent from "./services-content";

export const metadata: Metadata = {
  title: "Clinical Specialty Services | Virtual Nephrology & TeleNeph",
  description:
    "Explore Horizon's virtual kidney care programs, including outpatient TeleNeph, acute inpatient consults, post-discharge dialysis support, and clinical roadmap pipelines.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Clinical Specialty Services | Virtual Nephrology & TeleNeph",
    description:
      "Explore Horizon's virtual kidney care programs, including outpatient TeleNeph, acute inpatient consults, post-discharge dialysis support, and clinical roadmap pipelines.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
