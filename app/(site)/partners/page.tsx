import { Metadata } from "next";
import PartnersPageContent from "./partners-content";

export const metadata: Metadata = {
  title: "Who We Work With | Healthcare System Partnerships",
  description:
    "Horizon partners with critical access community hospitals, rural health systems, correctional facilities, and regional clinics to deliver virtual kidney care.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Who We Work With | Healthcare System Partnerships",
    description:
      "Horizon partners with critical access community hospitals, rural health systems, correctional facilities, and regional clinics to deliver virtual kidney care.",
    url: "/partners",
    type: "website",
  },
};

export default function PartnersPage() {
  return <PartnersPageContent />;
}
