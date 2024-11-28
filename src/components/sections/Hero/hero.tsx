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

const formVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <div className="flex flex-col space-y-8">
      <Navigation />
      <motion.section className="h-[75vh] flex items-start pt-6 justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 rounded-3xl mx-4 mt-2 overflow-hidden">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto h-full">
            {/* Animated Title */}
            <motion.h1 
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 text-white font-serif px-1 leading-[1.1] tracking-tight"
            >
              <span className="font-light italic">The Easiest Way To</span>
              <br />
              <span className="font-medium">Generate More Income</span>
            </motion.h1>

            {/* Animated Description */}
            <motion.p 
              custom={1}  
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-lg text-white/90 mb-2 max-w-2xl px-1"
            >
              Bergabung bersama 1000+ orang lainnya yang sudah berhasil mendapatkan penghasilan pasti dengan nominal lebih dari 10 juta rupiah cuman dalam 3 bulan .
            </motion.p>

            <div className="flex-grow relative w-full max-w-3xl flex items-end justify-center mt-0">
              <Image
                src="/jule 2.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="w-full object-contain object-bottom"
                priority
              />

              {/* Animated Testimonial Cards */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-[55%] -translate-y-[55%] -left-4 bg-white/95 p-4 rounded-xl max-w-xs backdrop-blur-sm shadow-[0_4px_12px_-2px_rgba(0,0,0,0.12)] hidden md:block"
              >
                <p className="text-sm text-blue-950">Breakthrough: Dari 0 ke Rp100 Juta dalam 6 bulan pertama</p>
                <div className="flex items-center mt-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-xs text-gray-700">Andre Wijaya, Top Performer</span>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-[40%] -translate-y-[40%] right-4 bg-white/95 p-4 rounded-xl max-w-xs backdrop-blur-sm shadow-[0_4px_12px_-2px_rgba(0,0,0,0.12)] hidden md:block"
              >
                <p className="text-sm text-blue-950">Mindset & community ini mengubah game plan bisnis saya</p>
                <div className="flex items-center mt-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-xs text-gray-700">Jessica, Business Leader</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Moved text segment outside the main section */}
      <motion.div 
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        className="text-center px-4 mb-8"
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl tracking-wide leading-relaxed">
            <span className="text-blue-600 font-medium">/Alife</span>
            <br />
            <span className="text-blue-900 italic">
              Community that focus on Business
              <br />
              While helping to empower each other
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
} 