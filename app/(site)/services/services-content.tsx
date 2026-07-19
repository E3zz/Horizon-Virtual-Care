"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  CheckCircle2, 
  RefreshCw, 
  FileText, 
  Activity, 
  Clock, 
  Users,
  ShieldAlert,
  ArrowRight,
  HeartPulse,
  Bone,
  Brain,
  Hospital,
  Hourglass
} from "lucide-react";
import PageHeader from "@/components/sections/shared/PageHeader";
import CtaBand from "@/components/sections/shared/CtaBand";
import { cn } from "@/lib/utils";

const NEPHROLOGY_PILLARS = [
  {
    id: "ckd-management",
    title: "Chronic Kidney Disease Management",
    eyebrow: "Longitudinal Care",
    icon: Heart,
    description: "Managing progressive renal impairment requires longitudinal, proactive care to delay disease advancement and prevent dialysis dependency. Our board-certified nephrologists partner with your local primary care network to implement standardized, evidence-based guidelines for Stage 3–5 CKD. We provide structured dietary guidance, precise blood pressure optimization, and medication management directly via secure virtual consults. When necessary, we coordinate pre-transplant evaluations early, ensuring patients are placed on regional donor registries without having to travel for routine checkups.",
    whoFor: "Patients with progressive eGFR decline or complex hypertensive kidney conditions who require routine specialist visits.",
    image: "/images/home_health.png",
    imageAlt: "Doctor performing chronic kidney disease telehealth consultation with a rural patient",
    alignRight: true,
  },
  {
    id: "dialysis-support",
    title: "Dialysis Support & Coordination",
    eyebrow: "Clinical Supervision",
    icon: RefreshCw,
    description: "Sustaining a local outpatient dialysis clinic or acute inpatient dialysis program is clinically complex and resource-intensive. Horizon provides dedicated virtual dialysis directorship and management to support local clinical teams. Our remote specialists manage vascular access planning, design individualized dialysis prescriptions, and review laboratory results weekly. We collaborate with on-site dialysis technicians and nursing leads to handle emergencies and ensure strict compliance with federal ESRD quality standards.",
    stat: "99.8%",
    statLabel: "Uptime and clinical compliance rating across our partner outpatient dialysis units.",
    image: "/images/dialysis_support.png",
    imageAlt: "Modern dialysis equipment and medical cart in partner facility clinic",
    alignRight: false,
  },
  {
    id: "aki-consults",
    title: "Acute Kidney Injury Consults",
    eyebrow: "Critical Care Response",
    icon: Activity,
    description: "When critical care patients experience sudden kidney failure or complex electrolyte disturbances, immediate specialist intervention is critical. Horizon offers on-demand virtual consultations for AKI, helping your ICU team stabilize patients and manage continuous renal replacement therapy (CRRT). Our nephrologists are available within two hours to perform diagnostic reviews, prescribe therapy parameters, and coordinate with attending hospitalists. By keeping high-acuity renal patients in your local ICU, you avoid high-risk medical transfers and preserve essential hospital revenue.",
    badge: "Average 2-Hour Response Time for Inpatient Consults",
    image: "/images/aki_consultation.png",
    imageAlt: "Critical care ICU nephrology consult showing patient and remote nephrologist",
    alignRight: true,
  },
  {
    id: "medical-directorship",
    title: "Medical Directorship",
    eyebrow: "Governance & Compliance",
    icon: FileText,
    description: "Navigating state regulations and maintaining Joint Commission readiness requires dedicated clinical leadership. Horizon provides formal Medical Directorship to establish evidence-based protocols, lead clinical quality reviews, and coordinate Quality Assessment and Performance Improvement (QAPI) programs. Our directors join your hospital committees remotely, review performance metrics, and conduct educational sessions for nursing staff. This comprehensive leadership structure ensures your kidney care services meet or exceed all clinical safety and regulatory standards.",
    features: [
      { title: "QAPI Protocols", desc: "Implement and track local clinical quality improvement initiatives." },
      { title: "Joint Commission Audits", desc: "Mock audit support and clinical preparation for accreditation." },
      { title: "Clinical Education", desc: "Regular workshops and remote training for nursing teams." },
    ],
    alignRight: false,
  },
  {
    id: "gap-coverage",
    title: "Physician Gap Coverage",
    eyebrow: "Staffing Resilience",
    icon: Clock,
    description: "Locum tenens recruitment is expensive, and sudden staffing vacancies can force community hospitals to shut down specialized clinical lines. Horizon offers flexible virtual gap coverage and vacation relief to ensure seamless clinical continuity for your renal patients. Our nephrologists step in to cover weekends, holidays, or extended leaves, integrating directly into your hospital's scheduling and EHR systems. We provide reliable 24/7 on-call coverage, ensuring local attending doctors always have an expert partner during staffing shortages.",
    benefit: "Keeps local clinical lines 100% active, preventing transfer of high-acuity admissions and ensuring reliable hospitalist support.",
    image: "/images/rehab_facility.png",
    imageAlt: "Medical grade telehealth cart in virtual consult session",
    alignRight: true,
  },
  {
    id: "outpatient-support",
    title: "Outpatient Nephrology Clinic Support",
    eyebrow: "Community Transition",
    icon: Users,
    description: "After-discharge care gaps are a leading cause of preventable readmissions for kidney patients. We establish structured virtual outpatient clinics that allow post-discharge patients to follow up with their nephrologist close to home. Horizon coordinates directly with your local labs and primary care providers, ensuring clinical notes and lab results are shared seamlessly. This integrated follow-up model ensures long-term stability, reduces readmission rates, and improves the overall patient experience in rural areas.",
    features: [
      { title: "Local Lab Coordination", desc: "Routine blood and urine panels completed at local labs, reviewed remotely." },
      { title: "Structured Virtual Visits", desc: "Post-discharge check-ins scheduled within 7-14 days to prevent readmissions." },
      { title: "Primary Care Handoff", desc: "Full consultation reports integrated directly into your local EHR systems." },
    ],
    alignRight: false,
  },
];

