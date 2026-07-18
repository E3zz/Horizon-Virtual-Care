import { Metadata } from "next";
import AboutPageContent from "./about-content";

export const metadata: Metadata = {
  title: "Who We Are | Horizon Virtual Care",
  description:
    "Learn about Horizon's mission to bridge the distance in kidney care. Meet our board-certified clinical leadership and discover our core healthcare values.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Who We Are | Horizon Virtual Care",
    description:
      "Learn about Horizon's mission to bridge the distance in kidney care. Meet our board-certified clinical leadership and discover our core healthcare values.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
