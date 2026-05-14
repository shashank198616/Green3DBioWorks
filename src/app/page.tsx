'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { MetricsStrip } from '@/components/home/MetricsStrip';
import { PlantJourneyTabs } from '@/components/home/PlantJourneyTabs';

// ─── Stakeholder data ──────────────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    label: 'For Investors',
    heading: 'A bankable infrastructure asset',
    points: ['SATAT-assured OMC offtake', 'Dual revenue: CBG + biofertilizer', 'First-mover in Chhattisgarh', 'Scalable replication model'],
    href: '/investors',
    cta: 'Investor Overview',
  },
  {
    label: 'For Government',
    heading: 'Rural development, measurable impact',
    points: ['SATAT policy alignment', 'Stubble burning elimination', 'Rural income generation', 'Chhattisgarh economic growth'],
    href: '/sustainability',
    cta: 'Sustainability Impact',
  },
  {
    label: 'For Farmers',
    heading: 'Turn residue into income',
    points: ['Fair price per tonne of feedstock', 'No more open burning risk', 'Organic biofertilizer return', 'Reliable annual income stream'],
    href: '/farmers',
    cta: 'Join the Network',
  },
  {
    label: 'For Partners',
    heading: 'Build India\'s biogas future',
    points: ['EPC & construction contracts', 'Technology supply agreements', 'Logistics & transport partnerships', 'Offtake / OMC integration'],
    href: '/partnerships',
    cta: 'Explore Partnerships',
  },
];

// ─── Roadmap data ──────────────────────────────────────────────────────────────
const ROADMAP = [
  { phase: '01', title: 'Development', desc: 'Site selection, land acquisition, regulatory approvals & project financing', status: 'active' },
  { phase: '02', title: 'Construction', desc: 'Civil works, digester installation, equipment commissioning', status: 'upcoming' },
  { phase: '03', title: 'Operations', desc: 'Full production ramp-up, farmer network onboarding, OMC offtake', status: 'upcoming' },
  { phase: '04', title: 'Scale-Up', desc: 'Replication across additional sites in Chhattisgarh and beyond', status: 'future' },
];

