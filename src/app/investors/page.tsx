import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export const metadata: Metadata = {
  title: 'Investors — GreenEarth 3D BioWorks Private Limited',
  description:
    'A bankable green infrastructure opportunity at the intersection of energy, agriculture, and climate — backed by India\'s SATAT policy framework.',
};

const revenueStreams = [
  {
    num: '01',
    title: 'CBG Offtake',
    sub: 'Primary Revenue',
    body: 'Compressed Biogas sold directly to Oil Marketing Companies (OMCs) under SATAT Letters of Intent at government-notified prices. Long-term, assured purchase with no market price risk.',
    metrics: [
      { label: 'Offtake Price', value: '₹46–54/kg' },
      { label: 'Annual Volume', value: '3,000 T+' },
    ],
    color: '#047857',
  },
  {
    num: '02',
    title: 'Biofertilizer',
    sub: 'Secondary Revenue',
    body: 'Fermented organic slurry (digestate) processed into premium biofertilizer pellets and liquid fertilizer. Sold to farmers directly and through agricultural cooperatives.',
    metrics: [
      { label: 'Rate', value: '₹1,200/T' },
      { label: 'Annual Volume', value: '8,000 T est.' },
    ],
    color: '#C9A96E',
  },
  {
    num: '03',
    title: 'Carbon Credits',
    sub: 'Emerging Revenue',
    body: 'Voluntary carbon market credits from methane capture, avoided stubble burning, and fossil fuel displacement. Eligible under India\'s upcoming Carbon Credit Trading Scheme (CCTS).',
    metrics: [
      { label: 'CO₂ Avoided', value: '1,200 T/yr' },
      { label: 'Status', value: 'Eligibility confirmed' },
    ],
    color: '#6B7F6B',
  },
];

const projectParams = [
  { label: 'CBG Production Capacity', value: '10 TPD', note: 'Tonnes per day' },
  { label: 'Biomass Intake', value: '110 TPD', note: 'Daily feedstock processed' },
  { label: 'Annual Feedstock', value: '~108,000 T', note: 'Tonnes per year' },
  { label: 'Retention Time', value: '30 Days', note: 'Anaerobic digestion cycle' },
  { label: 'Methane Content', value: '55–65%', note: 'Raw biogas quality' },
  { label: 'System Uptime', value: '99.5%', note: 'Target operational availability' },
  { label: 'Operating Days', value: '300+', note: 'Annual production days' },
  { label: 'Digestion Temperature', value: '37°C', note: 'Mesophilic optimum' },
];

const advantages = [
  {
    title: 'First-Mover in Chhattisgarh',
    body: 'No operating CBG plant in the state. Pioneer positioning secures preferred OMC allocation, feedstock relationships, and regulatory goodwill ahead of competition.',
  },
  {
    title: 'Feedstock-Secure Model',
    body: 'Multi-crop sourcing (paddy, napier, corn, sugarcane) from 500+ farm partners across the district — diversified supply that eliminates single-crop seasonal risk.',
  },
  {
    title: 'Technology-Proven Stack',
    body: 'Continuous Stirred Tank Reactors (CSTRs) with SCADA automation — same technology deployed across operating CBG plants in India with 99.5%+ uptime records.',
  },
  {
    title: 'Replicable Infrastructure Template',
    body: 'The operational model — feedstock contracts, processing workflow, offtake agreements — is designed from day one to be replicated at additional sites with reduced capex per TPD.',
  },
];

