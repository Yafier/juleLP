export default function Hero() {
  return (
    <>
      <Navigation />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-500/90 via-blue-200 to-white rounded-3xl mx-4 my-4">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-serif leading-snug tracking-tight">
              Refocus on teaching.
              <br />
              Let AI handle the workload.
            </h1>
            {/* Rest of the component remains the same */}
          </div>
        </div>
      </section>
    </>
  );
} 