"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  RefreshCw,
  Activity,
  FileText,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CORE_SERVICES = [
  {
    icon: Heart,
    title: "Chronic Kidney Disease (CKD)",
    description:
      "Longitudinal virtual management for Stages 3–5 CKD — blood pressure optimization, medication titration, dietary guidance, and early transplant coordination without patient travel.",
    highlight: "Prevent dialysis dependency",
  },
  {
    icon: RefreshCw,
    title: "Dialysis Support & Directorship",
    description:
      "Virtual medical directorship for outpatient and inpatient dialysis units. Vascular access planning, prescription management, weekly lab review, and ESRD QAPI compliance.",
    highlight: "Keep dialysis programs local",
  },
  {
    icon: Activity,
    title: "Acute Kidney Injury (AKI) Consults",
    description:
      "On-demand ICU nephrology for sudden kidney failure, electrolyte crises, and CRRT management. Board-certified specialists connect bedside within two hours.",
    highlight: "2-hour urgent response",
  },
  {
    icon: FileText,
    title: "Medical Directorship & QAPI",
    description:
      "Formal clinical leadership for kidney care programs — evidence-based protocols, Joint Commission audit prep, QAPI committee leadership, and nursing education.",
    highlight: "Regulatory compliance built in",
  },
  {
    icon: Clock,
    title: "Physician Gap Coverage",
    description:
      "Reliable virtual coverage for weekends, holidays, and staffing vacancies. 24/7 on-call nephrology integrated into your scheduling and EHR — no locum tenens required.",
    highlight: "Never shut down a clinical line",
  },
  {
    icon: Users,
    title: "Outpatient Clinic Support",
    description:
      "Structured post-discharge virtual follow-ups within 7–14 days, local lab coordination, and seamless primary care handoffs to reduce preventable readmissions.",
    highlight: "Close the care gap at home",
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ServicesOverview() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white flex justify-center overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full space-y-16 relative z-10">
        {/* Header + Image Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <span className="text-xs font-bold tracking-wider text-accent uppercase font-heading">
              Core Clinical Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-heading text-primary leading-tight tracking-tight">
              Full-Scope Virtual Nephrology for Your Facility
            </h2>
            <div className="font-body text-base text-charcoal/80 leading-relaxed space-y-4">
              <p>
                Horizon delivers more than a video call. We embed board-certified
                nephrologists directly into your hospital&apos;s clinical workflow — charting
                in your EHR, co-managing with your hospitalists, and training your nurses
                as telehealth extenders at the bedside.
              </p>
              <p>
                From chronic disease management to critical ICU consults, our six core
                service lines give rural and community hospitals the specialist bandwidth
                to admit, treat, and retain complex kidney patients locally.
              </p>
            </div>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "inline-flex items-center gap-2 rounded-full border-primary/20 hover:border-primary text-primary hover:bg-primary/5 px-7 py-3 h-auto font-heading font-semibold hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              )}
            >
              View Full Service Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[4/3] rounded-3xl shadow-xl border border-primary/5 overflow-hidden group"
          >
            <Image
              src="/images/nephrology_consult.png"
              alt="Horizon Virtual Care board-certified nephrologist conducting a remote specialist consultation via a secure clinical workstation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-heading text-sm font-bold text-white">
                Direct clinical extension — not a referral system
              </p>
              <p className="font-body text-xs text-cream/75 mt-1">
                Specialists chart in your EHR and co-manage with your local team
              </p>
            </div>
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {CORE_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group flex flex-col bg-cream/50 border border-primary/8 rounded-2xl p-6 lg:p-7 hover:bg-white hover:border-accent/25 hover:shadow-[0_16px_40px_-12px_rgba(18,60,92,0.12)] hover:-translate-y-1 transition-all duration-400"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 bg-primary rounded-xl text-white shadow-md shadow-primary/15 group-hover:bg-accent group-hover:shadow-accent/20 transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/15 rounded-full px-2.5 py-1 leading-none">
                    {service.highlight}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2 group-hover:text-primary/90 leading-snug">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-charcoal/75 leading-relaxed flex-1">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
