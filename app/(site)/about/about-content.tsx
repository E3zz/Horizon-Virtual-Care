"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/sections/shared/PageHeader";
import CtaBand from "@/components/sections/shared/CtaBand";
import { Heart, Activity, Globe, Award, ShieldAlert, CheckCircle2, TrendingDown, Clock, ShieldCheck } from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: "qalb-khan",
    name: "Dr. Qalb Khan, MD",
    title: "Board Certified Nephrologist & Critical Care Specialist",
    image: "/images/dr-khan.jpeg",
    initials: "QK",
  },
];


const VALUES = [
  {
    title: "Clinical Rigor",
    description: "We deliver evidence-based nephrology care with zero operational compromises, maintaining rigorous academic standards virtually. Every protocol we deploy is vetted by board-certified specialists to ensure patient safety. We believe virtual care must meet or exceed the clinical thresholds of traditional in-person encounters.",
    icon: Award,
  },
  {
    title: "Compassionate Equity",
    description: "Every patient deserves premium kidney care close to their support network, regardless of their zip code. We treat rural clinics and critical access hospitals as core centers of excellence rather than mere triage outposts. Our approach is designed to alleviate the financial and emotional burden of long-distance medical travel for vulnerable populations.",
    icon: Heart,
  },
  {
    title: "Collaborative Extension",
    description: "We do not replace local care. Instead, we integrate seamlessly with rural nurses, primary care physicians, and local health systems to support patient health comprehensively. By empowering local clinicians with on-demand specialty bandwidth, we build stronger, self-sustaining community healthcare environments.",
    icon: Globe,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="Bridging the Distance in Kidney Care"
        description="We bring rigorous clinical expertise to underserved areas, ensuring every patient feels prioritized and respected."
      />

      {/* Narrative Section */}
      <section className="w-full py-20 lg:py-24 bg-white flex justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-sm font-bold tracking-wider text-accent uppercase font-heading">
              Our Mission & Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary leading-tight">
              Clinical Quality Without Geographic Barriers
            </h2>
            <div className="font-body text-base text-charcoal/80 space-y-4 leading-relaxed">
              <p>
                At Horizon Virtual Care, our mission is to fundamentally transform how kidney care is delivered to communities that have historically lacked access. We believe that geographical location should never dictate the quality of specialized medical care a patient receives.
              </p>
              <p>
                By acting as an embedded clinical extension for rural and remote healthcare facilities, we actively reduce the travel burden placed on patients facing complex renal conditions. Our approach combines state-of-the-art telehealth technology with deeply human, empathetic care protocols.
              </p>
              <p>
                We don't just provide remote consultations; we integrate seamlessly with local care teams to build sustainable, high-quality nephrology programs that empower communities and improve long-term patient outcomes.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex justify-center items-center bg-primary text-white hover:bg-primary-600 rounded-full px-6 py-3.5 font-heading font-semibold transition-all shadow hover:shadow-md text-sm cursor-pointer"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center border border-primary text-primary hover:bg-primary/5 rounded-full px-6 py-3.5 font-heading font-semibold transition-all text-sm cursor-pointer"
              >
                Contact Partnerships
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Premium Stats & Milestone Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {/* Stat Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-white border border-primary/10 rounded-3xl p-6 space-y-4 shadow-[0_4px_15px_-4px_rgba(18,60,92,0.04)] hover:shadow-[0_15px_35px_-6px_rgba(18,60,92,0.08)] hover:-translate-y-1 hover:border-accent/15 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-500/5 text-blue-600 border border-blue-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <TrendingDown className="h-6 w-6" />
              </div>
              <div>
                <span className="font-heading text-3xl font-black text-primary block leading-tight">98%</span>
                <span className="font-heading text-xs font-bold text-accent uppercase tracking-wider block mt-1">Travel Reduction</span>
                <p className="font-body text-xs text-charcoal/70 mt-2 leading-relaxed">
                  Eliminating long-distance travel for outpatient follow-up consultations.
                </p>
              </div>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-primary/10 rounded-3xl p-6 space-y-4 shadow-[0_4px_15px_-4px_rgba(18,60,92,0.04)] hover:shadow-[0_15px_35px_-6px_rgba(18,60,92,0.08)] hover:-translate-y-1 hover:border-accent/15 transition-all duration-300 group"
            >
              <div className="p-3 bg-orange-500/5 text-orange-600 border border-orange-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <span className="font-heading text-3xl font-black text-primary block leading-tight">2 Hrs</span>
                <span className="font-heading text-xs font-bold text-accent uppercase tracking-wider block mt-1">Acute Response</span>
                <p className="font-body text-xs text-charcoal/70 mt-2 leading-relaxed">
                  Average specialist response time for high-acuity inpatient consultations.
                </p>
              </div>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white border border-primary/10 rounded-3xl p-6 space-y-4 shadow-[0_4px_15px_-4px_rgba(18,60,92,0.04)] hover:shadow-[0_15px_35px_-6px_rgba(18,60,92,0.08)] hover:-translate-y-1 hover:border-accent/15 transition-all duration-300 group"
            >
              <div className="p-3 bg-emerald-500/5 text-emerald-600 border border-emerald-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <span className="font-heading text-3xl font-black text-primary block leading-tight">100%</span>
                <span className="font-heading text-xs font-bold text-accent uppercase tracking-wider block mt-1">Care Continuity</span>
                <p className="font-body text-xs text-charcoal/70 mt-2 leading-relaxed">
                  Keeping local services active during critical provider gap vacancies.
                </p>
              </div>
            </motion.div>

            {/* Stat Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-primary/10 rounded-3xl p-6 space-y-4 shadow-[0_4px_15px_-4px_rgba(18,60,92,0.04)] hover:shadow-[0_15px_35px_-6px_rgba(18,60,92,0.08)] hover:-translate-y-1 hover:border-accent/15 transition-all duration-300 group"
            >
              <div className="p-3 bg-indigo-500/5 text-indigo-600 border border-indigo-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <span className="font-heading text-3xl font-black text-primary block leading-tight">QAPI</span>
                <span className="font-heading text-xs font-bold text-accent uppercase tracking-wider block mt-1">Audit Compliance</span>
                <p className="font-body text-xs text-charcoal/70 mt-2 leading-relaxed">
                  Evidence-based medical directorship ensuring strict regulatory safety.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="w-full py-20 lg:py-24 bg-cream/20 flex justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-wider text-accent uppercase font-heading">
              Our Foundation
            </span>
            <h2 className="text-3xl font-bold font-heading text-primary">
              Core Principles That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-primary/10 rounded-3xl p-8 space-y-5 shadow-[0_4px_20px_-4px_rgba(18,60,92,0.06)] hover:shadow-[0_20px_40px_-8px_rgba(18,60,92,0.12)] hover:-translate-y-1.5 hover:border-accent/20 transition-all duration-500"
                >
                  <div className="p-3.5 bg-accent/5 border border-accent/15 rounded-2xl text-accent w-fit">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary tracking-tight">
                    {val.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-charcoal/85 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership / Team profiles */}
      <section className="w-full py-20 bg-cream flex justify-center overflow-hidden border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6 w-full space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-wider text-accent uppercase font-heading">
              Leadership & Care Team
            </span>
            <h2 className="text-3xl font-bold font-heading text-primary">
              The Horizon Virtual Care Team
            </h2>
            <p className="font-body text-sm text-charcoal/60 max-w-md mx-auto">
              Click on any specialist below to view their background, credentials, and full clinical bio.
            </p>
          </div>

          <div className="flex justify-center">
            {TEAM_MEMBERS.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-3xl p-8 flex flex-col items-center text-center gap-5 shadow-[0_4px_20px_-4px_rgba(18,60,92,0.06)] border border-primary/10 hover:shadow-[0_20px_40px_-8px_rgba(18,60,92,0.12)] hover:border-accent/20 hover:-translate-y-1.5 transition-all duration-500 group w-full max-w-sm"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden bg-primary/5 border border-primary/5 relative group-hover:border-accent/40 transition-colors">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    sizes="96px"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-lg font-bold text-primary group-hover:text-accent transition-colors tracking-tight">
                    {leader.name}
                  </h3>
                  <span className="font-body text-xs font-semibold text-accent/90 uppercase tracking-wider">
                    {leader.title}
                  </span>
                </div>

                <Link
                  href={`/about/${leader.id}`}
                  className="text-accent font-heading font-bold text-sm hover:underline mt-2 cursor-pointer transition-colors inline-block"
                >
                  View Bio &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <CtaBand />
    </>
  );
}
