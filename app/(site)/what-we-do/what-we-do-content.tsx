"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Video, 
  Users, 
  ArrowRight, 
  MapPin, 
  DollarSign, 
  PlusCircle, 
  ShieldCheck, 
  FileText,
  Clock
} from "lucide-react";
import PageHeader from "@/components/sections/shared/PageHeader";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const STEPS = [
  {
    step: "01",
    title: "Identify Patient Need",
    desc: "A local nurse or attending physician identifies a patient with acute or chronic nephrology needs—such as unexplained renal decline, severe hypertension, or complex dialysis requirements.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Submit Secure Request",
    desc: "The onsite clinical team submits a consult request via Horizon's secure portal, uploading recent lab results and diagnostic data directly into the dashboard.",
    icon: PlusCircle,
  },
  {
    step: "03",
    title: "Specialist Connection",
    desc: "For urgent acute cases (like severe AKI), a board-certified nephrologist connects via secure, low-latency HD video within 2 hours. Scheduled visits are configured at the facility's convenience.",
    icon: Clock,
  },
  {
    step: "04",
    title: "Bedside Collaboration",
    desc: "The specialist conducts a face-to-face virtual assessment. On-site nurses act as clinical extenders, adjusting cart cameras and using digital stethoscopes while our physician documents findings in the shared EHR.",
    icon: Video,
  },
  {
    step: "05",
    title: "Continuous Follow-up",
    desc: "We coordinate discharge plans, follow-up virtual clinic sessions, and direct communication with local primary care doctors to prevent readmissions and keep care consistent.",
    icon: Users,
  },
];