const satatBenefits = [
  { title: 'Letter of Intent (LoI)', desc: 'OMCs issue LoIs guaranteeing purchase of all produced CBG at notified prices — revenue certainty from day one of operations.' },
  { title: 'Notified Pricing', desc: 'Government-fixed procurement prices provide inflation-adjusted rate certainty, eliminating commodity price risk on the primary revenue stream.' },
  { title: 'Priority Grid Access', desc: 'SATAT producers receive priority connectivity to city gas distribution networks, enabling direct injection and future pipeline offtake.' },
  { title: 'Capital Subsidy Eligibility', desc: 'Multiple central and state schemes (MNRE, state renewable energy department) provide capital subsidy support, improving project IRR.' },
  { title: 'Carbon Credit Eligibility', desc: 'Methane capture and avoided agricultural burning are eligible under voluntary carbon markets and India\'s forthcoming CCTS framework.' },
  { title: 'State Policy Alignment', desc: 'Chhattisgarh\'s industrial and agriculture policy provides additional state-level incentives for renewable energy and waste management infrastructure.' },
];

const expansionPhases = [
  {
    phase: 'Phase 1',
    period: '2024–2026',
    title: 'Foundation Plant',
    desc: '10 TPD CBG. Chhattisgarh\'s first operating CBG plant. Establishes feedstock network, OMC relationships, and operational template.',
    status: 'active',
  },
  {
    phase: 'Phase 2',
    period: '2026–2027',
    title: 'Capacity Scale-Up',
    desc: 'Expand to 25 TPD at the existing site. Second digester train commissioned. Deepen biofertilizer processing and pelletization capacity.',
    status: 'planned',
  },
  {
    phase: 'Phase 3',
    period: '2027–2029',
    title: 'Regional Replication',
    desc: 'Two additional plants in adjacent districts of Chhattisgarh. Combined capacity: 60+ TPD. Centralized SCADA network management.',
    status: 'planned',
  },
  {
    phase: 'Phase 4',
    period: '2029+',
    title: 'State-Scale Platform',
    desc: '5+ plants. 100+ TPD aggregate CBG production. Dedicated biofertilizer distribution network. Positioned as Chhattisgarh\'s anchor CBG infrastructure platform.',
    status: 'vision',
  },
];

const riskMitigation = [
  {
    risk: 'Offtake Risk',
    mitigation: 'SATAT LoI from OMCs provides statutory purchase guarantee. No market-dependent sales required for primary revenue stream.',
  },
  {
    risk: 'Feedstock Risk',
    mitigation: 'Multi-crop sourcing model with 500+ partner farmers. Year-round availability via crop calendar diversification and Napier grass as a non-seasonal supplement.',
  },
  {
    risk: 'Technology Risk',
    mitigation: 'CSTR technology with 15+ years of proven deployment in India. Original equipment warranty and performance guarantees from tier-1 suppliers.',
  },
  {
    risk: 'Regulatory Risk',
    mitigation: 'Fully embedded in SATAT — a statutory Government of India scheme with OMC participation mandated by the Ministry of Petroleum and Natural Gas.',
  },
];

