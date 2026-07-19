"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Video, 
  CalendarCheck, 
  UserPlus, 
  ClipboardList, 
  ArrowRight,
  Heart,
  Users,
  Building,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown
} from "lucide-react";

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

const BENEFITS_PERSPECTIVES = [
  {
    id: "patients",
    label: "For Patients & Families",
    icon: Heart,
    color: "from-rose-500/20 to-orange-500/20 text-rose-300 bg-rose-500/5",
    bullets: [
      {
        title: "No Long-Distance Travel",
        desc: "Avoid exhausting hours on the road to reach city clinics. Receive specialist care directly inside your hometown facility."
      },
      {
        title: "Family Support Kept Local",
        desc: "Stay close to loved ones and support systems during treatment, reducing emotional and physical stress."
      },
      {
        title: "Reduced Out-of-Pocket Expenses",
        desc: "Save significantly on transit, fuel, hotels, and dining costs associated with metropolitan medical transfers."
      },
      {
        title: "Prompt Face-to-Face Care",
        desc: "Establish direct connections with top board-certified nephrologists without waiting weeks for an open travel appointment."
      }
    ]
  },
  {
    id: "clinicians",
    label: "For On-Site Care Teams",
    icon: Users,
    color: "from-teal-500/20 to-emerald-500/20 text-teal-300 bg-teal-500/5",
    bullets: [
      {
        title: "Collaborative Practice Extension",
        desc: "Work side-by-side with specialists. Gain professional confidence with on-demand expert backing at the bedside."
      },
      {
        title: "Nurse Extender Training",
        desc: "Receive professional training on state-of-the-art tele-presence carts, including digital stethoscope and camera positioning."
      },
      {
        title: "Immediate ICU Support",
        desc: "Get rapid stabilization advice for complex Acute Kidney Injury (AKI) or continuous renal replacement therapy (CRRT)."
      },
      {
        title: "Unified Care Protocols",
        desc: "Co-manage patients smoothly through integrated electronic medical records (EMR) and direct communication lines."
      }
    ]
  },
  {
    id: "administrators",
    label: "For Hospital Administration",
    icon: Building,
    color: "from-blue-500/20 to-indigo-500/20 text-blue-300 bg-blue-500/5",
    bullets: [
      {
        title: "Retain Patient Census & Revenue",
        desc: "Keep admissions, laboratory tests, and imaging procedures local. Stop losing essential revenue to metro transfers."
      },
      {
        title: "Staffing Gap Coverage",
        desc: "Solve recruitment struggles. Secure board-certified physician coverage during holidays, weekends, or staffing vacancies."
      },
      {
        title: "Standardized QAPI & Regulatory Safety",
        desc: "Secure remote Medical Directorship to direct clinical audits, lead QAPI committees, and maintain Joint Commission compliance."
      },
      {
        title: "Extended Care Capabilities",
        desc: "Attract local patient loyalty and improve facility credibility by offering premium specialist lines close to home."
      }
    ]
  }
];

const COMPARISON_ROWS = [
  {
    metric: "Time to Specialist",
    traditional: "6 to 12+ Hours (including transfer logistics)",
    horizon: "Under 2 Hours (for urgent acute consults)",
  },
  {
    metric: "Patient Travel & Lodging Cost",
    traditional: "High out-of-pocket travel, hotel & meal costs",
    horizon: "$0 (Patient remains in local community)",
  },
  {
    metric: "Hospital Census & Billing Revenue",
    traditional: "Lost to larger receiving metropolitan health system",
    horizon: "100% Retained (local lab, imaging, and inpatient stay)",
  },
  {
    metric: "Family & Social Disruption",
    traditional: "Severe (long travel, time off work, displacement)",
    horizon: "Minimal (visitations and support remain local)",
  },
  {
    metric: "Clinical Care Continuity",
    traditional: "Fragmented (patient records siloed across networks)",
    horizon: "Seamless (nephrologist charts directly in local EHR)",
  }
];

const FAQS = [
  {
    q: "What is telehealth and how does a virtual nephrology consult work?",
    a: "Telehealth utilizes encrypted digital tele-communications to bridge geographic barriers. During a Horizon virtual consult, our board-certified nephrologist connects via a secure, high-definition camera terminal placed bedside. The local attending nurse acts as the specialist's physical hands (operating the digital stethoscope, checking vitals, and adjusting camera angles) while the remote physician assesses the patient face-to-face and reviews chart data in real-time."
  },
  {
    q: "What are the primary benefits of virtual specialty care for rural communities?",
    a: "Telehealth provides three core benefits: it eliminates exhausting and costly travel burdens for patients; it empowers local clinicians with on-demand specialist support; and it allows community hospitals to keep care local, retaining essential census and ancillary diagnostic revenue (such as labs and imaging) that would otherwise be lost to transfers."
  },
  {
    q: "How does Horizon integrate with our hospital's Electronic Health Records (EHR)?",
    a: "Our specialists operate directly within your existing technological workflows. We credential our nephrologists on your local EHR systems so that all consult notes, order prescriptions, and follow-up directives are documented directly in the patient's primary record, keeping local and remote care teams fully aligned."
  },
  {
    q: "Is the video connection secure and compliant with HIPAA?",
    a: "Yes. Horizon Virtual Care uses enterprise-grade end-to-end encryption for all video and data transmissions, fully compliant with HIPAA, HITECH, and SOC2 safety guidelines to ensure complete patient confidentiality."
  },
  {
    q: "How does a community hospital handle billing for virtual consultations?",
    a: "We structure our programs to align with standard Medicare, Medicaid, and private payer telehealth reimbursement guidelines. Depending on the custom program design (e.g. outpatient clinic vs. inpatient consult service), we coordinate billing details directly with your billing department to ensure clean claims submission."
  }
];

