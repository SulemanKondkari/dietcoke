"use client";

import { motion } from "framer-motion";

export default function SustainabilityStory() {
  const stats = [
    {
      label: "Recyclable",
      value: "100%",
      detail: "Infinitely repeatable lifecycle.",
    },
    {
      label: "Recycled Content",
      value: "68%",
      detail: "Aluminium in every new can.",
    },
    {
      label: "Global Reach",
      value: "#1",
      detail: "The most recycled container on Earth.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-silver-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-5xl lg:text-7xl font-display font-extrabold text-text-primary mb-8">
              A circular icon.
            </h2>
            <p className="text-xl font-body text-text-secondary leading-relaxed mb-12">
              Diet Coke isn't just designed for the moment. It's designed for forever. 
              Our aluminium cans are 100% recyclable, and we're committed to a future 
              where every can comes back as a new one.
            </p>
            
            <button className="text-red font-display font-bold text-lg border-b-2 border-red pb-1 hover:text-red-light hover:border-red-light transition-colors">
              Our Sustainability Promise →
            </button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-6 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-10 rounded-card shadow-sm border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div>
                  <h3 className="text-sm font-display font-bold text-text-muted uppercase tracking-widest mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-lg font-body text-text-secondary">
                    {stat.detail}
                  </p>
                </div>
                <span className="text-7xl lg:text-8xl font-display font-extrabold text-red tabular-nums">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
