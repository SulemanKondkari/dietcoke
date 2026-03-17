"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function StickyBuyBar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling past hero (~500vh)
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 4.5; // Roughly near the end of the hero
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: isVisible ? "0%" : "100%" }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 h-14 bg-white border-t border-black/5 bg-white/95 backdrop-blur-md hidden md:block"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/frames/frame_000.jpg" alt="Mini Can" className="w-8 h-8 object-contain" />
          <span className="text-sm font-display font-bold text-text-primary">
            Diet Coke 330ml · <span className="text-text-secondary font-medium">Zero Sugar</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-text-primary text-xs font-display font-bold uppercase tracking-widest hover:text-red transition-colors">
            Find in Store
          </button>
          <button className="px-6 py-2 bg-red text-white text-xs font-display font-bold uppercase tracking-widest rounded-pill hover:bg-red-light transition-colors shadow-sm">
            Buy Online →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
