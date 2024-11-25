import React from 'react';
import Image from 'next/image';

export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-blue-600/80 text-xl mb-6 font-serif tracking-widest text-left">/02</div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-blue-600 font-serif leading-snug tracking-tight">
            Masih Terjebak di
            <br />
            Rutinitas 9-5?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50/80 to-blue-100/50 border border-blue-100 
              shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
              transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Gaji Cuma Cukup untuk Survive
              </h3>
              <p className="text-blue-600/70">
                Setiap bulan habis untuk bayar bills, cicilan, dan kebutuhan basic. Kapan bisa punya passive income?
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50/80 to-blue-100/50 border border-blue-100 
              shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
              transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Time Freedom? Impossible!
              </h3>
              <p className="text-blue-600/70">
                Terikat jam kerja 9-5, weekend pun kadang harus lembur. Quality time sama keluarga? Dream on!
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50/80 to-blue-100/50 border border-blue-100 
              shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
              transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Career Growth yang Lambat
              </h3>
              <p className="text-blue-600/70">
                Naik jabatan butuh bertahun-tahun, bonus tidak seberapa. Meanwhile, inflation keeps rising!
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <blockquote className="text-xl md:text-2xl text-blue-600/70 leading-relaxed italic">
              "Most people fail in life not because they aim too high and miss, but because they aim too low and hit."
              <span className="block text-lg mt-4 font-semibold">- Iman Gadzhi</span>
            </blockquote>
          </div>

          <div className="relative w-full mb-10">
            <h3 className="text-2xl md:text-3xl text-blue-800 font-bold mb-6">
              But here's the good news...
            </h3>
            <p className="text-lg md:text-xl text-blue-600/70 max-w-2xl mx-auto leading-relaxed">
              Ada cara untuk break free dari cycle ini. Sistem yang sudah proven works untuk ratusan orang seperti kamu yang ingin escape dari rat race.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 