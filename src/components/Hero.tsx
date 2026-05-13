'use client';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-earth to-green-emerald text-white">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">Decompose, Digest, Derive</h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-100">Clean Energy from Waste - Sustainable Biogas Solutions for India</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-green-earth px-8 py-4 rounded-lg font-bold hover:shadow-lg transition">
            Explore Our Plant
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}