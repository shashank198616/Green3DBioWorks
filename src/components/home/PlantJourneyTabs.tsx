'use client';

import { useState } from 'react';

interface Step {
  n: string;
  title: string;
  desc: string;
  fact: string;
  accentColor: string;
}

const STEPS: Step[] = [
  {
    n: '01', title: 'Farmer Fields',
    desc: 'Paddy straw and crop residue lie in fields across Chhattisgarh after harvest — historically burned in the open, releasing toxic particulate matter and methane.',
    fact: '~108,000 tonnes of crop residue available annually in our catchment area',
    accentColor: 'from-amber-900/20 to-amber-700/10',
  },
  {
    n: '02', title: 'Feedstock Aggregation',
    desc: 'Our field teams and logistics partners collect baled feedstock from registered farmer partners and transport it to the plant gate — paying farmers a fair market price per tonne.',
    fact: 'Farmers earn additional income per tonne of residue supplied',
    accentColor: 'from-yellow-900/20 to-yellow-700/10',
  },
  {
    n: '03', title: 'Pre-processing',
    desc: 'Feedstock is shredded to optimal particle size, mixed with process water to achieve the right slurry consistency, and fed into the digester inlet at a controlled loading rate.',
    fact: '50 tonnes per day throughput capacity at the pre-treatment stage',
    accentColor: 'from-stone-700/20 to-stone-500/10',
  },
  {
    n: '04', title: 'Anaerobic Digestion',
    desc: 'Inside sealed CSTR digesters, communities of anaerobic microbes break down organic matter through hydrolysis, acidogenesis, and methanogenesis — producing raw biogas over a 30-day retention cycle.',
    fact: '37°C mesophilic temperature maintained continuously for optimal methane yield',
    accentColor: 'from-deep-forest/30 to-earth-green/10',
  },
  {
    n: '05', title: 'Gas Purification',
    desc: 'Raw biogas (55–65% methane) passes through Pressure Swing Adsorption (PSA) or membrane-based scrubbing to remove CO₂, H₂S, and moisture — achieving pipeline-grade biomethane.',
    fact: 'Methane content upgraded to ≥96% after purification',
    accentColor: 'from-sky-900/20 to-sky-700/10',
  },
  {
    n: '06', title: 'Compression',
    desc: 'Purified biomethane is compressed to 200–250 bar CNG-equivalent pressure using multi-stage compressors, filling high-pressure cascade storage for onward dispatch.',
    fact: '500 MMBtu daily energy output at full plant capacity',
    accentColor: 'from-slate-700/20 to-slate-500/10',
  },
  {
    n: '07', title: 'Distribution to OMCs',
    desc: 'Compressed Biogas is loaded into tanker cascades and dispatched to Oil Marketing Company (OMC) mother stations under SATAT offtake agreements — replacing fossil CNG in the supply chain.',
    fact: 'Offtake secured under Government of India SATAT framework with OMCs',
    accentColor: 'from-emerald-900/20 to-emerald-700/10',
  },
  {
    n: '08', title: 'Digestate → Fertilizer',
    desc: 'The nutrient-rich slurry remaining after digestion is dewatered and processed into organic biofertilizer — returned to farmers in the network, closing the circular economy loop.',
    fact: 'Biofertilizer reduces farmers\' chemical input costs and improves soil health long-term',
    accentColor: 'from-lime-900/20 to-lime-700/10',
  },
];

export function PlantJourneyTabs() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <div>
      {/* Step number pills — horizontal scroll on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide -mx-1 px-1">
        {STEPS.map((s, i) => (
          <button
            key={s.n}
            onClick={() => setActive(i)}
            className={`shrink-0 w-11 h-11 rounded-full text-sm font-bold transition-all duration-200 ${
              i === active
                ? 'bg-earth-green text-white scale-110 shadow-lg shadow-earth-green/30'
                : 'bg-neutral-100 text-muted-sage hover:bg-earth-green/10 hover:text-earth-green'
            }`}
            aria-label={`Step ${s.n}: ${s.title}`}
          >
            {s.n}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text */}
        <div key={active} className="animate-fade-in-up">
          <span className="text-7xl font-black text-champagne-gold/15 leading-none block mb-2 select-none">
            {step.n}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 -mt-4">{step.title}</h3>
          <p className="text-muted-sage leading-relaxed mb-6">{step.desc}</p>
          <div className="flex items-start gap-3 px-4 py-3 bg-earth-green/5 border-l-2 border-earth-green rounded-r-xl">
            <span className="text-earth-green mt-0.5 shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <circle cx="7" cy="7" r="7" />
              </svg>
            </span>
            <p className="text-sm text-earth-green font-medium leading-snug">{step.fact}</p>
          </div>

          {/* Step navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => setActive((p) => Math.max(0, p - 1))}
              disabled={active === 0}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-charcoal hover:border-earth-green hover:text-earth-green transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous step"
            >
              ←
            </button>
            <span className="text-sm text-muted-sage">{active + 1} of {STEPS.length}</span>
            <button
              onClick={() => setActive((p) => Math.min(STEPS.length - 1, p + 1))}
              disabled={active === STEPS.length - 1}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-charcoal hover:border-earth-green hover:text-earth-green transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next step"
            >
              →
            </button>
          </div>
        </div>

        {/* Visual panel */}
        <div
          key={`visual-${active}`}
          className={`animate-fade-in-up rounded-2xl bg-gradient-to-br ${step.accentColor} border border-white/10 h-64 lg:h-80 flex flex-col items-center justify-center relative overflow-hidden`}
        >
          {/* Background step number watermark */}
          <span className="absolute bottom-4 right-6 text-8xl font-black text-black/5 leading-none select-none">
            {step.n}
          </span>
          {/* Center content */}
          <div className="relative z-10 text-center px-8">
            <p className="text-xs font-medium tracking-widest text-earth-green/60 uppercase mb-3">
              Step {step.n}
            </p>
            <p className="text-xl font-bold text-charcoal">{step.title}</p>
            <div className="mt-4 w-12 h-0.5 bg-earth-green/30 mx-auto rounded-full" />
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-10 flex gap-1">
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active ? 'bg-earth-green flex-grow' : 'bg-neutral-200 flex-1'
            }`}
            aria-label={`Go to step ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
