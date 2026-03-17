"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

interface BeatProps {
  scrollRange: [number, number];
  position?: "center" | "left" | "right";
  children: React.ReactNode;
}

const Beat = ({ scrollRange, position = "center", children }: BeatProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  // Since this is relative to global scroll, we need to pass the progress from HeroCanvas or use a global one
  // For simplicity, we'll use transforms that match the ranges defined in the brief
  return (
    <div className={`absolute inset-0 flex items-center p-12 lg:p-24 pointer-events-none z-10 ${
      position === "center" ? "justify-center text-center" : 
      position === "left" ? "justify-start text-left" : "justify-end text-right"
    }`}>
      {children}
    </div>
  );
};

export default function TextOverlay({ scrollYProgress }: { scrollYProgress: any }) {
  // Hero: Diet Coke. Because I Can.
  const opacity1 = useTransform(scrollYProgress, [0, 0.03, 0.08, 0.12], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.05], [50, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.05], [0.9, 1]);
  
  const yPara1 = useTransform(scrollYProgress, [0, 0.1], [0, -40]);
  const yPara2 = useTransform(scrollYProgress, [0, 0.1], [0, -80]);

  // Icon: An icon, unchanged.
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.18, 0.28, 0.32], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.15, 0.2], [-80, 0]);
  const blur2 = useTransform(scrollYProgress, [0.15, 0.18, 0.28, 0.32], ["10px", "0px", "0px", "10px"]);
  const yPara3 = useTransform(scrollYProgress, [0.15, 0.3], [0, -30]);

  // Sensory: That sound. That feeling.
  const opacity3 = useTransform(scrollYProgress, [0.35, 0.38, 0.52, 0.55], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.35, 0.4], [80, 0]);
  const blur3 = useTransform(scrollYProgress, [0.35, 0.38, 0.52, 0.55], ["10px", "0px", "0px", "10px"]);
  const yPara4 = useTransform(scrollYProgress, [0.35, 0.5], [0, -30]);

  // Refreshment: Pure refreshment, perfectly light.
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.63, 0.73, 0.76], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.65], [60, 0]);
  const scale4 = useTransform(scrollYProgress, [0.6, 0.65], [1.05, 1]);
  const yPara5 = useTransform(scrollYProgress, [0.6, 0.75], [0, -40]);

  // Final: NO SUGAR. NO COMPROMISE. NO REGRETS.
  const opacity5 = useTransform(scrollYProgress, [0.82, 0.88, 0.95, 1], [0, 1, 1, 1]);
  const scale5 = useTransform(scrollYProgress, [0.82, 0.88], [1.2, 1]);
  const y5 = useTransform(scrollYProgress, [0.82, 0.88], [40, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Beat 1: Hero */}
      <motion.div 
        style={{ opacity: opacity1, y: y1, scale: scale1 }} 
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 lg:p-12 z-20"
      >
        <motion.h1 
          style={{ y: yPara1 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="text-[100px] lg:text-[220px] font-display font-extrabold text-white tracking-[-0.06em] leading-[0.8] mb-8"
        >
          Diet Coke.
        </motion.h1>
        <motion.h2 
          style={{ y: yPara2 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="text-4xl lg:text-7xl font-display font-bold text-red tracking-tight max-w-4xl"
        >
          BECAUSE I CAN.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-lg lg:text-2xl font-body text-white/60 tracking-wide uppercase"
        >
          Zero sugar. Full taste. No apologies.
        </motion.p>
      </motion.div>

      {/* Beat 2: Icon */}
      <motion.div 
        style={{ opacity: opacity2, x: x2, y: yPara3, filter: `blur(${blur2})` }} 
        className="absolute inset-y-0 left-0 flex flex-col justify-center p-12 lg:p-32 max-w-2xl text-left"
      >
        <h2 className="text-6xl lg:text-9xl font-display font-extrabold text-white leading-[0.9] tracking-tighter mb-8">
          An icon,<br />unchanged.
        </h2>
        <p className="text-xl lg:text-2xl font-body text-white/50 leading-relaxed mb-10">
          The slim can. The red. The silver. <br />
          Designed for those who don't compromise.
        </p>
        <div className="flex gap-4">
          <span className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-tag border border-white/20 text-xs font-display font-bold tracking-[0.1em] text-white uppercase">
            EST. 1982
          </span>
          <span className="px-5 py-2 bg-red text-white rounded-tag text-xs font-display font-bold tracking-[0.1em] uppercase">
            ZERO SUGAR
          </span>
        </div>
      </motion.div>

      {/* Beat 3: Sensory */}
      <motion.div 
        style={{ opacity: opacity3, x: x3, y: yPara4, filter: `blur(${blur3})` }} 
        className="absolute inset-y-0 right-0 flex flex-col justify-center p-12 lg:p-32 max-w-2xl text-right items-end"
      >
        <h2 className="text-6xl lg:text-[120px] font-display font-extrabold text-white leading-[0.85] tracking-tight mb-12">
          That sound.<br />That feeling.
        </h2>
        <div className="space-y-6">
          {["Zero sugar. Real refreshment.", "Crisp, light, unmistakable.", "Cold. Now."].map((text, i) => (
            <motion.div 
              key={i} 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              className="flex items-center justify-end gap-5"
            >
              <span className="text-2xl lg:text-3xl font-display font-medium text-white/40 italic">
                {text}
              </span>
              <div className="w-2.5 h-2.5 bg-red rounded-full" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Beat 4: Refreshment */}
      <motion.div 
        style={{ opacity: opacity4, y: y4, scale: scale4 }} 
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      >
        <motion.h2 
          style={{ y: yPara5 }}
          className="text-6xl lg:text-[160px] font-display font-extrabold text-white leading-[0.8] tracking-[-0.04em] mb-12"
        >
          PERFECTLY<br />LIGHT.
        </motion.h2>
        <p className="text-2xl lg:text-3xl font-body text-white/50 max-w-3xl leading-relaxed">
          The taste that keeps you coming back.<br />
          Guilt-free, every single time.
        </p>
      </motion.div>

      {/* Beat 5: Final CTA */}
      <motion.div 
        style={{ opacity: opacity5, scale: scale5, y: y5 }} 
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      >
        <h1 className="text-[100px] lg:text-[240px] font-display font-extrabold text-white leading-[0.8] tracking-[-0.08em] mb-12">
          NO REGRETS.
        </h1>
        <p className="text-2xl lg:text-4xl font-display font-bold text-red tracking-tight mb-16 uppercase italic">
          Diet Coke. For those who live on their own terms.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 pointer-events-auto">
          <button className="px-14 py-6 bg-red text-white text-xl font-display font-bold rounded-pill hover:-translate-y-1 transition-transform shadow-2xl shadow-red/40">
            Find Your Coke →
          </button>
          <button className="px-14 py-6 bg-white/10 text-white border border-white/20 text-xl font-display font-bold rounded-pill hover:bg-white/20 transition-colors backdrop-blur-md">
            Explore flavours
          </button>
        </div>
      </motion.div>
    </div>
  );
}



