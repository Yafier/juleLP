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
    text: "The only difference between where you are and where you want to be is the actions you take today.",
    author: "Iman",
    role: "Founder, IAG Media"
  }
];

export function Cta() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="text-blue-600/80 text-xl mb-6 font-serif tracking-widest">/07</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-blue-600 font-serif leading-snug tracking-tight">
              Ready to Transform
              <br />
              Your Life?
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Quote and CTA */}
            <div className="space-y-8">
              {/* Quote */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-8 -top-8 text-8xl text-blue-200 font-serif">"</div>
                <blockquote className="relative z-10">
                  <p className="text-2xl md:text-3xl text-blue-800 font-light leading-relaxed mb-6">
                    {quotes[0].text}
                  </p>
                  <footer className="text-blue-600">
                    <cite className="not-italic">
                      <span className="font-bold block text-xl">{quotes[0].author}</span>
                      <span className="text-blue-600/70">{quotes[0].role}</span>
                    </cite>
                  </footer>
                </blockquote>
              </motion.div>

              {/* Call to Action */}
              <div className="space-y-6">
                <p className="text-xl text-blue-600/70">
                  Stop dreaming, start achieving. Join our community of high-performers today!
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-xl font-bold py-6 px-8 rounded-xl 
                    text-white hover:from-blue-700 hover:to-blue-900 transition-all hover:scale-[1.02]
                    shadow-[0_8px_16px_rgba(59,130,246,0.3)]">
                    JOIN THE MOVEMENT
                  </button>
                  <p className="text-center text-blue-600/70 mt-4">
                    Limited spots available for November batch
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="relative h-[600px]">
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
                className="absolute -right-4 top-1/4 bg-white p-6 rounded-xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-blue-600/70">Success Stories</div>
                </div>
              </motion.div>

              {/* Another Floating Stat */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -left-4 bottom-1/4 bg-white p-6 rounded-xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">97%</div>
                  <div className="text-blue-600/70">Success Rate</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
    </section>
  );
} 