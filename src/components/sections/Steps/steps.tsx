"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll } from "framer-motion";
import { LightBulbIcon, RocketLaunchIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface Step {
  number: string;
  title: string;
  description: string;
  images: {
    src: string;
  }[];
  icon: React.ElementType;
}

export default function Steps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps: Step[] = [
    {
      number: "1",
      title: "Month Apprentice", 
      description: "Ready to change your life? Bulan pertama fokus pada pembelajaran intensif dan observasi. Our expert leaders akan membimbing dan menunjukkan semua yang kamu butuhkan untuk sukses!",
      images: [
        { src: "/2.png" },
        { src: "/3.png" }
      ],
      icon: LightBulbIcon
    },
    {
      number: "2",
      title: "Month Rising Star",
      description: "Stop being passive! Saatnya implementasi semua teori yang sudah dipelajari. We'll push you out of your comfort zone untuk mengambil lebih banyak action dan melihat hasil nyata.",
      images: [
        { src: "/4.png" },
        { src: "/5.png" }
      ],
      icon: RocketLaunchIcon
    },
    {
      number: "3",
      title: "Month Elite Partner",
      description: "This is your moment! Dengan full support dari komunitas, kamu akan ditantang mencapai income pertama 10 juta. Don't let fear hold you back - we got your back!",
      images: [
        { src: "/6.png" },
        { src: "/7.png" }
      ],
      icon: TrophyIcon
    },
    {
      number: "4",
      title: "Month Top Leader",
      description: "Your time to shine! Kembangkan personal style-mu sendiri, bangun tim yang solid, dan mulai journey-mu sebagai leader. Are you ready to inspire others and create your legacy?",
      images: [
        { src: "/8.png" },
        { src: "/9.png" }
      ],
      icon: SparklesIcon
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-serif text-lg md:text-xl mb-2 block"
            >
              /06
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 tracking-tight"
            >
              <span className="font-light italic">Your Journey to Success</span>
              <br />
              <span className="font-medium">Starts Here</span>
            </motion.h2>
          </div>

          <div ref={containerRef} className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute left-[445px] top-0 bottom-[100px] w-1 bg-blue-100">
              <motion.div
                className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 origin-top"
                style={{ scaleY: scrollYProgress }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-16 md:space-y-32">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row md:items-start">
                    {/* Number and Title */}
                    <div className="w-full md:w-[400px] flex flex-col md:flex-row items-center md:items-center gap-3 mb-4 md:mb-0">
                      <div className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                        {step.number}
                      </div>
                      <div className="text-center md:text-left">
                        <div className="text-xl md:text-2xl font-medium text-blue-900">
                          {step.title}
                        </div>
                      </div>
                    </div>

                    {/* Icon Circle */}
                    <div className="hidden md:block absolute left-[384px] flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 
                        flex items-center justify-center z-10">
                        <step.icon className="w-10 h-10 text-white/90" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:pl-40">
                      <p className="text-base md:text-lg text-blue-600/70 mb-4">
                        {step.description}
                      </p>
                      
                      {/* Images - Side by side on mobile */}
                      <div className="grid grid-cols-2 gap-3">
                        {step.images.map((image, imgIndex) => (
                          <div key={imgIndex} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={image.src}
                              alt={`Step ${step.number}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 