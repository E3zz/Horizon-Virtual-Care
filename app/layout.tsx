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
  title: "Horizon Virtual Care | Virtual Nephrology Care for Your Community",
  description:
    "Bringing dedicated kidney care specialists and virtual telehealth solutions to underserved communities, ensuring expert nephrology care is kept local.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Horizon Virtual Care | Virtual Nephrology Care for Your Community",
    description:
      "Bringing dedicated kidney care specialists and virtual telehealth solutions to underserved communities, ensuring expert nephrology care is kept local.",
    url: "/",
    siteName: "Horizon Virtual Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Virtual Care | Virtual Nephrology Care for Your Community",
    description:
      "Bringing dedicated kidney care specialists and virtual telehealth solutions to underserved communities, ensuring expert nephrology care is kept local.",
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
