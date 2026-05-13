'use client';

import { useState } from 'react';

export function TripleProcess() {
  const [activePhase, setActivePhase] = useState('decompose');

  const phases = {
    decompose: {
      title: 'Decompose',
      description: 'Breaking down organic waste into simpler compounds',
      icon: '♻️',
      metrics: [
        { label: 'Input Capacity', value: '50 tons/day' },
        { label: 'Processing Time', value: '24 hours' },
      ],
    },
    digest: {
      title: 'Digest',
      description: 'Anaerobic conversion process producing biogas',
      icon: '💧',
      metrics: [
        { label: 'Retention Time', value: '30 days' },
        { label: 'Optimal Temp', value: '37°C' },
      ],
    },
    derive: {
      title: 'Derive',
      description: 'Energy extraction and market sales',
      icon: '⚡',
      metrics: [
        { label: 'Daily Output', value: '500 MMBtu' },
        { label: 'Methane Content', value: '55-65%' },
      ],
    },
  };

  const currentPhase = phases[activePhase];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works - The Triple-D Process</h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          {['decompose', 'digest', 'derive'].map((phase) => (
            <button
              key={phase}
              onClick={() => setActivePhase(phase)}
              className={`px-8 py-3 rounded-lg font-bold text-lg transition \${
                activePhase === phase
                  ? 'bg-green-earth text-white shadow-lg'
                  : 'bg-white border-2 border-green-earth text-green-earth hover:shadow-md'
              }`}
            >
              {phases[phase].title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="text-8xl mb-6">{currentPhase.icon}</div>
            <h3 className="text-4xl font-bold text-green-earth mb-4">{currentPhase.title}</h3>
            <p className="text-lg text-gray-600 mb-6">{currentPhase.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {currentPhase.metrics.map((metric, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-medium">{metric.label}</p>
                  <p className="text-2xl font-bold text-green-earth">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-96 bg-gradient-to-br from-green-earth/10 to-green-emerald/10 rounded-xl flex items-center justify-center border border-green-earth/20">
            <div className="text-center">
              <div className="text-6xl mb-4">{currentPhase.icon}</div>
              <p className="text-gray-600">Process visualization area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}