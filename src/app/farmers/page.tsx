import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import BiomassCalculator from '../../components/farmers/BiomassCalculator';
import FarmerRegistration from '../../components/farmers/FarmerRegistration';
import AnimatedFarmScene from '../../components/shared/AnimatedFarmScene';

export const metadata: Metadata = {
  title: 'Farmers — Green Earth 3D BioWorks',
  description:
    'Empowering farmers through circular bioenergy — creating sustainable income from agricultural residue while building long-term rural partnerships.',
};

const WHY_MATTERS = [
  {
    title: 'Additional Income',
    body: 'Agricultural residue becomes a valuable resource instead of unused waste. Receive fair market payment for every tonne collected.',
    color: '#C9A96E',
  },
  {
    title: 'Cleaner Farming Ecosystems',
    body: 'Reducing open-field burning supports healthier air quality and more sustainable agricultural environments across the region.',
    color: '#047857',
  },
  {
    title: 'Organic Fertilizer Return',
    body: 'Digestate produced by the plant is returned to partner farms as NPK biofertilizer — reducing input costs over time.',
    color: '#6B7F6B',
  },
  {
    title: 'Long-Term Rural Partnerships',
    body: 'Building consistent biomass sourcing relationships with local farming communities — not one-off transactions.',
    color: '#C8B89A',
  },
];

const FEEDSTOCK = [
  {
    name: 'Paddy Straw',
    sub: 'Agricultural residue collected post-harvest',
    detail: 'The primary feedstock. Collected from rice paddies immediately after harvest — preventing open burning and creating income.',
    yield: '~2.2 T/acre',
    season: 'Oct – Dec',
    color: '#C9A96E',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M24 40 V20" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 20 Q18 14 16 8" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 20 Q30 14 32 8" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 26 Q17 22 14 18" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 26 Q31 22 34 18" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 32 Q18 29 15 26" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 32 Q30 29 33 26" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="10" y1="40" x2="38" y2="40" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Cow Dung',
    sub: 'Integrated into the circular bioenergy process',
    detail: 'Dairy farm co-feed that enhances digester microbial activity. Collected from livestock farms in the supply catchment.',
    yield: '~15 kg/cow/day',
    season: 'Year-round',
    color: '#6B7F6B',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="14" stroke="#6B7F6B" strokeWidth="2" />
        <circle cx="24" cy="24" r="6" stroke="#6B7F6B" strokeWidth="1.8" strokeDasharray="4 3" />
        <path d="M24 10 V14 M24 34 V38 M10 24 H14 M34 24 H38" stroke="#6B7F6B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Napier Grass',
    sub: 'Dedicated energy crop for stable biomass supply',
    detail: 'High-yield perennial grass that can be grown on marginal land. Provides a consistent, year-round feedstock supply.',
    yield: '~7.5 T/acre',
    season: 'Year-round',
    color: '#047857',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M24 40 V22" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 28 Q14 18 10 10 Q18 14 24 22" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 22 Q34 12 38 6 Q32 14 24 22" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 34 Q16 28 12 22" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 34 Q32 28 36 22" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="10" y1="40" x2="38" y2="40" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Farmer Registration',
    desc: 'Complete a simple registration form with your village, crop type, and land details.',
    color: '#C9A96E',
  },
  {
    n: '02',
    title: 'Biomass Assessment',
    desc: 'Our field team visits to assess available residue, quality, and seasonal availability.',
    color: '#6B7F6B',
  },
  {
    n: '03',
    title: 'Collection & Aggregation',
    desc: 'Residue is baled or bundled at your field at a scheduled date after your harvest.',
    color: '#047857',
  },
  {
    n: '04',
    title: 'Transportation Support',
    desc: 'We arrange and fund transport from your field to our plant. No logistics burden on you.',
    color: '#0ea5e9',
  },
  {
    n: '05',
    title: 'Feedstock Processing',
    desc: 'Your biomass enters the Triple-D process — weighed, quality-tested, and processed.',
    color: '#64748b',
  },
  {
    n: '06',
    title: 'Circular Value',
    desc: 'You receive fair payment within agreed timelines and biofertilizer in the next season.',
    color: '#C8B89A',
  },
];

