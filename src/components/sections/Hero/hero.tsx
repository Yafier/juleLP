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
    <>
      <Navigation />
      <motion.section className="min-h-screen flex items-end justify-center bg-gradient-to-bl from-blue-800 via-blue-500 to-white rounded-3xl mx-4 my-4">
        <div className="container mx-auto px-4 pb-0">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            {/* Animated Title */}
            <motion.h1 
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-serif px-4 leading-tight"
            >
              Dari Karyawan Biasa
              <br />
              Jadi Miliarder Digital
            </motion.h1>

            {/* Animated Description */}
            <motion.p 
              custom={1}  
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-white mb-8 max-w-2xl px-4"
            >
              Pernah kerja kantoran dengan gaji pas-pasan? Sekarang saya punya kebebasan waktu dan penghasilan miliaran per bulan.
            </motion.p>

            {/* Animated Form */}
            <motion.div 
              variants={formVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col md:flex-row gap-4 md:gap-2 mb-8 w-full max-w-xl px-4"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Masukkan email kamu..."
                className="flex-1 px-6 py-3 rounded-full bg-white/95 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)]"
              />
              <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-all hover:scale-105 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.2)]">
                Gabung Sekarang.
              </button>
            </motion.div>

            <div className="relative w-full max-w-3xl">
              <Image
                src="/jule 2.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="rounded-2xl w-full"
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
    </>
  );
} 