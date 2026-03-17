"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-bg-dark pt-24 pb-48 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="space-y-8">
            <span className="text-3xl font-display font-extrabold text-red tracking-tight">
              DIET COKE
            </span>
            <p className="text-white/45 font-body leading-relaxed max-w-xs">
              Fifty years of effortless style. Designed for those who don't compromise on taste or aesthetic.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'TikTok', 'X', 'YouTube'].map(social => (
                <a key={social} href="#" className="text-white/45 hover:text-red transition-colors font-display text-sm font-bold uppercase tracking-widest">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-end md:flex md:gap-24">
            <div className="space-y-6">
              <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs">Explore</h4>
              <ul className="space-y-4">
                {['Our Story', 'Flavours', 'Sustainability', 'Press', 'Careers'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/45 hover:text-white transition-colors font-body">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4">
                {['Privacy Policy', 'Cookie Settings', 'Terms', 'Accessibility'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/45 hover:text-white transition-colors font-body">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="credits" className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex flex-col gap-6">
            <h3 className="text-white/20 text-xs font-display font-bold uppercase tracking-[0.3em]">
              Created by
            </h3>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <a 
                href="https://www.linkedin.com/in/suleman-kondkari-4a6a57322" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col gap-1"
              >
                <span className="text-4xl lg:text-6xl font-display font-extrabold text-white group-hover:text-red transition-colors duration-500">
                  SULEMAN.
                </span>
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-display group-hover:text-white/60 transition-colors">
                  Software Architect / LinkedIn ↗
                </span>
              </a>
              <a 
                href="https://www.linkedin.com/in/pushkaraj-raut/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col gap-1"
              >
                <span className="text-4xl lg:text-6xl font-display font-extrabold text-white group-hover:text-red transition-colors duration-500">
                  PUSHKARAJ.
                </span>
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-display group-hover:text-white/60 transition-colors">
                  Motion Designer / LinkedIn ↗
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="text-white/20 text-xs font-body tracking-wider">
              © {new Date().getFullYear()} DIET COKE / THE COCA-COLA COMPANY.
            </p>
            <p className="text-white/20 text-[10px] font-body tracking-tight uppercase text-right max-w-xs leading-relaxed">
              Diet Coke is a registered trademark of The Coca-Cola Company. Zero Sugar and Zero Calories.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
