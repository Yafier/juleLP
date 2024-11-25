import React from 'react';
import Image from 'next/image';

export default function Solution() {
  const successItems = [
    { number: '500+', text: 'Million Dollar Income', image: '/2.png' },
    { number: '1.5M+', text: 'Help Others to Success', image: '/15.png' },
    { number: '100+', text: 'Reliable Support', image: '/10.png' },
    { number: '50+', text: 'Featured in Top Insurance Companies', image: '/11.png' },
    { number: '24/7', text: 'High-Value Network', image: '/12.png' },
    { number: '1000+', text: 'Success Together', image: '/14.png' },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-left">
              <div className="text-blue-600/80 text-xl mb-6 font-serif tracking-widest">/01</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-blue-600 font-serif leading-snug tracking-tight">
                Dari Karyawan Biasa
                <br />
                Menjadi Top Earner dengan
                <br />
                Income 8 Digit per Bulan
              </h2>

              <div className="relative w-full aspect-video mb-16 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/hOHJTJVrHJM"
                  title="Success Story Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-base md:text-lg text-blue-600/70 leading-relaxed tracking-wide">
                <div>
                  <div className="font-semibold text-lg md:text-xl mb-3 text-blue-600">Timeline</div>
                  <div className="font-light text-base md:text-lg">5 Tahun Perjalanan Sukses</div>
                </div>
                
                <div>
                  <div className="font-semibold text-lg md:text-xl mb-3 text-blue-600">Background</div>
                  <div className="font-light text-base md:text-lg">Fresh Graduate & Ex-Corporate Employee</div>
                </div>
                
                <div>
                  <div className="font-semibold text-lg md:text-xl mb-3 text-blue-600">Achievement</div>
                  <div className="font-light text-base md:text-lg">
                    Berhasil membangun passive income dan tim lebih dari 100 orang dalam waktu kurang dari 1 tahun
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-left space-y-24">
              <div>
                <div className="border-b-2 border-blue-600/20 pb-4 mb-8">
                  <h3 className="font-bold text-2xl md:text-3xl text-blue-600">My Story: The Problem</h3>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="text-blue-600/70 text-xl leading-relaxed max-w-3xl font-light md:w-1/2">
                    &ldquo;Dulu aku seperti kebanyakan fresh graduate - kerja 9-5, gaji UMR, dan mimpi yang tertunda. 
                    Setiap hari commuting 3 jam, pulang capek, dan merasa hidup cuma untuk bayar tagihan. 
                    aku tahu ada potensi lebih dalam diri aku, tapi tidak tahu harus mulai dari mana.&rdquo;
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/jule-corp.png"
                      alt="Corporate Life"
                      width={500}
                      height={300}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b-2 border-blue-600/20 pb-4 mb-8">
                  <h3 className="font-bold text-2xl md:text-3xl text-blue-600">The Reason</h3>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <Image
                      src="/jule-child.png"
                      alt="Success Transformation"
                      width={500}
                      height={300}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="text-blue-600/70 text-xl leading-relaxed max-w-3xl font-light md:w-1/2">
                    &ldquo;Sebagai seorang ibu, aku punya mimpi besar untuk anak aku. Aku ingin dia bisa dapat pendidikan terbaik, 
                    punya masa depan cerah, dan nggak pernah kekurangan apapun. Tapi dengan gaji UMR, mimpi ini rasanya jauh.
                    <br /><br />
                    Aku sadar, kalau mau jadi ibu yang bisa dibanggakan, aku harus berani ambil langkah besar. 
                    Aku nggak mau anakku lihat ibunya struggle dengan gaji pas-pasan. Aku mau dia lihat sosok 
                    ibu yang kuat, mandiri, dan bisa jadi inspirasi.&rdquo;
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b-2 border-blue-600/20 pb-4 mb-8">
                  <h3 className="font-bold text-2xl md:text-3xl text-blue-600">The Action</h3>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="text-blue-600/70 text-xl leading-relaxed max-w-3xl font-light md:w-1/2">
                    &ldquo;aku sadar, untuk bisa memberikan yang terbaik buat anak aku, aku harus berani ambil langkah besar. 
                    Yang aku lakukan adalah:
                    <br /><br />
                    • Fokus belajar dari mentor terbaik di komunitas
                    <br />
                    • Disiplin ikuti morning routine setiap hari 5 AM
                    <br />
                    • Konsisten prospecting minimal 10 orang per hari
                    <br />
                    • Aktif sharing value di social media
                    <br />
                    • Selalu upgrade skill dan mindset lewat training
                    <br /><br />
                    Hasilnya? Dalam 6 bulan pertama, income aku sudah bisa gantikan gaji corporate.&rdquo;
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/jule-work.png"
                      alt="Taking Action"
                      width={500}
                      height={300}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b-2 border-blue-600/20 pb-4 mb-8">
                  <h3 className="font-bold text-2xl md:text-3xl text-blue-600">The Results</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {successItems.slice(0, 6).map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <Image
                        src={item.image}
                        alt={item.text}
                        width={400}
                        height={250}
                        className="rounded-xl w-full object-cover h-[200px] mb-4"
                      />
                      <div className="text-blue-600/70 font-light text-lg text-center">{item.text}</div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-blue-600 text-xl font-light italic">And there&apos;s a lot more :)</p>
              </div>

              <div className="mt-32 mb-32">
                <div className="max-w-5xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-600 font-serif leading-snug tracking-tight">
                     Perubahan Kecil Namun Powerful
                    <br />
                    Yang Kamu Butuhkan..
                  </h2>
                  <p className="text-xl md:text-2xl text-blue-600/70 max-w-3xl mx-auto font-light leading-relaxed mb-20">
                    &ldquo;Aku mau berbagi cerita yang mungkin akan mengubah hidupmu juga&rdquo;
                  </p>
                </div>

                <div className="max-w-3xl mx-auto px-6 space-y-12">
                  <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-blue-600/80">
                    <p className="italic">
                      Dan yang mengejutkan aku adalah...
                    </p>

                    <p>
                      Selama ini aku selalu berpikir kalau aku belum sukses karena belum menemukan &ldquo;rahasia sukses&rdquo; yang tepat.
                    </p>

                    <p className="pl-6 border-l-4 border-blue-400/30">
                      Sesuatu yang magical...
                      <br />
                      Yang akan membuat hidupku berubah 180 derajat.
                    </p>

                    <p>
                      Mungkin kamu juga merasakan hal yang sama.
                    </p>

                    <p className="font-medium">
                      Tapi aku salah besar.
                    </p>

                    <p className="pl-6 border-l-4 border-blue-400/30">
                      Ternyata, yang menghambat kesuksesanku bukan karena apa yang belum aku lakukan...
                      <br />
                      Tapi karena kebiasaan-kebiasaan lama yang terus aku pertahankan.
                    </p>

                    <p>
                      Setiap pagi bangun telat...
                      <br />
                      Scroll social media berjam-jam...
                      <br />
                      Nunggu &ldquo;mood&rdquo; yang tepat untuk mulai...
                    </p>

                    <p className="font-medium">
                      Dan yang paling berbahaya?
                    </p>

                    <p className="pl-6 border-l-4 border-blue-400/30">
                      Aku terus melakukan hal-hal yang aku pikir membawaku maju...
                      <br />
                      Padahal justru menjauhkanku dari impian.
                    </p>

                    <p>
                      Semakin hari...
                      <br />
                      Semakin jauh aku dari goals yang aku impikan.
                    </p>

                    <p className="font-medium italic text-blue-600">
                      Sampai akhirnya aku menemukan komunitas ini.
                      <br />
                      Dan semuanya berubah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 