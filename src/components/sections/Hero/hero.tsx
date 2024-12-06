"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation/navigation';

// Enhanced animation variants
const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    rotateX: 15
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: custom * 0.3,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      opacity: { duration: 0.8 }
    }
  })
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

const decorativeVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    rotate: -5
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: custom * 0.2 + 0.5,
      duration: 1,
      ease: [0.215, 0.610, 0.355, 1.000]
    }
  })
};

const lineVariants = {
  hidden: {
    width: "0%",
    opacity: 0
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-neutral-100">
      <Navigation />
      
      <motion.section 
        className="container mx-auto px-4 py-24"
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Editorial Text */}
          <motion.div className="space-y-8">
            <motion.div variants={textVariants} custom={0}>
              <motion.h2 
                className="font-serif text-sm tracking-[0.3em] text-neutral-500 mb-4 overflow-hidden"
                variants={textVariants}
                custom={0}
              >
                KISAH INSPIRATIF
              </motion.h2>
              <motion.div className="overflow-hidden">
                <motion.h1 
                  className="font-serif text-5xl md:text-7xl leading-tight mb-6"
                  variants={textVariants}
                  custom={1}
                >
                  Perjalanan
                  <br />
                  <span className="italic font-light">Menuju Sukses</span>
                </motion.h1>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={textVariants} 
              custom={2}
              className="space-y-6 text-neutral-700"
            >
              <p className="text-lg md:text-xl font-light leading-relaxed">
                Hai, para pejuang mimpi,
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed">
                Saya pernah berada di posisi yang sama seperti kamu sekarang. Dari yang awalnya bergaji UMR, hingga akhirnya bisa membangun komunitas dengan 500+ orang successful individuals. Journey ini bukan hanya tentang pertumbuhan finansial—ini tentang transformasi hidup yang meaningful.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed">
                Let me be your guide dalam sistem yang sudah terbukti membantu ratusan orang achieve their dreams, sama seperti yang saya alami.
              </p>
            </motion.div>

            <motion.div 
              variants={textVariants} 
              custom={3}
              className="pt-6"
            >
              <span className="font-serif italic text-2xl text-neutral-600">
                &ldquo;Ini saatnya kamu menulis cerita suksesmu sendiri.&rdquo;
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Editorial Image */}
          <div className="relative">
            <motion.div 
              variants={imageVariants}
              className="relative z-10"
            >
              <div className="aspect-[2/3] relative">
                <Image
                  src="/jule 2.png"
                  alt="Juliana Parmadi Portrait"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Enhanced Decorative Elements */}
            <motion.div
              variants={decorativeVariants}
              custom={0}
              className="absolute -bottom-8 -left-8 w-32 h-32 border-l-2 border-b-2 border-neutral-300"
            />
            <motion.div
              variants={decorativeVariants}
              custom={1}
              className="absolute -top-8 -right-8 w-32 h-32 border-t-2 border-r-2 border-neutral-300"
            />
            
            {/* Additional Decorative Elements */}
            <motion.div
              variants={decorativeVariants}
              custom={2}
              className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-neutral-300/50"
            />
            <motion.div
              variants={decorativeVariants}
              custom={3}
              className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-neutral-300/50"
            />
          </div>
        </div>

        {/* Enhanced Editorial Details */}
        <motion.div className="mt-24 text-center relative">
          <motion.div 
            variants={lineVariants}
            className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8"
          />
          <motion.p
            variants={textVariants}
            custom={4}
            className="font-serif italic text-2xl text-neutral-600 max-w-2xl mx-auto"
          >
            &ldquo;Jangan sia-siakan waktumu lagi! Inilah moment untuk transform hidupmu dan create the success story yang selama ini kamu impikan.&rdquo;
          </motion.p>
          <motion.div 
            variants={lineVariants}
            className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8"
          />
        </motion.div>
      </motion.section>
    </div>
  );
} 