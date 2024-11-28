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
      description: "Stop wasting your time with limiting beliefs! Discover rahasia mindset yang membuat orang biasa bisa menghasilkan income luar biasa.",
      points: [
        "Breakthrough limiting beliefs yang menghambat kesuksesanmu",
        "Psychology of Wealth yang jarang dibahas",
        "Cara berpikir seperti entrepreneur sukses"
      ],
      image: "/1.png"
    },
    {
      title: "High-Value Network Access", 
      description: "Bergabung dengan komunitas ekslusif yang akan mendorongmu menjadi versi terbaik. Don&apos;t miss out on this opportunity!",
      points: [
        "Akses ke network para millionaire",
        "Weekly mastermind session dengan top performers",
        "Exclusive events & business opportunities"
      ],
      image: "/6.png"
    },
    {
      title: "Proven Business System",
      description: "Sistem yang sudah menghasilkan ratusan juta hingga miliaran rupiah untuk member kami. Ready to scale your success?",
      points: [
        "Step-by-step blueprint menuju income 8 digit",
        "Done-for-you marketing materials", 
        "Automated income generation system"
      ],
      image: "/3.png"
    },
    {
      title: "Expert Mentoring Program",
      description: "Dibimbing langsung oleh mentor yang sudah membuktikan hasil. Your success is our priority!",
      points: [
        "1-on-1 coaching dengan expert",
        "Daily support group yang aktif 24/7",
        "Accountability system untuk hasil maksimal"
      ],
      image: "/4.png"
    },
    {
      title: "Fast-Track Implementation",
      description: "3 Bulan. That&apos;s all it takes untuk hasil pertamamu. The time for action is NOW!",
      points: [
        "90-day action plan yang terstruktur",
        "Weekly progress tracking & optimization",
        "Guaranteed results with committed action*"
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
              Don&apos;t let another day pass by watching others succeed. 
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