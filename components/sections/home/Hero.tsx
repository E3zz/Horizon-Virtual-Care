"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Award, Video } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TRUST_STATS = [
  { icon: Clock, label: "2-Hour Urgent Response", sub: "For inpatient AKI consults" },
  { icon: Award, label: "Board-Certified Only", sub: "No mid-level acute oversight" },
  { icon: ShieldCheck, label: "HIPAA & SOC2 Compliant", sub: "Enterprise-grade encryption" },
  { icon: Video, label: "Bedside Telehealth", sub: "HD video + digital stethoscope" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[680px] md:min-h-[780px] lg:min-h-[820px] overflow-hidden flex items-center">
      <Image
        src="/images/home_hero_bg.png"
        alt="Horizon Virtual Care board-certified clinical telehealth consultation room"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/15" />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10 text-white py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block text-xs font-heading font-bold uppercase tracking-widest text-accent-300 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5">
                Virtual Nephrology & Telehealth Specialists
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.08]"
            >
              Expert <span className="text-accent-300">Kidney Care</span> Delivered Through Secure Telehealth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-lg sm:text-xl text-cream/85 leading-relaxed max-w-2xl"
            >
              Horizon embeds board-certified nephrologists inside your rural hospital through
              high-definition bedside telehealth carts. Patients receive face-to-face specialist
              care in their community — no transfers, no travel, no care gaps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-1"
            >
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-accent hover:bg-accent-500 text-white rounded-full px-8 py-3.5 h-auto text-base font-heading font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-200"
                )}
              >
                Explore Core Services
              </Link>
              <Link
                href="/what-we-do"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-heading font-semibold text-white border border-white/25 hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                How Telehealth Works
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
          >
            {TRUST_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl px-5 py-4 hover:bg-white/12 hover:border-accent-300/25 transition-all duration-300"
                >
                  <div className="shrink-0 p-2.5 bg-accent/20 rounded-xl">
                    <Icon className="h-5 w-5 text-accent-300" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-white leading-snug">
                      {stat.label}
                    </p>
                    <p className="font-body text-xs text-cream/60 mt-0.5">{stat.sub}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
