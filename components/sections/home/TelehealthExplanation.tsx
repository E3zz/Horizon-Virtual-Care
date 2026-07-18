"use client";

import { motion } from "framer-motion";
import { Video, CalendarCheck, UserPlus, ClipboardList, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Consult Request",
    desc: "The local nurse or attending physician submits a consult request through our secure clinical portal.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Clinical Prep",
    desc: "The onsite nurse brings the medical telehealth terminal bedside and checks the patient's vitals.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Live Virtual Visit",
    desc: "Our board-certified nephrologist connects via low-latency HD video to assess the patient face-to-face.",
    icon: Video,
  },
  {
    step: "04",
    title: "Collaborative Follow-up",
    desc: "The specialist updates the EMR and reviews the care plan directly with the local clinical team.",
    icon: UserPlus,
  },
];

export default function TelehealthExplanation() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-navy to-primary text-white flex justify-center relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-accent-300 uppercase font-heading">
            What is Telehealth?
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.1]">
            Specialized Care, Delivered Digitally
          </h2>
          <div className="font-body text-base sm:text-lg text-cream/80 leading-relaxed space-y-6 text-left md:text-center pt-2 max-w-4xl mx-auto">
            <p>
              Telehealth uses secure digital video communications to bridge the gap between patients and medical specialists. By placing high-definition care terminals inside local clinics, we bring elite specialty medicine directly to your hometown, saving patients hours of costly travel time and reducing the stress of seeking care far from their support networks.
            </p>
            <p>
              When a patient needs a consult, the local onsite nurse requests an appointment, and our remote specialist connects via a secure video link. During the live session, the onsite nurse acts as the physical &ldquo;hands&rdquo; of the specialist—operating the electronic stethoscope and adjusting cameras—while our physician assesses the patient face-to-face and reviews the EMR chart in real time.
            </p>
            <p>
              For rural and underserved hospitals, this model is a lifeline. It instantly extends local clinical capabilities, allowing facilities to admit and treat patients with complex conditions who would otherwise require expensive emergency transfers to large metropolitan health centers, thereby keeping care and revenue local.
            </p>
          </div>
        </div>

        <div className="space-y-8 pt-4">
          <h3 className="font-heading text-2xl font-extrabold text-center text-accent-300 tracking-tight">
            How a Consult Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center">
                  {/* Connection arrow for desktop */}
                  {index < STEPS.length - 1 && (
                    <div className="hidden md:flex absolute top-14 left-[calc(50%+4rem)] right-[-2.5rem] justify-center z-10 pointer-events-none">
                      <ArrowRight className="h-6 w-6 text-accent-300/30 animate-pulse" />
                    </div>
                  )}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-5 hover:bg-white/10 hover:shadow-[0_20px_40px_-10px_rgba(232,130,90,0.15)] hover:-translate-y-2 hover:border-accent-300/30 transition-all duration-500 group w-full text-left h-full flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="p-3.5 bg-accent text-white rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="font-heading text-3xl font-black text-white/15 select-none">
                          {step.step}
                        </span>
                      </div>
                      <h4 className="font-heading text-lg font-bold text-white group-hover:text-accent-100 transition-colors tracking-tight">
                        {step.title}
                      </h4>
                      <p className="font-body text-sm text-cream/70 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
