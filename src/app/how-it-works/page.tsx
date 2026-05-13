'use client';

import { TripleProcess } from '@/components/TripleProcess';

export default function HowItWorksPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-earth to-green-emerald text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-gray-100">Understanding the Triple-D Process</p>
        </div>
      </div>

      <TripleProcess />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Process Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-earth/5 to-green-emerald/5 p-8 rounded-lg border border-green-earth/20">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold mb-4 text-green-earth">Waste Collection</h3>
              <p className="text-gray-600">Organic waste is collected from various sources including agricultural, industrial, and municipal sectors.</p>
            </div>
            <div className="bg-gradient-to-br from-green-earth/5 to-green-emerald/5 p-8 rounded-lg border border-green-earth/20">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold mb-4 text-green-earth">Processing</h3>
              <p className="text-gray-600">The waste goes through our Triple-D process: Decompose, Digest, and Derive to maximize energy output.</p>
            </div>
            <div className="bg-gradient-to-br from-green-earth/5 to-green-emerald/5 p-8 rounded-lg border border-green-earth/20">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold mb-4 text-green-earth">Energy Generation</h3>
              <p className="text-gray-600">Clean biogas is produced and sold to the market, generating revenue and reducing emissions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}