const COMING_SOON_SERVICES = [
  {
    name: "Cardiology",
    desc: "Expanding to Cardiology: virtual cardiovascular consults coming soon.",
    icon: HeartPulse,
  },
  {
    name: "Rheumatology",
    desc: "Expanding to Rheumatology: specialized chronic disease care coming soon.",
    icon: Bone,
  },
  {
    name: "Neurology",
    desc: "Expanding to Neurology: remote neurological condition support coming soon.",
    icon: Brain,
  },
  {
    name: "Hospital Medicine",
    desc: "Expanding to Hospital Medicine: telemetry and backup support coming soon.",
    icon: Hospital,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Clinical Specialty Solutions"
        description="Nephrology (TeleNeph) is our currently active live program. Explore our comprehensive renal offerings below, alongside details on upcoming clinical expansions."
        bgImage="/images/services_hero_bg.png"
      />

      {/* Internal Navigation Anchor / Link to explainer page */}
      <section className="w-full py-6 bg-cream/40 border-b border-primary/5 flex justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center text-sm font-body">
          <p className="text-charcoal/70">
            Want to see how our virtual consultations work step-by-step?
          </p>
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-1 font-heading font-bold text-accent hover:underline group cursor-pointer"
          >
            See How It Works
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Nephrology Pillars — Detailed alternating sections */}
      <section className="w-full py-24 lg:py-32 bg-white flex justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <span className="text-xs font-bold tracking-wider text-accent uppercase font-heading">
              Our Core Specialty
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-primary tracking-tight">
              Nephrology: Clinical Programs of Care
            </h2>
            <p className="font-body text-base text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
              Virtual nephrology is our flagship service. We deliver full-scope kidney care through specialized programs tailored to community hospitals.
            </p>
          </motion.div>

          <div className="space-y-24 lg:space-y-36">
            {NEPHROLOGY_PILLARS.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div 
                  key={pillar.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Left or Right copy column */}
                  <motion.div
                    initial={{ opacity: 0, x: pillar.alignRight ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      "lg:col-span-6 space-y-6",
                      pillar.alignRight ? "lg:order-1" : "lg:order-2"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary/5 rounded-xl text-primary border border-primary/10">
                        <PillarIcon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold tracking-wider text-accent uppercase font-heading">
                        {pillar.eyebrow}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-primary leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-base text-charcoal/80 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Conditional sub-elements to vary layout */}
                    {pillar.whoFor && (
                      <div className="p-4 bg-cream/40 border border-primary/5 rounded-xl text-sm font-body text-charcoal/70">
                        <strong className="text-primary font-heading">Who this is for:</strong> {pillar.whoFor}
                      </div>
                    )}

                    {pillar.stat && (
                      <div className="flex items-center gap-4 bg-primary/5 border border-primary/15 rounded-xl p-4">
                        <div className="text-3xl font-bold font-heading text-accent">{pillar.stat}</div>
                        <div className="font-body text-xs text-charcoal/70">
                          {pillar.statLabel}
                        </div>
                      </div>
                    )}

                    {pillar.badge && (
                      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/15 rounded-full px-4 py-1.5 text-xs font-heading font-semibold text-accent-700">
                        <span className="h-2 w-2 bg-accent rounded-full animate-pulse" />
                        {pillar.badge}
                      </div>
                    )}

                    {pillar.benefit && (
                      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl text-sm font-body text-charcoal/70">
                        <strong className="text-primary font-heading">Program Benefit:</strong> {pillar.benefit}
                      </div>
                    )}
                  </motion.div>

                  {/* Left or Right visual column */}
                  {pillar.image ? (
                    <motion.div
                      initial={{ opacity: 0, x: pillar.alignRight ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={cn(
                        "lg:col-span-6 relative w-full aspect-[4/3] rounded-2xl shadow-lg border border-primary/5 overflow-hidden bg-white group",
                        pillar.alignRight ? "lg:order-2" : "lg:order-1"
                      )}
                    >
                      <Image
                        src={pillar.image}
                        alt={pillar.imageAlt || ""}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </motion.div>
                  ) : pillar.features ? (
                    <motion.div
                      initial={{ opacity: 0, x: pillar.alignRight ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={cn(
                        "lg:col-span-6 bg-gradient-to-br from-cream/40 to-cream/80 border border-primary/5 rounded-2xl p-6 lg:p-8 space-y-6 shadow-sm",
                        pillar.alignRight ? "lg:order-2" : "lg:order-1"
                      )}
                    >
                      <h4 className="font-heading text-sm font-bold text-primary uppercase tracking-wider">
                        Core Oversight Included
                      </h4>
                      <div className="space-y-4 font-body text-sm text-charcoal/85">
                        {pillar.features.map((f, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-primary block font-heading text-xs">{f.title}</strong>
                              {f.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Specialties — Future Roadmap / Pipeline */}
      <section className="w-full py-24 bg-gradient-to-b from-cream/20 via-slate-50/50 to-cream/10 border-t border-primary/5 flex justify-center overflow-hidden relative">
        {/* CSS Dot grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 w-full text-center space-y-12 relative z-10">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-charcoal/50 uppercase font-heading">
              Future Roadmap
            </span>
            <h2 className="font-heading text-3xl font-bold text-primary">
              Expanding Clinical Horizons
            </h2>
            <p className="font-body text-sm text-charcoal/60 max-w-lg mx-auto leading-relaxed">
              Our clinical committees are designing standardized care pathways for additional specialties.
            </p>
          </div>
          
          <div className="relative space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6 max-w-6xl mx-auto pt-10">
            {/* Horizontal Timeline Connector for Desktop */}
            <div className="hidden lg:block absolute top-[40px] left-[12%] right-[12%] h-[1px] border-t border-dashed border-primary/20 z-0" />
            
            {/* Vertical Timeline Connector for Mobile */}
            <div className="lg:hidden absolute left-[24px] top-6 bottom-6 w-[1px] border-l border-dashed border-primary/20 z-0" />

            {COMING_SOON_SERVICES.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
                  className="relative pl-16 lg:pl-0 lg:pt-6 h-full flex flex-col group z-10"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-0 top-1 lg:-top-6 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 rounded-xl bg-white border border-primary/10 flex items-center justify-center text-charcoal/40 group-hover:text-accent group-hover:bg-white group-hover:scale-105 group-hover:border-accent transition-all duration-500 shadow-sm z-20">
                    <ServiceIcon className="h-5 w-5 stroke-[1.5]" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 flex flex-col justify-start bg-white border border-primary/10 rounded-2xl p-7 lg:p-8 lg:pt-10 shadow-md group-hover:border-accent/30 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500 text-left h-full">
                    {/* Header with Title and Status Badges Stacked to Prevent Overflow */}
                    <div className="flex flex-col items-start gap-2.5 w-full">
                      <h3 className="font-heading text-base font-bold text-charcoal/80 group-hover:text-primary transition-colors leading-tight">
                        {service.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-[9px] font-heading font-bold text-charcoal/50 bg-charcoal/5 rounded px-2 py-0.5 border border-charcoal/10 group-hover:text-accent group-hover:bg-accent/5 group-hover:border-accent/20 transition-all duration-500 whitespace-nowrap">
                        <Hourglass className="h-2.5 w-2.5" />
                        In Development
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-body text-xs text-charcoal/60 leading-relaxed mt-4">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band at bottom */}
      <CtaBand />
    </>
  );
}
