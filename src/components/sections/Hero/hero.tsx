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

export default function Hero() {
  return (
    <>
      <Navigation />
      <motion.section className="h-[75vh] md:min-h-screen flex items-start pt-12 justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 rounded-3xl mx-4 mt-2 mb-4">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto h-full">
            {/* Title - Added spacing at top */}
            <motion.h1 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-1 text-white tracking-tight"
            >
              <span className="font-light italic">The Easiest Way</span>
              <br />
              <span className="font-medium">To Increase Your Income</span>
            </motion.h1>

            {/* Description - Tighter spacing */}
            <motion.p 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-sm sm:text-base md:text-lg text-white/90 mb-0 max-w-2xl px-4"
            >
              Stop wasting your time! Sementara kamu ragu, orang lain sudah melangkah maju. 
              Saatnya raih kebebasan waktu dan penghasilan miliaran per bulan.
            </motion.p>

            {/* Image Container - Reduced top margin */}
            <div className="relative w-full max-w-3xl mt-auto">
              {/* Main Image */}
              <Image
                src="/jule 2.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />

              {/* Popup Messages - Adjusted positions */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute left-4 top-1/3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[180px] text-left"
              >
                <p className="text-sm font-medium text-blue-900">Mindset & Community</p>
                <p className="text-xs text-blue-600/70">Transform your mindset, join our exclusive community</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute right-4 top-2/3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[180px] text-left"
              >
                <p className="text-sm font-medium text-blue-900">Proven System</p>
                <p className="text-xs text-blue-600/70">Step-by-step blueprint to success</p>
              </motion.div>

              {/* Expert Mentoring popup - Desktop only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="hidden md:block absolute left-0 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[200px] text-left"
              >
                <p className="text-sm font-medium text-blue-900">Expert Mentoring</p>
                <p className="text-xs text-blue-600/70">Get guidance from successful mentors</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
} 