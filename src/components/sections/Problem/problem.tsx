"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Problem() {
  // Animation variants for text elements
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

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  // Animation variants for quote
  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Section Number */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600/80 text-xl mb-6 font-serif tracking-widest text-left"
          >
            /02
          </motion.div>
          
          {/* Animated Title */}
          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-blue-600 font-serif leading-snug tracking-tight"
          >
            Masih Terjebak di
            <br />
            Rutinitas 9-5?
          </motion.h2>
          
          {/* Animated Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Gaji Cuma Cukup untuk Survive",
                desc: "Setiap bulan habis untuk bayar bills, cicilan, dan kebutuhan basic. Kapan bisa punya passive income?"
              },
              {
                title: "Time Freedom? Impossible!",
                desc: "Terikat jam kerja 9-5, weekend pun kadang harus lembur. Quality time sama keluarga? Dream on!"
              },
              {
                title: "Career Growth yang Lambat",
                desc: "Naik jabatan butuh bertahun-tahun, bonus tidak seberapa. Meanwhile, inflation keeps rising!"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50/80 to-blue-100/50 border border-blue-100 
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
                  transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-blue-600/70">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated Quote */}
          <motion.div
            variants={quoteVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <blockquote className="text-xl md:text-2xl text-blue-600/70 leading-relaxed italic">
              &ldquo;Most people fail in life not because they aim too high and miss, but because they aim too low and hit.&rdquo;
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="block text-lg mt-4 font-semibold"
              >
                - Iman Gadzhi
              </motion.span>
            </blockquote>
          </motion.div>

          {/* Animated Bottom Text */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="relative w-full mb-10"
          >
            <h3 className="text-2xl md:text-3xl text-blue-800 font-bold mb-6">
              But here&apos;s the good news...
            </h3>
            <p className="text-lg md:text-xl text-blue-600/70 max-w-2xl mx-auto leading-relaxed">
              Ada cara untuk break free dari cycle ini. Sistem yang sudah proven works untuk ratusan orang seperti kamu yang ingin escape dari rat race.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 