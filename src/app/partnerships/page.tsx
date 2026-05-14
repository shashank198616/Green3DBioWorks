import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partnerships — GreenEarth 3D BioWorks Private Limited',
  description:
    'Join the infrastructure that powers India\'s clean energy future — EPC, technology, logistics, and offtake partnerships for Chhattisgarh\'s first CBG plant.',
};

const partnerCategories = [
  {
    id: 'epc',
    label: 'EPC & Construction',
    color: '#047857',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tagline: 'Build the infrastructure',
    desc: 'Civil, mechanical, and electrical contractors for plant construction, digester installation, piping, and ongoing maintenance contracts.',
    scope: ['Digester tank construction', 'Civil & structural works', 'Mechanical installation', 'Electrical & instrumentation', 'Ongoing O&M contracts'],
  },
  {
    id: 'technology',
    label: 'Technology Suppliers',
    color: '#C9A96E',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tagline: 'Supply the equipment',
    desc: 'Manufacturers and suppliers for digesters, gas purification systems, compression units, SCADA monitoring, and process automation equipment.',
    scope: ['Biogas upgrading systems (PSA/membranes)', 'CNG compression units', 'CSTR digester vessels', 'SCADA & automation platforms', 'Pre-processing machinery'],
  },
  {
    id: 'logistics',
    label: 'Logistics Partners',
    color: '#6B7F6B',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    tagline: 'Move the material',
    desc: 'Feedstock aggregation, transportation networks, and CBG tanker last-mile delivery partners covering both raw material inflow and compressed gas offtake.',
    scope: ['Biomass collection & aggregation', 'Farm-to-plant transport fleet', 'CBG tanker operations', 'Biofertilizer distribution', 'Cold chain & weighbridge'],
  },
  {
    id: 'offtake',
    label: 'Offtake / OMCs',
    color: '#014421',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    tagline: 'Secure the offtake',
    desc: 'Oil Marketing Companies and industrial gas buyers seeking reliable, policy-backed CBG supply under SATAT Letters of Intent and direct purchase agreements.',
    scope: ['SATAT LoI agreements', 'Industrial CBG offtake', 'Gas grid injection', 'Fleet fueling partnerships', 'Carbon credit co-registration'],
  },
];

const whyPartner = [
  {
    n: '01',
    title: 'First-Mover in Chhattisgarh',
    body: 'No operating CBG plant in the state. Early partners gain preferred positioning, deep feedstock relationships, and preferred contracting before the sector matures.',
  },
  {
    n: '02',
    title: 'SATAT-Backed Revenue Certainty',
    body: 'Government-mandated offtake agreements with OMCs de-risk the primary revenue stream — providing long-term, bankable cash flow visibility for all supply-chain partners.',
  },
  {
    n: '03',
    title: 'Multi-Site Expansion Roadmap',
    body: 'Phase 2 and 3 expansion sites are already in planning across Chhattisgarh. Early partners are prioritised for preferred vendor status across the entire regional rollout.',
  },
  {
    n: '04',
    title: 'Proven Technology, Serious Team',
    body: 'We are not a pilot project. The technology stack, operational model, and feedstock network are industrial-grade — built for long-term reliability, not proof-of-concept.',
  },
  {
    n: '05',
    title: 'Circular Economy Impact',
    body: 'Every partnership is part of India\'s most credible circular economy story: agricultural waste → clean fuel + premium biofertilizer + CO₂ avoidance. Align your brand with that narrative.',
  },
];

