import type { Metadata } from 'next';
import Link from 'next/link';
import PlantLayoutMap from '../../components/plant/PlantLayoutMap';
import { AnimatedCounter } from '../../components/AnimatedCounter';

export const metadata: Metadata = {
  title: 'The Plant — Green Earth 3D BioWorks',
  description:
    "Inside Chhattisgarh's first Compressed Biogas plant — 10 TPD industrial-scale anaerobic digestion, gas purification, and biofertilizer recovery.",
};

const SNAPSHOT = [
  { value: '10 TPD', label: 'CBG Production', sub: 'Tonnes per day output' },
  { value: 'Paddy Straw + Agri Residue', label: 'Feedstock', sub: '110 TPD input capacity' },
  { value: 'Mesophilic AD', label: 'Core Technology', sub: 'Anaerobic digestion at 37 °C' },
  { value: 'CBG + Biofertilizer', label: 'Twin Outputs', sub: 'Zero waste, closed loop' },
  { value: 'Raipur, Chhattisgarh', label: 'Location', sub: 'Phase 1 site' },
  { value: 'SATAT Framework', label: 'Business Model', sub: 'GOI policy–backed offtake' },
];

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Farmer Collection',
    desc: 'Registered farmers bale paddy straw and crop residue post-harvest. Our logistics team coordinates pickup to eliminate field burning.',
    fact: '250+ farming households in the supply network',
  },
  {
    n: '02',
    title: 'Reception & QC',
    desc: 'Feedstock is weighed at the plant weighbridge, sampled, and tested for moisture and contamination before entering covered storage bays.',
    fact: '500-tonne covered storage capacity',
  },
  {
    n: '03',
    title: 'Pre-processing',
    desc: 'Material is shredded to 20–40 mm, blended with recycled process water, and conditioned to the precise dry matter ratio for optimal digestion.',
    fact: '18–22% total solids for mesophilic fermentation',
  },
  {
    n: '04',
    title: 'Anaerobic Digestion',
    desc: 'Slurry enters three sealed CSTR digesters operating at 37 °C. Over 30 days, methanogenic bacteria break down organic matter and produce raw biogas.',
    fact: '3 × 2,000 m³ digesters · 30-day HRT',
  },
  {
    n: '05',
    title: 'Gas Purification',
    desc: 'Raw biogas (60% CH₄) is scrubbed via pressure swing adsorption — removing CO₂ to < 2% and stripping H₂S and moisture.',
    fact: '≥ 95% biomethane purity achieved',
  },
  {
    n: '06',
    title: 'Compression & Storage',
    desc: 'Purified biomethane is compressed to 200–250 bar in a multi-stage compressor and staged in cascade cylinder banks for tanker loading.',
    fact: 'CNG-equivalent pressure standard',
  },
  {
    n: '07',
    title: 'CBG Dispatch',
    desc: 'Compressed Biogas is loaded onto OMC tanker trailers and dispatched to designated fuel depots under the SATAT offtake agreement.',
    fact: '10 TPD to Oil Marketing Companies',
  },
];

const INFRA = [
  { label: 'Plant Area', value: '~4 acres' },
  { label: 'Feedstock Input', value: '110 TPD' },
  { label: 'CBG Output', value: '10 TPD' },
  { label: 'Digester Volume', value: '3 × 2,000 m³' },
  { label: 'Process Type', value: 'Wet Fermentation CSTR' },
  { label: 'Retention Time', value: '28–30 days HRT' },
  { label: 'Operating Temp.', value: '37 °C mesophilic' },
  { label: 'Gas Purity', value: '≥ 95% CH₄' },
  { label: 'Compression', value: '200–250 bar' },
  { label: 'Biofertilizer Output', value: '~20 TPD solid fraction' },
  { label: 'Digestate Total', value: '~95 TPD (liquid + solid)' },
  { label: 'Power Supply', value: 'HT grid + captive backup' },
];

