import type { Metadata } from 'next';
import Link from 'next/link';
import ProcessFlow from '../../components/technology/ProcessFlow';
import TechStackAccordion from '../../components/technology/TechStackAccordion';
import { AnimatedCounter } from '../../components/AnimatedCounter';

export const metadata: Metadata = {
  title: 'Technology — Green Earth 3D BioWorks',
  description:
    'Advanced anaerobic digestion, gas purification, and circular economy systems powering Chhattisgarh\'s first Compressed Biogas plant.',
};

const PHILOSOPHY_POINTS = [
  { label: 'Multi-feedstock flexibility', sub: 'Paddy straw, Napier grass, agri residues — year-round supply' },
  { label: 'Industrial-grade gas purification', sub: 'PSA technology achieving ≥ 95% methane purity' },
  { label: 'Automated plant monitoring', sub: 'SCADA-based real-time process control and safety interlocks' },
  { label: 'High-efficiency digestion', sub: 'CSTR mesophilic operation optimised for lignocellulosic feedstocks' },
  { label: 'Low-waste infrastructure', sub: 'Digestate fully recovered as certified biofertilizer' },
];

const GAS_PUR_STEPS = [
  { label: 'Raw Biogas In', note: '~60% CH₄ · ~40% CO₂ · trace H₂S', color: '#6B7F6B' },
  { label: 'H₂S Scrubbing', note: 'Chemical or biological removal to < 10 ppm', color: '#C9A96E' },
  { label: 'Moisture Knockout', note: 'Water vapour removed via condensation', color: '#64748b' },
  { label: 'PSA Separation', note: 'Molecular sieve adsorbs CO₂ from 40% → < 2%', color: '#0ea5e9' },
  { label: 'Biomethane Output', note: '≥ 95% CH₄ · IS 16087 certified', color: '#047857' },
];

const AUTOMATION_PANELS = [
  {
    title: 'Process Control',
    color: '#047857',
    metrics: [
      { label: 'Digester Temp', value: '37.2 °C', status: 'nominal' },
      { label: 'Biogas Flow', value: '3,840 m³/d', status: 'nominal' },
      { label: 'pH Level', value: '7.1', status: 'nominal' },
      { label: 'OLR', value: '3.8 kgVS/m³d', status: 'nominal' },
    ],
  },
  {
    title: 'Environmental',
    color: '#0ea5e9',
    metrics: [
      { label: 'CH₄ Purity', value: '96.4%', status: 'nominal' },
      { label: 'CO₂ Removed', value: '1.7%', status: 'nominal' },
      { label: 'H₂S Level', value: '< 5 ppm', status: 'nominal' },
      { label: 'Moisture', value: '< 40 mg/m³', status: 'nominal' },
    ],
  },
  {
    title: 'Safety Systems',
    color: '#C9A96E',
    metrics: [
      { label: 'Gas Detector', value: 'CLEAR', status: 'nominal' },
      { label: 'Pressure Relief', value: 'STANDBY', status: 'nominal' },
      { label: 'ESD Circuit', value: 'ARMED', status: 'nominal' },
      { label: 'Fire Alarm', value: 'CLEAR', status: 'nominal' },
    ],
  },
];

const CIRCULAR_STEPS = [
  { label: 'Agricultural Residue', sub: 'Paddy straw, crop waste', icon: '↓', color: '#C9A96E' },
  { label: 'Biogas Plant', sub: 'Anaerobic digestion', icon: '↓', color: '#047857' },
  { label: 'CBG Fuel', sub: 'Compressed Biogas → OMC depots', icon: '↓', color: '#10b981' },
  { label: 'Digestate Recovery', sub: 'Solid + liquid separation', icon: '↓', color: '#6B7F6B' },
  { label: 'Organic Biofertilizer', sub: 'NPK-enriched · returned to farms', icon: '↑', color: '#C8B89A' },
];

