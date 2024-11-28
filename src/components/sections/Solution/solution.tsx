"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Solution() {
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
        description: "Stop being average! Transformasi dari mindset karyawan biasa menjadi entrepreneur yang menghasilkan passive income jutaan per hari. Discover rahasia mindset yang membuat orang biasa bisa menghasilkan income luar biasa.\n\nYang akan kamu dapatkan:\n• Psychology of Wealth yang jarang dibahas\n• Breakthrough limiting beliefs yang menghambat\n• Framework untuk membangun passive income\n• Cara berpikir seperti entrepreneur sukses",
        video: "/1.mp4"
      }
    },
    {
      point: {
        title: "HIGH-VALUE NETWORK",
        description: "Bergabung dengan komunitas ekslusif yang akan mendorongmu menjadi versi terbaik. Access ke network para sukses yang tidak semua orang bisa dapatkan.\n\nExclusive benefits:\n• Weekly mastermind session dengan top performers\n• Private community dengan high-achievers\n• Exclusive events & business opportunities\n• Direct access ke successful entrepreneurs",
        video: "/2.mp4"
      }
    },
    {
      point: {
        title: "PROVEN BUSINESS SYSTEM",
        description: "Sistem yang sudah menghasilkan ratusan juta hingga miliaran rupiah untuk member kami. Ready to scale your success?\n\nYang membuat sistem kami berbeda:\n• Step-by-step blueprint menuju income 8 digit\n• Done-for-you marketing materials\n• Automated income generation system\n• Proven sales funnel yang sudah menghasilkan",
        video: "/3.mp4"
      }
    },
    {
      point: {
        title: "EXPERT MENTORING",
        description: "Dibimbing langsung oleh mentor yang sudah membuktikan hasil. Your success is our priority!\n\nProgram mentoring includes:\n• 1-on-1 coaching dengan expert\n• Daily support group yang aktif 24/7\n• Accountability system untuk hasil maksimal\n• Direct feedback untuk percepat kesuksesan",
        video: "/4.mp4"
      }
    },
    {
      point: {
        title: "BREAKTHROUGH FORMULA",
        description: "Formula rahasia yang sudah mengubah ribuan orang dari karyawan biasa menjadi entrepreneur sukses. Your time is now!\n\nThe secret sauce includes:\n• High-ticket closing techniques\n• Personal branding mastery\n• Wealth acceleration strategies\n• Time freedom blueprint",
        video: "/5.mp4"
      }
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Section - Updated with Video */}
          <div className="mb-24">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-serif text-lg md:text-xl mb-4 block"
            >
              /03
            </motion.span>

            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-8 tracking-tight"
            >
              <span className="font-light italic">Meet Juliana Parmadi,</span>
              <br />
              <span className="font-medium">Your Guide to Financial Freedom</span>
            </motion.h2>

            {/* Video replacing Image */}
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
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-blue-600/70 text-base md:text-lg leading-relaxed space-y-6"
            >
              <p>
                &quot;Hi, I&apos;m Julie. 5 tahun lalu, aku masih seperti kebanyakan fresh graduate - 
                kerja 9-5 dengan gaji UMR, commuting 3 jam setiap hari, dan merasa hidup cuma untuk bayar tagihan.&quot;
              </p>
              <p>
                &quot;Sebagai single mom, aku punya mimpi besar untuk anakku. Aku ingin dia bisa dapat 
                pendidikan terbaik dan masa depan cerah. Tapi dengan gaji UMR, mimpi ini rasanya jauh.&quot;
              </p>
            </motion.div>
          </div>

          {/* System Section */}
          <div className="mb-16">
            <motion.div className="text-center mb-12">
              <motion.h3
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 tracking-tight"
              >
                <span className="font-light italic">The System That</span>
                <br />
                <span className="font-medium">Changed My Life</span>
              </motion.h3>
            </motion.div>

            {/* Points and Video Sections */}
            {systemSections.map((section, index) => (
              <motion.div
                key={index}
                className="mb-16 last:mb-0"
              >
                {/* Single Card Container */}
                <div className="rounded-xl border-2 border-blue-600 overflow-hidden">
                  {/* Video Container - Always on top */}
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
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>

                  {/* Text Container - Always below video */}
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full p-6 bg-white"
                  >
                    <h4 className="text-base font-bold text-blue-600 mb-2">
                      {section.point.title}
                    </h4>
                    <div className="h-px bg-blue-600/20 my-2" />
                    <p className="text-sm text-blue-600/70">
                      {section.point.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Results Section with tighter spacing */}
          <div className="mt-24">
            <motion.h3 
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif mb-12 tracking-tight text-center"
            >
              <span className="font-light italic">Don&apos;t Let Fear Hold You Back</span>
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
                  <div className="text-xl md:text-2xl font-medium text-blue-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-blue-600/70 text-xs md:text-sm">
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
    </section>
  );
} 