export default function FarmersPage() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/hero-fields.jpg"
          alt="Golden agricultural fields representing the farming community"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/85 via-deep-forest/65 to-deep-forest/30" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-28 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="text-champagne-gold text-xs font-semibold tracking-[0.22em] uppercase mb-6 animate-fade-in-up">
              Green Earth 3D BioWorks · Farmer Partnership
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 text-white animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Empowering Farmers<br />
              Through <span className="text-champagne-gold">Circular Bioenergy</span>
            </h1>
            <p
              className="text-lg text-white/70 leading-relaxed mb-10 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Creating sustainable value from agricultural residue while supporting cleaner farming ecosystems and rural livelihoods.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <a
                href="#register"
                className="inline-block bg-champagne-gold text-deep-forest px-8 py-4 rounded-xl font-bold hover:bg-earth-beige transition-colors duration-200 text-center text-sm"
              >
                Become a Feedstock Partner
              </a>
              <a
                href="#partnership"
                className="inline-block border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 text-center text-sm"
              >
                Explore the Program
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY IT MATTERS ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal text-center">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">The Partnership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Why It Matters</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_MATTERS.map((card, i) => (
              <div
                key={card.title}
                className="scroll-reveal rounded-2xl p-7 border border-earth-beige/30 bg-soft-ivory hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: card.color }} />
                <h3 className="font-bold text-charcoal mb-3">{card.title}</h3>
                <p className="text-sm text-muted-sage leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ACCEPTED FEEDSTOCK ─────────────────────────────────────────────── */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Feedstock</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Feedstock We Work With</h2>
            <p className="text-muted-sage max-w-md">
              We source multiple types of agricultural residue to ensure year-round plant operation and maximum farmer reach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEEDSTOCK.map((f, i) => (
              <div
                key={f.name}
                className="scroll-reveal bg-white rounded-2xl border p-7 hover:-translate-y-1 transition-transform duration-300"
                style={{ borderColor: `${f.color}30`, animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${f.color}12` }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-charcoal text-lg mb-2">{f.name}</h3>
                <p className="text-sm text-muted-sage mb-5 leading-relaxed">{f.detail}</p>
                <div className="flex gap-3">
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: `${f.color}12`, color: f.color }}
                  >
                    {f.yield}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-soft-ivory border border-earth-beige/40 text-muted-sage">
                    {f.season}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW THE PARTNERSHIP WORKS (6 steps) ───────────────────────────── */}
      <section id="partnership" className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              How the Partnership Works
            </h2>
            <p className="text-muted-sage max-w-md">
              Six simple steps — from your field to your payment and back to your land.
            </p>
          </div>

          {/* Horizontal scroll on mobile, 2×3 grid on desktop */}
          <div className="overflow-x-auto scrollbar-hide pb-4 md:overflow-visible">
            <div className="flex gap-5 min-w-max md:min-w-0 md:grid md:grid-cols-3 md:gap-5">
              {STEPS.map((step, i) => (
                <div
                  key={step.n}
                  className="scroll-reveal w-64 md:w-auto flex-shrink-0 rounded-2xl p-6 border border-earth-beige/30 bg-soft-ivory hover:border-earth-green/30 hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  {/* Step number + connector line */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.n}
                    </div>
                    {/* Show connector on desktop for same-row steps */}
                    {i % 3 < 2 && (
                      <div className="hidden md:block flex-1 h-px bg-earth-beige/50" />
                    )}
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-sage leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SUSTAINABILITY & AGRICULTURE ──────────────────────────────────── */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="scroll-reveal">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <AnimatedFarmScene className="absolute inset-0" />
                <div className="absolute bottom-4 left-4">
                  <div className="glass rounded-xl px-4 py-3">
                    <p className="text-xs font-bold text-charcoal">Partner farms</p>
                    <p className="text-xs text-muted-sage">Chhattisgarh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Ecosystem</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                Supporting Sustainable<br />Agricultural Ecosystems
              </h2>
              <p className="text-muted-sage leading-relaxed mb-6">
                The project is designed to reduce waste, support soil health, and encourage more sustainable utilisation of agricultural biomass — not just to collect feedstock.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Less field burning', sub: 'Residue purchased, not burned — reducing PM2.5 in rural air' },
                  { title: 'Better soil, over time', sub: 'Biofertilizer improves organic matter and water retention' },
                  { title: 'More consistent income', sub: 'Paid per tonne, seasonal and off-season where available' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-earth-green mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-charcoal text-sm">{item.title}</p>
                      <p className="text-xs text-muted-sage mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. COMMUNITY IMPACT (DARK) ────────────────────────────────────────── */}
      <section className="bg-charcoal text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal text-center">
            <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-4">Community Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold">Building Rural Value at Scale</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { end: 250,    suffix: '+',  label: 'Farmers Connected',         sub: 'Registered partner households',    color: '#C9A96E' },
              { end: 108000, suffix: ' T', label: 'Agricultural Waste Utilised',sub: 'Tonnes per year diverted from burning', color: '#047857' },
              { end: 7300,   suffix: ' T', label: 'Organic Fertilizer',         sub: 'Returned to farmland annually',   color: '#6B7F6B' },
              { end: 50,     suffix: '+',  label: 'Rural Jobs Supported',       sub: 'Plant operations and logistics',  color: '#C8B89A' },
            ].map((m, i) => (
              <div
                key={m.label}
                className="scroll-reveal rounded-2xl p-7 border border-white/10 bg-white/5 text-center"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <p className="text-4xl font-black text-white mb-2">
                  <AnimatedCounter end={m.end} suffix={m.suffix} />
                </p>
                <p className="text-sm font-semibold mb-1" style={{ color: m.color }}>
                  {m.label}
                </p>
                <p className="text-xs text-white/40">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BIOMASS CALCULATOR ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="scroll-reveal">
              <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Estimate</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                What Is Your Biomass<br />Worth?
              </h2>
              <p className="text-muted-sage leading-relaxed mb-6">
                Use this calculator to get a rough estimate of how much biomass your farm could contribute and what it might be worth — before you even register.
              </p>
              <div className="space-y-4">
                {[
                  { q: 'How is the rate determined?', a: 'We assess moisture content and volatile solids at intake. Base rate is ₹1,200/tonne for quality feedstock.' },
                  { q: 'When do I get paid?', a: 'Payment is processed within 14 days of feedstock acceptance at the plant weighbridge.' },
                  { q: 'What if I have mixed crops?', a: 'We purchase multiple feedstock types. Select your primary crop for this estimate.' },
                ].map((faq) => (
                  <div key={faq.q} className="border-b border-earth-beige/30 pb-4">
                    <p className="text-sm font-bold text-charcoal mb-1">{faq.q}</p>
                    <p className="text-xs text-muted-sage leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-reveal">
              <BiomassCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. REGISTER INTEREST ──────────────────────────────────────────────── */}
      <section id="register" className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 scroll-reveal text-center">
            <p className="text-earth-green text-xs font-semibold tracking-widest uppercase mb-4">Join the Program</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Turning Agricultural Residue<br />Into Opportunity
            </h2>
            <p className="text-muted-sage max-w-sm mx-auto">
              Register your interest and our team will reach out within 2 working days to discuss your farm, feedstock, and the partnership terms.
            </p>
          </div>
          <div className="scroll-reveal bg-white rounded-2xl border border-earth-beige/30 p-7 md:p-9">
            <FarmerRegistration />
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-forest-mid text-white py-20 px-4 md:px-8 text-center">
        <div className="max-w-xl mx-auto scroll-reveal">
          <p className="text-champagne-gold text-xs font-semibold tracking-widest uppercase mb-6">
            Building Together
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Building a Cleaner and More Circular<br />Rural Energy Ecosystem
          </h2>
          <p className="text-white/60 mb-10">
            A long-term partnership — not a one-season deal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="inline-block bg-champagne-gold text-deep-forest px-8 py-4 rounded-xl font-bold hover:bg-earth-beige transition-colors duration-200 text-sm text-center"
            >
              Register Interest
            </a>
            <Link
              href="/contact"
              className="inline-block border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 text-sm text-center"
            >
              Contact Our Team
            </Link>
            <Link
              href="/sustainability"
              className="inline-block border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 text-sm text-center"
            >
              Explore Sustainability
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
