"use client";

import { motion } from "framer-motion";

export default function TickerSection() {
  const events = [
    "First introduced: 1982",
    "First diet cola endorsed by a pop star",
    "The can that appeared in 47 Warhol prints",
    "The #1 diet soft drink globally",
    "Zero Sugar. Full Taste. Since 1982.",
    "Because I Can.",
    "An Unapologetic Icon.",
  ];

  return (
    <section className="py-24 bg-white border-y border-black/5 overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="w-full relative flex overflow-x-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...events, ...events].map((event, index) => (
              <span
                key={index}
                className="text-4xl lg:text-5xl font-display font-extrabold text-text-primary px-12 lowercase"
              >
                {event} <span className="text-red ml-12">·</span>
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <h2 className="text-6xl lg:text-9xl font-display font-extrabold text-text-primary uppercase tracking-tighter">
            Not a trend.<br />A constant.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
