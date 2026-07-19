"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[650px] md:min-h-[750px] lg:min-h-[800px] overflow-hidden flex items-center">
      {/* Background Image */}
      <Image
        src="/images/home_hero_bg.png"
        alt="Horizon Virtual Care board-certified clinical telehealth consultation room"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered Gradient Overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 z-10 text-white">
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-heading font-bold uppercase tracking-widest text-accent-300 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-4">
              Virtual Nephrology: Our Core Specialty
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]"
          >
            Expert <span className="text-accent-300">Kidney Care</span> Delivered to Your Community
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg sm:text-xl text-cream/85 leading-relaxed max-w-xl"
          >
            Board-certified nephrologists embedded inside your rural hospital through secure, high-definition telehealth, so patients never have to travel for specialty care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-accent hover:bg-accent-500 text-white rounded-full px-8 py-3.5 h-auto text-base font-heading font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-200"
              )}
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-heading font-semibold text-white border border-white/25 hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
