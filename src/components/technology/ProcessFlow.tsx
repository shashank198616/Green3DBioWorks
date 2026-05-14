'use client';
import { useState } from 'react';

interface Stage {
  id: string;
  n: string;
  title: string;
  sub: string;
  color: string;
  detail: {
    headline: string;
    body: string;
    specs: string[];
  };
}

const STAGES: Stage[] = [
  {
    id: 'feedstock',
    n: '01',
    title: 'Feedstock',
    sub: 'Collection & QC',
    color: '#C9A96E',
    detail: {
      headline: 'Multi-Feedstock Intelligence',
      body: 'Paddy straw, corn stalks, sugarcane bagasse, and Napier grass arrive from registered farming households. Each batch is weighed at the plant weighbridge, sampled, and tested for moisture content and volatile solids before entering covered storage bays — ensuring only quality-approved material enters the digestion line.',
      specs: ['Paddy straw · Corn stalks · Napier grass', '110 TPD input capacity', '500T covered storage', 'Moisture & VS testing on arrival'],
    },
  },
  {
    id: 'preprocessing',
    n: '02',
    title: 'Pre-processing',
    sub: 'Shredding & Mixing',
    color: '#6B7F6B',
    detail: {
      headline: 'Feedstock Preparation Systems',
      body: 'Material is shredded to an optimal 20–40 mm particle size to maximise surface area for microbial attack. It is then blended with recycled process water in the mixing tank and conditioned to 18–22% total solids — the precise concentration required for mesophilic fermentation efficiency.',
      specs: ['20–40 mm shred target', '18–22% total solids', 'Recycled process water blend', 'Slurry pump feed to digesters'],
    },
  },
  {
    id: 'digestion',
    n: '03',
    title: 'Digestion',
    sub: 'Anaerobic Fermentation',
    color: '#047857',
    detail: {
      headline: 'Controlled Anaerobic Digestion',
      body: 'Three sealed CSTR digesters operate at a stable 37 °C mesophilic temperature. Microbial consortia — hydrolytic, acidogenic, acetogenic, and methanogenic bacteria — work in sequence over a 30-day hydraulic retention time, converting organic matter into raw biogas at 55–65% methane concentration with automated slow-speed mixing ensuring uniform substrate distribution.',
      specs: ['3 × 2,000 m³ CSTR digesters', '37 °C mesophilic · 30-day HRT', '55–65% CH₄ raw biogas yield', 'Automated slow-speed mixing'],
    },
  },
  {
    id: 'purification',
    n: '04',
    title: 'Purification',
    sub: 'Gas Upgrading',
    color: '#0ea5e9',
    detail: {
      headline: 'Pressure Swing Adsorption',
      body: 'Raw biogas enters the pressure swing adsorption (PSA) unit, where molecular sieves selectively adsorb CO₂, reducing it from ~40% to below 2%. A parallel H₂S scrubber removes hydrogen sulphide, and a moisture knockout vessel eliminates water vapour — producing IS 16087–compliant pipeline-grade biomethane.',
      specs: ['CO₂ reduced to < 2%', 'H₂S removed to < 10 ppm', '≥ 95% CH₄ purity', 'IS 16087 fuel-grade standard'],
    },
  },
  {
    id: 'compression',
    n: '05',
    title: 'Compression',
    sub: 'Cascade Storage',
    color: '#64748b',
    detail: {
      headline: 'High-Pressure Compression System',
      body: 'Purified biomethane is compressed through a multi-stage reciprocating compressor to 200–250 bar — equivalent to commercial CNG pressure standards. The compressed gas is staged in high-pressure cascade cylinder banks, ready for direct dispensing into OMC-approved tube trailer modules at the filling bay.',
      specs: ['200–250 bar operating pressure', 'Multi-stage reciprocating compressor', 'Cascade cylinder bank storage', 'OMC tanker filling station'],
    },
  },
  {
    id: 'distribution',
    n: '06',
    title: 'Distribution',
    sub: 'CBG to OMC',
    color: '#10b981',
    detail: {
      headline: 'SATAT-Framework CBG Distribution',
      body: 'Compressed Biogas is dispatched daily to designated OMC fuel depots under a SATAT offtake agreement, providing India\'s public refuelling network with a domestically produced, renewable alternative to fossil CNG. The distribution model requires no new pipeline infrastructure — CBG is transported in the same tube trailer format as CNG.',
      specs: ['10 TPD CBG production', 'SATAT offtake framework', 'OMC fuel depot distribution', 'No new pipeline infrastructure required'],
    },
  },
  {
    id: 'biofertilizer',
    n: '07',
    title: 'Biofertilizer',
    sub: 'Circular Return',
    color: '#C8B89A',
    detail: {
      headline: 'Closed-Loop Digestate Recovery',
      body: 'Nutrient-rich digestate effluent from the digesters is processed through a decanting centrifuge into two fractions: a solid NPK-enriched biofertilizer (dried, screened, bagged, and returned to registered farmers) and a liquid amendment (used for field irrigation or recycled as process water) — completing the circular economy loop.',
      specs: ['~20 TPD solid biofertilizer', 'NPK nutrient profile certified', 'Liquid fraction recycled or returned', 'Near-zero liquid discharge target'],
    },
  },
];

