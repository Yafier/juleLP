"use client";

import Image from 'next/image';
import { motion } from "framer-motion";

interface Quote {
  text: string;
  author: string;
  role: string;
}

const quotes: Quote[] = [
  {
    text: "Stop dreaming about success. Your time is now - take massive action and transform your life today!",
    author: "Juliana Parmadi",
    role: "Founder, Alife"
  }
];

export function Cta() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-12">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-serif text-lg md:text-xl mb-3 block"
            >
              /09
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 tracking-tight"
            >
              <span className="font-light italic">Ready to Transform</span>
              <br />
              <span className="font-medium">Your Life?</span>
            </motion.h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Quote and CTA */}
            <div className="space-y-8">
              {/* Quote */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-4 md:-left-6 -top-4 md:-top-6 text-5xl md:text-6xl text-blue-200 font-serif">&ldquo;</div>
                <blockquote className="relative z-10">
                  <p className="text-lg md:text-2xl text-blue-800 font-light leading-relaxed mb-4 font-serif italic">
                    {quotes[0].text}
                  </p>
                  <footer className="text-blue-600">
                    <cite className="not-italic">
                      <span className="font-medium block text-base md:text-lg">{quotes[0].author}</span>
                      <span className="text-blue-600/70 text-sm md:text-base">{quotes[0].role}</span>
                    </cite>
                  </footer>
                </blockquote>
              </motion.div>

              {/* Call to Action */}
              <div className="space-y-6">
                <p className="text-base md:text-lg text-blue-600/70">
                  Don't let another day pass by watching others succeed. 
                  Join our community of high-achievers today!
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-base md:text-lg font-medium py-4 px-8 rounded-full 
                    text-white hover:from-blue-500 hover:to-blue-700 transition-all duration-300 hover:scale-105 
                    shadow-[0_8px_16px_rgba(59,130,246,0.3)]">
                    GABUNG SEKARANG
                  </button>
                  <p className="text-center text-sm text-blue-600/70">
                    Limited spots available - Batch November 2023
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Image with Stats */}
            <div className="relative h-[400px] md:h-[500px]">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/11.png"
                    alt="Success Story"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-medium text-blue-900 mb-1">500+</div>
                  <div className="text-sm text-blue-600/70">Success Stories</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -left-4 bottom-1/4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-medium text-blue-900 mb-1">97%</div>
                  <div className="text-sm text-blue-600/70">Success Rate</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
    </section>
  );
} 