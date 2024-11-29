"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "start start"]
  });

  // Gradient transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    [
      "rgb(255, 255, 255)",
      "rgb(30, 58, 138)" // Darker blue to match gradient
    ]
  );

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

  const systemSections = [
    {
      point: {
        title: "MINDSET TRANSFORMATION",
        description: "Dulu aku juga sama seperti kamu, percaya kalau jalan menuju sukses cuma lewat karir 9-5. Takut ambil risiko bisnis karena mindset 'aman'. But look at me now - dari karyawan biasa jadi entrepreneur dengan passive income jutaan per hari!\n\nLet me share what changed my life with you by joining this community",
        video: "/4.mp4"
      }
    },
    {
      point: {
        title: "HIGH-VALUE NETWORK",
        description: "Dulu aku nggak punya network sama sekali. Sekarang? I'm surrounded by successful people yang mendorong aku grow beyond my limits. Let me help you get the same transformation!\n\nWhat you'll get by joining this community is endless.",
        video: "/2.mp4"
      }
    },
    {
      point: {
        title: "PROVEN BUSINESS SYSTEM",
        description: "From zero business knowledge ke sistem yang menghasilkan miliaran. This is the exact system that changed my life! Dan sekarang udah proven work buat ratusan member.\n\nThe system isn't build for orang terpilih, tapi for everyone who's willing to do more to change their life.",
        video: "/3.mp4"
      }
    },
    {
      point: {
        title: "EXPERT MENTORING",
        description: "Dulu aku berjuang sendiri tanpa guidance. Until aku join business ini yang provide mentorship yang bener-bener leading with empathy and fire yang ngebuat aku terus semangat. Sekarang? I'm here to be the mentor I wish I had! Your success is my personal mission.",
        video: "/1.mp4"
      }
    },
    {
      point: {
        title: "BREAKTHROUGH FORMULA",
        description: "The exact formula yang transform aku dari staff biasa ke 7-figure entrepreneur. Dari takut sales ke closing deals worth billions! This can be your story too.\n\nI'll share with you all you need to get the same result.",
        video: "/5.mp4"
      }
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ backgroundColor }}
      className="py-12 md:py-20 transition-colors duration-500 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
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

          {/* System Section */}
          <div className="mb-16">
            <motion.div className="text-center mb-16">
              <motion.h3
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 tracking-tight text-white"
              >
                <span className="font-light italic">The System That</span>
                <br />
                <span className="font-medium">Changed My Life</span>
              </motion.h3>
              
              {/* Added decorative line */}
              <div className="w-24 h-px bg-white/30 mx-auto"></div>
            </motion.div>

            {/* Points and Video Sections */}
            {systemSections.map((section, index) => (
              <motion.div
                key={index}
                className="mb-16 last:mb-0"
              >
                <div className="rounded-xl overflow-hidden bg-white shadow-lg">
                  {/* Video Container */}
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full aspect-video"
                  >
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src={section.point.video} type="video/mp4" />
                    </video>
                  </motion.div>

                  {/* Text Container */}
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full p-6"
                  >
                    <h4 className="text-lg md:text-xl font-serif font-bold text-blue-900 mb-2">
                      {section.point.title}
                    </h4>
                    <div className="h-px bg-blue-100 my-2" />
                    <p className="text-sm text-blue-600/70">
                      {section.point.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Results Section */}
          <div className="mt-24">
            <motion.h3 
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif mb-12 tracking-tight text-center text-white"
            >
              <span className="font-light italic">Do not Let Fear Hold You Back</span>
              <br />
              <span className="font-medium">Join Our Success Stories</span>
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-16">
              {[
                { number: '500+', text: 'Millionaire Members' },
                { number: '1000+', text: 'Lives Changed' },
                { number: '100+', text: 'Monthly Success Stories' },
                { number: '50+', text: 'Business Partners' },
                { number: '24/7', text: 'Community Support' },
                { number: '∞', text: 'Growth Potential' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  className="text-center p-2"
                >
                  <div className="text-xl md:text-2xl font-medium text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-xs md:text-sm">
                    {stat.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* YouTube Video Embed */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="aspect-video rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.youtube.com/embed/8ARQSMjX26s"
                title="Success Story Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 