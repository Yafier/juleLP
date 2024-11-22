import React from 'react';
import Image from 'next/image';

export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-blue-600 font-serif leading-snug tracking-tight">
            We empower top-tier
            <br />
            educational institutions to
            <br />
            transform their operations
            <br />
            through AI excellence
          </h2>
          
          <div className="relative w-full mb-10 flex justify-center">
            <Image
              src="/alife_logo.png"
              alt="Alife Logo"
              width={80}
              height={80}
              className="object-contain opacity-90"
              priority
            />
          </div>

          <h3 className="text-sm md:text-base text-blue-600/70 max-w-xl mx-auto leading-relaxed tracking-wide font-light">
            Discover how we helped prestigious institutions save thousands of
            hours and optimize resources through our advanced AI solutions
          </h3>
        </div>
      </div>
    </section>
  );
} 