import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Media & Updates — Green Earth 3D BioWorks',
  description: 'Latest news, press releases, and resources from Green Earth 3D BioWorks.',
};

const updates = [
  {
    date: 'May 2026',
    category: 'Company News',
    title: 'Green Earth 3D BioWorks Launches Website',
    excerpt: 'We are pleased to announce the official launch of our digital presence as we progress toward commissioning Chhattisgarh\'s first Compressed Biogas plant.',
  },
  {
    date: 'April 2026',
    category: 'Policy',
    title: 'SATAT Scheme Expanded: 5,000 CBG Plants Targeted',
    excerpt: 'The Government of India reaffirms its commitment to the SATAT framework, opening significant opportunities for CBG producers across the country.',
  },
  {
    date: 'March 2026',
    category: 'Sustainability',
    title: 'Paddy Straw Burning: The Problem We Are Solving',
    excerpt: 'An overview of crop residue burning in Chhattisgarh and how our CBG plant creates an economically viable alternative for farmers.',
  },
];

const downloads = [
  { title: 'Company Profile', desc: 'Overview of Green Earth 3D BioWorks — business model, technology, and team.', href: '#' },
  { title: 'Detailed Project Report (DPR)', desc: 'Full project report including technical specifications, financials, and SATAT alignment.', href: '#' },
];

export default function MediaPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-forest-mid text-white pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-champagne-gold text-sm font-medium tracking-widest uppercase mb-4">Newsroom</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Media &amp; Updates</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl">
            Latest news, press releases, and resources from Green Earth 3D BioWorks.
          </p>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-earth-green text-sm font-medium tracking-widest uppercase mb-4 scroll-reveal">Latest</p>
          <h2 className="text-2xl md:text-4xl font-bold text-charcoal mb-12 scroll-reveal">Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {updates.map((item) => (
              <div key={item.title} className="scroll-reveal flex flex-col border border-neutral-100 rounded-2xl overflow-hidden hover:border-earth-green/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-soft-ivory h-40 flex items-center justify-center">
                  <span className="text-xs font-medium text-champagne-gold tracking-widest uppercase">{item.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-muted-sage mb-3">{item.date}</p>
                  <h3 className="font-bold text-charcoal mb-3 group-hover:text-earth-green transition-colors leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted-sage leading-relaxed flex-1">{item.excerpt}</p>
                  <a href="#" className="mt-4 text-sm font-medium text-earth-green hover:text-deep-forest transition-colors">
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Downloads */}
      <section className="bg-soft-ivory py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-charcoal mb-12 scroll-reveal">Press &amp; Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((d) => (
              <div key={d.title} className="scroll-reveal bg-white rounded-2xl p-8 border border-earth-beige/30 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-charcoal mb-2">{d.title}</h3>
                    <p className="text-sm text-muted-sage leading-relaxed">{d.desc}</p>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-earth-green/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <a
                  href={d.href}
                  className="mt-6 inline-block text-sm font-semibold text-earth-green border border-earth-green px-5 py-2 rounded-lg hover:bg-earth-green hover:text-white transition-all duration-300"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="bg-white py-20 px-4 md:px-8 text-center">
        <div className="max-w-xl mx-auto scroll-reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Media Enquiries</h2>
          <p className="text-muted-sage mb-8">For press inquiries, interview requests, or additional information, please contact our communications team.</p>
          <Link href="/contact" className="inline-block bg-earth-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-deep-forest transition-colors duration-300">
            Contact Media Team
          </Link>
        </div>
      </section>
    </>
  );
}
