"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

interface MobileCarouselProps {
  screenshots: ProjectScreenshot[];
  projectName?: string;
}

export default function MobileCarousel({ screenshots, projectName }: MobileCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  const getSlideProps = (index: number) => {
    const total = screenshots.length;
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);
    const isActive = offset === 0;
    const isAdjacent = absOffset === 1;
    const isVisible = absOffset <= 2;

    if (!isVisible) return null;

    const x = offset * 180;
    const scale = isActive ? 1 : isAdjacent ? 0.78 : 0.62;
    const opacity = isActive ? 1 : isAdjacent ? 0.55 : 0.25;
    const zIndex = isActive ? 10 : isAdjacent ? 5 : 1;
    const blur = isActive ? 0 : isAdjacent ? 3 : 6;
    const brightness = isActive ? 1 : isAdjacent ? 0.7 : 0.45;

    return { x, scale, opacity, zIndex, blur, brightness, offset };
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(false);
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    dragDelta.current = e.clientX - dragStartX.current;
    if (Math.abs(dragDelta.current) > 8) setIsDragging(true);
  };

  const handlePointerUp = () => {
    if (Math.abs(dragDelta.current) > 50) {
      if (dragDelta.current < 0) next();
      else prev();
    }
    dragDelta.current = 0;
  };

  if (!screenshots.length) return null;

  return (
    <div className="w-full flex flex-col items-center select-none" aria-label={`${projectName ?? "Project"} screenshots`}>
      {/* Carousel Stage */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: 580 }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {screenshots.map((shot, index) => {
          const props = getSlideProps(index);
          if (!props) return null;

          const { x, scale, opacity, zIndex, blur, brightness, offset } = props;
          const isActive = offset === 0;

          return (
            <motion.div
              key={shot.src + index}
              className="absolute cursor-pointer"
              style={{ zIndex }}
              animate={{ x, scale, opacity }}
              transition={{ type: "spring", stiffness: 320, damping: 36, mass: 1 }}
              onClick={() => {
                if (!isDragging) {
                  if (offset < 0) prev();
                  else if (offset > 0) next();
                }
              }}
            >
              {/* Phone Frame */}
              <div
                className="relative"
                style={{
                  width: 230,
                  height: 510,
                  filter: `blur(${blur}px) brightness(${brightness})`,
                  transition: "filter 0.4s ease",
                }}
              >
                {/* Phone Shell */}
                <div
                  className="absolute inset-0 rounded-[44px] border-[7px] border-gray-800 bg-black shadow-2xl overflow-hidden"
                  style={{
                    boxShadow: isActive
                      ? "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08) inset"
                      : "0 16px 32px rgba(0,0,0,0.35)",
                  }}
                >
                  {/* Notch */}
                  {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-24 h-6 bg-black rounded-b-2xl" /> */}

                  {/* Screen */}
                  <div className="absolute inset-0 rounded-[38px] overflow-hidden bg-gray-950">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* Screen glare */}
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-[38px] pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 45%)",
                      }}
                    />
                  )}
                </div>

                {/* Side buttons */}
                <div className="absolute right-[-9px] top-[90px] w-[5px] h-12 bg-gray-700 rounded-r-sm" />
                <div className="absolute left-[-9px] top-[80px] w-[5px] h-8 bg-gray-700 rounded-l-sm" />
                <div className="absolute left-[-9px] top-[118px] w-[5px] h-8 bg-gray-700 rounded-l-sm" />
                <div className="absolute left-[-9px] top-[156px] w-[5px] h-8 bg-gray-700 rounded-l-sm" />

                {/* Bottom bar */}
                {isActive && (
                  <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/30 z-20" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Caption */}
      <AnimatePresence mode="wait">
        <motion.p
          key={activeIndex}
          className="text-center text-sm text-gray-400 mt-2 h-5"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
        >
          {screenshots[activeIndex].caption ?? ""}
        </motion.p>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center gap-5 mt-5">
        <button
          onClick={prev}
          aria-label="Previous screenshot"
          className="w-9 h-9 rounded-full border border-violet-400/40 flex items-center justify-center text-violet-400 hover:bg-violet-500/10 hover:border-violet-400 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === activeIndex ? 20 : 6,
                height: 6,
                borderRadius: 999,
                background: i === activeIndex ? "rgb(139,92,246)" : "rgba(139,92,246,0.3)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next screenshot"
          className="w-9 h-9 rounded-full border border-violet-400/40 flex items-center justify-center text-violet-400 hover:bg-violet-500/10 hover:border-violet-400 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Counter */}
      <p className="text-xs text-gray-500 mt-3">
        {activeIndex + 1} / {screenshots.length}
      </p>
    </div>
  );
}