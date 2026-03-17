"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  const navLinks = [
    { name: "Taste", href: "#" },
    { name: "Lifestyle", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Credits", href: "#credits" },
    { name: "Find a Can", href: "#" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-14 transition-all duration-350 ease-[cubic-bezier(0.25,0,0.25,1)] ${
          isScrolled
            ? "bg-bg-primary/92 backdrop-blur-xl border-b border-black/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <span className={`text-2xl font-display font-extrabold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-red" : "text-red"
            }`}>
              DIET COKE
            </span>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-display font-medium tracking-wider uppercase transition-opacity duration-300 hover:opacity-100 ${
                    isScrolled ? "text-text-primary opacity-100" : "text-text-primary opacity-70"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              className={`hidden md:block px-6 py-2 rounded-pill font-display font-bold text-sm tracking-wide transition-all duration-350 transform ${
                isScrolled
                  ? "bg-red text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(228,0,43,0.35)]"
                  : "border-[1.5px] border-red text-red hover:bg-red/5"
              }`}
            >
              Shop Now →
            </button>
            
            <button 
              className="md:hidden text-text-primary"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[110] bg-bg-primary flex flex-col p-6"
      >
        <div className="flex justify-between items-center mb-12">
          <span className="text-2xl font-display font-extrabold text-red">DIET COKE</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={24} className="text-text-primary" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-4xl font-display font-bold text-text-primary hover:text-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-8 bg-red text-white py-4 rounded-pill font-display font-bold text-lg">
            Shop Now →
          </button>
        </div>
      </motion.div>
    </>
  );
}
