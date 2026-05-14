import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import InfrastructureDashboard from '@/components/investors/InfrastructureDashboard';

export const metadata: Metadata = {
  title: 'Investors — Green Earth 3D BioWorks',
  description:
    'A bankable circular energy infrastructure opportunity backed by India\'s SATAT policy framework. Premium, credible, infrastructure-grade.',
};

const investmentThesis = [
  {
    num: '01',
    title: 'Policy-Backed Revenue Certainty',
    body: 'SATAT Letters of Intent from Oil Marketing Companies (IOC, BPCL, HPCL) guarantee purchase of all produced CBG at government-notified prices. Primary revenue is contractual, not market-dependent — a structural advantage rare in renewable energy.',
    accent: '#047857',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Circular Business Model',
    body: 'Every tonne of agricultural waste becomes either Compressed Biogas (primary revenue), biofertilizer pellets (secondary revenue), or process energy. Zero landfill. Three income streams. A closed-loop model where input cost is negative — farmers pay us to take residue.',
    accent: '#C9A96E',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'First-Mover in Chhattisgarh',
    body: 'No operating CBG plant exists in Chhattisgarh today. Pioneer positioning secures preferred OMC allocation slots, first-rights on feedstock relationships with 500+ farm partners, and regulatory goodwill ahead of the competition window that will narrow as SATAT targets scale.',
    accent: '#6B7F6B',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Scalable Infrastructure Template',
    body: 'The operational model — feedstock procurement, CSTR processing, SCADA automation, OMC logistics — is engineered from day one for replication. Phase 2, 3, and 4 plants inherit a proven template, compressing both capital per TPD and time-to-operations with each successive deployment.',
    accent: '#047857',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const projectParams = [
  { label: 'CBG Production Capacity', value: '10 TPD',    note: 'Tonnes per day' },
  { label: 'Biomass Intake',          value: '110 TPD',   note: 'Daily feedstock processed' },
  { label: 'Annual Feedstock',        value: '~108,000 T',note: 'Tonnes per year' },
  { label: 'Retention Time',          value: '30 Days',   note: 'Anaerobic digestion cycle' },
  { label: 'Methane Content',         value: '55–65%',    note: 'Raw biogas quality' },
  { label: 'System Uptime',           value: '99.5%',     note: 'Target availability' },
  { label: 'Operating Days',          value: '300+',      note: 'Annual production days' },
  { label: 'Digestion Temperature',   value: '37°C',      note: 'Mesophilic optimum' },
];

const satatBenefits = [
  {
    title: 'Letter of Intent (LoI)',
    desc: 'OMCs issue LoIs guaranteeing purchase of all produced CBG at notified prices — contractual revenue certainty from day one of operations.',
  },
  {
    title: 'Notified Pricing',
    desc: 'Government-fixed procurement prices provide inflation-adjusted rate certainty, eliminating commodity price risk on the primary revenue stream.',
  },
  {
    title: 'Priority Grid Access',
    desc: 'SATAT producers receive priority connectivity to city gas distribution networks, enabling direct injection and future pipeline offtake.',
  },
  {
    title: 'Capital Subsidy Eligibility',
    desc: 'MNRE and state renewable energy schemes provide capital subsidy support — improving project IRR without compromising equity structure.',
  },
  {
    title: 'Carbon Credit Eligibility',
    desc: 'Methane capture and avoided agricultural burning qualify under voluntary carbon markets and India\'s forthcoming CCTS framework.',
  },
  {
    title: 'State Policy Alignment',
    desc: 'Chhattisgarh\'s industrial and agriculture policy provides additional state-level incentives for renewable energy and waste management infrastructure.',
  },
];

const techPillars = [
  {
    title: 'Continuous Stirred Tank Reactors',
    sub: 'CSTR Technology',
    body: 'Proven mesophilic digestion technology deployed across 40+ operating CBG plants in India. 15+ years of performance data, original equipment warranties, and 99.5%+ uptime track record.',
  },
  {
    title: 'SCADA Automation',
    sub: 'Control Systems',
    body: 'Real-time monitoring of gas flow, pressure, temperature, and feedstock parameters. Remote diagnostics capability enables predictive maintenance and minimises unplanned downtime.',
  },
  {
    title: 'Biogas Purification & Compression',
    sub: 'PSA + Cascading',
    body: 'Pressure Swing Adsorption (PSA) system upgrades raw biogas to 98%+ methane purity. Cascade compression to 250 bar for cascade-filling and OMC cylinder offtake.',
  },
  {
    title: 'Digestate Processing Line',
    sub: 'Biofertilizer Plant',
    body: 'Centrifugal separation of liquid and solid fractions. Pelletisation and drying line produces premium organic biofertilizer for direct farm application and cooperative distribution.',
  },
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
    desc: 'Expand to 25 TPD at the existing site. Second digester train commissioned. Deepened biofertilizer processing and pelletization capacity.',
    status: 'planned',
  },
  {
    phase: 'Phase 3',
    period: '2027–2029',
    title: 'Regional Replication',
    desc: 'Two additional plants in adjacent districts of Chhattisgarh. Combined capacity: 60+ TPD. Centralised SCADA network management.',
    status: 'planned',
  },
  {
    phase: 'Phase 4',
    period: '2029+',
    title: 'State-Scale Platform',
    desc: '5+ plants. 100+ TPD aggregate CBG production. Dedicated biofertilizer distribution network. Chhattisgarh\'s anchor CBG infrastructure platform.',
    status: 'vision',
  },
];

const governancePillars = [
  {
    title: 'Founder-Led Execution',
    body: 'The founding team brings direct experience in agri-value chains, project development, and regulatory navigation in Chhattisgarh — the state-specific insight that national players lack.',
  },
  {
    title: 'Tier-1 EPC Engagement',
    body: 'Plant engineering, procurement, and construction managed through pre-qualified EPC partners with documented CBG plant commissioning experience across multiple Indian states.',
  },
  {
    title: 'Regulatory Compliance Framework',
    body: 'SATAT, MNRE, PCB, and district-level clearances managed on a milestone-based compliance calendar. No regulatory gaps or pending approvals blocking commercial operations.',
  },
  {
    title: 'Independent Financial Controls',
    body: 'Project accounts maintained with structured escrow and drawdown controls. Capital deployment tracked against DPR milestones with quarterly investor reporting protocol.',
  },
];

const downloads = [
  {
    title: 'Detailed Project Report',
    desc: 'Full technical and financial DPR including plant specifications, financial model, SATAT alignment, and construction timeline.',
    tag: 'PDF · ~4 MB',
  },
  {
    title: 'Investment Brief',
    desc: 'Executive summary of the investment opportunity — designed for board-level review and initial due diligence.',
    tag: 'PDF · ~1 MB',
  },
  {
    title: 'Company Profile',
    desc: 'Overview of Green Earth 3D BioWorks — business model, technology stack, team, and roadmap.',
    tag: 'PDF · ~2 MB',
  },
];

export default function InvestorsPage() {
  return (
    <>
      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
        <Image
          src="/images/hero-investors.jpg"
          alt="Aerial view of renewable energy infrastructure"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/65 to-charcoal/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="max-w-3xl">
            <p className="text-champagne-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              Investor Relations
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.93] tracking-tight mb-8">
              Investing in<br />
              Circular<br />
              <span className="text-champagne-gold">Energy</span> Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              A bankable green infrastructure opportunity at the intersection of energy, agriculture,
              and climate — backed by India&apos;s SATAT policy framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#opportunity"
                className="inline-flex items-center gap-2 bg-champagne-gold text-charcoal px-8 py-4 rounded-xl font-black text-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
              >
                Explore the Opportunity
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/35 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:border-champagne-gold hover:text-champagne-gold transition-colors duration-200"
              >
                Request Investment Brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. MARKET METRICS STRIP ─────────────────────────────── */}
      <section id="opportunity" className="bg-charcoal text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { end: 5000,  suffix: '+',    label: 'SATAT Plant Target',        sub: 'Government of India mandate',   prefix: '' },
              { end: 15,    suffix: ' MMT', label: 'Annual CBG Demand',         sub: 'India addressable market',      prefix: '' },
              { end: 750,   suffix: ' MT',  label: 'Chhattisgarh Feedstock',    sub: 'Agricultural residue per year', prefix: '' },
              { end: 1200,  suffix: ' T',   label: 'CO₂ Avoided Annually',      sub: 'Per plant at 10 TPD capacity',  prefix: '' },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white/4 p-8 md:p-10 text-center hover:bg-white/8 transition-colors duration-300"
              >
                <p className="text-4xl md:text-5xl font-black text-champagne-gold mb-1 tabular-nums">
                  <AnimatedCounter end={m.end} prefix={m.prefix} suffix={m.suffix} duration={2000} />
                </p>
                <p className="font-bold text-white text-sm mb-1">{m.label}</p>
                <p className="text-white/40 text-xs leading-relaxed">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. INVESTMENT THESIS ────────────────────────────────── */}
      <section className="bg-soft-ivory py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-earth-green text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              Investment Thesis
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Four Structural<br />Advantages
            </h2>
            <p className="text-muted-sage mt-5 text-lg leading-relaxed">
              Durable moats that compound as the business scales — built into the model from inception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentThesis.map((item) => (
              <div
                key={item.num}
                className="scroll-reveal bg-white rounded-2xl p-8 border border-earth-beige/30 hover:border-earth-green/25 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: item.accent }}>
                      {item.num}
                    </p>
                    <h3 className="text-lg font-black text-charcoal leading-tight">{item.title}</h3>
                  </div>
                </div>
                <div className="w-full h-px mb-5" style={{ backgroundColor: `${item.accent}20` }} />
                <p className="text-muted-sage text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. MARKET OPPORTUNITY ───────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <p className="text-earth-green text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
                Market Context
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight mb-6">
                Why This Moment
              </h2>
              <p className="text-muted-sage text-lg leading-relaxed mb-8">
                Three converging forces make Chhattisgarh&apos;s first CBG plant a rare infrastructure
                investment opportunity that cannot be replicated once the first-mover window closes.
              </p>
              <div className="space-y-6">
                {[
                  {
                    n: '01',
                    title: 'Policy Certainty',
                    body: 'SATAT is a statutory mandate — not a pilot scheme. OMC participation is legally required by the Ministry of Petroleum and Natural Gas. CBG producers receive binding purchase guarantees at notified prices, removing offtake uncertainty entirely.',
                    color: '#047857',
                  },
                  {
                    n: '02',
                    title: 'First-Mover Window',
                    body: 'Chhattisgarh has no operating CBG plant today. As SATAT scales toward 5,000 plants nationally, preferred OMC slots, early feedstock relationships, and regulatory goodwill accrue to first operators — not latecomers.',
                    color: '#C9A96E',
                  },
                  {
                    n: '03',
                    title: "India's Energy Transition",
                    body: 'India\'s net zero by 2070 target requires scaling domestic green gas production. Biogas from agricultural waste is among the cheapest, fastest-to-deploy pathways — and institutional capital is actively seeking bankable, policy-backed infrastructure.',
                    color: '#6B7F6B',
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[11px] font-black mt-0.5"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.n}
                    </div>
                    <div>
                      <h3 className="font-black text-charcoal mb-1.5">{item.title}</h3>
                      <p className="text-muted-sage text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-reveal relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <Image
                src="/images/hero-fields.jpg"
                alt="Agricultural fields in Chhattisgarh"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: '750 MT', label: 'Annual crop residue in Chhattisgarh' },
                    { val: '0',      label: 'Operating CBG plants in state today' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                      <p className="text-2xl font-black text-white mb-1">{s.val}</p>
                      <p className="text-[10px] text-white/65 leading-snug">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. INFRASTRUCTURE INTELLIGENCE DASHBOARD ────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#081209' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12 scroll-reveal">
            <p className="text-champagne-gold/70 text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              Infrastructure Intelligence
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Plant Intelligence<br />Dashboard
            </h2>
            <p className="text-white/45 mt-5 text-lg leading-relaxed">
              Real-time visibility into biomass utilisation, fuel output, environmental performance,
              and the operational ecosystem — the four pillars that define infrastructure-grade returns.
            </p>
          </div>

          <div className="scroll-reveal">
            <InfrastructureDashboard />
          </div>
        </div>
      </section>

      {/* ─── 6. PROJECT SNAPSHOT ─────────────────────────────────── */}
      <section className="bg-charcoal text-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-champagne-gold text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              Plant Parameters
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Project at a Glance
            </h2>
            <p className="text-white/45 mt-5 text-lg leading-relaxed">
              Core technical parameters defining capacity, efficiency, and output at Phase 1 commercial operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectParams.map((p) => (
              <div
                key={p.label}
                className="scroll-reveal rounded-2xl border border-white/8 p-6 hover:border-champagne-gold/25 hover:bg-white/4 transition-all duration-300"
              >
                <p className="text-2xl md:text-3xl font-black text-champagne-gold mb-2 tabular-nums">{p.value}</p>
                <p className="font-bold text-white text-sm mb-1 leading-tight">{p.label}</p>
                <p className="text-white/35 text-xs">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. INFRASTRUCTURE & TECHNOLOGY ─────────────────────── */}
      <section className="bg-soft-ivory py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="scroll-reveal mb-12">
                <p className="text-earth-green text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
                  Technology Stack
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight mb-6">
                  Infrastructure Built<br />to Last 25 Years
                </h2>
                <p className="text-muted-sage text-lg leading-relaxed">
                  Plant technology selected for proven performance across India&apos;s operating CBG fleet —
                  not experimental, not pilot-scale. Every component carries OEM warranties and
                  performance guarantees.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-64 scroll-reveal">
                <Image
                  src="/images/hero-construction.jpg"
                  alt="CBG plant construction"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-black text-lg leading-tight">Phase 1 plant site, Chhattisgarh</p>
                  <p className="text-white/60 text-xs mt-1">Construction-ready</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {techPillars.map((t, i) => (
                <div
                  key={i}
                  className="scroll-reveal bg-white rounded-2xl p-7 border border-earth-beige/30 hover:border-earth-green/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-earth-green mb-1.5">{t.sub}</p>
                  <h3 className="font-black text-charcoal mb-3 text-lg">{t.title}</h3>
                  <p className="text-muted-sage text-sm leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SATAT framework callout */}
          <div className="mt-16 scroll-reveal">
            <div className="bg-white rounded-2xl border border-earth-beige/30 overflow-hidden">
              <div className="bg-earth-green/8 px-8 py-5 border-b border-earth-green/15">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-earth-green">
                  Policy Framework
                </p>
                <h3 className="text-xl font-black text-charcoal mt-1">
                  SATAT: The De-Risker
                </h3>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {satatBenefits.map((b, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-earth-green/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-earth-green" />
                    </div>
                    <div>
                      <p className="font-bold text-charcoal text-sm mb-1">{b.title}</p>
                      <p className="text-muted-sage text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. SUSTAINABILITY & ESG ─────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-earth-green text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              Sustainability & ESG
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Impact Is the<br />Business Model
            </h2>
            <p className="text-muted-sage mt-5 text-lg leading-relaxed">
              Environmental and social impact are not add-ons to the investment case — they are the
              operating mechanism that generates returns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden h-72 lg:h-auto scroll-reveal">
              <Image
                src="/images/hero-landscape.jpg"
                alt="Green landscape of Chhattisgarh"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-green/80 via-earth-green/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-black text-2xl leading-tight mb-2">
                  Closing the loop on<br />agricultural waste
                </p>
                <p className="text-white/70 text-sm">
                  Chhattisgarh burns 2.7 million tonnes of crop residue annually.
                  Each CBG plant converts 108,000 T/yr into clean energy and soil health.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 gap-5">
              {[
                {
                  val: '1,200 T',
                  label: 'CO₂ Avoided / Year',
                  desc: 'Methane capture + fossil fuel displacement + burning prevention',
                  color: '#047857',
                },
                {
                  val: '500+',
                  label: 'Farmers Supported',
                  desc: 'Direct income for residue supply — turning waste into a revenue stream for smallholders',
                  color: '#C9A96E',
                },
                {
                  val: '100%',
                  label: 'Zero Waste Processing',
                  desc: 'Every tonne in becomes CBG, biofertilizer, or process energy — no landfill',
                  color: '#6B7F6B',
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="scroll-reveal bg-soft-ivory rounded-2xl p-6 border border-earth-beige/30 hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <p className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.val}</p>
                  <p className="font-bold text-charcoal text-sm mb-2">{s.label}</p>
                  <p className="text-muted-sage text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal flex gap-4 p-6 bg-earth-green/6 border border-earth-green/20 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-earth-green/15 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-charcoal leading-relaxed">
              <strong>Carbon Credit Eligibility:</strong> Green Earth 3D BioWorks is evaluating registration
              under voluntary carbon market standards (VCS/Gold Standard) and India&apos;s forthcoming Carbon Credit
              Trading Scheme (CCTS). Approved credits provide an additional, uncorrelated revenue stream on top
              of the SATAT-anchored base case.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 9. SCALABILITY VISION ───────────────────────────────── */}
      <section className="bg-forest-mid text-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-champagne-gold text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              Scale Vision
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              From One Plant<br />to a Platform
            </h2>
            <p className="text-white/50 mt-5 text-lg leading-relaxed">
              A phased rollout that de-risks capital deployment while building toward state-scale
              infrastructure. Each phase is independently bankable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {expansionPhases.map((ph, i) => (
              <div
                key={i}
                className={`scroll-reveal rounded-2xl p-7 border transition-all duration-300 ${
                  ph.status === 'active'
                    ? 'border-champagne-gold/50 bg-champagne-gold/8'
                    : ph.status === 'vision'
                    ? 'border-white/10 bg-white/3 opacity-70'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {ph.status === 'active' && (
                  <span className="inline-block bg-champagne-gold text-charcoal text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">
                    Active
                  </span>
                )}
                {ph.status === 'planned' && (
                  <span className="inline-block border border-white/20 text-white/50 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">
                    Planned
                  </span>
                )}
                {ph.status === 'vision' && (
                  <span className="inline-block border border-white/10 text-white/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">
                    Vision
                  </span>
                )}
                <p className="text-champagne-gold text-[10px] font-bold tracking-widest uppercase mb-1">{ph.phase}</p>
                <p className="text-white/35 text-xs mb-4">{ph.period}</p>
                <h3 className="text-lg font-black text-white mb-3">{ph.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{ph.desc}</p>
              </div>
            ))}
          </div>

          <div className="scroll-reveal flex items-center gap-5 p-7 bg-white/5 border border-white/10 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-champagne-gold/15 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-champagne-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">
              Early investors in Phase 1 benefit from first-mover economics while the template scales to
              100+ TPD aggregate capacity. Each phase inherits the operational infrastructure of the last —
              compressing both risk and time-to-revenue with every deployment.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 10. GOVERNANCE & EXECUTION ──────────────────────────── */}
      <section className="bg-soft-ivory py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-earth-green text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              Governance & Execution
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Built on<br />Credible Foundations
            </h2>
            <p className="text-muted-sage mt-5 text-lg leading-relaxed">
              Infrastructure investment demands credible governance. Every layer of the execution framework
              is designed to meet institutional due diligence standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {governancePillars.map((g, i) => (
              <div
                key={i}
                className="scroll-reveal bg-white rounded-2xl p-8 border border-earth-beige/30 hover:border-earth-green/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-earth-green/10 flex items-center justify-center mb-5">
                  <div className="w-4 h-4 rounded-full border-2 border-earth-green" />
                </div>
                <h3 className="font-black text-charcoal text-lg mb-3">{g.title}</h3>
                <p className="text-muted-sage text-sm leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>

          {/* Risk mitigation table */}
          <div className="mt-12 scroll-reveal bg-white rounded-2xl border border-earth-beige/30 overflow-hidden">
            <div className="px-8 py-5 bg-charcoal/4 border-b border-earth-beige/30">
              <p className="font-black text-charcoal">Risk Framework — Identified, Mitigated by Design</p>
            </div>
            <div className="divide-y divide-earth-beige/20">
              {[
                {
                  risk: 'Offtake Risk',
                  mitigation: 'SATAT LoI from OMCs provides statutory purchase guarantee. No market-dependent sales required for primary revenue.',
                },
                {
                  risk: 'Feedstock Risk',
                  mitigation: 'Multi-crop sourcing model with 500+ partner farmers. Year-round availability via crop calendar diversification and Napier grass as a non-seasonal supplement.',
                },
                {
                  risk: 'Technology Risk',
                  mitigation: 'CSTR technology with 15+ years of proven deployment in India. OEM warranty and performance guarantees from tier-1 suppliers.',
                },
                {
                  risk: 'Regulatory Risk',
                  mitigation: 'Fully embedded in SATAT — a statutory GoI scheme with OMC participation mandated by the Ministry of Petroleum and Natural Gas.',
                },
              ].map((r, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="p-6 flex items-center gap-3 md:border-r border-earth-beige/20">
                    <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                    <p className="font-black text-charcoal text-sm">{r.risk}</p>
                  </div>
                  <div className="px-6 pb-6 pt-0 md:pt-6 md:col-span-2 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-earth-green shrink-0" />
                    <p className="text-muted-sage text-sm leading-relaxed">{r.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11. DOWNLOADS & RESOURCES ───────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-earth-green text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              Due Diligence
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Downloads &amp;<br />Resources
            </h2>
            <p className="text-muted-sage mt-5 text-lg leading-relaxed">
              Everything required for a complete first-pass due diligence — available on request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloads.map((d) => (
              <div
                key={d.title}
                className="scroll-reveal bg-soft-ivory rounded-2xl p-8 border border-earth-beige/30 hover:border-earth-green/25 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-earth-green/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-black text-charcoal text-lg mb-3">{d.title}</h3>
                <p className="text-muted-sage text-sm leading-relaxed mb-6">{d.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-sage font-medium">{d.tag}</span>
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-earth-green hover:text-deep-forest transition-colors duration-200"
                  >
                    Request →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12. FINAL CTA ───────────────────────────────────────── */}
      <section className="bg-charcoal text-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <p className="text-champagne-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Begin Due Diligence
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Ready to Explore<br />This Opportunity?
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Request our full investment brief, review the DPR, or schedule a direct conversation
            with our leadership team. We respond to all investor enquiries within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-champagne-gold text-charcoal px-10 py-4 rounded-xl font-black text-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Request Investment Brief
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:border-champagne-gold hover:text-champagne-gold transition-colors duration-200"
            >
              Schedule a Discussion
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            {[
              { label: 'Full DPR',          desc: 'Detailed project report with financial projections' },
              { label: 'Site Visit',         desc: 'On-ground inspection of plant site and feedstock network' },
              { label: 'Management Meeting', desc: 'Direct discussion with the founding team' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-8 h-0.5 bg-champagne-gold/35 rounded-full mx-auto mb-4" />
                <p className="font-bold text-white text-sm mb-1.5">{item.label}</p>
                <p className="text-white/35 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
