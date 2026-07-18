"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Activity } from "lucide-react";

const VALUE_PROPS = [
  {
    title: "100% Board-Certified Specialists",
    description: "Every physician on our platform has undergone rigorous credentialing and holds active board certifications in their respective subspecialties. We do not use mid-level providers for complex acute oversight.",
    icon: Award,
  },
  {
    title: "Rapid Response Protocols",
    description: "In critical inpatient scenarios—such as acute kidney injury (AKI) or emergency dialysis needs—our specialists are available for live video consults within two hours, significantly reducing dangerous delays in care.",
    icon: Clock,
  },
  {
    title: "Seamless Local Integration",
    description: "We don't replace your local care teams; we empower them. Our specialists collaborate directly with your onsite hospitalists and nurses, establishing unified care plans that keep patients safely in your facility.",
    icon: Activity,
  },
  {
    title: "Enterprise-Grade Security",
    description: "All virtual consultations are conducted over fully HIPAA-compliant, encrypted, low-latency video networks. We protect patient privacy while ensuring crystal-clear diagnostic fidelity.",
    icon: ShieldCheck,
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyHorizon() {
  return (
    <section className="w-full py-20 lg:py-28 bg-gradient-to-b from-cream/20 to-white flex justify-center relative overflow-hidden border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-6 w-full space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold tracking-wider text-accent uppercase font-heading">
            The Horizon Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-primary tracking-tight leading-[1.15]">
            Why Choose Horizon Virtual Care?
          </h2>
          <p className="font-body text-base sm:text-lg text-charcoal/70 leading-relaxed">
            We are more than just a telehealth software vendor. We are a dedicated clinical partner providing the specialized medical bandwidth that modern hospitals need to thrive.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {VALUE_PROPS.map((prop) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-white border border-primary/10 shadow-[0_4px_20px_-4px_rgba(18,60,92,0.06)] hover:shadow-[0_20px_40px_-8px_rgba(18,60,92,0.12)] hover:-translate-y-1.5 hover:border-accent/20 transition-all duration-500"
              >
                <div className="shrink-0 p-4 bg-primary rounded-2xl text-white h-fit shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-bold text-primary tracking-tight">
                    {prop.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-charcoal/75 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
