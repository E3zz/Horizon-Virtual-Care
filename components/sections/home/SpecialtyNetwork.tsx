"use client";

import { motion } from "framer-motion";

const COMING_SOON = [
  "Cardiology & Telemetry",
  "Rheumatology",
  "Neurology",
  "Hospital Medicine",
];

export default function SpecialtyNetwork() {
  return (
    <section className="w-full py-14 bg-white border-y border-primary/5 flex justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full text-center space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h2 className="font-heading text-xl font-bold text-primary">
            Expanding Our Scope
          </h2>
          <p className="font-body text-sm text-charcoal/60 max-w-md mx-auto">
            Additional specialties are in development as new clinical partnerships take shape.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {COMING_SOON.map((name) => (
            <span
              key={name}
              className="text-xs font-heading font-semibold text-primary/55 bg-cream border border-primary/8 rounded-full px-4 py-1.5"
            >
              {name} <span className="text-accent/60 ml-0.5">(Coming Soon)</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
