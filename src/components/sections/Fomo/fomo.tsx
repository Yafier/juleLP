"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Circle } from "@/components/ui/circle";
import Globe from "@/components/ui/globe";
import { CheckIcon } from '@heroicons/react/24/solid';

interface Perk {
  title: string;
  value: string;
  description: string;
  image: string;
}

interface OfferPoint {
  title: string;
  value: string;
  description: string;
}

export default function Fomo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const topLeftRef = useRef<HTMLDivElement>(null);
  const middleLeftRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const middleRightRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  const perks: Perk[] = [
    {
      title: "3",
      value: "Program Premium",
      description: "Don't miss out! Akses eksklusif ke program senilai 65 Juta+ yang akan transform hidupmu dalam 90 hari pertama",
      image: "/3.png"
    },
    {
      title: "15+",
      value: "Reward Eksklusif",
      description: "Sementara orang lain ragu, kamu bisa dapat reward mewah senilai 150 Juta+ saat mencapai milestone sukses",
      image: "/4.png"
    },
    {
      title: "7",
      value: "Level Kesuksesan",
      description: "Your time is now! Sistem proven yang akan membawamu dari pemula menjadi 6-figure earner dengan guidance jelas",
      image: "/5.png"
    }
  ];

  const offerPoints: OfferPoint[] = [
    { 
      title: "Elite Mentoring Program", 
      value: "Rp 25.000.000",
      description: "Dibimbing langsung oleh mentor berpenghasilan 8 digit/bulan"
    },
    { 
      title: "Proven Business System", 
      value: "Rp 35.000.000",
      description: "Sistem yang sudah menghasilkan 500+ millionaire members"
    },
    { 
      title: "High-Ticket Sales Training", 
      value: "Rp 20.000.000",
      description: "Teknik closing yang menghasilkan komisi 20jt+ per client"
    },
    { 
      title: "Private Mastermind Access", 
      value: "Rp 15.000.000",
      description: "Weekly session eksklusif dengan para 7-figure earners"
    },
    { 
      title: "Done-For-You Marketing", 
      value: "Rp 30.000.000",
      description: "Ready-to-use materials dengan conversion rate tinggi"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-serif text-lg md:text-xl mb-3 block"
            >
              /07
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 tracking-tight"
            >
              <span className="font-light italic">Apa Yang Kamu Dapatkan</span>
              <br />
              <span className="font-medium">Di Komunitas Kami</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-blue-600/70 max-w-3xl font-light leading-relaxed"
            >
              Bergabung sekarang dan akses semua benefit eksklusif ini
            </motion.p>
          </div>

          <div ref={containerRef} className="relative flex h-[600px] w-full items-center justify-center">
            <div className="flex size-full max-w-[1200px] max-h-[400px] items-stretch justify-between">
              <div className="flex flex-col justify-between">
                <Circle ref={topLeftRef} className="size-20 md:size-32 p-0.5">
                  <Image src="/3.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
                <Circle ref={middleLeftRef} className="size-20 md:size-32 p-0.5">
                  <Image src="/4.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
                <Circle ref={bottomLeftRef} className="size-20 md:size-32 p-0.5">
                  <Image src="/5.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
              </div>

              <Circle ref={centerRef} className="size-24 md:size-40 flex items-center justify-center">
                <span className="text-2xl md:text-4xl font-bold text-blue-600">YOU</span>
              </Circle>

              <div className="flex flex-col justify-between">
                <Circle ref={topRightRef} className="size-20 md:size-32 p-0.5">
                  <Image src="/6.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
                <Circle ref={middleRightRef} className="size-20 md:size-32 p-0.5">
                  <Image src="/7.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
                <Circle ref={bottomRightRef} className="size-20 md:size-32 p-0.5">
                  <Image src="/8.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
              </div>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={topLeftRef}
              toRef={centerRef}
              curvature={-20}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={middleLeftRef}
              toRef={centerRef}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={bottomLeftRef}
              toRef={centerRef}
              curvature={20}
            />

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={topRightRef}
              toRef={centerRef}
              curvature={-20}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={middleRightRef}
              toRef={centerRef}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={bottomRightRef}
              toRef={centerRef}
              curvature={20}
              reverse
            />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-base md:text-lg text-blue-600/70 leading-relaxed mb-8">
              Bergabung dengan komunitas kami berarti kamu akan terhubung dengan para expert dan 
              leader yang sudah terbukti sukses. Mereka akan membimbingmu step by step menuju kesuksesan.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent flex-1"></div>
              <div className="w-2 h-2 rounded-full bg-blue-200"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent flex-1"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
                  {perk.title}
                </div>
                <h3 className="text-xl font-medium text-blue-900 mb-2">{perk.value}</h3>
                <p className="text-base text-blue-600/70">{perk.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8 mb-16">
            <div className="relative h-[500px] w-full">
              <Globe className="opacity-70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-4xl text-center">
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">
                    <span className="font-light italic">Travel The World</span>
                    <br />
                    <span className="font-medium">With Us</span>
                  </h3>
                  <p className="text-base md:text-lg text-blue-600/70 leading-relaxed">
                    Bukan cuma sukses finansial, tapi juga gaya hidup. Raih kesempatan 
                    traveling keliling dunia dengan komunitas high-achiever.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pt-12">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 p-8 md:p-12">
              <div className="text-left mb-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 text-white">
                  <span className="font-light italic">Sistem Bisnis</span>
                  <br />
                  <span className="font-medium">Yang Sudah Terbukti</span>
                </h3>
                <p className="text-base md:text-lg text-white/80 max-w-2xl">
                  Stop wasting time! Dapatkan akses ke sistem yang sudah menghasilkan ratusan member sukses
                </p>
              </div>

              <div className="mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-white/90 text-sm md:text-base mb-2">Penawaran Spesial Berakhir Dalam:</p>
                <div className="flex justify-center gap-4 text-white">
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-bold">20</span>
                    <p className="text-xs md:text-sm">Days</p>
                  </div>
                  <div className="text-2xl font-bold">:</div>
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-bold">12</span>
                    <p className="text-xs md:text-sm">Hours</p>
                  </div>
                  <div className="text-2xl font-bold">:</div>
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-bold">45</span>
                    <p className="text-xs md:text-sm">Minutes</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-4 md:gap-y-8 mb-8">
                {offerPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-none w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center
                      border border-white/20 backdrop-blur-sm">
                      <CheckIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-white text-sm md:text-base">{point.title}</span>
                      <span className="text-white/80 text-sm">{point.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-white/90 text-sm md:text-base">
                  ⚠️ Setelah 20 Desember, semua benefit ini tidak akan tersedia dengan harga yang sama
                </p>
              </div>

              <button className="w-full bg-white text-xl md:text-2xl font-bold py-4 md:py-6 rounded-xl 
                hover:bg-gray-50 transition-all hover:scale-[1.02] mb-3
                shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 
                  bg-clip-text text-transparent">
                  GABUNG SEKARANG
                </span>
              </button>
              
              <p className="text-white/80 text-center text-sm md:text-base">
                Jangan biarkan kesempatan ini berlalu. Take action now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 