const WHY_RURAL_MATTERS = [
  {
    title: "Eliminating Access Gaps",
    desc: "Rural and critical access hospitals face major challenges recruiting on-site specialists. Our virtual model embeds board-certified nephrologists on-demand, instantly upgrading your facility's clinical capabilities.",
    icon: MapPin,
  },
  {
    title: "Relieving Patient Travel Burdens",
    desc: "For patients with kidney disease, travelling hours for a single specialist consultation is exhausting and financially draining. We bring the expert to them, allowing families to support patients locally.",
    icon: Users,
  },
  {
    title: "Keeping Care & Revenue Local",
    desc: "When community hospitals are forced to transfer patients due to lack of specialty coverage, they lose inpatient census and related diagnostic revenue. Horizon enables you to retain patients, labs, and imaging.",
    icon: DollarSign,
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Our Virtual Care Model"
        description="Learn how Horizon Virtual Care embeds specialized clinical protocols into your local facility without the disruption of traditional transfers."
        bgImage="/images/what_we_do_hero_bg.png"
      />

      {/* Definition Section */}
      <section className="w-full py-20 lg:py-24 bg-white flex justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold tracking-wider text-accent uppercase font-heading">
              Redefining Specialty Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary leading-tight">
              A Direct Clinical Extension, Not a Referral System
            </h2>
            <div className="font-body text-base text-charcoal/80 space-y-4 leading-relaxed">
              <p>
                Historically, when a patient at a community or rural hospital required specialized kidney care, the standard protocol was a physical referral or an emergency transfer to a major metropolitan medical center. This process is highly disruptive for the patient, stressful for their family, and costly for the sending facility.
              </p>
              <p>
                <strong>Horizon Virtual Care offers a different path.</strong> Rather than transferring the patient, we bring the specialist directly to the bedside. By combining secure, high-definition tele-presence technology with structured clinical protocols, we embed board-certified nephrologists directly into your existing on-site care team.
              </p>
              <p>
                Our specialists don't work in isolation. They collaborate closely with your local attending physicians and nurses, review charts in your shared EHR, and co-manage patients from admission to discharge. The result is a seamless care experience that keeps patients in their home communities while elevating clinical outcomes.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-accent hover:bg-accent-500 hover:text-white text-white rounded-full px-6 py-3 h-auto font-heading font-semibold shadow-sm transition-all duration-200"
                )}
              >
                View Clinical Services
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-primary text-primary hover:bg-primary/5 rounded-full px-6 py-3 h-auto font-heading font-semibold transition-all duration-200"
                )}
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Image block */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl shadow-xl border border-primary/5 overflow-hidden bg-cream group"
          >
            <Image
              src="/images/clinicians-team.jpg"
              alt="Clinical team collaborating around a telehealth workstation inside a municipal medical clinic"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-w-7xl) 40vw, 100vw"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* How a Consult Works */}
      <section className="w-full py-20 lg:py-24 bg-gradient-to-b from-navy to-primary text-white flex justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 w-full space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-wider text-accent-300 uppercase font-heading">
              Step-by-Step
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
              The Virtual Consult Workflow
            </h2>
            <p className="font-body text-sm sm:text-base text-cream/80 max-w-xl mx-auto">
              From the initial identification of a clinical need to daily virtual rounds and post-discharge coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center">
                  {/* Connection arrow for desktop */}
                  {index < STEPS.length - 1 && (
                    <div className="hidden lg:flex absolute top-12 left-[calc(50%+3.5rem)] right-[-2.5rem] justify-center z-10 pointer-events-none">
                      <ArrowRight className="h-5 w-5 text-accent-300/30 animate-pulse" />
                    </div>
                  )}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:bg-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group w-full text-left h-full flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="p-3 bg-accent text-white rounded-xl w-fit group-hover:scale-105 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="font-heading text-2xl font-black text-white/10 select-none">
                          {step.step}
                        </span>
                      </div>
                      <h4 className="font-heading text-base font-bold text-white group-hover:text-accent-100 transition-colors">
                        {step.title}
                      </h4>
                      <p className="font-body text-xs text-cream/70 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why This Model Matters */}
      <section className="w-full py-20 lg:py-24 bg-cream/20 flex justify-center overflow-hidden border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6 w-full space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-wider text-accent uppercase font-heading">
              Strategic Value
            </span>
            <h2 className="text-3xl font-bold font-heading text-primary">
              Why it Matters for Rural & Community Hospitals
            </h2>
            <p className="font-body text-sm text-charcoal/60 max-w-md mx-auto">
              Keeping care and revenue local while delivering advanced clinical oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_RURAL_MATTERS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-primary/5 rounded-2xl p-8 space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="p-3.5 bg-accent/5 border border-accent/15 rounded-xl text-accent w-fit">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal/80 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Highlight */}
      <section className="w-full py-20 bg-white flex justify-center overflow-hidden border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl shadow-lg border border-primary/5 overflow-hidden bg-cream group lg:order-2"
          >
            <Image
              src="/images/telehealth-cart-clinical.png"
              alt="Medical-grade clinical consultation cart with dual screens and integrated diagnostic equipment"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-w-7xl) 40vw, 100vw"
            />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 lg:order-1"
          >
            <span className="text-xs font-bold tracking-wider text-accent uppercase font-heading">
              Secure & Integrated
            </span>
            <h2 className="text-3xl font-bold font-heading text-primary leading-tight">
              State-of-the-Art Security and EHR Compatibility
            </h2>
            <div className="font-body text-base text-charcoal/80 space-y-4 leading-relaxed">
              <p>
                We understand that introducing new clinical technologies can raise operations and security concerns. Horizon telehealth platforms are built using bank-grade end-to-end encryption and comply fully with HIPAA and HITECH guidelines.
              </p>
              <p>
                Our systems are designed to operate within your existing technical workflows. Rather than siloing consult notes in an external database, our nephrologists document directly into your local EHR. This ensures that clinical summaries, medication changes, and lab orders remain in the patient's primary record, keeping your care teams aligned and audit-ready.
              </p>
            </div>
            <div className="flex gap-4 items-center pt-2">
              <ShieldCheck className="h-8 w-8 text-accent shrink-0" />
              <div className="font-body text-xs text-charcoal/60">
                Fully HIPAA compliant and SOC2 certified data transmission workflows.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="w-full py-20 bg-gradient-to-r from-primary to-navy text-white flex justify-center overflow-hidden relative">
        {/* Background visual texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%2F%3E%3C%2Fsvg%3E')] opacity-[0.07] mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Upgrade Your Specialty Care?
          </h2>
          <p className="font-body text-sm sm:text-base text-cream/80 max-w-xl mx-auto leading-relaxed">
            Discover how easily we can deploy virtual nephrology, coordinate dialysis units, and support ICU hospitalists in your health facility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-accent hover:bg-accent-600 hover:text-white text-white rounded-full px-8 py-3.5 h-auto font-heading font-semibold hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer w-full sm:w-auto"
              )}
            >
              See Our Services &rarr;
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full px-8 py-3.5 h-auto font-heading font-semibold hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full sm:w-auto"
              )}
            >
              Contact Partnerships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
