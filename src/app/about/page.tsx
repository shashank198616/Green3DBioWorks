import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — Green Earth 3D BioWorks',
  description: 'The team and mission behind Chhattisgarh\'s first Compressed Biogas plant.',
};

const VALUES = [
  {
    title: 'Sustainability',
    desc: 'Every decision is evaluated through the lens of long-term environmental impact — from feedstock sourcing to digestate return.',
  },
  {
    title: 'Innovation',
    desc: 'We deploy proven anaerobic digestion technology with a focus on continuous process optimisation and data-driven operations.',
  },
  {
    title: 'Partnership',
    desc: 'Our success depends on the farmers, investors, and communities we work with. We build relationships that are transparent and mutually beneficial.',
  },
  {
    title: 'Integrity',
    desc: 'We operate with full regulatory compliance under the SATAT framework and commit to honest reporting of our environmental and financial performance.',
  },
];

const TEAM = [
  {
    name: 'Founder & CEO',
    title: 'Leadership',
    bio: 'Driving the vision of rural circular economy through clean energy — bridging agricultural communities with India\'s green infrastructure future.',
  },
  {
    name: 'Chief Technical Officer',
    title: 'Technology',
    bio: 'Leading the engineering design and operational excellence of the CBG plant — from anaerobic digestion to gas purification and compression.',
  },
  {
    name: 'Operations Manager',
    title: 'Operations',
    bio: 'Overseeing day-to-day plant operations, farmer network logistics, and quality assurance across the full Triple-D process.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-forest-mid text-white pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-champagne-gold text-sm font-medium tracking-widest uppercase mb-4">The Company</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">About Us</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl">
            The team and mission behind Chhattisgarh&apos;s first Compressed Biogas plant.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="scroll-reveal">
              <p className="text-earth-green text-xs font-medium tracking-widest uppercase mb-4">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                Building India&apos;s circular energy economy — one tonne of waste at a time
              </h2>
              <div className="space-y-4 text-muted-sage leading-relaxed">
                <p>
                  Green Earth 3D BioWorks was founded on a single conviction: that agricultural residue burning is not an inevitable tragedy — it is a solvable problem with enormous economic upside.
                </p>
                <p>
                  By establishing Chhattisgarh&apos;s first Compressed Biogas plant, we are creating a replicable model for rural clean energy production — connecting farmers, OMCs, and investors in a system that generates returns at every node.
                </p>
                <p>
                  Our Triple-D Process — Decompose, Digest, Derive — is both a technical framework and a philosophy: extract maximum value from every input, return what is not consumed, and leave nothing wasted.
                </p>
              </div>
            </div>

            <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((v) => (
                <div key={v.title} className="p-6 rounded-2xl bg-soft-ivory border border-earth-beige/30 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-8 h-1 bg-earth-green rounded-full mb-4" />
                  <h3 className="font-bold text-charcoal mb-2">{v.title}</h3>
                  <p className="text-xs text-muted-sage leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 scroll-reveal">
            <p className="text-earth-green text-xs font-medium tracking-widest uppercase mb-4">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="scroll-reveal bg-white rounded-2xl p-8 border border-earth-beige/30 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-earth-green/10 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-earth-green/30" />
                </div>
                <p className="text-xs font-bold tracking-widest text-champagne-gold uppercase mb-2">{member.title}</p>
                <h3 className="font-bold text-charcoal mb-3">{member.name}</h3>
                <p className="text-sm text-muted-sage leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-sage text-center scroll-reveal">
            Full team profiles coming soon. For enquiries, contact us at{' '}
            <a href="mailto:info@greenearth3d.com" className="text-earth-green hover:underline">info@greenearth3d.com</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-4 md:px-8 text-center">
        <div className="max-w-xl mx-auto scroll-reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Want to Work With Us?</h2>
          <p className="text-muted-sage mb-8">Whether as an investor, partner, or team member — we&apos;re building something meaningful and we&apos;d love to hear from you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-block bg-earth-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-deep-forest transition-colors duration-200">
              Get in Touch
            </Link>
            <Link href="/investors" className="inline-block border border-earth-green text-earth-green px-8 py-3 rounded-lg font-semibold hover:bg-earth-green/5 transition-colors duration-200">
              Investor Overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
