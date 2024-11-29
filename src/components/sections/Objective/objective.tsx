"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Objective() {
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
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

  const steps = [
    {
      title: "Mindset & Psychology of Success",
      description: "Apakah kamu merasa stuck dengan mindset yang sama? Aku akan membagikan rahasia mindset yang mengubah hidupku dari UMR ke penghasilan miliaran. It's time to break free!",
      points: [
        "Bongkar mindset toxic yang bikin kamu stuck bertahun-tahun",
        "Master the psychology of wealth yang aku pelajari dari mentor terbaik",
        "Upgrade cara berpikirmu seperti top 1% entrepreneurs"
      ],
      image: "/1.png"
    },
    {
      title: "High-Value Network Access",
      description: "Remember: your network is your net worth. Aku masih ingat rasanya sendirian tanpa mentor. Sekarang, aku buka akses ke circle ekslusif yang akan transform hidupmu!",
      points: [
        "Direct access ke inner circle para millionaire yang biasanya tertutup", 
        "Weekly mastermind yang akan push potensialmu ke level maksimal",
        "Premium networking events yang bisa ubah game bisnismu"
      ],
      image: "/6.png"
    },
    {
      title: "Proven Business System",
      description: "Dulu aku bingung harus mulai dari mana. Sekarang, aku share sistem yang sudah proven menghasilkan miliaran untuk aku dan member-memberku. Are you ready to join us?",
      points: [
        "Blueprint detail yang aku gunakan untuk capai income 8-9 digit",
        "Semua tools dan materials sudah disiapkan - tinggal eksekusi",
        "Sistem autopilot yang terus generate income 24/7"
      ],
      image: "/3.png"
    },
    {
      title: "Expert Mentoring Program",
      description: "Bayangkan punya mentor yang available 24/7, yang sudah pernah ada di posisimu dan berhasil. That's exactly what you'll get! Aku akan guide you personally.",
      points: [
        "Personal coaching intensif untuk accelerate progressmu",
        "Support system 24/7 yang selalu ada saat kamu butuh",
        "Sistem monitoring yang ensure kamu stay on track"
      ],
      image: "/4.png"
    },
    {
      title: "Fast-Track Implementation",
      description: "Dalam 3 bulan, aku transform dari skeptis jadi sukses. Kalau kamu serius dan follow the system, I guarantee you can do it too. The question is: are you ready?",
      points: [
        "Proven 90-day roadmap to your first success",
        "Progress tracking yang bikin kamu konsisten",
        "Real results for committed action-takers*"
      ],
      image: "/5.png"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-serif text-lg md:text-xl mb-3 block"
            >
              /04
            </motion.span>

            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 tracking-tight"
            >
              <span className="font-light italic">Tujuan Aku Sederhana:</span>
              <br />
              <span className="font-medium">Membantumu Meraih Lebih</span>
            </motion.h2>

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-blue-600/70 max-w-3xl font-light leading-relaxed"
            >
              Membantu kamu menemukan potensi tersembunyimu dan mengubahnya menjadi kesuksesan nyata
            </motion.p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="md:w-1/2 bg-blue-600 p-8 rounded-2xl text-white"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4">
                    <span className="font-medium">Step {index + 1}:</span>
                    <br />
                    <span className="font-light italic">{step.title}</span>
                  </h3>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-white/90">
                      {step.description}
                    </p>
                    <div className="pl-4 border-l-2 border-white/20 space-y-2">
                      {step.points.map((point, i) => (
                        <p key={i} className="text-sm md:text-base text-white/80">
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={500}
                    height={300}
                    className="rounded-2xl w-full shadow-lg"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-24 space-y-8 bg-blue-600 p-12 rounded-2xl text-white"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight">
              <span className="font-light italic">Ready to Start Your Journey?</span>
            </h3>
            
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
              Do not let another day pass by watching others succeed. 
              Your time is now - join our community of achievers today!
            </p>

            <button className="px-8 py-4 bg-white text-blue-600 rounded-full 
              hover:bg-blue-50 transition-all hover:scale-105 shadow-lg
              text-base md:text-lg font-medium"
            >
              YA, SAYA MAU SUKSES SEKARANG!
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 