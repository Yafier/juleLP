"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function HeroFirst() {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover grayscale"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="/jule-bgs.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h1 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif mb-6 text-white tracking-tight"
          >
            <span className="font-light italic block mb-2 text-white/90">The Easiest Way</span>
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
              To Increase Your Income
            </span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-base sm:text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light tracking-wide"
          >
            Mengenalkan sistem bisnis yang berhasil membuat aku dan 500+ orang lainnya to have 8 to 9-digit monthly income.
          </motion.p>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <button className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-colors">
              Start Your Journey
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-medium hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-[2px] h-16 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 