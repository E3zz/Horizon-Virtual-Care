"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";
import PageHeader from "@/components/sections/shared/PageHeader";
import ContactForm from "@/components/sections/shared/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Start the Conversation"
        description="Connect with our clinical integration team to discuss virtual nephrology coverage, licensing, and facility onboarding details."
      />

      {/* Main Section */}
      <section className="w-full py-20 lg:py-24 bg-white flex justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-primary">
                Facility Coordination & Support
              </h2>
              <p className="font-body text-base text-charcoal/80 leading-relaxed">
                Whether you want to implement full-time telehealth rounds or require temporary gap coverage support, our specialists are ready to coordinate.
              </p>
            </div>

            {/* List */}
            <div className="space-y-5 font-body text-base text-charcoal/90">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cream rounded-xl text-accent border border-primary/5 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary text-sm leading-tight mb-1">
                    Phone Numbers
                  </h3>
                  <p className="text-sm">(800) 555-0199</p>
                  <p className="text-xs text-charcoal/50">Mon-Fri 8:00 AM - 5:00 PM CST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cream rounded-xl text-accent border border-primary/5 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary text-sm leading-tight mb-1">
                    Email Correspondence
                  </h3>
                  <a
                    href="mailto:info@horizonvirtualcare.com"
                    className="text-sm hover:text-accent transition-colors"
                  >
                    info@horizonvirtualcare.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cream rounded-xl text-accent border border-primary/5 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary text-sm leading-tight mb-1">
                    Headquarters
                  </h3>
                  <p className="text-sm">
                    100 Medical Center Pkwy<br />
                    Suite 400<br />
                    Cape Girardeau, MO 63701
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Notice Warning */}
            <div className="p-5 bg-destructive/5 border border-destructive/15 rounded-xl flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-sm text-primary leading-tight">
                  Emergency Notice
                </h4>
                <p className="font-body text-xs text-charcoal/80 leading-relaxed">
                  For life-threatening emergencies, dial 911 immediately. Telehealth consultations and appointments must be scheduled by credentialed health facility personnel.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 w-full"
          >
            <Card className="border border-primary/10 shadow-sm bg-white overflow-hidden rounded-xl">
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </section>
    </>
  );
}
