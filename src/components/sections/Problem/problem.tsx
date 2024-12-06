"use client";

import React from 'react';
import { motion } from 'framer-motion';

const problems = [
  {
    id: 1,
    number: "01",
    tag: "FINANCIAL",
    title: "Gaji Cuma Cukup untuk Survive",
    description: "Setiap bulan habis untuk bayar bills, cicilan, dan kebutuhan basic. Kapan bisa punya passive income?",
    video: "/gaji.mp4",
    quote: "Hidup dari gaji ke gaji adalah cycle yang harus kamu break sekarang."
  },
  {
    id: 2,
    number: "02",
    tag: "LIFESTYLE",
    title: "Time Freedom? Impossible!",
    description: "Terikat jam kerja 9-5, weekend pun kadang harus lembur. Quality time sama keluarga? Dream on!",
    video: "/worker.mp4",
    quote: "Waktumu terlalu berharga untuk dihabiskan building someone else's dream."
  },
  {
    id: 3,
    number: "03",
    tag: "GROWTH",
    title: "Career Growth yang Lambat",
    description: "Naik jabatan butuh bertahun-tahun, bonus tidak seberapa. Meanwhile, inflation keeps rising!",
    video: "/career.mp4",
    quote: "Stop climbing the corporate ladder. Build your own elevator instead."
  }
];

export default function Problem() {
  return (
    <section className="relative bg-neutral-100">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 pt-20 pb-12 text-center"
      >
        <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
          The Reality Check
        </span>
        
        <h2 className="mt-6 font-serif">
          <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
            Familiar dengan
          </span>
          <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
            Situasi Ini?
          </span>
        </h2>
      </motion.div>

      {/* Problems Grid */}
      <div className="relative w-full space-y-0.5">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
              {/* Video Section */}
              <div className="relative h-[60vh] group overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={problem.video} type="video/mp4" />
                </video>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <p className="text-xs tracking-[0.2em] text-neutral-600 uppercase">
                      {problem.tag}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative h-[60vh] bg-white p-12 flex flex-col justify-center">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-neutral-400 font-serif text-lg mb-6"
                >
                  /{problem.number}
                </motion.span>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6"
                >
                  <span className="font-light italic">{problem.title}</span>
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-neutral-600 text-lg leading-relaxed mb-8"
                >
                  {problem.description}
                </motion.p>

                <motion.blockquote
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="border-l-2 border-neutral-200 pl-6 italic text-neutral-500"
                >
                  {problem.quote}
                </motion.blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif leading-snug text-neutral-800 mb-6">
            Ready for a change?
          </h3>
          <p className="text-neutral-600 leading-relaxed italic">
            &ldquo;Most people fail in life not because they aim too high and miss,
            but because they aim too low and hit.&rdquo;
          </p>
          <cite className="text-sm text-neutral-500 mt-4 block">
            — Iman Gadzhi
          </cite>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
    </section>
  );
} 