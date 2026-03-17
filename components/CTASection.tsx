"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative h-screen bg-bg-dark flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(228,0,43,0.08)_0%,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl"
      >


        <h2 className="text-6xl lg:text-8xl font-display font-extrabold text-white leading-[0.9] tracking-tighter mb-8">
          No sugar.<br />No compromise.<br />No regrets.
        </h2>
        
        <p className="text-xl lg:text-2xl font-display font-medium text-white/60 mb-12">
          Diet Coke. For those who live on their own terms.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-5 bg-red text-white text-lg font-display font-bold rounded-pill hover:-translate-y-1 transition-transform shadow-lg shadow-red/20">
            Find Your Coke →
          </button>
          <button className="px-10 py-5 bg-white/10 text-white border border-white/20 text-lg font-display font-bold rounded-pill hover:bg-white/20 transition-colors backdrop-blur-sm">
            Explore Flavours
          </button>
        </div>

        <p className="mt-16 text-sm font-display font-medium text-white/30 tracking-widest uppercase">
          Available nationwide · Delivered to your door · Always zero sugar
        </p>
      </motion.div>
    </section>
  );
}
