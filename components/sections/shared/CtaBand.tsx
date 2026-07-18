"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaBandProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}

export default function CtaBand({
  title = "Ready to expand kidney care at your facility?",
  description = "Learn how our virtual nephrology solutions integrate directly with your clinical workflows.",
  buttonText = "Get in Touch",
  href = "/contact",
}: CtaBandProps) {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-primary to-navy text-white flex justify-center overflow-hidden relative">
      {/* Background visual texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%2F%3E%3C%2Fsvg%3E')] opacity-[0.07] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3 max-w-xl"
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="font-body text-base sm:text-lg text-cream/80 leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="shrink-0"
        >
          <Link
            href={href}
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-accent hover:bg-accent-500 text-white rounded-full px-8 py-4 h-auto text-base font-heading font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-200"
            )}
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
