import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation/navigation';

export default function Hero() {
  return (
    <>
      <Navigation />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-500/90 via-blue-200 to-white rounded-3xl mx-4 my-4">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-serif px-4">
              Refocus on teaching.
              <br />
              Let AI handle the workload.
            </h1>
            <p className="text-lg md:text-xl text-white mb-12 max-w-2xl px-4">
              We are a team of AI experts empowering educators to unlock student potential
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-2 mb-12 w-full max-w-xl px-4">
              <input
                type="email"
                placeholder="Enter your work email..."
                className="flex-1 px-6 py-3 rounded-full bg-white/95 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)]"
              />
              <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-all hover:scale-105 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.2)]">
                Request a demo
              </button>
            </div>
            <div className="relative w-full max-w-3xl px-4">
              <Image
                src="/jule 2.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="rounded-2xl w-full"
                priority
              />
              <div className="absolute top-[55%] -translate-y-[55%] -left-4 bg-white/95 p-4 rounded-xl max-w-xs backdrop-blur-sm shadow-[0_4px_12px_-2px_rgba(0,0,0,0.12)] hidden md:block">
                <p className="text-sm text-blue-950">TierOne AI is empowering our NFTE educators</p>
                <div className="flex items-center mt-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-xs text-gray-700">Dr. JD LeBris</span>
                </div>
              </div>
              <div className="absolute top-[40%] -translate-y-[40%] right-4 bg-white/95 p-4 rounded-xl max-w-xs backdrop-blur-sm shadow-[0_4px_12px_-2px_rgba(0,0,0,0.12)] hidden md:block">
                <p className="text-sm text-blue-950">Automated systems saved weeks of administrative work</p>
                <div className="flex items-center mt-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-xs text-gray-700">CEO, NFTE Enterprise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 