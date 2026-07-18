import { Metadata } from "next";
import WhatWeDoPageContent from "./what-we-do-content";

export const metadata: Metadata = {
  title: "How It Works | Horizon Virtual Care Consultation Model",
  description:
    "See how our virtual nephrology consulting platform works. Learn about our seamless EHR integration, clinical carts, and step-by-step specialist consultation process.",
  alternates: {
    canonical: "/what-we-do",
  },
  openGraph: {
    title: "How It Works | Horizon Virtual Care Consultation Model",
    description:
      "See how our virtual nephrology consulting platform works. Learn about our seamless EHR integration, clinical carts, and step-by-step specialist consultation process.",
    url: "/what-we-do",
    type: "website",
  },
};

export default function WhatWeDoPage() {
  return <WhatWeDoPageContent />;
}
