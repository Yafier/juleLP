"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  achievement: string;
  before: string;
}

export default function Testimonials() {
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

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Wijaya",
      role: "Top Leader", 
      image: "/jule.png",
      quote: "Dulu aku ragu banget untuk mulai. Tapi Jules tuh bener-bener guide aku step by step. Dalam 3 bulan pertama udah bisa closing 4 nasabah premium!",
      achievement: "Sekarang: Income 50jt/bulan",
      before: "Sebelumnya: Marketing Staff"
    },
    {
      name: "Michael Tanjung",
      role: "Senior Partner",
      image: "/jule.png",
      quote: "Yang aku suka dari komunitas ini adalah support systemnya. Kita nggak pernah merasa sendirian. Ada mentor yang selalu ready bantu 24/7.",
      achievement: "Sekarang: Income 80jt/bulan",
      before: "Sebelumnya: Bank Officer"
    },
    {
      name: "Linda Kusuma", 
      role: "Rising Star",
      image: "/jule.png",
      quote: "Awalnya cuma coba-coba karena liat temen sukses. Ternyata beneran bisa mengubah hidup! Sekarang udah bisa kasih orang tua passive income.",
      achievement: "Sekarang: Income 35jt/bulan",
      before: "Sebelumnya: Fresh Graduate"
    },
    {
      name: "David Pratama",
      role: "Elite Partner",
      image: "/jule.png",
      quote: "System yang dipake simple tapi powerful. Yang penting konsisten dan mau belajar. Dalam 6 bulan udah bisa quit corporate job!",
      achievement: "Sekarang: Income 100jt/bulan",
      before: "Sebelumnya: Senior Engineer"
    },
    {
      name: "Anita Sulistyo",
      role: "Millionaire Mentor",
      image: "/jule.png",
      quote: "Sebagai single mom, ini adalah jawaban doaku. Sekarang aku bisa kasih anak-anak pendidikan terbaik sambil punya waktu lebih banyak sama mereka.",
      achievement: "Sekarang: Income 150jt/bulan",
      before: "Sebelumnya: Single Mom & Guru"
    },
    {
      name: "Ricky Wijaya",
      role: "Young Achiever",
      image: "/jule.png",
      quote: "Fresh graduate dengan utang kuliah. Sempet ragu karena zero experience di sales. Tapi sistem mentoring disini bikin semua jadi mungkin!",
      achievement: "Sekarang: Income 45jt/bulan",
      before: "Sebelumnya: Fresh Graduate dengan Utang"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-serif text-lg md:text-xl mb-3 block"
            >
              /05
            </motion.span>

            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 tracking-tight"
            >
              <span className="font-light italic">Their Stories,</span>
              <br />
              <span className="font-medium">Their Transformation</span>
            </motion.h2>

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-blue-600/70 max-w-3xl font-light leading-relaxed"
            >
              Mereka yang sudah membuktikan bahwa perubahan itu nyata
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testi, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-blue-50/50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all border border-blue-100/50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={testi.image}
                    alt={testi.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-lg md:text-xl text-blue-900">{testi.name}</h3>
                    <p className="text-sm md:text-base text-blue-600/70">{testi.role}</p>
                  </div>
                </div>

                <blockquote className="text-base md:text-lg text-blue-600/80 mb-4 italic">
                  &ldquo;{testi.quote}&rdquo;
                </blockquote>

                <div className="border-t border-blue-100 pt-4">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-blue-600/70">{testi.before}</span>
                    <span className="font-medium text-blue-900">{testi.achievement}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-16 space-y-2"
          >
            <p className="text-lg md:text-xl text-blue-600/70 font-serif italic">
              And many more success stories waiting to be written...
            </p>
            <p className="text-base md:text-lg text-blue-900 font-medium">
              Including yours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}