export default function ProcessFlow() {
  const [active, setActive] = useState<number>(0);
  const stage = STAGES[active];

  return (
    <div>
      {/* Stage row */}
      <div className="overflow-x-auto scrollbar-hide pb-2">
        <div className="flex items-start min-w-max lg:min-w-0 lg:w-full gap-0">
          {STAGES.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1 lg:flex-initial lg:w-auto">
              {/* Stage button */}
              <button
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-2 w-24 md:w-28 px-1 py-3 rounded-xl transition-all duration-300 group"
                aria-pressed={active === i}
              >
                <div
                  className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0"
                  style={{
                    borderColor: s.color,
                    backgroundColor: active === i ? s.color : 'transparent',
                  }}
                >
                  <span
                    className="text-xs font-black"
                    style={{ color: active === i ? 'white' : s.color }}
                  >
                    {s.n}
                  </span>
                </div>
                <span
                  className="text-xs font-bold text-center leading-tight transition-colors duration-300"
                  style={{ color: active === i ? '#1C1C1E' : '#6B7F6B' }}
                >
                  {s.title}
                </span>
                <span className="text-[10px] text-muted-sage text-center leading-tight hidden md:block">
                  {s.sub}
                </span>
              </button>

              {/* Animated connector */}
              {i < STAGES.length - 1 && (
                <div className="relative h-0.5 flex-1 min-w-[12px] max-w-[48px] overflow-hidden rounded-full mx-0.5 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full" style={{ backgroundColor: `${STAGES[i].color}25` }} />
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(to right, transparent 0%, ${STAGES[i].color}80 50%, transparent 100%)`,
                      animation: `sweepRight 2.5s ease-in-out infinite`,
                      animationDelay: `${i * 0.35}s`,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1 mt-1 mb-6">
        {STAGES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className="flex-1 h-0.5 rounded-full transition-all duration-500"
            style={{ backgroundColor: i <= active ? s.color : '#e5e7eb' }}
          />
        ))}
      </div>

      {/* Detail panel */}
      <div
        key={stage.id}
        className="rounded-2xl border p-6 md:p-8 animate-fade-in-up"
        style={{ borderColor: `${stage.color}40`, backgroundColor: `${stage.color}08` }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8">
          {/* Stage badge */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-black text-white text-sm"
            style={{ backgroundColor: stage.color }}
          >
            {stage.n}
          </div>

          <div className="flex-1 min-w-0">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: stage.color }}
            >
              Stage {stage.n} of 07
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 leading-tight">
              {stage.detail.headline}
            </h3>
            <p className="text-muted-sage leading-relaxed text-sm md:text-base mb-5">
              {stage.detail.body}
            </p>
            <div className="flex flex-wrap gap-2">
              {stage.detail.specs.map((spec) => (
                <span
                  key={spec}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-white border text-charcoal"
                  style={{ borderColor: `${stage.color}30` }}
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t" style={{ borderColor: `${stage.color}20` }}>
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            className="text-xs font-semibold text-muted-sage disabled:opacity-25 hover:text-earth-green transition-colors"
          >
            ← Previous
          </button>
          <span className="text-xs text-muted-sage">{active + 1} / {STAGES.length}</span>
          <button
            onClick={() => setActive(Math.min(STAGES.length - 1, active + 1))}
            disabled={active === STAGES.length - 1}
            className="text-xs font-semibold text-muted-sage disabled:opacity-25 hover:text-earth-green transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
