"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  bgImage?: string;
}

export default function PageHeader({ eyebrow, title, description, bgImage }: PageHeaderProps) {
  return (
    <section className="relative w-full pt-40 pb-28 bg-navy text-white flex justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={title}
            fill
            className="object-cover object-center brightness-[0.35]"
            priority
          />
          {/* Gradient overlay to merge with navy background */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        </div>
      )}

      {/* CSS Noise Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%2F%3E%3C%2Fsvg%3E')] opacity-[0.05] mix-blend-overlay pointer-events-none z-10" />

      {/* Decorative radial glows for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/15 rounded-full blur-[100px] pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-400/10 rounded-full blur-[120px] pointer-events-none z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 w-full space-y-5">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-widest text-accent-300 font-heading block"
        >
          {eyebrow}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-sm"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-base sm:text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
