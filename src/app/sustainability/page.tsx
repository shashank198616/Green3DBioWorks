import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import AnimatedFarmScene from '../../components/shared/AnimatedFarmScene';

export const metadata: Metadata = {
  title: 'Sustainability — Green Earth 3D BioWorks',
  description:
    'Sustainability engineered into infrastructure — transforming agricultural residue into renewable energy, circular agricultural value, and long-term environmental impact.',
};

const PILLARS = [
  {
    title: 'Cleaner Air',
    body: 'Reducing open-field crop residue burning and supporting cleaner rural air ecosystems across agricultural Chhattisgarh.',
    color: '#047857',
  },
  {
    title: 'Circular Agriculture',
    body: 'Converting agricultural biomass into renewable fuel and nutrient-rich organic fertilizer — closing the loop between energy and food production.',
    color: '#C9A96E',
  },
  {
    title: 'Rural Value Creation',
    body: 'Building sustainable income opportunities across farming households, logistics operations, and plant employment in the region.',
    color: '#6B7F6B',
  },
  {
    title: 'Renewable Energy Transition',
    body: "Supporting India's shift toward lower-carbon industrial and transportation energy systems through domestically produced compressed biogas.",
    color: '#0ea5e9',
  },
];

const CIRCULAR_FLOW = [
  {
    n: '01',
    title: 'Agricultural Residue',
    sub: 'Paddy straw, crop waste collected from registered farms',
    color: '#C9A96E',
  },
  {
    n: '02',
    title: 'Renewable Gas',
    sub: 'Anaerobic digestion converts biomass into compressed biogas',
    color: '#047857',
  },
  {
    n: '03',
    title: 'Organic Digestate',
    sub: 'Nutrient-rich effluent separated into solid and liquid fractions',
    color: '#6B7F6B',
  },
  {
    n: '04',
    title: 'Sustainable Farming',
    sub: 'Biofertilizer returned to farmland, improving soil health and yields',
    color: '#C8B89A',
  },
  {
    n: '05',
    title: 'Biomass Regeneration',
    sub: 'Healthier soils produce more biomass — sustaining the cycle',
    color: '#014421',
  },
];