export default function TelehealthExplanation() {
  const [activeTab, setActiveTab] = useState("patients");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const activeBenefit = BENEFITS_PERSPECTIVES.find(b => b.id === activeTab) || BENEFITS_PERSPECTIVES[0];
  const ActiveIcon = activeBenefit.icon;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-navy to-primary text-white flex justify-center relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full space-y-24">
        
        {/* SECTION 1: Introduction */}
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
              When a patient needs a consult, the local onsite nurse requests an appointment, and our remote specialist connects via a secure video link. During the live session, the onsite nurse acts as the physical &ldquo;hands&rdquo; of the specialist (operating the electronic stethoscope and adjusting cameras) while our physician assesses the patient face-to-face and reviews the EMR chart in real time.
            </p>
            <p>
              For rural and underserved hospitals, this model is a lifeline. It instantly extends local clinical capabilities, allowing facilities to admit and treat patients with complex conditions who would otherwise require expensive emergency transfers to large metropolitan health centers, thereby keeping care and revenue local.
            </p>
          </div>
        </div>

        {/* SECTION 2: Workflow Steps */}
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

        {/* SECTION 3: Interactive Benefits Tabs */}
        <div className="space-y-10 pt-10 border-t border-white/10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Benefits of Telehealth & Specialty Integration
            </h3>
            <p className="font-body text-sm text-cream/75 leading-relaxed">
              Virtual clinical pathways drive positive outcomes across every aspect of the care delivery chain. Select a perspective below to learn more.
            </p>
          </div>

          <div className="space-y-8">
            {/* Tabs Bar */}
            <div className="flex flex-wrap justify-center gap-3">
              {BENEFITS_PERSPECTIVES.map((bp) => {
                const TabIcon = bp.icon;
                const isActive = bp.id === activeTab;
                return (
                  <button
                    key={bp.id}
                    onClick={() => setActiveTab(bp.id)}
                    className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-heading font-semibold text-sm transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-accent text-white shadow-lg scale-105"
                        : "bg-white/5 border border-white/10 text-cream/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <TabIcon className="h-4.5 w-4.5" />
                    {bp.label}
                  </button>
                );
              })}
            </div>

            {/* Active Tab Panel */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                    <div className={`p-5 rounded-3xl bg-gradient-to-br ${activeBenefit.color} border border-white/10 w-fit`}>
                      <ActiveIcon className="h-12 w-12" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl sm:text-2xl font-bold">
                        {activeBenefit.label}
                      </h4>
                      <p className="font-body text-xs text-cream/60 mt-1">
                        Tailored virtual nephrology solutions.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {activeBenefit.bullets.map((bullet) => (
                      <div key={bullet.title} className="bg-white/5 border border-white/5 p-5 rounded-2xl space-y-2 hover:border-accent-300/20 hover:bg-white/8 transition-colors">
                        <div className="flex items-start gap-2 text-accent-300">
                          <CheckCircle2 className="h-4.5 w-4.5 mt-0.5 shrink-0" />
                          <h5 className="font-heading text-sm font-bold text-white leading-snug">
                            {bullet.title}
                          </h5>
                        </div>
                        <p className="font-body text-xs text-cream/70 leading-relaxed pl-6">
                          {bullet.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* SECTION 4: Comparative Pathway Matrix */}
        <div className="space-y-8 pt-10 border-t border-white/10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Traditional Transfer vs. Horizon Virtual Care
            </h3>
            <p className="font-body text-sm text-cream/75 leading-relaxed">
              Compare standard patient transfer routes with our integrated virtual care workflows.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-wider text-accent-300 font-heading font-bold">
                  <th className="p-6">Comparison Parameter</th>
                  <th className="p-6">Traditional Physical Transfer</th>
                  <th className="p-6 bg-accent/15 border-x border-white/10">Horizon Virtual Nephrology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-body text-sm">
                {COMPARISON_ROWS.map((row, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-heading font-semibold text-white">{row.metric}</td>
                    <td className="p-6 text-cream/70 flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="p-6 bg-accent/5 border-x border-white/10 text-white font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent-300 shrink-0 mt-0.5" />
                        <span>{row.horizon}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 5: Frequently Asked Questions */}
        <div className="space-y-8 pt-10 border-t border-white/10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-accent-300" />
              Frequently Asked Questions
            </h3>
            <p className="font-body text-sm text-cream/75 leading-relaxed">
              Have questions about telehealth integration, clinical operations, or security? Learn how Horizon works.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-white text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-accent-300 shrink-0"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 border-t border-white/5 font-body text-sm sm:text-base text-cream/80 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
