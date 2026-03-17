"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { useFrameSequence } from "@/lib/useFrameSequence";

import TextOverlay from "./TextOverlay";

const TOTAL_FRAMES = 120;

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { frames, isLoaded, progress } = useFrameSequence(TOTAL_FRAMES);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = frames[index];

    if (!canvas || !ctx || !img) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight);
    const scaledW = img.naturalWidth * scale;
    const scaledH = img.naturalHeight * scale;
    const offsetX = (width - scaledW) / 2;
    const offsetY = (height - scaledH) / 2;

    ctx.drawImage(img, offsetX, offsetY, scaledW, scaledH);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.round(latest);
    drawFrame(index);
  });

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const currentIndex = Math.round(frameIndex.get());
        drawFrame(currentIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, frames]);

  const canvasOpacity = useTransform(smoothProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-bg-dark">
      <div className="sticky top-0 w-screen h-screen overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-dark z-[60]">
            <div className="text-red font-display text-4xl font-extrabold mb-4 animate-pulse">
              DIET COKE
            </div>
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        
        {isLoaded && (
          <div className="relative z-50 w-full h-full">
            <TextOverlay scrollYProgress={smoothProgress} />
          </div>
        )}
        
        <motion.canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity }}
          className="absolute inset-0 w-full h-full block will-change-transform z-0"
        />
      </div>
    </div>
  );
}