const activeOpportunities = [
  {
    category: 'EPC',
    title: 'Civil & Structural Contractor',
    desc: 'Digester foundation, access roads, drainage, utilities. Site works commencing Q3 2025.',
    urgency: 'Active',
  },
  {
    category: 'Technology',
    title: 'Biogas Upgrading System',
    desc: 'PSA or membrane-based CO₂ removal system, 10 TPD CBG output. Supply + commissioning.',
    urgency: 'Active',
  },
  {
    category: 'Technology',
    title: 'CNG Compression & Dispensing',
    desc: 'Multi-stage compression from 5 bar to 250 bar. Mother/daughter station configuration.',
    urgency: 'Active',
  },
  {
    category: 'Logistics',
    title: 'Biomass Transport Fleet',
    desc: 'Daily collection routes from 500+ farm locations within 50km radius. Contract basis.',
    urgency: 'Tender Open',
  },
  {
    category: 'Offtake',
    title: 'SATAT LoI / OMC Offtake',
    desc: 'Formal SATAT Letter of Intent engagement with Indian Oil, BPCL, or HPCL for all-production purchase.',
    urgency: 'In Discussion',
  },
  {
    category: 'Technology',
    title: 'SCADA & Automation Platform',
    desc: 'Plant-wide PLC/SCADA integration. Real-time monitoring, remote diagnostics, OEE dashboarding.',
    urgency: 'Planning',
  },
];

const urgencyColor: Record<string, string> = {
  Active: '#047857',
  'Tender Open': '#C9A96E',
  'In Discussion': '#6B7F6B',
  Planning: '#9ca3af',
};

