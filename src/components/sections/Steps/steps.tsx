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
      description: "Access our exclusive community and start your journey with a strong foundation. Get direct mentoring from top performers and learn the proven system that has created hundreds of success stories.",
      images: [
        { src: "/2.png" },
        { src: "/3.png" }
      ],
      icon: LightBulbIcon
    },
    {
      number: "2",
      title: "Month Rising Star",
      description: "Develop your skills and achieve your first success. Master advanced selling techniques, build your personal brand, and get hands-on assistance for your first closing.",
      images: [
        { src: "/4.png" },
        { src: "/5.png" }
      ],
      icon: RocketLaunchIcon
    },
    {
      number: "3",
      title: "Month Elite Partner",
      description: "Scale your business and build your team. Learn leadership strategies, implement advanced business systems, and set up your passive income streams.",
      images: [
        { src: "/6.png" },
        { src: "/7.png" }
      ],
      icon: TrophyIcon
    },
    {
      number: "4",
      title: "Month Top Leader",
      description: "Maximize your impact and build your legacy. Master high-ticket closing, implement wealth management strategies, and create automated business systems.",
      images: [
        { src: "/8.png" },
        { src: "/9.png" }
      ],
      icon: SparklesIcon
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="text-blue-600/80 text-xl mb-6 font-serif tracking-widest">/04</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-blue-600 font-serif leading-snug tracking-tight">
              Your Journey to Success
              <br />
              Starts Here
            </h2>
            <p className="text-sm md:text-base text-blue-600/70 max-w-xl mx-auto leading-relaxed tracking-wide font-light">
              Clear path, proven system, guaranteed results
            </p>
          </div>

          <div ref={containerRef} className="relative">
            <div className="absolute left-[445px] top-0 bottom-[200px] w-1 bg-blue-100">
              <motion.div
                className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 origin-top"
                style={{ scaleY: scrollYProgress }}
              />
            </div>

            <div className="space-y-64">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="flex items-start">
                    <div className="w-[400px] flex items-center gap-6">
                      <div className="text-[12rem] font-bold leading-none bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent 
                        [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)]">
                        {step.number}
                      </div>
                      <div className="mt-12">
                        <div className="text-4xl font-bold text-blue-600/40 mb-2">
                          Month
                        </div>
                        <div className="text-5xl font-bold text-blue-600">
                          {step.title.split('Month ')[1]}
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-[384px] flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 
                        shadow-[inset_0_0_20px_rgba(255,255,255,0.6)] flex items-center justify-center z-10">
                        <step.icon className="w-16 h-16 text-white/90" />
                      </div>
                    </div>

                    <div className="flex-1 pl-48">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="grid grid-cols-2 gap-8 mb-12">
                          {step.images.map((image, imgIndex) => (
                            <div key={imgIndex} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                              <Image
                                src={image.src}
                                alt={`Step ${step.number}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        <p className="text-2xl text-blue-600/70 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-32 relative z-10">
              <button className="px-12 py-6 text-2xl font-semibold text-white rounded-full 
                bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 
                hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
                transition-all duration-300 hover:scale-105 
                shadow-[0_8px_16px_rgba(59,130,246,0.3)]
                hover:shadow-[0_12px_24px_rgba(59,130,246,0.4)]">
                Yes, I Want to Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 