const TECH_BLOCKS = [
  {
    tag: 'Digestion',
    title: 'Continuous Stirred Tank Digestion',
    desc: 'Mesophilic CSTR operation at 37 °C with automated slow-speed paddle mixing ensures uniform temperature and substrate distribution across all three digester vessels. A 28–30 day hydraulic retention time maximises biogas yield from lignocellulosic feedstocks.',
    spec: '55–65% biogas yield',
  },
  {
    tag: 'Purification',
    title: 'Pressure Swing Adsorption',
    desc: 'Raw biogas passes through a molecular sieve PSA unit that selectively adsorbs CO₂, reducing it from ~40% to below 2%. Simultaneous H₂S scrubbing and moisture removal produces pipeline-quality biomethane compliant with IS 16087.',
    spec: '≥ 95% CH₄ post-purification',
  },
  {
    tag: 'Compression',
    title: 'Cascade Compression System',
    desc: 'A multi-stage reciprocating compressor brings purified biomethane to 200–250 bar, staged through high-pressure cascade cylinder banks. The tanker filling bay dispenses directly into OMC-approved tube trailer modules.',
    spec: 'CNG-equivalent pressure standard',
  },
  {
    tag: 'Recovery',
    title: 'Closed-Loop Digestate Recovery',
    desc: 'A decanting centrifuge separates digestate into a solid NPK-enriched biofertilizer fraction and a liquid amendment. Solid output is dried, screened, and bagged. Liquid is returned to registered farmers or recycled as process water — achieving near-zero liquid discharge.',
    spec: '~20 TPD biofertilizer output',
  },
];

const COMPLIANCE = [
  {
    code: 'SATAT',
    name: 'SATAT Scheme',
    body: 'Ministry of Petroleum & Natural Gas',
    note: 'Registered CBG producer under GOI\'s Sustainable Alternative Towards Affordable Transportation framework',
  },
  {
    code: 'PESO',
    name: 'PESO Certified',
    body: 'Petroleum Explosives Safety Organisation',
    note: 'Gas compression equipment and cascade storage certified under PESO regulations',
  },
  {
    code: 'BIS',
    name: 'IS 16087',
    body: 'Bureau of Indian Standards',
    note: 'Compressed Biogas quality standard for vehicular applications — methane purity, pressure, and contaminant limits',
  },
  {
    code: 'PCB',
    name: 'PCB Clearance',
    body: 'Chhattisgarh Pollution Control Board',
    note: 'State environmental clearances for air emissions, effluent discharge, and solid waste management',
  },
  {
    code: 'NABL',
    name: 'NABL Testing',
    body: 'National Accreditation Board for Testing',
    note: 'Feedstock quality, biogas composition, and digestate nutrient analysis conducted at NABL accredited laboratories',
  },
  {
    code: 'ISO',
    name: 'ISO 14001',
    body: 'Environmental Management',
    note: 'Environmental management system certification in progress — scheduled for Phase 2 commissioning',
  },
];

const EXPANSION_PHASES = [
  {
    phase: 'Phase 1',
    period: '2024–2025',
    status: 'Active',
    detail: '10 TPD CBG · Raipur, Chhattisgarh · SATAT offtake · Farmer network established',
  },
  {
    phase: 'Phase 2',
    period: '2026',
    status: 'Planned',
    detail: '20 TPD CBG · Second plant site identified · Enhanced biofertilizer distribution',
  },
  {
    phase: 'Phase 3',
    period: '2027',
    status: 'Vision',
    detail: '50 TPD network · State-wide Chhattisgarh coverage · Aggregation hubs',
  },
  {
    phase: 'Phase 4',
    period: '2028+',
    status: 'Vision',
    detail: '150 TPD multi-state operations · Maharashtra · Madhya Pradesh · Odisha',
  },
];

