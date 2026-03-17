"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const IngredientLine = ({ text, range }: { text: string; range: [number, number] }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 40%"],
  });

  const color = useTransform(scrollYProgress, [0, 1], ["#999999", "#111111"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  return (
    <motion.p
      ref={ref}
      style={{ color, opacity, scale }}
      className="text-3xl lg:text-5xl font-display font-bold leading-tight py-4"
    >
      {text}
    </motion.p>
  );
};

export default function TasteSection() {
  const ingredients = [
    "Carbonated Water",
    "Caramel Colour",
    "Phosphoric Acid",
    "Sweeteners (Aspartame, Acesulfame K)",
    "Natural Flavourings including Caffeine",
    "Acidity Regulator (Sodium Citrate)",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-64 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <h2 className="text-6xl lg:text-9xl font-display font-extrabold text-text-primary tracking-tighter">
            What makes it taste<br />like this?
          </h2>
        </motion.div>

        <div className="space-y-2">
          {ingredients.map((item, index) => (
            <IngredientLine 
              key={item} 
              text={item} 
              range={[0.1 + index * 0.1, 0.2 + index * 0.1]} 
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-48"
        >
          <p className="text-4xl lg:text-6xl font-display font-bold text-text-primary italic leading-tight">
            Nothing we'll apologize for.<br />
            And something that's just...<br />
            <span className="text-red not-italic font-extrabold block mt-6 text-8xl lg:text-[180px] tracking-tighter leading-none">
              DIET COKE.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