const WHY_MATTERS = [
  {
    headline: 'Cleaner Air',
    body: 'Every tonne of feedstock processed is a tonne of crop residue not burned in the open field. The plant directly eliminates a major source of PM2.5 and CO₂ in Chhattisgarh.',
    tag: 'Environmental',
    color: '#047857',
  },
  {
    headline: 'Energy Transition',
    body: 'CBG is chemically identical to CNG and can replace fossil natural gas in existing vehicle fleets and refuelling infrastructure — enabling a near-zero-carbon fuel pathway without new infrastructure.',
    tag: 'Energy',
    color: '#0ea5e9',
  },
  {
    headline: 'Rural Value Creation',
    body: 'By converting a disposal cost (straw burning) into a paid commodity, the plant creates a new income stream for smallholder farmers — increasing household income while strengthening feedstock supply chains.',
    tag: 'Economic',
    color: '#C9A96E',
  },
  {
    headline: 'Sustainable Agriculture',
    body: 'Biofertilizer returned to farmland contains NPK nutrients and beneficial microorganisms, improving soil health and reducing dependency on synthetic fertilizers over multiple growing seasons.',
    tag: 'Agriculture',
    color: '#C8B89A',
  },
];

const FUTURE_READY = [
  {
    title: 'Modular Architecture',
    desc: 'Each plant unit is self-contained and stackable — additional digester capacity can be commissioned in phases without disrupting operations.',
    tag: 'Scalable',
  },
  {
    title: 'Multi-Feedstock Ready',
    desc: 'The pre-processing and digestion system is designed to handle any lignocellulosic or slurry feedstock — enabling adaptation to local agricultural profiles in any Indian state.',
    tag: 'Flexible',
  },
  {
    title: 'Digital-First Operations',
    desc: 'SCADA-based monitoring, cloud data logging, and remote diagnostics ensure the technology can be operated and maintained from regional centres as the network scales.',
    tag: 'Digital',
  },
  {
    title: 'SATAT Network Integration',
    desc: 'Each new plant slots directly into India\'s existing SATAT framework and OMC distribution network — no new regulatory pathway required to replicate the model.',
    tag: 'Policy-Ready',
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] bg-deep-forest text-white flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-earth-green/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-champagne-gold/8 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-20 w-full">
          <p className="text-champagne-gold text-xs font-semibold tracking-[0.22em] uppercase mb-6 animate-fade-in-up">
            Green Earth 3D BioWorks · Technology
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Engineering the Future<br />
            of <span className="text-champagne-gold">Circular Bioenergy</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Advanced bioenergy systems transforming agricultural residue into clean fuel, renewable infrastructure, and sustainable agricultural value chains.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#process-flow"
              className="inline-block bg-white text-deep-forest px-7 py-3.5 rounded-lg font-semibold hover:bg-soft-ivory transition-colors duration-200 text-center text-sm"
            >
              Explore Process Flow
            </a>
            <Link
              href="/plant"
              className="inline-block border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 text-center text-sm"
            >
              View Plant Systems
            </Link>
            <Link
              href="/sustainability"
              className="inline-block border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 text-center text-sm"
            >
              Sustainability Impact
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. INTERACTIVE PROCESS FLOW (CENTERPIECE) ─────────────────────────── */}
      <section id="process-flow" className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Full Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
              From Field to Fuel — 7 Stages
            </h2>
            <p className="text-muted-sage text-lg max-w-xl">
              Click any stage to explore the technology, equipment, and specifications behind it.
            </p>
          </div>
          <div className="scroll-reveal">
            <ProcessFlow />
          </div>
        </div>
      </section>

      {/* ── 3. TECHNOLOGY PHILOSOPHY ─────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="scroll-reveal">
              <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                Built Around Efficiency, Reliability &amp; Circular Sustainability
              </h2>
              <p className="text-muted-sage leading-relaxed mb-8">
                Every engineering decision at Green Earth 3D BioWorks is evaluated against three criteria: does it maximise energy yield, does it minimise waste, and does it strengthen the circular loop between the plant and the farming communities that supply it?
              </p>
              <div className="space-y-4">
                {PHILOSOPHY_POINTS.map((p) => (
                  <div key={p.label} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-earth-green mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-charcoal text-sm">{p.label}</p>
                      <p className="text-xs text-muted-sage mt-0.5">{p.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated infrastructure visual */}
            <div className="scroll-reveal hidden lg:block">
              <div className="relative w-full aspect-square max-w-sm mx-auto">
                {/* Central node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-earth-green/10 border-2 border-earth-green/40 flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-earth-green/20 border border-earth-green/50 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-earth-green" style={{ animation: 'statusPulse 2s ease-in-out infinite' }} />
                  </div>
                </div>
                {/* Orbit ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-earth-green/20 animate-spin-slow" />
                {/* Satellite nodes */}
                {[
                  { label: 'Feedstock', x: '50%', y: '4%', color: '#C9A96E' },
                  { label: 'Digestion', x: '88%', y: '30%', color: '#047857' },
                  { label: 'Purification', x: '88%', y: '65%', color: '#0ea5e9' },
                  { label: 'CBG Output', x: '50%', y: '90%', color: '#10b981' },
                  { label: 'Biofertilizer', x: '8%', y: '65%', color: '#C8B89A' },
                  { label: 'Control', x: '8%', y: '30%', color: '#818cf8' },
                ].map((node, i) => (
                  <div
                    key={node.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
                    style={{ left: node.x, top: node.y }}
                  >
                    <div
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: node.color, backgroundColor: `${node.color}15` }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: node.color, animation: `statusPulse ${1.5 + i * 0.25}s ease-in-out infinite` }} />
                    </div>
                    <span className="text-[9px] font-bold text-muted-sage whitespace-nowrap">{node.label}</span>
                  </div>
                ))}
                {/* Connector lines from center to each node */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  {[
                    [200, 200, 200, 18],
                    [200, 200, 352, 120],
                    [200, 200, 352, 260],
                    [200, 200, 200, 362],
                    [200, 200, 32, 260],
                    [200, 200, 32, 120],
                  ].map(([x1, y1, x2, y2], i) => (
                    <line
                      key={i}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="#04785730"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TECH STACK DEEP-DIVES ──────────────────────────────────────────── */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Core Systems</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Technology Stack Deep-Dives
            </h2>
            <p className="text-muted-sage max-w-xl">
              Three core process modules — each engineered for maximum performance and minimum waste.
            </p>
          </div>
          <div className="scroll-reveal">
            <TechStackAccordion />
          </div>
        </div>
      </section>

      {/* ── 5. GAS PURIFICATION ───────────────────────────────────────────────── */}
      <section className="bg-charcoal text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="scroll-reveal">
              <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-4">Purification</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Upgrading Raw Biogas Into<br />High-Purity Green Fuel
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                The purification stage transforms a mixed gas stream into a consistent, fuel-grade product. Pressure swing adsorption selectively captures CO₂ while passing methane through — achieving pipeline quality in a continuous, energy-efficient cycle.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: '< 2%', l: 'CO₂ residual' },
                  { v: '≥ 95%', l: 'CH₄ purity' },
                  { v: 'IS 16087', l: 'Standard' },
                ].map((m) => (
                  <div key={m.l} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xl font-black text-champagne-gold">{m.v}</p>
                    <p className="text-xs text-white/50 mt-1">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Separation flow visual */}
            <div className="scroll-reveal">
              <div className="space-y-2">
                {GAS_PUR_STEPS.map((step, i) => (
                  <div
                    key={step.label}
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300"
                    style={{ borderColor: `${step.color}30`, backgroundColor: `${step.color}0d` }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm text-white">{step.label}</p>
                      <p className="text-xs text-white/50 mt-0.5">{step.note}</p>
                    </div>
                    {i < GAS_PUR_STEPS.length - 1 && (
                      <div className="text-white/20 text-xs">↓</div>
                    )}
                    {i === GAS_PUR_STEPS.length - 1 && (
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: step.color, animation: 'statusPulse 1.5s ease-in-out infinite' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. COMPRESSION & CASCADING ────────────────────────────────────────── */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="scroll-reveal">
              <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Compression</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                Industrial Precision Compression &amp; Cascade Storage
              </h2>
              <p className="text-muted-sage leading-relaxed mb-6">
                Purified biomethane is compressed through a multi-stage reciprocating compressor to 200–250 bar — the same pressure standard as commercial CNG. Cascade cylinder banks stage the product for rapid, accurate loading into OMC tube trailer modules, with integrated safety interlocks throughout the compression train.
              </p>
              <div className="space-y-3">
                {[
                  'Multi-stage reciprocating compressor',
                  'PESO-certified compression equipment',
                  '200–250 bar output pressure',
                  'Cascade high-pressure cylinder storage',
                  'OMC tanker filling bay with metered dispensing',
                  'Integrated pressure relief and ESD system',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-earth-green flex-shrink-0" />
                    <span className="text-sm text-muted-sage">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-reveal grid grid-cols-2 gap-4">
              {[
                { v: '200–250', u: 'bar', l: 'Operating pressure', color: '#64748b' },
                { v: '10', u: 'TPD', l: 'CBG output capacity', color: '#047857' },
                { v: 'CNG-equivalent', u: '', l: 'Pressure standard', color: '#0ea5e9' },
                { v: 'PESO', u: 'Certified', l: 'Equipment standard', color: '#C9A96E' },
              ].map((m) => (
                <div
                  key={m.l}
                  className="p-6 rounded-2xl bg-white border border-earth-beige/30 hover:-translate-y-1 transition-transform duration-300"
                >
                  <p className="text-2xl font-black leading-tight" style={{ color: m.color }}>
                    {m.v}
                    {m.u && <span className="text-sm ml-1 font-bold">{m.u}</span>}
                  </p>
                  <p className="text-xs text-muted-sage mt-2">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. AUTOMATION & INTELLIGENCE ──────────────────────────────────────── */}
      <section className="bg-charcoal text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Automation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intelligent Monitoring for Reliable Operations
            </h2>
            <p className="text-white/60 max-w-xl">
              A SCADA-based control architecture provides real-time visibility across every process variable — temperature, pressure, pH, gas composition, and safety systems — from a central operations console.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 scroll-reveal">
            {AUTOMATION_PANELS.map((panel) => (
              <div
                key={panel.title}
                className="rounded-2xl border p-6 relative overflow-hidden"
                style={{ borderColor: `${panel.color}30`, backgroundColor: `${panel.color}0a` }}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: panel.color, animation: 'statusPulse 2s ease-in-out infinite' }}
                  />
                  <p className="text-xs font-bold tracking-widest uppercase text-white/80">{panel.title}</p>
                  <div className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${panel.color}25`, color: panel.color }}>
                    LIVE
                  </div>
                </div>
                {/* Metrics */}
                <div className="space-y-3">
                  {panel.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between">
                      <span className="text-xs text-white/40">{m.label}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white">{m.value}</span>
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: panel.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Animated bar at bottom */}
                <div className="mt-5 h-0.5 rounded-full overflow-hidden" style={{ backgroundColor: `${panel.color}20` }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: panel.color,
                      width: '85%',
                      background: `linear-gradient(to right, ${panel.color}40, ${panel.color})`,
                      animation: 'sweepRight 3s ease-in-out infinite',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 scroll-reveal">
            {[
              { label: 'SCADA System', sub: 'Real-time process control' },
              { label: 'Cloud Logging', sub: 'Continuous data archiving' },
              { label: 'Remote Access', sub: 'Off-site monitoring console' },
              { label: 'Alarm Management', sub: 'Multi-tier alert hierarchy' },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="text-xs text-white/40 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CIRCULAR ECONOMY SYSTEMS ───────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="scroll-reveal">
              <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Circular Economy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                From Waste to Renewable Agricultural Value
              </h2>
              <p className="text-muted-sage leading-relaxed mb-6">
                The plant is not simply a fuel production facility. It is a circular infrastructure node — taking a material that would otherwise be burned, extracting maximum energy value from it, and returning the residual nutrients to the farmland that produced it.
              </p>
              <p className="text-muted-sage leading-relaxed">
                This closed-loop model strengthens the supply chain, improves farmer economics, and progressively reduces the plant&apos;s own input costs as soil health improves across the catchment area.
              </p>
            </div>

            {/* Circular flow diagram */}
            <div className="scroll-reveal">
              <div className="relative max-w-xs mx-auto">
                {CIRCULAR_STEPS.map((step, i) => (
                  <div key={step.label} className="flex flex-col items-center">
                    <div
                      className="w-full rounded-2xl px-5 py-4 border text-center hover:-translate-y-0.5 transition-transform duration-300"
                      style={{ borderColor: `${step.color}40`, backgroundColor: `${step.color}0d` }}
                    >
                      <p className="font-bold text-charcoal text-sm">{step.label}</p>
                      <p className="text-xs text-muted-sage mt-0.5">{step.sub}</p>
                    </div>
                    {i < CIRCULAR_STEPS.length - 1 && (
                      <div
                        className="w-px h-8 my-1"
                        style={{ background: `linear-gradient(to bottom, ${step.color}60, ${CIRCULAR_STEPS[i + 1].color}60)` }}
                      />
                    )}
                  </div>
                ))}
                {/* Return arrow */}
                <div className="mt-1 flex items-center gap-3">
                  <div className="flex-1 h-px bg-earth-beige/40" />
                  <div className="flex items-center gap-1 text-xs text-muted-sage font-medium">
                    <span>↩</span>
                    <span>Returns to farmland</span>
                  </div>
                  <div className="flex-1 h-px bg-earth-beige/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. ENVIRONMENTAL PERFORMANCE ─────────────────────────────────────── */}
      <section className="bg-forest-mid text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-4">Performance</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Environmental Performance</h2>
            <p className="text-white/60 max-w-lg">Measured, verifiable impact — every year of operation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { end: 12500, suffix: '+', label: 'Tonnes CO₂e avoided', sub: 'Per year', color: '#047857', decimals: 0 },
              { end: 108, suffix: 'K', label: 'Tonnes crop waste diverted', sub: 'Annually processed', color: '#C9A96E', decimals: 0 },
              { end: 3650, suffix: ' T', label: 'CBG produced', sub: 'Renewable fuel annually', color: '#0ea5e9', decimals: 0 },
              { end: 95, suffix: '%', label: 'Fossil fuel offset potential', sub: 'vs CNG baseline', color: '#10b981', decimals: 0 },
              { end: 7300, suffix: ' T', label: 'Biofertilizer output', sub: 'Per year to farmland', color: '#C8B89A', decimals: 0 },
            ].map((m) => (
              <div
                key={m.label}
                className="scroll-reveal rounded-2xl p-6 border border-white/10 bg-white/5 text-center"
              >
                <p className="text-3xl font-black text-white">
                  <AnimatedCounter end={m.end} suffix={m.suffix} decimals={m.decimals} />
                </p>
                <p className="text-xs font-semibold mt-2" style={{ color: m.color }}>{m.label}</p>
                <p className="text-xs text-white/40 mt-1">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. WHY THIS TECHNOLOGY MATTERS ──────────────────────────────────── */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Significance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why This Technology Matters
            </h2>
            <p className="text-muted-sage max-w-xl">
              Beyond the engineering — the social and environmental case for compressed biogas at scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHY_MATTERS.map((card, i) => (
              <div
                key={card.headline}
                className="scroll-reveal p-8 rounded-2xl bg-white border border-earth-beige/30 hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: card.color }} />
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: card.color }}>{card.tag}</span>
                    <h3 className="font-bold text-charcoal text-xl leading-tight">{card.headline}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-sage leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FUTURE-READY INFRASTRUCTURE ──────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Scalability</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Infrastructure Designed for Scale
            </h2>
            <p className="text-muted-sage max-w-xl">
              The technology platform is not fixed to one plant. It is the foundation of a replicable, national-scale clean energy infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FUTURE_READY.map((card, i) => (
              <div
                key={card.title}
                className="scroll-reveal p-6 rounded-2xl border border-earth-beige/30 bg-soft-ivory hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="inline-block text-xs font-bold tracking-widest text-champagne-gold uppercase px-2 py-0.5 rounded-full bg-champagne-gold/10 mb-4">
                  {card.tag}
                </span>
                <h3 className="font-bold text-charcoal mb-3">{card.title}</h3>
                <p className="text-xs text-muted-sage leading-relaxed">{card.desc}</p>
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
          <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-6">Technology Enabling India&apos;s Circular Energy Future</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            A Platform Built for the<br />Next Billion Tonnes of Clean Fuel
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Partner with India&apos;s most forward-looking biogas infrastructure team — as an investor, offtake partner, or technology collaborator.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link href="/plant" className="inline-block bg-white text-deep-forest px-7 py-3.5 rounded-lg font-semibold hover:bg-soft-ivory transition-colors text-sm text-center">
              Explore the Plant
            </Link>
            <Link href="/investors" className="inline-block bg-champagne-gold text-deep-forest px-7 py-3.5 rounded-lg font-bold hover:bg-earth-beige transition-colors text-sm text-center">
              Partner With Us
            </Link>
            <Link href="/sustainability" className="inline-block border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm text-center">
              View Sustainability
            </Link>
            <Link href="/contact" className="inline-block border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm text-center">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
