"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES_LIST = [
  "Board-certified nephrologists on-demand",
  "Acute kidney injury (AKI) and CRRT oversight",
  "Chronic kidney disease (CKD) management",
  "Dialysis directorship and vascular access",
  "Medical directorship and QAPI compliance",
  "On-site nurse extender training programs",
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function ServicesOverview() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white flex justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[4/3] rounded-2xl shadow-xl border border-primary/5 overflow-hidden lg:order-1 group"
        >
          <Image
            src="/images/nephrology_consult.png"
            alt="Horizon Virtual Care board-certified nephrologist conducting a remote specialist consultation via a secure clinical workstation"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1280px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right Column: Copy & Checklist */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:order-2"
        >
          <span className="text-xs font-bold tracking-wider text-accent uppercase font-heading">
            Our Core Service
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary leading-tight">
            Full-Scope Virtual Nephrology
          </h2>
          <div className="font-body text-base text-charcoal/80 leading-relaxed space-y-4">
            <p>
              We deliver more than video consults. Horizon embeds expert kidney-care specialists into your existing clinical environment — working alongside your local nurses, attending physicians, and hospital administration.
            </p>
            <p>
              Our goal is to create a sustainable, high-acuity specialty program within your facility. By combining our virtual presence with your local infrastructure, we ensure your patients receive elite care without the emotional and financial burden of medical transfers.
            </p>
          </div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
          >
            {SERVICES_LIST.map((service, index) => (
              <motion.li key={index} variants={staggerItem} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="font-body text-sm font-semibold text-charcoal/90 leading-snug">
                  {service}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="pt-4">
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-primary/20 hover:border-primary text-primary hover:bg-primary/5 px-8 py-3.5 h-auto font-heading font-semibold hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              )}
            >
              View Nephrology Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
