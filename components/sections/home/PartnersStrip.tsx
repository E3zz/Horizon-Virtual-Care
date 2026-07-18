"use client";

import { motion } from "framer-motion";
import { Hospital, Network, Activity, Shield, Stethoscope, Home } from "lucide-react";

const PARTNERS = [
  { 
    label: "Rural Hospitals", 
    icon: Hospital,
    color: "from-blue-500/10 to-cyan-500/10 text-blue-600",
    description: "Empowering local facilities to keep patients in their communities, avoiding high-risk transfers." 
  },
  { 
    label: "Health Systems", 
    icon: Network,
    color: "from-indigo-500/10 to-purple-500/10 text-indigo-600",
    description: "Seamless integration across enterprise-wide clinical networks, scheduling systems, and EHRs." 
  },
  { 
    label: "Rehab Facilities", 
    icon: Activity,
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600",
    description: "Virtual clinical oversight for post-acute recovery, dialysis coordination, and complex care." 
  },
  { 
    label: "Correctional Medicine", 
    icon: Shield,
    color: "from-amber-500/10 to-orange-500/10 text-amber-600",
    description: "Secure, on-demand specialty access for incarcerated populations inside facility walls." 
  },
  { 
    label: "Specialty Clinics", 
    icon: Stethoscope,
    color: "from-rose-500/10 to-pink-500/10 text-rose-600",
    description: "Extending clinical bandwidth and providing physician gap coverage for outpatient groups." 
  },
  { 
    label: "Home Health", 
    icon: Home,
    color: "from-teal-500/10 to-cyan-500/10 text-teal-600",
    description: "Direct-to-patient remote monitoring, outpatient follow-ups, and longitudinal care support." 
  },
];

export default function PartnersStrip() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white via-cream/30 to-white border-y border-primary/5 flex justify-center relative overflow-hidden">
      {/* Background soft glow blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full space-y-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-heading">
            Who We Support
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-primary tracking-tight leading-[1.15]">
            Partner Facilities
          </h2>
          <p className="font-body text-base text-charcoal/70 max-w-xl mx-auto leading-relaxed">
            We collaborate with a wide spectrum of healthcare organizations to deploy specialized clinical bandwidth exactly where it&apos;s needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center pt-2">
          {PARTNERS.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative flex flex-col bg-white border border-primary/10 rounded-3xl p-8 shadow-[0_4px_25px_-4px_rgba(18,60,92,0.04)] hover:shadow-[0_20px_40px_-8px_rgba(18,60,92,0.12)] hover:-translate-y-1.5 hover:border-accent/20 transition-all duration-500"
              >
                {/* Decorative corner tag / light effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/5 to-transparent rounded-tr-3xl transition-opacity opacity-0 group-hover:opacity-100 duration-500" />
                
                {/* Icon wrapper */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/5`}>
                  <Icon className="h-7 w-7" />
                </div>
                
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-bold text-primary group-hover:text-accent transition-colors tracking-tight">
                      {partner.label}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
