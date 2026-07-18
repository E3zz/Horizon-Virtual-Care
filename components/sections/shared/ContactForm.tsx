"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  organization: z.string().min(2, "Organization name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    console.log("Contact form submitted data:", data);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
  };

  return (
    <div className="relative overflow-hidden w-full">
      <AnimatePresence mode="wait">
        {!submitSuccess ? (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-charcoal/90">
                Full Name <span className="text-accent">*</span>
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Dr. Jane Doe"
                className={cn(
                  errors.name && "border-destructive focus:ring-destructive/20 focus:border-destructive"
                )}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-destructive flex items-center gap-1 mt-1" role="alert">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Organization */}
            <div className="space-y-2">
              <label htmlFor="organization" className="text-sm font-semibold text-charcoal/90">
                Organization / Health Facility <span className="text-accent">*</span>
              </label>
              <Input
                id="organization"
                type="text"
                placeholder="Cape Girardeau Regional Hospital"
                className={cn(
                  errors.organization && "border-destructive focus:ring-destructive/20 focus:border-destructive"
                )}
                {...register("organization")}
              />
              {errors.organization && (
                <p className="text-xs text-destructive flex items-center gap-1 mt-1" role="alert">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.organization.message}
                </p>
              )}
            </div>

            {/* Email & Phone grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-charcoal/90">
                  Email Address <span className="text-accent">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane.doe@hospital.org"
                  className={cn(
                    errors.email && "border-destructive focus:ring-destructive/20 focus:border-destructive"
                  )}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-destructive flex items-center gap-1 mt-1" role="alert">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-charcoal/90">
                  Phone Number <span className="text-charcoal/40 text-xs font-normal ml-1">(Optional)</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  {...register("phone")}
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-charcoal/90">
                Message <span className="text-accent">*</span>
              </label>
              <Textarea
                id="message"
                placeholder="Please describe your facility's telehealth and clinical nephrology needs..."
                rows={5}
                className={cn(
                  errors.message && "border-destructive focus:ring-destructive/20 focus:border-destructive"
                )}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-xs text-destructive flex items-center gap-1 mt-1" role="alert">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full bg-accent hover:bg-accent-600 disabled:bg-accent-300 text-white rounded-full py-6 font-heading font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 text-base"
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                "Submit Request"
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center text-center p-8 bg-primary-50/50 rounded-xl border border-primary/10"
          >
            <CheckCircle2 className="h-16 w-16 text-accent mb-6 animate-bounce" />
            <h3 className="font-heading text-2xl font-bold text-primary mb-3">
              Thank You!
            </h3>
            <p className="text-charcoal/90 max-w-md font-body leading-relaxed mb-6">
              Your inquiry has been received. A Horizon Virtual Care clinical relations specialist will contact you within one business day to discuss your needs.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-primary/20 text-primary hover:bg-primary/5 cursor-pointer px-6"
              )}
            >
              Send Another Message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
