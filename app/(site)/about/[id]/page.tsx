import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2, Mail, GraduationCap, Calendar, ShieldCheck, Heart } from "lucide-react";
import PageHeader from "@/components/sections/shared/PageHeader";
import CtaBand from "@/components/sections/shared/CtaBand";

const TEAM_DATA = {
  "qalb-khan": {
    name: "Dr. Qalb Khan, MD",
    title: "Board Certified Nephrologist & Critical Care Specialist",
    image: "/images/dr-khan.jpeg",
    credentials: "MD, Board Certified in Internal Medicine, Nephrology, and Critical Care Medicine",
    experience: "15+ Years in Clinical & Critical Care Nephrology",
    focus: "Kidney Disease Management, Hypertension & Critical Renal Care",
    bio: "Dr. Qalb Khan is a triple board-certified physician with more than 15 years of experience in medicine, nephrology, and the care of critically ill patients.",
    extendedBio: "Dr. Qalb Khan has extensive experience managing a wide range of complex medical and kidney-related conditions in both inpatient and critical care settings. Although Dr. Khan enjoys all aspects of medicine and caring for patients with a variety of illnesses, his particular passion within nephrology includes kidney disease management, hypertension, electrolyte disorders, and kidney stone prevention and treatment. He is dedicated to improving access to high-quality specialist care in rural and underserved areas through virtual telehealth solutions.",
    bullets: [
      "Board Certified in Internal Medicine, Nephrology, and Critical Care Medicine.",
      "Over 15 years of experience managing complex acute and chronic kidney conditions.",
      "Specializes in hypertension management, electrolyte disorders, and kidney stone prevention.",
      "Dedicated to virtual care expansion for critical access hospitals and rural clinic networks."
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(TEAM_DATA).map((id) => ({ id }));
}

interface BioPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BioPageProps): Promise<Metadata> {
  const { id } = await params;
  const member = TEAM_DATA[id as keyof typeof TEAM_DATA];
  
  if (!member) {
    return {
      title: "Specialist Bio Not Found | Horizon Virtual Care",
    };
  }

  const title = `${member.name} | Board Certified Nephrology Specialist`;
  const description = `${member.name} is a board-certified physician in nephrology and critical care. ${member.bio}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/about/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `/about/${id}`,
      type: "profile",
      images: [
        {
          url: member.image,
          alt: member.name,
        },
      ],
    },
  };
}

export default async function TeamBioPage({ params }: BioPageProps) {
  const { id } = await params;
  const member = TEAM_DATA[id as keyof typeof TEAM_DATA];

  if (!member) {
    notFound();
  }

  // Get other members for the bottom links
  const otherMembers = Object.entries(TEAM_DATA)
    .filter(([key]) => key !== id)
    .map(([key, data]) => ({
      id: key,
      name: data.name,
      title: data.title,
      image: data.image
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": member.name,
    "image": `https://horizonvirtualcare.com${member.image}`,
    "medicalSpecialty": "Nephrology",
    "description": member.extendedBio || member.bio,
    "knowsAbout": [
      "Nephrology",
      "Kidney Disease Management",
      "Hypertension Management",
      "Electrolyte Disorders",
      "Critical Care Medicine"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Clinical Leadership"
        title="Specialist Biography"
        description="Meet the board-certified medical experts directing Horizon's virtual care integration."
      />

      <section className="w-full py-16 sm:py-20 bg-white flex justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full space-y-12">
          
          {/* Back button */}
          <div className="flex justify-between items-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold text-accent hover:text-accent-600 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Who We Are
            </Link>
          </div>

          {/* Redesigned Profile Hero Card */}
          <div className="bg-gradient-to-br from-cream/20 to-white border border-primary/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_-5px_rgba(18,60,92,0.03)] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
            {/* Left: Large Portrait */}
            <div className="relative w-full max-w-[280px] lg:max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/5 shadow-md bg-cream shrink-0 group">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-w-7xl) 320px, 100vw"
                priority
              />
            </div>

            {/* Right: Intro & Quick Stats Grid */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-accent px-2.5 py-1 bg-accent/5 border border-accent/15 rounded-full inline-block">
                  Featured Specialist
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-heading text-primary tracking-tight">
                  {member.name}
                </h1>
                <p className="font-body text-base text-charcoal/80 font-medium leading-relaxed">
                  {member.title}
                </p>
              </div>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Credential Card */}
                <div className="bg-white border border-primary/10 rounded-2xl p-4 space-y-2 hover:border-accent/20 transition-colors shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)]">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-wider font-body">Credentials</p>
                    <p className="text-xs font-heading font-bold text-primary mt-0.5 leading-snug">{member.credentials}</p>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="bg-white border border-primary/10 rounded-2xl p-4 space-y-2 hover:border-accent/20 transition-colors shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)]">
                  <Calendar className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-wider font-body">Clinical Tenure</p>
                    <p className="text-xs font-heading font-bold text-primary mt-0.5 leading-snug">{member.experience}</p>
                  </div>
                </div>

                {/* Focus Card */}
                <div className="bg-white border border-primary/10 rounded-2xl p-4 space-y-2 hover:border-accent/20 transition-colors shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)]">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-wider font-body">Core Focus</p>
                    <p className="text-xs font-heading font-bold text-primary mt-0.5 leading-snug">{member.focus}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white rounded-full px-8 py-3.5 h-auto text-sm font-heading font-semibold shadow hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  Schedule a Consultation with {member.name.split(",")[0]}
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Biography and Impact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8">
            {/* Left: Biography Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-heading text-xl font-bold text-primary border-b border-primary/10 pb-3">
                Professional Biography
              </h3>
              <div className="font-body text-base text-charcoal/80 space-y-6 leading-relaxed">
                <p className="text-lg font-medium text-primary/95 leading-relaxed border-l-4 border-accent pl-4 italic bg-accent/[0.03] py-4 pr-4 rounded-r-2xl">
                  &ldquo;{member.bio}&rdquo;
                </p>
                <p className="text-charcoal/90 leading-relaxed text-base sm:text-lg">
                  {member.extendedBio}
                </p>
              </div>
            </div>

            {/* Right: Key Impact & Certifications */}
            <div className="lg:col-span-5 space-y-6 bg-cream/15 border border-primary/5 rounded-3xl p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-primary flex items-center gap-2 border-b border-primary/10 pb-3">
                <Heart className="h-5 w-5 text-accent fill-accent/10" />
                Clinical Specialization & Impact
              </h3>
              <ul className="space-y-4 font-body text-charcoal/85">
                {member.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                    <CheckCircle2 className="h-5.5 w-5.5 text-accent shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation to other members */}
          {otherMembers.length > 0 && (
            <div className="pt-16 border-t border-primary/10 space-y-8">
              <div className="text-center sm:text-left">
                <h3 className="font-heading text-xl font-bold text-primary">Meet Other Leaders</h3>
                <p className="font-body text-sm text-charcoal/60">Discover the team behind Horizon's clinical achievements.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {otherMembers.map((m) => (
                  <Link
                    key={m.id}
                    href={`/about/${m.id}`}
                    className="group flex flex-col items-center text-center gap-3 border border-primary/5 hover:border-accent/25 hover:shadow-sm bg-cream/20 hover:bg-white rounded-2xl p-4 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-primary/5 border border-primary/5 group-hover:border-accent/40 transition-colors">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        sizes="64px"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-heading text-xs font-bold text-primary group-hover:text-accent transition-colors leading-tight line-clamp-1">
                        {m.name.split(",")[0]}
                      </p>
                      <p className="font-body text-[9px] font-semibold text-charcoal/50 uppercase tracking-wider line-clamp-1">
                        {m.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <CtaBand />
    </>
  );
}
