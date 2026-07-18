import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://horizonvirtualcare.com"),
  title: "Horizon Virtual Care | Virtual Nephrology & Kidney Care Specialist",
  description:
    "Horizon Virtual Care delivers board-certified nephrology specialists and virtual clinical programs to rural clinics, community hospitals, and correctional healthcare networks.",
  keywords: [
    "Virtual Nephrology",
    "TeleNeph",
    "Kidney Care Specialist",
    "Rural Telehealth Nephrology",
    "Inpatient Renal Consults",
    "Dialysis Support Programs",
    "Community Hospital Telehealth",
    "Horizon Virtual Care",
    "Chronic Kidney Disease Management",
    "Hypertension Specialist"
  ],
  authors: [{ name: "Horizon Virtual Care" }],
  creator: "Horizon Virtual Care",
  publisher: "Horizon Virtual Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Horizon Virtual Care | Virtual Nephrology & Kidney Care Specialist",
    description:
      "Horizon Virtual Care delivers board-certified nephrology specialists and virtual clinical programs to rural clinics, community hospitals, and correctional healthcare networks.",
    url: "/",
    siteName: "Horizon Virtual Care",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Horizon Virtual Care Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Virtual Care | Virtual Nephrology & Kidney Care Specialist",
    description:
      "Horizon Virtual Care delivers board-certified nephrology specialists and virtual clinical programs to rural clinics, community hospitals, and correctional healthcare networks.",
    images: ["/images/logo.png"],
    creator: "@HorizonVirtualCare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-body">
        {children}
      </body>
    </html>
  );
}
