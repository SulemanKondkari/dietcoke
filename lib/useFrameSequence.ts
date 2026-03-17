"use client";

import { useEffect, useState, useRef } from "react";

export function useFrameSequence(totalFrames: number) {
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const frameImages: HTMLImageElement[] = [];

    const loadFrames = async () => {
      const promises = Array.from({ length: totalFrames }).map((_, i) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const frameIndex = i.toString().padStart(3, "0");
          img.src = `/frames/frame_${frameIndex}.jpg`;
          img.onload = () => {
            loadedCount++;
            setProgress((loadedCount / totalFrames) * 100);
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load frame: /frames/frame_${frameIndex}.jpg`);
            resolve();
          };
          frameImages[i] = img;
        });
      });

      await Promise.all(promises);
      setFrames(frameImages);
      setIsLoaded(true);
    };

    loadFrames();
  }, [totalFrames]);

  return { frames, isLoaded, progress };
}