// ─── Media data ────────────────────────────────────────────────────────────────
const MEDIA = [
  {
    date: 'May 2026', category: 'Company News',
    title: 'Green Earth 3D BioWorks Launches Digital Presence',
    excerpt: 'Chhattisgarh\'s first CBG plant takes a major step toward commissioning with the launch of its investor and partner platform.',
  },
  {
    date: 'April 2026', category: 'Policy',
    title: 'SATAT Scheme Expanded: 5,000 CBG Plants Targeted',
    excerpt: 'India reaffirms its commitment to the biogas sector, opening significant opportunity for first-mover CBG producers.',
  },
  {
    date: 'March 2026', category: 'Sustainability',
    title: 'The Paddy Straw Problem — And Our Solution',
    excerpt: 'Stubble burning causes severe air pollution across central India every harvest season. Here\'s how we turn that waste into clean fuel.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  // Global scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-deep-forest">
        {/* Background gradient depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(4,120,87,0.35) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 10%, rgba(12,180,129,0.12) 0%, transparent 60%)',
          }}
        />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Animated glow blobs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-earth-green/10 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-champagne-gold/5 blur-3xl animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }} />

        {/* Circular DDD tagline — slowly rotating watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <svg
            viewBox="0 0 400 400"
            className="w-[480px] h-[480px] md:w-[680px] md:h-[680px] lg:w-[860px] lg:h-[860px] animate-spin-slow"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* r=165 → circumference ≈ 1037px; 3× "DECOMPOSE · DIGEST · DERIVE · " (90 chars @ ~11.5px) ≈ 1035px — near-perfect fill */}
              <path
                id="dddCirclePath"
                d="M 200,200 m -165,0 a 165,165 0 1,1 330,0 a 165,165 0 1,1 -330,0"
              />
            </defs>
            <text
              fill="rgba(255,255,255,0.09)"
              fontSize="10"
              fontFamily="Inter, -apple-system, sans-serif"
              letterSpacing="6"
              fontWeight="500"
            >
              <textPath href="#dddCirclePath">
                DECOMPOSE · DIGEST · DERIVE · DECOMPOSE · DIGEST · DERIVE · DECOMPOSE · DIGEST · DERIVE ·
              </textPath>
            </text>
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center pt-20 pb-32">
          {/* Label */}
          <div className="animate-fade-in-up mb-8 space-y-1.5" style={{ animationDelay: '0.1s' }}>
            <p className="text-xs md:text-sm tracking-[0.22em] text-champagne-gold/80 uppercase font-semibold">
              Green Earth 3D BioWorks Private Limited
            </p>
            <p className="text-xs tracking-[0.18em] text-white/45 uppercase font-medium">
              Decompose &nbsp;·&nbsp; Digest &nbsp;·&nbsp; Derive
            </p>
            <p className="text-xs tracking-[0.2em] text-white/25 uppercase font-medium">
              Compressed Biogas &nbsp;·&nbsp; Chhattisgarh, India
            </p>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in-up text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8"
            style={{ animationDelay: '0.2s' }}
          >
            Turning Agricultural Waste Into{' '}
            <span className="text-champagne-gold">India&apos;s Green</span>
            <br className="hidden md:block" /> Fuel Future
          </h1>

          {/* Sub-headline */}
          <p
            className="animate-fade-in-up text-base md:text-lg lg:text-xl text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            style={{ animationDelay: '0.3s' }}
          >
            Chhattisgarh&apos;s first CBG plant — 10 TPD production capacity, powering the circular economy through the Triple-D Process.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-3 justify-center"
            style={{ animationDelay: '0.4s' }}
          >
            <Link
              href="/plant"
              className="bg-white text-charcoal px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-soft-ivory transition-colors duration-200"
            >
              Explore the Plant
            </Link>
            <Link
              href="/partnerships"
              className="border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
            >
              Partner With Us
            </Link>
            <a
              href="#"
              className="text-white/60 px-8 py-3.5 rounded-lg font-semibold text-sm hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Download DPR
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 1v8m0 0L4 6m3 3l3-3M1 11h12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Bottom fade to metrics strip */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent pointer-events-none" />
      </section>

      {/* ── 2. METRICS STRIP ────────────────────────────────────────────────── */}
      <MetricsStrip />

      {/* ── 3. PLANT JOURNEY ────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-medium tracking-widest uppercase mb-4">The Process</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
                From Paddy Straw<br className="hidden sm:block" /> to Green Fuel
              </h2>
              <p className="text-muted-sage text-sm max-w-xs md:text-right">
                Eight steps that transform agricultural residue into India&apos;s cleanest compressed fuel.
              </p>
            </div>
          </div>
          <div className="scroll-reveal">
            <PlantJourneyTabs />
          </div>
        </div>
      </section>

      {/* ── 4. WHY CBG MATTERS — Storytelling ───────────────────────────────── */}
      <section className="bg-soft-ivory py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-medium tracking-widest uppercase mb-4">The Narrative</p>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">Why CBG Matters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-earth-beige/40 rounded-2xl overflow-hidden border border-earth-beige/40">
            {/* Problem */}
            <div className="scroll-reveal bg-charcoal p-10 md:p-12 group hover:bg-[#111] transition-colors duration-300">
              <span className="text-xs font-bold tracking-widest text-white/30 uppercase">01 — Problem</span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-4">Crop residue is a crisis</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Millions of tonnes of paddy straw are burned across central India every harvest season — poisoning air, releasing methane, and wasting a resource with enormous energy potential.
              </p>
              <div className="mt-8 w-8 h-0.5 bg-white/20 group-hover:bg-champagne-gold/50 transition-colors duration-300 rounded-full" />
            </div>

            {/* Opportunity */}
            <div className="scroll-reveal bg-forest-mid p-10 md:p-12 group hover:bg-[#185a3a] transition-colors duration-300">
              <span className="text-xs font-bold tracking-widest text-white/30 uppercase">02 — Opportunity</span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-4">India&apos;s bioenergy moment</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                India&apos;s SATAT framework targets 5,000 CBG plants and 15 MMT annual production. Chhattisgarh — rich in agricultural residue and underserved by clean energy — is a first-mover opportunity.
              </p>
              <div className="mt-8 w-8 h-0.5 bg-white/20 group-hover:bg-champagne-gold/50 transition-colors duration-300 rounded-full" />
            </div>

            {/* Solution */}
            <div className="scroll-reveal bg-white p-10 md:p-12 group hover:bg-soft-ivory transition-colors duration-300 border-t border-earth-beige/40 md:border-t-0">
              <span className="text-xs font-bold tracking-widest text-earth-green/40 uppercase">03 — Solution</span>
              <h3 className="text-2xl font-bold text-charcoal mt-4 mb-4">The Triple-D Process</h3>
              <p className="text-muted-sage text-sm leading-relaxed">
                Green Earth 3D BioWorks&apos; CBG plant decomposes, digests, and derives — transforming agricultural waste into compressed biogas for OMCs and organic fertilizer for farmers, in one closed loop.
              </p>
              <div className="mt-8 w-8 h-0.5 bg-earth-green/20 group-hover:bg-earth-green transition-colors duration-300 rounded-full" />
            </div>

            {/* Impact */}
            <div className="scroll-reveal bg-soft-ivory p-10 md:p-12 group hover:bg-earth-beige/30 transition-colors duration-300 border-t border-earth-beige/40 md:border-t-0">
              <span className="text-xs font-bold tracking-widest text-earth-green/40 uppercase">04 — Impact</span>
              <h3 className="text-2xl font-bold text-charcoal mt-4 mb-4">Circular economy, rural prosperity</h3>
              <p className="text-muted-sage text-sm leading-relaxed">
                1,200 tonnes of CO₂ avoided annually. Farmers earning from waste. Clean fuel replacing fossil CNG. Chhattisgarh at the centre of India&apos;s green energy transition.
              </p>
              <div className="mt-8 w-8 h-0.5 bg-champagne-gold/30 group-hover:bg-champagne-gold transition-colors duration-300 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. STAKEHOLDER PATHS ────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-medium tracking-widest uppercase mb-4">Find Your Path</p>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">Who Are You?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STAKEHOLDERS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="scroll-reveal group block p-8 rounded-2xl border border-neutral-100 hover:border-earth-green/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <span className="text-xs font-bold tracking-widest text-champagne-gold uppercase">{s.label}</span>
                <h3 className="text-lg font-bold text-charcoal mt-3 mb-4 leading-snug group-hover:text-earth-green transition-colors">
                  {s.heading}
                </h3>
                <ul className="space-y-2 mb-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-sage">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-earth-green/40" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="text-sm font-medium text-earth-green group-hover:gap-2 flex items-center gap-1 transition-all duration-200">
                  {s.cta} <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FARMER ECOSYSTEM PREVIEW ─────────────────────────────────────── */}
      <section className="bg-forest-mid py-24 px-4 md:px-8 overflow-hidden relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="scroll-reveal">
            <p className="text-champagne-gold text-xs font-medium tracking-widest uppercase mb-6">Farmer Ecosystem</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Farmers are our<br /> first supply chain
            </h2>
            <p className="text-white/55 leading-relaxed mb-8 text-base md:text-lg">
              Every tonne of paddy straw sold to our plant is a tonne not burned in a field. Farmers earn income, receive biofertilizer, and become active participants in India&apos;s clean energy transition.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/farmers"
                className="inline-block bg-champagne-gold text-charcoal px-7 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
              >
                Become a Feedstock Partner
              </Link>
              <Link
                href="/sustainability"
                className="inline-block border border-white/20 text-white px-7 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
              >
                See the Impact
              </Link>
            </div>
          </div>

          {/* Stats panel */}
          <div className="scroll-reveal grid grid-cols-2 gap-4">
            {[
              { value: '~108,000', label: 'Tonnes of crop residue', sub: 'Available annually' },
              { value: 'Zero', label: 'Open burning incidents', sub: 'From partner farms' },
              { value: '30 Days', label: 'Processing cycle', sub: 'Retention time' },
              { value: '100%', label: 'Digestate returned', sub: 'As biofertilizer' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-colors duration-200">
                <p className="text-2xl font-bold text-champagne-gold mb-1">{stat.value}</p>
                <p className="text-white text-xs font-medium">{stat.label}</p>
                <p className="text-white/40 text-xs mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. IMPACT DASHBOARD ─────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-medium tracking-widest uppercase mb-4">Environmental Performance</p>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">Impact Dashboard</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '1,200', unit: 'Tonnes / Year', label: 'CO₂ Emissions Avoided', desc: 'Equivalent to planting 20,000 trees annually', progress: 72 },
              { value: '~108,000', unit: 'Tonnes / Year', label: 'Crop Waste Processed', desc: 'Paddy straw diverted from open burning', progress: 85 },
              { value: '99.5%', unit: 'Uptime', label: 'Operational Reliability', desc: 'Continuous 24/7 plant operation', progress: 99 },
            ].map((item) => (
              <div key={item.label} className="scroll-reveal p-8 rounded-2xl border border-neutral-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <p className="text-4xl md:text-5xl font-bold text-earth-green leading-none mb-1">{item.value}</p>
                <p className="text-xs text-muted-sage mb-4">{item.unit}</p>
                <h3 className="font-semibold text-charcoal mb-2">{item.label}</h3>
                <p className="text-sm text-muted-sage mb-6 leading-relaxed">{item.desc}</p>
                {/* Progress bar */}
                <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-earth-green rounded-full transition-all duration-1000"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center scroll-reveal">
            <Link href="/sustainability" className="inline-block text-sm font-medium text-earth-green border border-earth-green px-7 py-2.5 rounded-lg hover:bg-earth-green hover:text-white transition-all duration-200">
              Full Sustainability Report →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. ROADMAP ──────────────────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-champagne-gold text-xs font-medium tracking-widest uppercase mb-4">Project Timeline</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Our Roadmap</h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block scroll-reveal">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-6 left-0 right-0 h-px bg-white/10" />
              <div className="grid grid-cols-4 gap-6 relative">
                {ROADMAP.map((phase) => (
                  <div key={phase.phase} className="relative">
                    {/* Dot */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-6 relative z-10 transition-colors ${
                      phase.status === 'active'   ? 'bg-champagne-gold text-charcoal' :
                      phase.status === 'upcoming' ? 'bg-earth-green text-white'       :
                                                    'bg-white/10 text-white/40'
                    }`}>
                      {phase.phase}
                    </div>
                    <h3 className={`font-bold mb-2 ${phase.status === 'active' ? 'text-champagne-gold' : 'text-white'}`}>
                      {phase.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{phase.desc}</p>
                    {phase.status === 'active' && (
                      <span className="mt-3 inline-block text-xs font-medium text-champagne-gold/70 tracking-wider uppercase">● In Progress</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden space-y-6 scroll-reveal">
            {ROADMAP.map((phase) => (
              <div key={phase.phase} className="flex gap-5">
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  phase.status === 'active'   ? 'bg-champagne-gold text-charcoal' :
                  phase.status === 'upcoming' ? 'bg-earth-green text-white'       :
                                                'bg-white/10 text-white/40'
                }`}>
                  {phase.phase}
                </div>
                <div className="pt-1.5">
                  <h3 className={`font-bold mb-1 ${phase.status === 'active' ? 'text-champagne-gold' : 'text-white'}`}>
                    {phase.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. MEDIA PREVIEW ────────────────────────────────────────────────── */}
      <section className="bg-soft-ivory py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 scroll-reveal">
            <div>
              <p className="text-earth-green text-xs font-medium tracking-widest uppercase mb-4">Newsroom</p>
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal">Latest Updates</h2>
            </div>
            <Link href="/media" className="text-sm font-medium text-earth-green hover:text-deep-forest transition-colors flex items-center gap-1 shrink-0">
              View all updates <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA.map((item) => (
              <article
                key={item.title}
                className="scroll-reveal bg-white rounded-2xl overflow-hidden border border-earth-beige/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-soft-ivory h-36 flex items-center justify-center border-b border-earth-beige/20">
                  <span className="text-xs font-bold tracking-widest text-champagne-gold uppercase">{item.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-sage mb-3">{item.date}</p>
                  <h3 className="font-bold text-charcoal leading-snug mb-3 group-hover:text-earth-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-sage leading-relaxed">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="relative bg-earth-green py-28 px-4 md:px-8 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto scroll-reveal">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-6 font-medium">
            Green Earth 3D BioWorks
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Ready to Build India&apos;s Green Fuel Future?
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re an investor, government body, farmer, or industry partner — there&apos;s a place for you in this ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-white text-earth-green px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-soft-ivory transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/plant"
              className="border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
            >
              Explore the Plant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
