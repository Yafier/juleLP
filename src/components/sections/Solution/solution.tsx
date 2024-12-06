"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const systemSections = [
    {
      point: {
        title: "MINDSET TRANSFORMATION",
        tag: "BRANDING DIGITAL",
        description: "Dulu aku juga sama seperti kamu, percaya kalau jalan menuju sukses cuma lewat karir 9-5. Takut ambil risiko bisnis karena mindset 'aman'. But look at me now - dari karyawan biasa jadi entrepreneur dengan passive income jutaan per hari!",
        video: "/4.mp4"
      }
    },
    {
      point: {
        title: "HIGH-VALUE NETWORK",
        tag: "INVESTMENT IN FUTURE",
        description: "Dulu aku nggak punya network sama sekali. Sekarang? I'm surrounded by successful people yang mendorong aku grow beyond my limits. Let me help you get the same transformation!",
        video: "/2.mp4"
      }
    },
    {
      point: {
        title: "PROVEN BUSINESS SYSTEM",
        tag: "UNITS COMMUNITY",
        description: "From zero business knowledge ke sistem yang menghasilkan miliaran. This is the exact system that changed my life! Dan sekarang udah proven work buat ratusan member.",
        video: "/3.mp4"
      }
    },
    {
      point: {
        title: "EXPERT MENTORING",
        tag: "PERSONAL GROWTH",
        description: "Dulu aku berjuang sendiri tanpa guidance. Until aku join business ini yang provide mentorship yang bener-bener leading with empathy and fire yang ngebuat aku terus semangat. Sekarang? I'm here to be the mentor I wish I had! Your success is my personal mission.",
        video: "/1.mp4"
      }
    },
    {
      point: {
        title: "BREAKTHROUGH FORMULA",
        tag: "SUCCESS SYSTEM",
        description: "The exact formula yang transform aku dari staff biasa ke 7-figure entrepreneur. Dari takut sales ke closing deals worth billions! This can be your story too.\n\nI'll share with you all you need to get the same result.",
        video: "/5.mp4"
      }
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Section */}
          <div className="mb-24">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white/90 font-serif text-lg md:text-xl mb-4 block"
            >
              /03
            </motion.span>

            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-8 tracking-tight text-white"
            >
              <span className="font-light italic">Meet Juliana Parmadi,</span>
              <br />
              <span className="font-medium">Your Guide to Financial Freedom</span>
            </motion.h2>

            {/* Video Section */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 rounded-2xl overflow-hidden aspect-video w-full"
            >
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/jule-1.mp4" type="video/mp4" />
              </video>
            </motion.div>

            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white/80 text-base md:text-lg leading-relaxed space-y-6"
            >
              <p>
                &quot;Hi, aku Juliana Parmadi atau Jule. 5 tahun lalu, aku masih seperti kebanyakan fresh graduate - 
                kerja 9-5 dengan gaji UMR, commuting 3 jam setiap hari, dan merasa hidup cuma untuk bayar tagihan.&quot;
              </p>
              <p>
                &quot;Sebagai seorang ibu, aku punya mimpi besar untuk anakku. Aku ingin dia bisa dapat 
                pendidikan terbaik dan masa depan cerah. Tapi dengan gaji UMR, mimpi ini rasanya jauh.&quot;
              </p>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative aspect-[3/4] bg-black/30 backdrop-blur-sm 
                              rounded-lg overflow-hidden border border-white/10">
                  {/* Video Background */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-50 
                             scale-105 group-hover:scale-100 transition-transform duration-700"
                  >
                    <source src={section.point.video} type="video/mp4" />
                  </video>
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col">
                    {/* Tag */}
                    <motion.div 
                      style={{
                        opacity: useTransform(
                          scrollYProgress,
                          [0, 0.5],
                          [0.5, 1]
                        )
                      }}
                      className="mb-auto"
                    >
                      <span className="text-xs tracking-[0.3em] text-white/70 uppercase">
                        {section.point.tag}
                      </span>
                    </motion.div>

                    {/* Title & Description */}
                    <div>
                      <motion.h3 
                        style={{
                          y: useTransform(
                            scrollYProgress,
                            [0, 0.5],
                            [50, 0]
                          )
                        }}
                        className="text-2xl md:text-3xl font-bold text-white mb-4"
                      >
                        {section.point.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/80 text-sm leading-relaxed
                                 transform translate-y-8 group-hover:translate-y-0 
                                 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      >
                        {section.point.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Card Number */}
                  <div className="absolute top-4 right-4">
                    <span className="text-sm text-white/40 font-mono">
                      {`0${index + 1}`}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '500+', text: 'Millionaire Members' },
              { number: '1000+', text: 'Lives Changed' },
              { number: '100+', text: 'Monthly Success Stories' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm">
                  {stat.text}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 