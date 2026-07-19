"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, ShieldAlert, Users, Landmark } from "lucide-react";
import Image from "next/image";
import PageHeader from "@/components/sections/shared/PageHeader";
import CtaBand from "@/components/sections/shared/CtaBand";

const PARTNER_TABS = [
  {
    id: "rural",
    label: "Rural Hospitals",
    icon: Landmark,
    image: "/images/rural_hospital.png",
    description:
      "Critical Access Hospitals (CAHs) and rural community medical centers face intense pressure to maintain high-quality care amidst critical doctor shortages.",
    challenges: [
      "Frequent, high-cost patient transfers to metro health centers",
      "Inability to admit or retain patients with acute kidney injury (AKI)",
      "High burden on local hospitalists managing complex dialysis patients",
      "Shortage of board-certified nephrology specialists willing to relocate",
    ],
    solutions: [
      "24/7 on-call virtual consults with certified nephrologists",
      "Support to retain patients locally, boosting facility census and revenue",
      "Direct phone and video collaboration lines for local clinical staff",
      "Guidance to build a sustainable local kidney care program",
    ],
  },
  {
    id: "systems",
    label: "Health Systems",
    icon: Users,
    image: "/images/health_system.png",
    description:
      "Large regional health networks need to optimize resource allocation, standardize patient protocols, and manage capacity constraints across multiple facilities.",
    challenges: [
      "Inflated length of stay (LOS) due to delayed specialist reviews",
      "Inconsistent nephrology coverage across subsidiary hospitals",
      "Lack of standardized clinical protocols for CKD and AKI",
      "Physician burnout among current staff due to excessive call shifts",
    ],
    solutions: [
      "Rapid-response virtual rounding to accelerate safe discharges",
      "Centralized specialty coverage across the entire hospital system",
      "Unified, evidence-based care guidelines integrated into clinical operations",
      "Gap coverage support to relieve local physicians and reduce turn-over",
    ],
  },
  {
    id: "corrections",
    label: "Correctional Facilities",
    icon: ShieldAlert,
    image: "/images/correctional_medical.png",
    description:
      "State, federal, and local detention centers must provide timely specialty medical care while keeping security protocols and transportation budgets in check.",
    challenges: [
      "High security risks during patient transport to off-site clinics",
      "Significant transportation and deputy overtime expenditures",
      "Delays in obtaining clinical consults leading to emergency events",
      "Lack of specialized onsite medical equipment for chronic kidney care",
    ],
    solutions: [
      "100% onsite telehealth consultations, eliminating inmate transport",
      "Substantial budgetary savings by reducing external security details",
      "Immediate triage and prompt routine management inside the walls",
      "Cooperative treatment design matching correctional medical staff",
    ],
  },
];

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState("rural");
  const currentTab = PARTNER_TABS.find((tab) => tab.id === activeTab) || PARTNER_TABS[0];
  const TabIcon = currentTab.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Who We Work With | Healthcare System Partnerships",
    "description": "Horizon Virtual Care partners with Critical Access Hospitals (CAHs), health systems, and correctional networks to deliver certified tele-nephrology services.",
    "publisher": {
      "@type": "MedicalBusiness",
      "name": "Horizon Virtual Care",
      "url": "https://horizonvirtualcare.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Who We Work With"
        title="Tailored Partner Solutions"
        description="We align with hospitals, health systems, and correctional environments to deliver reliable virtual specialty care where it is needed most."
        bgImage="/images/partners_hero_bg.png"
      />

      {/* Tabs Selector & Segment Accordion */}
      <section className="w-full py-20 lg:py-24 bg-white flex justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full space-y-12">
          {/* Tabs Selector Bar */}
          <div className="flex flex-wrap justify-center gap-3 border-b border-primary/10 pb-8">
            {PARTNER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-heading font-semibold text-sm transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:shadow-md ${
                    isActive
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-cream text-primary/70 hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Tab Info Description & Image */}
                <div className="lg:col-span-4 space-y-6 group">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-primary/5 bg-cream">
                    <Image
                      src={currentTab.image}
                      alt={currentTab.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/5 rounded-2xl text-accent border border-primary/10 group-hover:scale-110 transition-transform">
                      <TabIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-2xl font-black text-primary tracking-tight">
                      {currentTab.label}
                    </h3>
                  </div>
                  <p className="font-body text-base text-charcoal/80 leading-relaxed">
                    {currentTab.description}
                  </p>
                </div>

                {/* Challenges & Solutions Columns */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Target Challenges */}
                  <div className="bg-white border border-primary/10 p-8 sm:p-10 rounded-3xl space-y-6 shadow-[0_4px_20px_-4px_rgba(18,60,92,0.05)] hover:shadow-[0_20px_40px_-8px_rgba(18,60,92,0.1)] hover:-translate-y-1.5 hover:border-accent/15 transition-all duration-500">
                    <div className="flex items-center gap-2.5 text-accent">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <h4 className="font-heading text-lg font-bold text-primary tracking-tight">
                        Target Challenges
                      </h4>
                    </div>
                    <ul className="space-y-4 font-body text-sm sm:text-base text-charcoal/85 leading-relaxed">
                      {currentTab.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0 animate-pulse" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Horizon Solutions */}
                  <div className="bg-white border border-primary/10 p-8 sm:p-10 rounded-3xl space-y-6 shadow-[0_4px_20px_-4px_rgba(18,60,92,0.05)] hover:shadow-[0_20px_40px_-8px_rgba(18,60,92,0.1)] hover:-translate-y-1.5 hover:border-accent/15 transition-all duration-500">
                    <div className="flex items-center gap-2.5 text-primary">
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      <h4 className="font-heading text-lg font-bold text-primary tracking-tight">
                        Horizon Solution
                      </h4>
                    </div>
                    <ul className="space-y-4 font-body text-sm sm:text-base text-charcoal/85 leading-relaxed">
                      {currentTab.solutions.map((sol, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0 mt-1" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Trust Indicator Band */}
      <section className="w-full py-16 bg-cream border-y border-primary/5 flex justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h3 className="font-heading text-sm font-semibold text-primary/60 uppercase tracking-widest">
            Confidentiality & Trusted Coverage
          </h3>
          <p className="font-body text-sm text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            To respect client confidentiality, we do not publish partner names. However, Horizon proudly supports community health facilities ranging from 25-bed Critical Access Hospitals (CAHs) to multi-state regional health systems across Missouri and Illinois.
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand />
    </>
  );
}
