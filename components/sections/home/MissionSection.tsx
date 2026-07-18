"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-gradient-to-b from-cream to-white flex justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="text-sm font-bold tracking-wider text-accent uppercase font-heading">
            Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary leading-tight">
            Expanding Medical Care Access for Rural Communities
          </h2>
          <div className="font-body text-base text-charcoal/80 space-y-4 leading-relaxed">
            <p>
              Millions of patients in rural regions lack direct access to clinical specialists, requiring substantial travel to reach metropolitan centers. Horizon Virtual Care was founded to bridge this gap, bringing certified specialty doctors directly into local hospital environments.
            </p>
            <p>
              By leveraging advanced virtual telehealth terminals and collaborative care teams, we empower rural healthcare providers to keep clinical services local. This improves patient wellness, ensures faster intervention rates, and strengthens community health resources.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[4/3] rounded-2xl shadow-xl border border-primary/5 overflow-hidden group"
        >
          <Image
            src="/images/community-downtown.jpg"
            alt="Historic downtown streetscape in Cape Girardeau, Missouri, representing the community environments served by Horizon"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1280px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
