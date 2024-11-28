"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Problem() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const problems = [
    {
      number: "01",
      title: "Gaji Cuma Cukup untuk Survive",
      description: "Setiap bulan habis untuk bayar bills, cicilan, dan kebutuhan basic. Kapan bisa punya passive income?",
      video: "/gaji.mp4"
    },
    {
      number: "02",
      title: "Time Freedom? Impossible!",
      description: "Terikat jam kerja 9-5, weekend pun kadang harus lembur. Quality time sama keluarga? Dream on!",
      video: "/worker.mp4"
    },
    {
      number: "03",
      title: "Career Growth yang Lambat",
      description: "Naik jabatan butuh bertahun-tahun, bonus tidak seberapa. Meanwhile, inflation keeps rising!",
      video: "/career.mp4"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="mb-16 md:mb-24 last:mb-0"
            >
              {/* Section Header */}
              <div className="mb-6 md:mb-8">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-blue-600 font-serif text-lg md:text-xl mb-3 block"
                >
                  /{problem.number}
                </motion.span>
                
                <motion.h2
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 tracking-tight"
                >
                  <span className="font-light italic">{problem.title}</span>
                </motion.h2>
                
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                  className="text-sm sm:text-base md:text-lg text-blue-600/70 max-w-2xl"
                >
                  {problem.description}
                </motion.p>
              </div>

              {/* Video Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-video w-full rounded-2xl overflow-hidden"
              >
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={problem.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          ))}

          {/* Quote Section */}
          <motion.blockquote
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="mt-8 md:mt-12 text-center"
          >
            <p className="text-lg md:text-xl font-serif italic text-blue-900">
              "Most people fail in life not because they aim too high and miss,
              <br />
              but because they aim too low and hit."
            </p>
            <cite className="text-sm md:text-base text-blue-600/70 mt-4 block">
              — Iman Gadzhi
            </cite>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
} 