const INFRA_ITEMS = [
  {
    title: 'Water Conscious Operations',
    body: 'Process water is recycled through the slurry mixing circuit. Liquid digestate is returned to farmland rather than discharged — working toward near-zero liquid discharge operations.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M16 4 C16 4 6 14 6 20 a10 10 0 0 0 20 0 C26 14 16 4 16 4Z" stroke="#047857" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M11 21 a6 6 0 0 0 10 0" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Low-Waste Design',
    body: 'Every output from the digestion process is a product, not a waste stream. Raw biogas becomes CBG. Digestate becomes biofertilizer. Reject CO₂ is captured and can be repurposed.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M16 6 A10 10 0 0 1 26 16" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M26 16 A10 10 0 0 1 6 16" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 16 A10 10 0 0 1 16 6" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 4 L16 6 L18 4" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 18 L26 16 L24 18" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 14 L6 16 L8 14" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Intelligent Monitoring',
    body: 'SCADA-based real-time monitoring ensures every process variable — temperature, gas flow, pressure, pH — stays within optimal range, preventing waste from process excursions.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <rect x="4" y="6" width="24" height="16" rx="3" stroke="#047857" strokeWidth="1.8" />
        <path d="M12 26 H20" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 22 V26" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 16 L12 12 L16 15 L20 10 L23 13" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-fields.jpg"
          alt="Golden agricultural fields at sunset"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Layered overlay — deep-forest tint with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/80 via-deep-forest/65 to-deep-forest/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center text-white pt-20">
          <p className="text-champagne-gold text-xs font-semibold tracking-[0.25em] uppercase mb-8 animate-fade-in-up">
            Green Earth 3D BioWorks · Sustainability
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.12s' }}
          >
            Sustainability<br />
            Engineered Into<br />
            <span className="text-champagne-gold">Infrastructure</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.24s' }}
          >
            Transforming agricultural residue into renewable energy, circular agricultural value, and long-term environmental impact.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </div>
      </section>

      {/* ── 2. SUSTAINABILITY PILLARS ─────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal text-center">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Our Commitment</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Four Pillars of Sustainability
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="scroll-reveal group relative overflow-hidden rounded-2xl border border-earth-beige/30 bg-soft-ivory p-7 hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Top accent bar */}
                <div className="h-0.5 w-full rounded-full mb-6" style={{ backgroundColor: p.color }} />
                <h3 className="font-bold text-charcoal text-lg mb-3">{p.title}</h3>
                <p className="text-sm text-muted-sage leading-relaxed">{p.body}</p>
                {/* Hover corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${p.color}12` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CIRCULAR ECONOMY FLOW ──────────────────────────────────────────── */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Circular Design</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
              Designed Around a Circular<br />Bioenergy Ecosystem
            </h2>
            <p className="text-muted-sage max-w-lg text-lg">
              Each output feeds the next input. Nothing is wasted. Everything regenerates.
            </p>
          </div>

          {/* Desktop: horizontal flow */}
          <div className="hidden md:block scroll-reveal">
            <div className="flex items-center justify-between gap-2">
              {CIRCULAR_FLOW.map((node, i) => (
                <div key={node.n} className="flex items-center flex-1">
                  {/* Node card */}
                  <div
                    className="flex-1 rounded-2xl p-5 border text-center hover:-translate-y-1 transition-transform duration-300"
                    style={{ borderColor: `${node.color}40`, backgroundColor: `${node.color}0d` }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black mx-auto mb-3"
                      style={{ backgroundColor: node.color }}
                    >
                      {node.n}
                    </div>
                    <p className="font-bold text-charcoal text-sm mb-1.5">{node.title}</p>
                    <p className="text-xs text-muted-sage leading-snug">{node.sub}</p>
                  </div>
                  {/* Connector */}
                  {i < CIRCULAR_FLOW.length - 1 && (
                    <div className="relative w-8 flex-shrink-0 flex flex-col items-center">
                      <div className="h-0.5 w-full relative overflow-hidden" style={{ backgroundColor: `${node.color}20` }}>
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(to right, transparent 0%, ${node.color}70 50%, transparent 100%)`,
                            animation: `sweepRight 2.5s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                          }}
                        />
                      </div>
                      <div
                        className="w-0 h-0 mt-px"
                        style={{
                          borderTop: '3px solid transparent',
                          borderBottom: '3px solid transparent',
                          borderLeft: `5px solid ${node.color}60`,
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Circular return indicator */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-earth-beige/60" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-earth-beige/50 bg-white">
                <svg viewBox="0 0 20 14" fill="none" className="w-5 h-3.5" aria-hidden="true">
                  <path d="M1 7 L7 1 M1 7 L7 13" stroke="#6B7F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 7 H19" stroke="#6B7F6B" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-xs font-semibold text-muted-sage">Returns to farmland — cycle repeats</span>
                <svg viewBox="0 0 20 14" fill="none" className="w-5 h-3.5" aria-hidden="true">
                  <path d="M19 7 L13 1 M19 7 L13 13" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 7 H1" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1 h-px bg-earth-beige/60" />
            </div>
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden space-y-3 scroll-reveal">
            {CIRCULAR_FLOW.map((node, i) => (
              <div key={node.n}>
                <div
                  className="flex items-start gap-4 p-5 rounded-2xl border"
                  style={{ borderColor: `${node.color}40`, backgroundColor: `${node.color}0d` }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: node.color }}
                  >
                    {node.n}
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-sm">{node.title}</p>
                    <p className="text-xs text-muted-sage mt-1">{node.sub}</p>
                  </div>
                </div>
                {i < CIRCULAR_FLOW.length - 1 && (
                  <div className="flex justify-center my-1">
                    <div className="w-px h-5" style={{ background: `linear-gradient(to bottom, ${node.color}60, ${CIRCULAR_FLOW[i + 1].color}60)` }} />
                  </div>
                )}
              </div>
            ))}
            <p className="text-center text-xs text-muted-sage mt-4 italic">↩ Returns to farmland — cycle repeats</p>
          </div>
        </div>
      </section>

      {/* ── 4. ENVIRONMENTAL IMPACT (DARK) ────────────────────────────────────── */}
      <section className="bg-forest-mid text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal text-center">
            <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-4">Measured Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Every Year of Operation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                end: 108000,
                suffix: '',
                label: 'Tonnes of Crop Residue Diverted',
                sub: 'Preventing agricultural waste burning annually',
                color: '#C9A96E',
              },
              {
                end: 12500,
                suffix: '+',
                label: 'Tonnes CO₂e Avoided',
                sub: 'Lower emissions vs fossil fuels and open burning',
                color: '#047857',
              },
              {
                end: 3650,
                suffix: ' T',
                label: 'Renewable CBG Generated',
                sub: 'Cleaner alternative to conventional CNG',
                color: '#0ea5e9',
              },
              {
                end: 7300,
                suffix: ' T',
                label: 'Organic Fertilizer Output',
                sub: 'Returning nutrients back to farmland annually',
                color: '#C8B89A',
              },
            ].map((m, i) => (
              <div
                key={m.label}
                className="scroll-reveal rounded-2xl p-7 border border-white/10 bg-white/5 text-center hover:bg-white/8 transition-colors duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <p className="text-4xl md:text-5xl font-black text-white mb-2">
                  <AnimatedCounter end={m.end} suffix={m.suffix} />
                </p>
                <p className="text-sm font-semibold mb-2" style={{ color: m.color }}>
                  {m.label}
                </p>
                <p className="text-xs text-white/40 leading-relaxed">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. AGRICULTURE & COMMUNITY ────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="scroll-reveal order-2 lg:order-1">
              <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Community</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                Sustainability<br />Beyond the Plant
              </h2>
              <div className="space-y-5 text-muted-sage leading-relaxed">
                <p>
                  Built around local agricultural ecosystems, the project supports farmer participation, biomass utilisation, and long-term rural resilience — not just fuel production metrics.
                </p>
                <p>
                  Registered farming households earn income from feedstock they previously burned. They receive biofertilizer that improves their yields. They become partners in an energy system, not bystanders.
                </p>
                <p>
                  That partnership — not the plant alone — is what makes this model genuinely sustainable.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: '250+', l: 'Farming households' },
                  { v: '₹2.5 Cr', l: 'Annual procurement' },
                  { v: '2×', l: 'Farmer benefit' },
                ].map((stat) => (
                  <div key={stat.l} className="text-center p-4 rounded-xl bg-soft-ivory border border-earth-beige/30">
                    <p className="text-xl font-black text-earth-green">{stat.v}</p>
                    <p className="text-xs text-muted-sage mt-1">{stat.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="scroll-reveal order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <AnimatedFarmScene className="absolute inset-0" />
                {/* Corner label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl px-4 py-3">
                    <p className="text-xs font-bold text-charcoal">Sustainable supply network</p>
                    <p className="text-xs text-muted-sage">Chhattisgarh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. INFRASTRUCTURE RESPONSIBILITY ─────────────────────────────────── */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Operations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Infrastructure Responsibility
            </h2>
            <p className="text-muted-sage max-w-lg">
              Responsible operations designed into the plant — not retrofitted after the fact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INFRA_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="scroll-reveal bg-white rounded-2xl p-8 border border-earth-beige/30 hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-earth-green/8 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-charcoal text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-sage leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CLOSING STATEMENT ─────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-40 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/hero-landscape.jpg"
          alt="Vast green landscape representing environmental regeneration"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/75 via-deep-forest/70 to-deep-forest/85" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center text-white scroll-reveal">
          <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-8">
            Our Founding Principle
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
            Building Infrastructure That<br />
            <span className="text-champagne-gold">Regenerates</span> More Than<br />
            It Consumes
          </h2>
          <p className="text-lg md:text-xl text-white/65 max-w-xl mx-auto leading-relaxed">
            A long-term approach to energy, agriculture, and environmental responsibility through circular bioenergy systems.
          </p>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center scroll-reveal">
          <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-6">Continue Exploring</p>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-10">
            See the Infrastructure Behind the Impact
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/technology"
              className="inline-block bg-earth-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-deep-forest transition-colors duration-200 text-center"
            >
              Explore Technology
            </Link>
            <Link
              href="/plant"
              className="inline-block border border-earth-green text-earth-green px-8 py-4 rounded-lg font-semibold hover:bg-earth-green/5 transition-colors duration-200 text-center"
            >
              View the Plant
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-charcoal/20 text-charcoal px-8 py-4 rounded-lg font-semibold hover:bg-soft-ivory transition-colors duration-200 text-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
