"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation/navigation';

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

// Image animation variant
const imageVariants = {
  hidden: { 
    opacity: 0,
    y: 100,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <>
      <Navigation />
      <div className="relative">
        <motion.section className="h-[75vh] md:min-h-screen flex items-start pt-12 justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 rounded-3xl mx-4 mt-2">
          <div className="container mx-auto px-4 h-full relative">
            <div className="flex flex-col items-center text-center max-w-6xl mx-auto h-full">
              {/* Title */}
              <motion.h1 
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif mb-1 text-white tracking-tight"
              >
                <span className="font-light italic">The Easiest Way</span>
                <br />
                <span className="font-medium">To Increase Your Income</span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-base sm:text-lg md:text-xl text-white/90 mb-0 max-w-3xl px-5"
              >
                Stop wasting your time! Sementara kamu ragu, orang lain sudah melangkah maju. 
                Saatnya raih kebebasan waktu dan penghasilan miliaran per bulan.
              </motion.p>

              {/* Image Container - Further reduced sizing */}
              <motion.div 
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-0 left-0 right-0 w-full"
              >
                {/* Main Image - Smaller sizes */}
                <div className="relative w-full mx-auto
                  h-[420px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]"
                >
                  <Image
                    src="/jule 2.png"
                    alt="Hero Image"
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 80vw,
                           70vw"
                    priority
                  />
                </div>

                {/* Popup Messages - Smaller text on mobile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute left-[10%] top-[35%] sm:top-[40%] bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg max-w-[180px] sm:max-w-[200px] text-left"
                >
                  <p className="text-sm sm:text-base md:text-lg font-medium text-blue-900">From Zero to Hero</p>
                  <p className="text-xs sm:text-sm md:text-base text-blue-600/70">
                    Started with UMR salary, now generating 8-digit monthly income. Your journey can start here!
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute right-[10%] top-[60%] sm:top-[70%] bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg max-w-[180px] sm:max-w-[200px] text-left"
                >
                  <p className="text-sm sm:text-base md:text-lg font-medium text-blue-900">500+ Success Stories</p>
                  <p className="text-xs sm:text-sm md:text-base text-blue-600/70">
                    Join our community of achievers who have transformed their lives. Do not miss out!
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                  className="hidden md:block absolute left-[15%] bottom-1/3 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-[220px] text-left"
                >
                  <p className="text-base md:text-lg font-medium text-blue-900">Time Freedom Achieved</p>
                  <p className="text-sm md:text-base text-blue-600/70">
                    Built a 7-figure business while having quality time with family. Ready to do the same?
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Added Quote Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-6 mb-4 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-8" />
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-blue-600">
              &quot;Apa yang ada
              <br />
              dipikiran aku waktu itu?&quot;
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-8" />
          </div>
        </motion.div>
      </div>
    </>
  );
} 