'use client';
import { useState } from 'react';

interface Block {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  color: string;
  content: React.ReactNode;
}

function FeedstockContent() {
  const sources = [
    { name: 'Paddy Straw', season: 'Oct – Dec', vs: '75–80% VS', share: '60%' },
    { name: 'Napier Grass', season: 'Year-round', vs: '80–85% VS', share: '25%' },
    { name: 'Sugarcane Bagasse', season: 'Feb – Apr', vs: '70–75% VS', share: '10%' },
    { name: 'Cow Dung (co-feed)', season: 'Year-round', vs: '65–70% VS', share: '5%' },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
      <div>
        <p className="text-xs font-bold tracking-widest text-champagne-gold uppercase mb-4">Feedstock Mix</p>
        <div className="space-y-3">
          {sources.map((s) => (
            <div key={s.name} className="flex items-center gap-3">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-charcoal">{s.name}</span>
                  <span className="text-xs text-muted-sage">{s.share}</span>
                </div>
                <div className="h-1.5 rounded-full bg-earth-beige/40 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-champagne-gold transition-all duration-700"
                    style={{ width: s.share }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-muted-sage">{s.season}</span>
                  <span className="text-[10px] text-muted-sage">{s.vs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-xs font-bold tracking-widest text-champagne-gold uppercase mb-4">Supply Design</p>
        {[
          { title: 'Year-Round Stability', desc: 'Multi-feedstock blending ensures continuous supply even during off-season crop cycles.' },
          { title: 'Circular Sourcing', desc: 'Farmers supplying feedstock receive biofertilizer in return — reducing input cost and strengthening loyalty.' },
          { title: 'Quality Intelligence', desc: 'Volatile solids and moisture testing on every batch maintains consistent digestion performance.' },
        ].map((item) => (
          <div key={item.title} className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-champagne-gold mt-2 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-charcoal">{item.title}</p>
              <p className="text-xs text-muted-sage leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreprocessingContent() {
  const steps = [
    { n: '1', label: 'Weighbridge', desc: 'All incoming vehicles weighed and logged', color: '#C9A96E' },
    { n: '2', label: 'Shredder', desc: '20–40 mm particle size for optimal surface area', color: '#6B7F6B' },
    { n: '3', label: 'Mixing Tank', desc: 'Blended with recycled process water', color: '#047857' },
    { n: '4', label: 'Conditioner', desc: '18–22% total solids — ideal for mesophilic AD', color: '#0ea5e9' },
    { n: '5', label: 'Slurry Pump', desc: 'Continuous feed into digester inlet ports', color: '#64748b' },
  ];
  return (
    <div className="pt-6">
      <p className="text-xs font-bold tracking-widest text-muted-sage uppercase mb-6">Processing Sequence</p>
      <div className="relative">
        {/* Connector line */}
        <div className="absolute left-4 top-5 bottom-5 w-px bg-earth-beige/50" />
        <div className="space-y-5">
          {steps.map((step, i) => (
            <div key={step.n} className="flex items-start gap-4 relative">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 z-10"
                style={{ backgroundColor: step.color }}
              >
                {step.n}
              </div>
              <div className="flex-1 pb-2">
                <p className="font-bold text-charcoal text-sm">{step.label}</p>
                <p className="text-xs text-muted-sage mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-5 border-t border-earth-beige/30 grid grid-cols-3 gap-4">
        {[
          { v: '110 TPD', l: 'Input capacity' },
          { v: '20–40 mm', l: 'Target particle size' },
          { v: '18–22%', l: 'Total solids target' },
        ].map((m) => (
          <div key={m.l} className="text-center">
            <p className="text-xl font-black text-earth-green">{m.v}</p>
            <p className="text-xs text-muted-sage mt-1">{m.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DigestionContent() {
  const stages = [
    { label: 'Hydrolysis', desc: 'Complex polymers broken into monomers', color: '#C9A96E' },
    { label: 'Acidogenesis', desc: 'Monomers converted to volatile fatty acids', color: '#6B7F6B' },
    { label: 'Acetogenesis', desc: 'VFAs converted to acetic acid + H₂', color: '#047857' },
    { label: 'Methanogenesis', desc: 'Methane produced from acetate and H₂', color: '#047857' },
  ];
  return (
    <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Digester Animation */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-xs font-bold tracking-widest text-earth-green uppercase">Inside the Digester</p>
        <div className="relative w-48 h-56 rounded-3xl bg-deep-forest/90 border border-earth-green/40 overflow-hidden flex flex-col">
          {/* Gas collection zone */}
          <div className="h-10 border-b border-earth-green/20 flex items-center justify-center gap-2 flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-earth-green animate-pulse" />
            <span className="text-[9px] font-bold text-earth-green tracking-widest">CH₄ COLLECTION</span>
          </div>
          {/* Liquid zone with bubbles */}
          <div className="flex-1 relative overflow-hidden">
            {/* Liquid tint */}
            <div className="absolute inset-0 bg-earth-green/5" />
            {/* Temperature indicator */}
            <div className="absolute top-2 right-3 flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-champagne-gold" style={{ animation: 'statusPulse 2s ease-in-out infinite' }} />
              <span className="text-[8px] text-champagne-gold font-bold">37°C</span>
            </div>
            {/* Bubbles — methane rising */}
            {[
              { l: '18%', d: '0s',    s: '0.55s', sz: 'w-2 h-2',     col: '#047857' },
              { l: '38%', d: '0.6s',  s: '0.65s', sz: 'w-1.5 h-1.5', col: '#10b981' },
              { l: '55%', d: '1.1s',  s: '0.5s',  sz: 'w-2 h-2',     col: '#047857' },
              { l: '70%', d: '0.3s',  s: '0.7s',  sz: 'w-1.5 h-1.5', col: '#10b981' },
              { l: '85%', d: '0.85s', s: '0.6s',  sz: 'w-2 h-2',     col: '#047857' },
              { l: '30%', d: '1.4s',  s: '0.55s', sz: 'w-1 h-1',     col: '#C9A96E' },
              { l: '62%', d: '0.2s',  s: '0.75s', sz: 'w-1 h-1',     col: '#C9A96E' },
            ].map((b, i) => (
              <div
                key={i}
                className={`absolute bottom-4 rounded-full ${b.sz}`}
                style={{
                  left: b.l,
                  backgroundColor: b.col,
                  animation: `bubbleFloat ${b.s} ease-in infinite`,
                  animationDelay: b.d,
                }}
              />
            ))}
            {/* Biomass layer at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-earth-beige/15 flex items-center justify-center">
              <span className="text-[8px] text-earth-beige font-bold tracking-widest">ORGANIC SLURRY</span>
            </div>
          </div>
          {/* Feed inlet */}
          <div className="h-7 border-t border-earth-green/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[8px] text-white/40 font-medium tracking-wide">FEEDSTOCK INLET</span>
          </div>
        </div>
        {/* Specs below animation */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-[240px]">
          {[
            { v: '30', u: 'days', l: 'HRT' },
            { v: '37', u: '°C',   l: 'Temperature' },
            { v: '3×', u: '2000m³', l: 'Volume' },
          ].map((m) => (
            <div key={m.l} className="text-center bg-soft-ivory rounded-xl p-2 border border-earth-beige/30">
              <p className="text-base font-black text-earth-green">{m.v}<span className="text-xs font-bold">{m.u}</span></p>
              <p className="text-[9px] text-muted-sage">{m.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4-stage microbiology explanation */}
      <div>
        <p className="text-xs font-bold tracking-widest text-muted-sage uppercase mb-5">The 4-Stage Biological Process</p>
        <div className="space-y-4">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex gap-4 items-start">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-black flex-shrink-0 mt-0.5"
                style={{ backgroundColor: stage.color }}
              >
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-charcoal text-sm">{stage.label}</p>
                <p className="text-xs text-muted-sage">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-xl bg-earth-green/5 border border-earth-green/20">
          <p className="text-xs font-bold text-earth-green mb-1">Key Output</p>
          <p className="text-sm text-charcoal font-medium">Raw biogas: 55–65% CH₄, 35–45% CO₂</p>
          <p className="text-xs text-muted-sage mt-1">Generated continuously over the 30-day retention cycle</p>
        </div>
      </div>
    </div>
  );
}

const BLOCKS: Omit<Block, 'content'>[] = [
  {
    id: 'feedstock',
    tag: 'Module A',
    title: 'Feedstock Intelligence',
    subtitle: 'Multi-source supply balancing & quality control',
    color: '#C9A96E',
  },
  {
    id: 'preprocessing',
    tag: 'Module B',
    title: 'Pre-processing Systems',
    subtitle: 'Shredding, conditioning & slurry preparation',
    color: '#6B7F6B',
  },
  {
    id: 'digestion',
    tag: 'Module C',
    title: 'Anaerobic Digestion',
    subtitle: 'CSTR mesophilic fermentation — the core of the Triple-D process',
    color: '#047857',
  },
];

const CONTENT_MAP: Record<string, React.ReactNode> = {
  feedstock: <FeedstockContent />,
  preprocessing: <PreprocessingContent />,
  digestion: <DigestionContent />,
};

export default function TechStackAccordion() {
  const [active, setActive] = useState<string>('digestion');

  return (
    <div className="space-y-3">
      {BLOCKS.map((block) => {
        const isOpen = active === block.id;
        return (
          <div
            key={block.id}
            className="rounded-2xl border overflow-hidden transition-all duration-300"
            style={{
              borderColor: isOpen ? `${block.color}50` : '#e8e0d4',
              backgroundColor: isOpen ? `${block.color}06` : 'white',
            }}
          >
            <button
              onClick={() => setActive(isOpen ? '' : block.id)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: isOpen ? block.color : `${block.color}30` }}
                >
                  <span style={{ color: isOpen ? 'white' : block.color }}>{block.tag.slice(-1)}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5" style={{ color: block.color }}>
                    {block.tag}
                  </p>
                  <h3 className="font-bold text-charcoal text-base leading-snug">{block.title}</h3>
                  <p className="text-xs text-muted-sage mt-0.5 hidden md:block">{block.subtitle}</p>
                </div>
              </div>
              <div
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{ borderColor: `${block.color}50`, transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                <span className="text-lg leading-none font-light" style={{ color: block.color }}>+</span>
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-7 border-t" style={{ borderColor: `${block.color}20` }}>
                {CONTENT_MAP[block.id]}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