export default function InvestorsPage() {
  return (
    <>
      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden">
        <Image
          src="/images/hero-investors.jpg"
          alt="Aerial view of renewable energy infrastructure"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="max-w-3xl">
            <p className="text-champagne-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
              Investor Relations
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
              Where Capital<br />
              <span className="text-champagne-gold">Meets</span><br />
              Circular Economy
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed mb-10">
              A bankable green infrastructure opportunity at the intersection of energy, agriculture,
              and climate — backed by India&apos;s SATAT policy framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 bg-earth-green text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-deep-forest transition-colors duration-200"
              >
                Explore the Opportunity
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:border-champagne-gold hover:text-champagne-gold transition-colors duration-200"
              >
                Request Investment Brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. MARKET METRICS STRIP ─────────────────────────────── */}
      <section id="overview" className="bg-charcoal text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {[
              { end: 5000, suffix: '+', label: 'Plant Target', sub: 'Government SATAT goal', prefix: '' },
              { end: 15, suffix: ' MMT', label: 'Annual CBG Demand', sub: 'India addressable market', prefix: '' },
              { end: 750, suffix: ' MT', label: 'Chhattisgarh Feedstock', sub: 'Agricultural residue/year', prefix: '' },
              { end: 2, suffix: '', label: 'Revenue Streams', sub: 'CBG + Biofertilizer', prefix: '' },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-charcoal/60 p-8 md:p-10 text-center hover:bg-white/5 transition-colors duration-300"
              >
                <p className="text-4xl md:text-5xl font-black text-champagne-gold mb-1">
                  <AnimatedCounter end={m.end} prefix={m.prefix} suffix={m.suffix} duration={2000} />
                </p>
                <p className="font-bold text-white text-sm mb-1">{m.label}</p>
                <p className="text-white/40 text-xs">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. WHY THIS MOMENT ──────────────────────────────────── */}
      <section className="bg-soft-ivory py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-earth-green text-xs font-bold tracking-[0.2em] uppercase mb-4">Timing</p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Why This Moment
            </h2>
            <p className="text-muted-sage mt-4 text-lg leading-relaxed">
              Three converging forces make Chhattisgarh&apos;s first CBG plant a rare infrastructure investment opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: '01',
                title: 'Policy Certainty',
                body: 'SATAT is not a pilot scheme — it is a statutory mandate backed by the Ministry of Petroleum and Natural Gas with OMC participation. CBG producers receive legally binding purchase guarantees at notified prices, removing the most common risk in renewable energy projects: offtake uncertainty.',
                accent: '#047857',
              },
              {
                n: '02',
                title: 'First-Mover Window',
                body: 'Chhattisgarh has no operating CBG plant today. The window for pioneer positioning — preferred OMC allocation, early feedstock relationships, regulatory goodwill — is open now. As SATAT targets scale toward 5,000 plants, late entrants will compete for feedstock and offtake slots already captured by early operators.',
                accent: '#C9A96E',
              },
              {
                n: '03',
                title: 'India\'s Energy Transition',
                body: 'India\'s target of net zero by 2070 requires scaling domestic green gas production. Biogas from agricultural waste is among the cheapest, fastest-deployable, and most decentralized pathways. Institutional capital is actively seeking bankable, policy-backed green infrastructure at scale.',
                accent: '#6B7F6B',
              },
            ].map((item) => (
              <div
                key={item.n}
                className="scroll-reveal bg-white rounded-2xl p-8 border border-earth-beige/30 hover:-translate-y-1 transition-transform duration-300"
              >
                <span
                  className="inline-block text-4xl font-black mb-6"
                  style={{ color: `${item.accent}25` }}
                >
                  {item.n}
                </span>
                <div className="w-8 h-0.5 mb-5 rounded-full" style={{ backgroundColor: item.accent }} />
                <h3 className="text-xl font-black text-charcoal mb-4">{item.title}</h3>
                <p className="text-muted-sage text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. REVENUE MODEL ────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-earth-green text-xs font-bold tracking-[0.2em] uppercase mb-4">Business Model</p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Three Revenue Streams
            </h2>
            <p className="text-muted-sage mt-4 text-lg leading-relaxed">
              A circular model where waste generates three distinct income flows — primary, secondary, and emerging.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {revenueStreams.map((r) => (
              <div
                key={r.num}
                className="scroll-reveal rounded-2xl border border-earth-beige/30 overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="h-1.5" style={{ backgroundColor: r.color }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: r.color }}>
                        {r.sub}
                      </p>
                      <h3 className="text-2xl font-black text-charcoal">{r.title}</h3>
                    </div>
                    <span className="text-5xl font-black" style={{ color: `${r.color}18` }}>
                      {r.num}
                    </span>
                  </div>
                  <p className="text-muted-sage text-sm leading-relaxed mb-8">{r.body}</p>
                  <div className="grid grid-cols-2 gap-3 pt-6 border-t border-earth-beige/30">
                    {r.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-xs text-muted-sage mb-1">{m.label}</p>
                        <p className="font-bold text-charcoal text-sm">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. PROJECT SNAPSHOT ─────────────────────────────────── */}
      <section className="bg-charcoal text-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-champagne-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Plant Parameters</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Project at a Glance
            </h2>
            <p className="text-white/50 mt-4 text-lg leading-relaxed">
              Core operational parameters defining the plant&apos;s production capacity, efficiency, and output.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectParams.map((p) => (
              <div
                key={p.label}
                className="scroll-reveal rounded-2xl border border-white/8 p-6 hover:border-champagne-gold/30 hover:bg-white/4 transition-all duration-300"
              >
                <p className="text-2xl md:text-3xl font-black text-champagne-gold mb-2">{p.value}</p>
                <p className="font-bold text-white text-sm mb-1">{p.label}</p>
                <p className="text-white/40 text-xs">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. SATAT FRAMEWORK ──────────────────────────────────── */}
      <section className="bg-soft-ivory py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="scroll-reveal">
              <p className="text-earth-green text-xs font-bold tracking-[0.2em] uppercase mb-4">Policy Framework</p>
              <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight mb-6">
                SATAT:<br />The De-Risker
              </h2>
              <p className="text-muted-sage text-lg leading-relaxed mb-6">
                The <strong className="text-charcoal">Sustainable Alternative Towards Affordable Transportation</strong> scheme,
                issued by the Ministry of Petroleum and Natural Gas, creates a statutory purchase framework
                for Compressed Biogas — eliminating the primary revenue risk in the project.
              </p>
              <p className="text-muted-sage leading-relaxed mb-8">
                Under SATAT, Oil Marketing Companies — Indian Oil, BPCL, HPCL — issue Letters of Intent
                guaranteeing purchase of all produced CBG at government-notified prices. This de-risks the
                revenue model and enables project financing on the strength of assured cash flows.
              </p>
              <div className="flex items-center gap-4 p-5 bg-earth-green/8 border border-earth-green/20 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-earth-green/15 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-charcoal font-medium leading-relaxed">
                  GreenEarth 3D BioWorks is in active engagement with OMCs for SATAT LoI issuance prior to commercial operations.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {satatBenefits.map((b, i) => (
                <div
                  key={i}
                  className="scroll-reveal flex gap-4 p-5 bg-white rounded-xl border border-earth-beige/30 hover:border-earth-green/30 transition-colors duration-200"
                >
                  <div className="w-6 h-6 rounded-full bg-earth-green/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-earth-green" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-sm mb-1">{b.title}</p>
                    <p className="text-muted-sage text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. COMPETITIVE ADVANTAGES ───────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-earth-green text-xs font-bold tracking-[0.2em] uppercase mb-4">Investment Thesis</p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Structural Advantages
            </h2>
            <p className="text-muted-sage mt-4 text-lg leading-relaxed">
              Four durable moats that compound as the business scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((a, i) => (
              <div
                key={i}
                className="scroll-reveal flex gap-6 p-8 rounded-2xl border border-neutral-100 hover:border-earth-green/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <span className="shrink-0 text-6xl font-black text-earth-green/10 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-black text-charcoal mb-3">{a.title}</h3>
                  <p className="text-muted-sage text-sm leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. EXPANSION ROADMAP ────────────────────────────────── */}
      <section className="bg-forest-mid text-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-champagne-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Scale Vision</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Expansion Roadmap
            </h2>
            <p className="text-white/55 mt-4 text-lg leading-relaxed">
              A phased rollout that de-risks capital deployment while building toward state-scale infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {expansionPhases.map((ph, i) => (
              <div
                key={i}
                className={`scroll-reveal rounded-2xl p-7 border transition-all duration-300 ${
                  ph.status === 'active'
                    ? 'border-champagne-gold/50 bg-champagne-gold/8'
                    : ph.status === 'vision'
                    ? 'border-white/10 bg-white/3 opacity-75'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {ph.status === 'active' && (
                  <span className="inline-block bg-champagne-gold text-charcoal text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">
                    Active
                  </span>
                )}
                {ph.status === 'planned' && (
                  <span className="inline-block border border-white/20 text-white/50 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">
                    Planned
                  </span>
                )}
                {ph.status === 'vision' && (
                  <span className="inline-block border border-white/10 text-white/30 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">
                    Vision
                  </span>
                )}
                <p className="text-champagne-gold text-xs font-bold tracking-widest uppercase mb-1">{ph.phase}</p>
                <p className="text-white/40 text-xs mb-4">{ph.period}</p>
                <h3 className="text-lg font-black text-white mb-3">{ph.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{ph.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 scroll-reveal flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-champagne-gold/15 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-champagne-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Each phase is designed to be independently bankable — early-phase investors benefit from first-mover
              economics while the platform scales toward 100+ TPD aggregate capacity.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 9. RISK MITIGATION ──────────────────────────────────── */}
      <section className="bg-soft-ivory py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-earth-green text-xs font-bold tracking-[0.2em] uppercase mb-4">Risk Framework</p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Risks Identified,<br />Mitigated by Design
            </h2>
            <p className="text-muted-sage mt-4 text-lg leading-relaxed">
              Every material investment risk in this sector has been addressed structurally — not managed after the fact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {riskMitigation.map((r, i) => (
              <div
                key={i}
                className="scroll-reveal bg-white rounded-2xl border border-earth-beige/30 p-8 hover:border-earth-green/20 transition-colors duration-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-red-400 font-bold uppercase tracking-widest mb-0.5">Risk Factor</p>
                    <h3 className="font-black text-charcoal">{r.risk}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4 pl-12">
                  <div>
                    <p className="text-xs text-earth-green font-bold uppercase tracking-widest mb-1">Mitigation</p>
                    <p className="text-muted-sage text-sm leading-relaxed">{r.mitigation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. ENVIRONMENTAL ALIGNMENT ─────────────────────────── */}
      <section className="bg-earth-green text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/15 rounded-2xl overflow-hidden">
            {[
              {
                title: '1,200 T',
                label: 'CO₂ Avoided per Year',
                desc: 'Methane capture from open decomposition and avoided stubble burning',
              },
              {
                title: '500+',
                label: 'Farmers Supported',
                desc: 'Direct income generation for rural communities in Chhattisgarh',
              },
              {
                title: '100%',
                label: 'Waste Utilised',
                desc: 'Zero landfill — every input becomes CBG, biofertilizer, or process energy',
              },
            ].map((m, i) => (
              <div key={i} className="scroll-reveal bg-earth-green p-10 text-center hover:bg-white/10 transition-colors duration-300">
                <p className="text-4xl md:text-5xl font-black text-white mb-2">{m.title}</p>
                <p className="font-bold text-white text-sm mb-3">{m.label}</p>
                <p className="text-white/65 text-xs leading-relaxed max-w-[200px] mx-auto">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. CTA ─────────────────────────────────────────────── */}
      <section className="bg-charcoal text-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <p className="text-champagne-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">Get Started</p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Ready to Explore<br />This Opportunity?
          </h2>
          <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Request our full investment brief, review the DPR, or schedule a direct conversation
            with our leadership team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-champagne-gold text-charcoal px-8 py-4 rounded-xl font-black text-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Investment Brief
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:border-champagne-gold hover:text-champagne-gold transition-colors duration-200"
            >
              Schedule a Discussion
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            {[
              { label: 'Full DPR', desc: 'Detailed Project Report with financial projections' },
              { label: 'Site Visit', desc: 'On-ground inspection of plant site and feedstock network' },
              { label: 'Management Meeting', desc: 'Direct discussion with the founding team' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-0.5 bg-champagne-gold/40 rounded-full mx-auto mb-4" />
                <p className="font-bold text-white text-sm mb-1">{item.label}</p>
                <p className="text-white/40 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