export default function PartnershipsPage() {
  return (
    <>
      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden">
        <Image
          src="/images/hero-construction.jpg"
          alt="Industrial construction and infrastructure partnership"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/92 via-deep-forest/75 to-deep-forest/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/70 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="max-w-3xl">
            <p className="text-champagne-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
              Work With Us
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
              Building India&apos;s<br />
              Biogas Infrastructure
              <span className="text-champagne-gold"> Together</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              From construction to compression, logistics to offtake — we are actively building
              a partner ecosystem to deliver Chhattisgarh&apos;s first and most capable CBG plant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#opportunities"
                className="inline-flex items-center gap-2 bg-champagne-gold text-charcoal px-8 py-4 rounded-xl font-black text-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
              >
                View Open Opportunities
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:border-champagne-gold hover:text-champagne-gold transition-colors duration-200"
              >
                Discuss a Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. PARTNERSHIP TYPES ────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-earth-green text-xs font-bold tracking-[0.2em] uppercase mb-4">Partnership Categories</p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Four Ways to Partner
            </h2>
            <p className="text-muted-sage mt-4 text-lg leading-relaxed">
              Every major infrastructure category in our plant is an open partnership opportunity — from the
              ground up to the gas cylinder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerCategories.map((cat) => (
              <div
                key={cat.id}
                className="scroll-reveal rounded-2xl border border-earth-beige/30 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-1" style={{ backgroundColor: cat.color }} />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: cat.color }}>
                        {cat.tagline}
                      </p>
                      <h3 className="text-xl font-black text-charcoal">{cat.label}</h3>
                    </div>
                  </div>

                  <p className="text-muted-sage text-sm leading-relaxed mb-6">{cat.desc}</p>

                  <div className="space-y-2 mb-6">
                    {cat.scope.map((s, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                        <p className="text-sm text-charcoal/80">{s}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors duration-200"
                    style={{ color: cat.color }}
                  >
                    Discuss this partnership
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. WHY PARTNER WITH US ──────────────────────────────── */}
      <section className="bg-soft-ivory py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-earth-green text-xs font-bold tracking-[0.2em] uppercase mb-4">The Value Proposition</p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Why Partner<br />With Us
            </h2>
            <p className="text-muted-sage mt-4 text-lg leading-relaxed">
              Five structural reasons why the most serious players in each category are choosing to partner with GreenEarth 3D BioWorks first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPartner.map((w, i) => (
              <div
                key={i}
                className={`scroll-reveal bg-white rounded-2xl border border-earth-beige/30 p-8 hover:-translate-y-1 hover:border-earth-green/20 hover:shadow-md transition-all duration-300 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <span className="text-5xl font-black text-earth-green/10 leading-none block mb-4">{w.n}</span>
                <div className="w-6 h-0.5 bg-earth-green rounded-full mb-5" />
                <h3 className="text-lg font-black text-charcoal mb-3">{w.title}</h3>
                <p className="text-muted-sage text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. ACTIVE OPPORTUNITIES ─────────────────────────────── */}
      <section id="opportunities" className="bg-charcoal text-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 scroll-reveal">
            <p className="text-champagne-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Open Now</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Active Partnership<br />Opportunities
            </h2>
            <p className="text-white/50 mt-4 text-lg leading-relaxed">
              Specific roles and contracts we are actively evaluating. Reach out to initiate discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeOpportunities.map((opp, i) => (
              <div
                key={i}
                className="scroll-reveal rounded-2xl border border-white/8 p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/40 border border-white/15 px-2.5 py-1 rounded-full">
                    {opp.category}
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: urgencyColor[opp.urgency] ?? '#9ca3af' }}
                  >
                    ● {opp.urgency}
                  </span>
                </div>
                <h3 className="font-black text-white mb-2">{opp.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{opp.desc}</p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-champagne-gold hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                >
                  Express Interest
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 scroll-reveal text-center">
            <p className="text-white/40 text-sm">
              Don&apos;t see your category listed? We welcome proposals from any serious partner.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 text-champagne-gold text-sm font-bold hover:text-white transition-colors duration-200"
            >
              Send us a proposal →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 5. SCALE CONTEXT ────────────────────────────────────── */}
      <section className="bg-forest-mid text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                value: 'Phase 1',
                label: 'Active Now',
                desc: '10 TPD CBG — Chhattisgarh\'s first plant. Partners contracted at this phase gain preferred status for Phase 2 expansion.',
              },
              {
                value: '3 Plants',
                label: 'By 2029',
                desc: 'Phase 2 & 3 expansion sites already in planning. Early partner relationships carry forward across the regional rollout.',
              },
              {
                value: '100+ TPD',
                label: 'State Platform',
                desc: 'Long-term vision: a Chhattisgarh-wide CBG platform with centralised operations. Partners grow with the network.',
              },
            ].map((m, i) => (
              <div key={i} className="scroll-reveal bg-forest-mid p-10 text-center hover:bg-white/8 transition-colors duration-300">
                <p className="text-4xl font-black text-champagne-gold mb-2">{m.value}</p>
                <p className="font-bold text-white text-sm mb-3">{m.label}</p>
                <p className="text-white/50 text-xs leading-relaxed max-w-[200px] mx-auto">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CTA ──────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <p className="text-earth-green text-xs font-bold tracking-[0.25em] uppercase mb-6">Start the Conversation</p>
            <h2 className="text-4xl md:text-6xl font-black text-charcoal leading-tight mb-6">
              Ready to Explore<br />a Partnership?
            </h2>
            <p className="text-muted-sage text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Tell us about your organisation and what you can bring to this project.
              We respond within 2 working days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-earth-green text-white px-10 py-4 rounded-xl font-black text-sm tracking-wide hover:bg-deep-forest transition-colors duration-200"
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center gap-2 border border-earth-beige/50 text-muted-sage px-10 py-4 rounded-xl font-bold text-sm tracking-wide hover:border-earth-green hover:text-earth-green transition-colors duration-200"
              >
                Investor Relations
              </Link>
            </div>
          </div>

          <div className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-5 pt-12 border-t border-earth-beige/30">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'Email',
                value: 'partnerships@greenearth3dbioworks.com',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                label: 'Phone',
                value: '+91 (contact via form)',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: 'Location',
                value: 'Raipur, Chhattisgarh, India',
              },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-soft-ivory">
                <div className="w-10 h-10 rounded-xl bg-earth-green/10 flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-sage font-bold uppercase tracking-wide mb-1">{c.label}</p>
                  <p className="text-charcoal text-sm font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