export default function PlantPage() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-deep-forest text-white flex items-center overflow-hidden">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-earth-green/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-champagne-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-24">
          <p className="text-champagne-gold text-xs font-semibold tracking-[0.22em] uppercase mb-6 animate-fade-in-up">
            Green Earth 3D BioWorks · Chhattisgarh, India
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Engineering Circular<br />
            Bioenergy at<br />
            <span className="text-champagne-gold">Industrial Scale</span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            India&apos;s first zero-burn, closed-loop Compressed Biogas plant — transforming agricultural residue into premium-grade fuel while returning nutrients to the land.
          </p>

          {/* Stat badges */}
          <div
            className="flex flex-wrap gap-3 mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {[
              '10 TPD · Production Capacity',
              'SATAT · Certified Framework',
              'Phase 1 · Operational',
            ].map((badge) => (
              <span
                key={badge}
                className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-medium text-white/80 tracking-wide"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#plant-layout"
              className="inline-block bg-white text-deep-forest px-8 py-3.5 rounded-lg font-semibold hover:bg-soft-ivory transition-colors duration-200 text-center"
            >
              Explore the Layout
            </a>
            <Link
              href="/contact"
              className="inline-block border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 text-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── 2. SNAPSHOT STRIP ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4 md:px-8 border-b border-earth-beige/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {SNAPSHOT.map((s) => (
              <div key={s.label} className="scroll-reveal text-center py-4 px-2">
                <p className="text-sm font-bold text-charcoal leading-snug mb-1">{s.value}</p>
                <p className="text-xs font-semibold text-earth-green uppercase tracking-wide mb-0.5">{s.label}</p>
                <p className="text-xs text-muted-sage">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE PLANT LAYOUT ───────────────────────────────────────── */}
      <section id="plant-layout" className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Facility Overview</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
              Inside the Plant
            </h2>
            <p className="text-muted-sage max-w-xl text-lg leading-relaxed">
              Click any zone to explore its function, equipment, and role in the Triple-D process.
            </p>
          </div>
          <div className="scroll-reveal">
            <PlantLayoutMap />
          </div>
        </div>
      </section>

      {/* ── 4. HOW THE PLANT WORKS (7 steps) ──────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">The Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              From Paddy Straw to Green Fuel
            </h2>
            <p className="text-muted-sage max-w-xl">
              Seven steps that transform agricultural residue into India&apos;s cleanest transportation fuel.
            </p>
          </div>

          {/* Horizontal scroll container */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-5 min-w-max lg:min-w-0 lg:grid lg:grid-cols-7">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.n}
                  className="scroll-reveal w-64 lg:w-auto flex-shrink-0 flex flex-col gap-4 p-5 rounded-2xl border border-earth-beige/30 bg-soft-ivory hover:border-earth-green/30 hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {/* Step number */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-earth-green/10 text-earth-green font-black text-xs flex items-center justify-center flex-shrink-0">
                      {step.n}
                    </div>
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="hidden lg:block flex-1 h-px bg-earth-green/20" />
                    )}
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-charcoal text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-sage leading-relaxed mb-3">{step.desc}</p>
                    <div className="border-l-2 border-earth-green pl-3">
                      <p className="text-xs font-medium text-earth-green">{step.fact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. INFRASTRUCTURE & CAPACITY ──────────────────────────────────────── */}
      <section className="bg-charcoal text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="scroll-reveal">
              <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Plant Specifications
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Built for Reliability at Scale
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Every component — from the weighbridge to the compression station — is specified for continuous 24/7 industrial operation, designed to SATAT and BIS standards, and engineered for the humid subtropical climate of Chhattisgarh.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/technology"
                  className="inline-block bg-earth-green text-white px-7 py-3 rounded-lg font-semibold hover:bg-deep-forest transition-colors duration-200 text-center"
                >
                  View Technology
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border border-white/20 text-white px-7 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 text-center"
                >
                  Request DPR
                </Link>
              </div>
            </div>

            <div className="scroll-reveal">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {INFRA.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-baseline py-3 border-b border-white/10 gap-4"
                  >
                    <span className="text-xs text-white/50 font-medium">{item.label}</span>
                    <span className="text-sm font-bold text-white text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SUSTAINABILITY INTELLIGENCE DASHBOARD ──────────────────────────── */}
      <section className="bg-forest-mid text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Impact Intelligence
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Sustainability at Every Output
            </h2>
            <p className="text-white/60 max-w-lg">
              Every tonne of CBG produced is a measurable act of environmental and economic restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Environmental */}
            <div className="scroll-reveal rounded-2xl p-7 border border-white/10 bg-white/5">
              <p className="text-xs font-bold tracking-widest text-champagne-gold uppercase mb-6">Environmental</p>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-black text-white">
                    <AnimatedCounter end={12500} suffix="+" />
                  </p>
                  <p className="text-sm text-white/60 mt-1">tonnes CO₂e avoided annually</p>
                  <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[82%] rounded-full bg-earth-green" />
                  </div>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">
                    <AnimatedCounter end={95} suffix="%" />
                  </p>
                  <p className="text-sm text-white/60 mt-1">reduction in field burning potential</p>
                  <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[95%] rounded-full bg-earth-green" />
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Economy */}
            <div className="scroll-reveal rounded-2xl p-7 border border-white/10 bg-white/5">
              <p className="text-xs font-bold tracking-widest text-champagne-gold uppercase mb-6">Circular Economy</p>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-black text-white">
                    <AnimatedCounter end={108} suffix="K" />
                  </p>
                  <p className="text-sm text-white/60 mt-1">tonnes of crop residue processed per year</p>
                  <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[72%] rounded-full bg-champagne-gold" />
                  </div>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">
                    <AnimatedCounter end={7300} />
                  </p>
                  <p className="text-sm text-white/60 mt-1">tonnes of biofertilizer returned to farms</p>
                  <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[58%] rounded-full bg-champagne-gold" />
                  </div>
                </div>
              </div>
            </div>

            {/* Rural Economy */}
            <div className="scroll-reveal rounded-2xl p-7 border border-white/10 bg-white/5">
              <p className="text-xs font-bold tracking-widest text-champagne-gold uppercase mb-6">Rural Economy</p>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-black text-white">
                    <AnimatedCounter end={250} suffix="+" />
                  </p>
                  <p className="text-sm text-white/60 mt-1">farming households in the supply network</p>
                  <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[60%] rounded-full bg-muted-sage" />
                  </div>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">
                    ₹<AnimatedCounter end={2.5} decimals={1} suffix=" Cr" />
                  </p>
                  <p className="text-sm text-white/60 mt-1">annual feedstock procurement value</p>
                  <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[50%] rounded-full bg-muted-sage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. INSIDE THE TECHNOLOGY ──────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Technology</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Inside the Technology
            </h2>
            <p className="text-muted-sage max-w-lg">
              Four integrated systems — each optimised independently, engineered to perform as one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECH_BLOCKS.map((block, i) => (
              <div
                key={block.tag}
                className="scroll-reveal p-8 rounded-2xl bg-soft-ivory border border-earth-beige/30 hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-champagne-gold uppercase">{block.tag}</span>
                  <span className="text-xs font-semibold text-earth-green bg-earth-green/10 px-3 py-1 rounded-full">
                    {block.spec}
                  </span>
                </div>
                <h3 className="font-bold text-charcoal text-lg leading-snug">{block.title}</h3>
                <p className="text-sm text-muted-sage leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center scroll-reveal">
            <Link
              href="/technology"
              className="inline-block text-earth-green font-semibold hover:underline text-sm"
            >
              Full technology deep-dive →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. ENVIRONMENTAL & RURAL IMPACT ───────────────────────────────────── */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="scroll-reveal">
              <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Impact</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                The Plant That Pays Every<br />Stakeholder Back
              </h2>
              <div className="space-y-5 text-muted-sage leading-relaxed">
                <p>
                  Every October, paddy fields across Chhattisgarh are lit. Farmers burn residue because they have no choice — harvest windows are narrow and straw has no market. That smoke carries a healthcare bill, a carbon debt, and a missed opportunity.
                </p>
                <p>
                  Green Earth 3D BioWorks was built to close that loop. By paying fair-market price for crop residue, we give farmers an income stream where there was a cost. By converting that residue into CBG, we deliver premium-grade fuel to OMC depots. By returning digestate as biofertilizer, we reduce their input costs next season.
                </p>
                <p>
                  Every tonne of CBG we produce is a tonne of residue that didn&apos;t burn, a tonne of CO₂ that wasn&apos;t emitted, and a family that earned rather than lost.
                </p>
              </div>
            </div>

            <div className="scroll-reveal grid grid-cols-1 gap-4">
              {[
                { label: 'For Farmers', value: 'Residue income + free biofertilizer', detail: 'Double benefit — sell the waste, receive the nutrient return' },
                { label: 'For OMCs', value: 'Domestic CBG supply', detail: 'Guaranteed, SATAT-compliant offtake at commercial volumes' },
                { label: 'For the Air', value: '12,500+ tonnes CO₂e avoided', detail: 'Every year of operation vs. equivalent fossil fuel + field burning' },
                { label: 'For the Region', value: 'Rural employment', detail: 'Plant operations, logistics, and farmer network support jobs' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 items-start p-5 rounded-xl bg-white border border-earth-beige/30 hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-earth-green mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-champagne-gold uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="font-bold text-charcoal text-sm">{item.value}</p>
                    <p className="text-xs text-muted-sage mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. SAFETY, RELIABILITY & COMPLIANCE ───────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Compliance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Safety, Reliability &amp; Compliance
            </h2>
            <p className="text-muted-sage max-w-lg">
              Operated to the highest regulatory standards across safety, environment, and fuel quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPLIANCE.map((c, i) => (
              <div
                key={c.code}
                className="scroll-reveal p-6 rounded-2xl border border-earth-beige/30 bg-soft-ivory hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-earth-green/8 flex items-center justify-center">
                    <span className="text-xs font-black text-earth-green tracking-tight">{c.code}</span>
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-sm">{c.name}</p>
                    <p className="text-xs text-champagne-gold">{c.body}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-sage leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FUTURE EXPANSION VISION ───────────────────────────────────────── */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Expansion</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Scaling India&apos;s Circular Energy Network
            </h2>
            <p className="text-muted-sage max-w-xl">
              Phase 1 is proof. Phases 2–4 are the replication model for India&apos;s agricultural heartland.
            </p>
          </div>

          {/* Horizontal timeline desktop, stacked mobile */}
          <div className="relative">
            {/* Connector line (desktop only) */}
            <div className="hidden lg:block absolute top-[2.25rem] left-0 right-0 h-px bg-earth-beige/60" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPANSION_PHASES.map((phase, i) => (
                <div key={phase.phase} className="scroll-reveal relative" style={{ animationDelay: `${i * 0.1}s` }}>
                  {/* Timeline dot */}
                  <div className={`w-4 h-4 rounded-full border-2 mb-6 flex-shrink-0 ${phase.status === 'Active' ? 'bg-earth-green border-earth-green' : 'bg-white border-earth-beige'}`} />
                  <div className="bg-white rounded-2xl p-6 border border-earth-beige/30 hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-charcoal">{phase.phase}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        phase.status === 'Active'
                          ? 'bg-earth-green/10 text-earth-green'
                          : 'bg-earth-beige/30 text-muted-sage'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <p className="text-xs text-champagne-gold font-semibold mb-2">{phase.period}</p>
                    <p className="text-xs text-muted-sage leading-relaxed">{phase.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. GALLERY ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Visual Experience</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Site Overview', 'Digester Equipment', 'Control Room',
              'Farmer Partners', 'CBG Tanker', 'Biofertilizer Output',
            ].map((label, i) => (
              <div
                key={label}
                className="scroll-reveal aspect-video rounded-2xl bg-soft-ivory border border-earth-beige/30 flex flex-col items-center justify-center gap-2 hover:border-earth-green/30 transition-colors duration-300"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="w-8 h-8 rounded-full bg-earth-beige/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-earth-beige" />
                </div>
                <p className="text-xs font-medium text-muted-sage">{label}</p>
                <p className="text-xs text-muted-sage/60">Photo coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="relative bg-forest-mid text-white py-24 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center scroll-reveal">
          <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-6">
            Join the Platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Building the Next Generation of<br />
            India&apos;s Circular Energy Infrastructure
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Partner with us as an investor, offtake partner, or technology collaborator — and help scale this model across India&apos;s agricultural heartland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/investors"
              className="inline-block bg-champagne-gold text-deep-forest px-9 py-4 rounded-lg font-bold hover:bg-earth-beige transition-colors duration-200 text-center"
            >
              Investor Overview
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/30 text-white px-9 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
