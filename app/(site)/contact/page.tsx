import { Metadata } from "next";
import ContactPageContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Horizon Virtual Care Integration",
  description:
    "Get in touch with Horizon Virtual Care. Request a virtual clinical demo, consult on healthcare partnerships, or reach our provider onboarding team.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Horizon Virtual Care Integration",
    description:
      "Get in touch with Horizon Virtual Care. Request a virtual clinical demo, consult on healthcare partnerships, or reach our provider onboarding team.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
