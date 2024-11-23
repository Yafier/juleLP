import React from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  achievement: string;
  before: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Wijaya",
      role: "Top Leader",
      image: "/jule.png",
      quote: "Dulu aku ragu banget untuk mulai. Tapi Jules tuh bener-bener guide aku step by step. Dalam 3 bulan pertama udah bisa closing 4 nasabah premium!",
      achievement: "Sekarang: Income 50jt/bulan",
      before: "Sebelumnya: Marketing Staff"
    },
    {
      name: "Michael Tanjung",
      role: "Senior Partner",
      image: "/jule.png",
      quote: "Yang aku suka dari komunitas ini adalah support systemnya. Kita nggak pernah merasa sendirian. Ada mentor yang selalu ready bantu 24/7.",
      achievement: "Sekarang: Income 80jt/bulan",
      before: "Sebelumnya: Bank Officer"
    },
    {
      name: "Linda Kusuma",
      role: "Rising Star",
      image: "/jule.png",
      quote: "Awalnya cuma coba-coba karena liat temen sukses. Ternyata beneran bisa mengubah hidup! Sekarang udah bisa kasih orang tua passive income.",
      achievement: "Sekarang: Income 35jt/bulan",
      before: "Sebelumnya: Fresh Graduate"
    },
    {
      name: "David Pratama",
      role: "Elite Partner",
      image: "/jule.png",
      quote: "System yang dipake simple tapi powerful. Yang penting konsisten dan mau belajar. Dalam 6 bulan udah bisa quit corporate job!",
      achievement: "Sekarang: Income 100jt/bulan",
      before: "Sebelumnya: Senior Engineer"
    },
    {
      name: "Anita Sulistyo",
      role: "Millionaire Mentor",
      image: "/jule.png",
      quote: "Sebagai single mom, ini adalah jawaban doaku. Sekarang aku bisa kasih anak-anak pendidikan terbaik sambil punya waktu lebih banyak sama mereka.",
      achievement: "Sekarang: Income 150jt/bulan",
      before: "Sebelumnya: Single Mom & Guru"
    },
    {
      name: "Ricky Wijaya",
      role: "Young Achiever",
      image: "/jule.png",
      quote: "Fresh graduate dengan utang kuliah. Sempet ragu karena zero experience di sales. Tapi sistem mentoring disini bikin semua jadi mungkin!",
      achievement: "Sekarang: Income 45jt/bulan",
      before: "Sebelumnya: Fresh Graduate dengan Utang"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-left">
            <div className="text-blue-600/80 text-xl mb-6 font-serif tracking-widest">/03</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-600 font-serif leading-tight">
              Their Stories,
              <br />
              Their Transformation
            </h2>
            <p className="text-xl md:text-2xl text-blue-600/70 max-w-3xl font-light leading-relaxed mb-16">
              Mereka yang sudah membuktikan bahwa perubahan itu nyata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testi, index) => (
              <div key={index} className="bg-blue-50/50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <Image
                    src={testi.image}
                    alt={testi.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-xl text-blue-600">{testi.name}</h3>
                    <p className="text-blue-600/70">{testi.role}</p>
                  </div>
                </div>

                <blockquote className="text-lg text-blue-600/80 mb-6 italic">
                  "{testi.quote}"
                </blockquote>

                <div className="border-t border-blue-200 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600/70">{testi.before}</span>
                    <span className="font-semibold text-blue-600">{testi.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-blue-600/70 italic">
              And many more success stories waiting to be written...
              <br />
              Including yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 