import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();
  const text = "SUCCESS IS INEVITABLE.";
  const letters = Array.from(text);

  // Animation Constants
  // Timeline:
  // 0.0s - 0.3s: Text Fades In
  // 0.3s - 1.2s: Text Hold (Stable) (~0.9s)
  // 1.2s - 2.0s: Disintegration (Drift + Fade Out)
  // 1.1s - 1.9s: Content Fades In (Overlapping with disintegration)

  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Global Overlay with Text */}
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#686a6c] pointer-events-none"
        initial={{ opacity: 1 }} // Start visible (nardo grey screen)
        animate={{ 
          opacity: 0,
          transition: { delay: 1.8, duration: 0.4 } // Remove overlay background at end
        }}
      >
        {/* Text Container */}
        <div className="relative z-10 flex flex-nowrap whitespace-nowrap justify-center w-full px-4 text-center select-none">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="text-white text-[4vw] lg:text-5xl font-bold inline-block"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                textShadow: '0 0 20px rgba(255,255,255,0.2)'
              }}
              initial={{ 
                opacity: 0, 
                filter: "blur(4px)",
                letterSpacing: "0.1em",
                y: 10
              }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(8px)"],
                letterSpacing: ["0.1em", "0.2em", "0.2em", "0.5em"],
                y: [10, 0, 0, -20 + (Math.random() - 0.5) * 40],
                x: [0, 0, 0, (Math.random() - 0.5) * 60]
              }}
              transition={{
                times: [0, 0.15, 0.55, 1], // Keyframe distribution
                duration: 2.0, 
                ease: "easeOut"
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Actual Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: 1.1, // Wait for text to start disintegrating
            duration: 0.8,
            ease: "easeOut" 
          }
        }}
        exit={{ 
          opacity: 0, 
          y: -12,
          transition: { duration: 0.35, ease: "easeIn" } // Fast exit
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};