"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Apakah program ini cocok untuk pemula?",
    answer: "Absolutely yes! Program ini dirancang untuk semua level. Remember: &apos;Everyone starts at zero.&apos; Yang kami butuhkan hanya 2 hal dari kamu:\n\n• Growth mindset yang benar\n• Komitmen untuk sukses\n\nKami punya sistem yang proven untuk membimbingmu step-by-step dari nol sampai menghasilkan income 6-8 digit per bulan! 🚀"
  },
  {
    question: "Berapa waktu yang dibutuhkan untuk melihat hasil?",
    answer: "Stop wasting time with what-ifs! Rata-rata member kami mulai melihat hasil dalam 90 hari pertama. Bahkan ada yang berhasil closing di minggu pertama!\n\nTapi ingat:\n• Hasil setiap orang berbeda\n• Tergantung action yang diambil\n• Sistem sudah proven works\n\nThe question is: Are you ready to take massive action? 💪"
  },
  {
    question: "Bagaimana dengan support system-nya?",
    answer: "This is what makes us different! Kamu akan dapat:\n\n• Private community exclusive dengan high-achievers\n• Weekly coaching calls dengan top performers\n• 1-on-1 mentoring session\n• 24/7 support dari team\n• Done-for-you marketing materials\n\nDon&apos;t miss out on this opportunity to be part of something extraordinary! 🌟"
  },
  {
    question: "Apakah bisa diikuti sambil kerja full-time?",
    answer: "100% bisa! Bahkan 80% member sukses kami start dari posisi karyawan full-time. Kami punya sistem yang flexible:\n\n• Akses materi 24/7\n• Weekend coaching sessions\n• Flexible implementation system\n• Time management blueprint\n\nYour current job is funding your future empire! Ready to level up? 💼"
  },
  {
    question: "Apa yang membedakan program ini dengan yang lain?",
    answer: "Straight facts yang membuat kami berbeda:\n\n• Proven system yang sudah menghasilkan 500+ successful members\n• Real-time support dari mentor berpenghasilan 8-9 digit\n• High-ticket closing techniques yang powerful\n• Ready-to-use marketing materials worth 150jt+\n• Lifetime access ke updates dan resources\n\nThis is not just a course, it&apos;s your complete business system! 🚀"
  },
  {
    question: "Bagaimana dengan jaminan keberhasilannya?",
    answer: "Let&apos;s be real: Kesuksesan 100% ada di tangan kamu. Tapi yang bisa kami jamin:\n\n• Sistem yang sudah proven works\n• Full support dari tim expert\n• Step-by-step guidance\n• Weekly accountability check\n• Money-back guarantee*\n\n*Syarat dan ketentuan berlaku. The real question is: Are you ready to change your life? 🎯"
  }
];

export function Faq() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-serif text-lg md:text-xl mb-3 block"
            >
              /08
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 tracking-tight"
            >
              <span className="font-light italic">Questions?</span>
              <br />
              <span className="font-medium">We&apos;ve Got You Covered</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-blue-600/70 max-w-3xl font-light leading-relaxed"
            >
              Get answers to the most common questions about our program
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <div className="mt-8 md:mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border border-blue-200/30 rounded-xl px-4 md:px-6 py-2 md:py-3 bg-blue-50/30
                      data-[state=open]:bg-blue-100/20"
                  >
                    <AccordionTrigger className="text-base md:text-lg font-medium text-blue-900 hover:text-blue-600 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-blue-600/70 leading-relaxed pt-2 md:pt-3 whitespace-pre-line">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 text-center space-y-6"
          >
            <p className="text-lg md:text-xl text-blue-600/70 font-serif italic">
              Still have questions?
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-medium text-white 
              bg-gradient-to-r from-blue-600 to-blue-800 rounded-full hover:from-blue-500 hover:to-blue-700 
              transition-all duration-300 hover:scale-105 shadow-lg">
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 