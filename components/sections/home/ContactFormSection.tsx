"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/sections/shared/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactFormSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-gradient-to-b from-white to-cream/60 flex justify-center overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 w-full space-y-10">
        <div className="text-center space-y-3">
          <span className="text-sm font-bold tracking-wider text-accent uppercase font-heading">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary">
            Contact Us
          </h2>
          <p className="font-body text-base text-charcoal/70 max-w-md mx-auto">
            Discuss your facility&rsquo;s clinical requirements or request a comprehensive virtual telehealth assessment.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border border-primary/5 shadow-xl shadow-primary/5 bg-white overflow-hidden rounded-2xl hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500">
            <CardContent className="p-8 sm:p-10">
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
