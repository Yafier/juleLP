import React from 'react';

export default function Solution() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-left">
              <div className="text-blue-600/80 text-lg mb-6 font-serif tracking-widest">/01</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-blue-600 font-serif leading-snug tracking-tight">
                NFTE saved over $165,000
                <br />
                automating grading projects and
                <br />
                competition submissions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-blue-600/70 leading-relaxed tracking-wide">
                <div>
                  <div className="font-medium mb-2">Year</div>
                  <div className="font-light">2024</div>
                </div>
                
                <div>
                  <div className="font-medium mb-2">Client</div>
                  <div className="font-light">Network for Teaching Entrepreneurship</div>
                </div>
                
                <div>
                  <div className="font-medium mb-2">About</div>
                  <div className="font-light">
                    NFTE is an international nonprofit organization providing entrepreneurship training and 
                    educational programs to middle and high school students, college students, and adults
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
            <div className="text-left">
              <div className="font-medium text-blue-600/80 mb-8">Challenge</div>
              <div className="text-blue-600/70 text-lg leading-relaxed max-w-3xl font-light">
                NFTE teachers were spending countless hours reviewing and
                grading project submissions. This took attention away from
                students who needed more tutoring. Additionally, many students
                are only in their teachers' class for help.
              </div>

              <div className="mt-16">
                <div className="font-medium text-blue-600/80 mb-8">Solution</div>
                <div className="text-blue-600/70 text-lg leading-relaxed max-w-3xl font-light">
                  We developed features to help NFTE teachers and staff decrease
                  their administrative work needed for automating a large part of project
                  grading and student feedback.
                  <br /><br />
                  For students who needed to improve their language and public
                  speaking skills, we've built an always-available AI-powered assistant
                  that accepts voice by their needs.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 mt-16">
                <div className="bg-gray-50 rounded-lg p-8">
                  <div className="text-4xl font-serif text-blue-600 font-bold mb-2">5500+</div>
                  <div className="text-blue-600/70 font-light">Speed test</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <div className="text-4xl font-serif text-blue-600 font-bold mb-2">2 Tb+</div>
                  <div className="text-blue-600/70 font-light">Data processed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 