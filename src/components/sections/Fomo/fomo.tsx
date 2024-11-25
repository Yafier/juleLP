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
      value: "Premium Programs",
      description: "Akses langsung ke program senilai 65 Juta+ untuk mengembangkan skill dan bisnismu",
      image: "/3.png"
    },
    {
      title: "15+",
      value: "Exclusive Rewards",
      description: "Dapatkan reward eksklusif senilai 150 Juta+ saat kamu naik level",
      image: "/4.png"
    },
    {
      title: "7",
      value: "Level Upgrades",
      description: "Sistem level up yang akan membawamu dari beginner ke expert dengan guidance yang jelas",
      image: "/5.png"
    }
  ];

  const offerPoints: OfferPoint[] = [
    { title: "Basic Training Program", value: "Rp 15.000.000" },
    { title: "Advanced Mentoring Session", value: "Rp 25.000.000" },
    { title: "Weekly Group Coaching", value: "Rp 10.000.000" },
    { title: "Premium Resources Access", value: "Rp 15.000.000" },
    { title: "Private Community Access", value: "Rp 20.000.000" },
    { title: "Business Tools & Templates", value: "Rp 15.000.000" },
    { title: "1-on-1 Strategy Session", value: "Rp 30.000.000" },
    { title: "Leadership Development", value: "Rp 20.000.000" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <div className="text-blue-600/80 text-xl mb-6 font-serif tracking-widest">/05</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-blue-600 font-serif leading-snug tracking-tight">
              Here&apos;s What You Get Inside
              <br />
              Our Community
            </h2>
            <p className="text-xl md:text-2xl text-blue-600/70 max-w-3xl font-light leading-relaxed">
              Join our exclusive community and unlock these amazing benefits
            </p>
          </div>

          {/* Animated Beam Section */}
          <div 
            ref={containerRef} 
            className="relative flex h-[600px] w-full items-center justify-center"
          >
            <div className="flex size-full max-w-[1200px] max-h-[400px] items-stretch justify-between">
              {/* Left Side Group */}
              <div className="flex flex-col justify-between">
                <Circle ref={topLeftRef} className="size-32 p-0.5">
                  <Image src="/3.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
                <Circle ref={middleLeftRef} className="size-32 p-0.5">
                  <Image src="/4.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
                <Circle ref={bottomLeftRef} className="size-32 p-0.5">
                  <Image src="/5.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
              </div>

              {/* Center Circle */}
              <Circle ref={centerRef} className="size-40 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-600">YOU</span>
              </Circle>

              {/* Right Side Group */}
              <div className="flex flex-col justify-between">
                <Circle ref={topRightRef} className="size-32 p-0.5">
                  <Image src="/6.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
                <Circle ref={middleRightRef} className="size-32 p-0.5">
                  <Image src="/7.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
                <Circle ref={bottomRightRef} className="size-32 p-0.5">
                  <Image src="/8.png" alt="Feature" width={120} height={120} className="rounded-full" />
                </Circle>
              </div>
            </div>

            {/* Left Side Beams */}
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

            {/* Right Side Beams */}
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

          {/* Description and Separator */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <p className="text-xl md:text-2xl text-blue-600/70 leading-relaxed mb-12">
              Bergabung dengan komunitas kami berarti kamu akan terhubung dengan para expert dan 
              leader yang sudah terbukti sukses. Mereka akan membimbingmu step by step menuju kesuksesan.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
              <div className="w-3 h-3 rounded-full bg-blue-200"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-8xl font-bold bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent 
                  [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)] mb-4">
                  {perk.title}
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{perk.value}</h3>
                <p className="text-lg text-blue-600/70">{perk.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Globe Section with Separators */}
          <div className="space-y-12 mb-24">
            {/* Top Separator */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
              <div className="w-3 h-3 rounded-full bg-blue-200"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>

            {/* Globe with Text */}
            <div className="relative h-[600px] w-full">
              <Globe className="opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-4xl text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                    Travel The World With Us
                  </h3>
                  <p className="text-xl md:text-2xl text-blue-600/70 leading-relaxed">
                    Bukan cuma sukses finansial, tapi juga gaya hidup. Raih kesempatan 
                    traveling keliling dunia dengan komunitas high-achiever melalui 
                    program incentive trip setiap tahunnya.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Separator */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
              <div className="w-3 h-3 rounded-full bg-blue-200"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>
          </div>

          {/* Community Vibe Section */}
          <div className="space-y-12 mb-24">
            {/* Top Separator */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
              <div className="w-3 h-3 rounded-full bg-blue-200"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>

            {/* Community Content */}
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                Life is Better Together
              </h3>
              <p className="text-xl md:text-2xl text-blue-600/70 leading-relaxed mb-12">
                Bukan cuma soal bisnis, tapi juga membangun persahabatan dan 
                menciptakan momen-momen tak terlupakan bersama.
              </p>

              {/* Video Section */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10"></div>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0&controls=1&rel=0"
                  title="Community Life"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Fun Facts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl bg-blue-50/50">
                  <h4 className="text-xl font-bold text-blue-600 mb-2">Monthly Gatherings</h4>
                  <p className="text-blue-600/70">Regular meetups untuk sharing, learning, dan fun activities bersama</p>
                </div>
                <div className="p-6 rounded-xl bg-blue-50/50">
                  <h4 className="text-xl font-bold text-blue-600 mb-2">Team Building</h4>
                  <p className="text-blue-600/70">Outbound, retreat, dan berbagai aktivitas untuk mempererat persaudaraan</p>
                </div>
                <div className="p-6 rounded-xl bg-blue-50/50">
                  <h4 className="text-xl font-bold text-blue-600 mb-2">Celebration</h4>
                  <p className="text-blue-600/70">Merayakan setiap pencapaian bersama dengan gala dinner & awards night</p>
                </div>
              </div>
            </div>

            {/* Bottom Separator */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
              <div className="w-3 h-3 rounded-full bg-blue-200"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>
          </div>

          {/* Enhanced Limited Time Offer */}
          <div className="relative max-w-6xl mx-auto pt-20">
            {/* Background Image and Gradient */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Image
                src="/jule.png"
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(315deg,#1a365d_0%,#1e3a8a_100%)] mix-blend-multiply opacity-90"></div>
            </div>

            {/* Enhanced Border Effect - Reversed gradient direction */}
            <div className="absolute inset-0 rounded-3xl p-[3px] bg-[linear-gradient(315deg,transparent_0%,transparent_50%,white/40_100%)]"></div>

            {/* Small Notch Container - Special November Offer */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px]">
              <div className="relative rounded-t-2xl p-[2px] bg-[linear-gradient(315deg,#1a365d_0%,#1e3a8a_100%)]">
                <div className="relative rounded-t-2xl bg-white/10 backdrop-blur-sm">
                  <div className="text-center text-2xl font-bold text-white truncate whitespace-nowrap py-6 px-8">
                    Special November Offer
                  </div>
                  {/* Add inner border glow */}
                  <div className="absolute inset-0 rounded-t-2xl bg-[linear-gradient(315deg,#1a365d_0%,#1e3a8a_100%)] opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Main Card Content */}
            <div className="relative rounded-3xl p-12 overflow-hidden">
              {/* Header Section - Left Aligned */}
              <div className="text-left mb-16">
                <Image
                  src="/alife_logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="mb-8"
                />
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight truncate">
                  Complete Business System
                </h3>
                <p className="text-2xl text-white/80 max-w-2xl">
                  Get instant access to our proven system that has helped hundreds achieve financial freedom
                </p>
              </div>

              {/* Points Grid - Updated sizes */}
              <div className="grid grid-cols-2 gap-x-16 gap-y-8 mb-12">
                {offerPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-none w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center
                      shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] border border-blue-600/30">
                      <CheckIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white text-2xl font-bold">{point.title}</span>
                  </div>
                ))}
              </div>

              {/* Button and redirect text - removed Special November container */}
              <button className="w-full bg-white text-2xl font-bold py-6 rounded-xl 
                hover:bg-gray-50 transition-all hover:scale-[1.02] mb-4
                shadow-[0_8px_16px_rgba(59,130,246,0.3)]">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 
                  bg-clip-text text-transparent 
                  [text-shadow:_2px_2px_4px_rgba(0,0,0,0.1)]">
                  DAFTAR SEKARANG
                </span>
              </button>
              
              <p className="text-white/80 text-center text-lg mb-4">
                Anda akan diarahkan ke platform member untuk menyelesaikan pendaftaran
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 