import '../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ScrollObserver from '../components/ScrollObserver';

export const metadata = {
  title: 'Green Earth 3D BioWorks - Biogas Solutions',
  description: 'Sustainable biogas production plant: Decompose, Digest, Derive',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <ScrollObserver />
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <footer className="bg-charcoal text-neutral-50 mt-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <Image
                    src="/images/CBG_Logo.png"
                    alt="Green Earth 3D BioWorks"
                    width={160}
                    height={64}
                    className="h-16 w-auto mb-4"
                  />
                  <p className="text-white font-semibold text-sm leading-snug">Green Earth 3D BioWorks</p>
                  <p className="text-champagne-gold text-xs font-medium mb-3">Private Limited</p>
                  <p className="text-neutral-400 text-sm">Transforming waste into clean energy.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/plant" className="text-neutral-400 hover:text-white transition">The Plant</Link></li>
                    <li><Link href="/technology" className="text-neutral-400 hover:text-white transition">Technology</Link></li>
                    <li><Link href="/sustainability" className="text-neutral-400 hover:text-white transition">Sustainability</Link></li>
                    <li><Link href="/farmers" className="text-neutral-400 hover:text-white transition">Farmers</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Company</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/investors" className="text-neutral-400 hover:text-white transition">Investors</Link></li>
                    <li><Link href="/partnerships" className="text-neutral-400 hover:text-white transition">Partnerships</Link></li>
                    <li><Link href="/about" className="text-neutral-400 hover:text-white transition">About</Link></li>
                    <li><Link href="/media" className="text-neutral-400 hover:text-white transition">Media</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Contact</h4>
                  <p className="text-neutral-400 text-sm">info@greenearth3d.com</p>
                  <p className="text-neutral-400 text-sm mt-1">+91 XXXXXXXXXX</p>
                </div>
              </div>
              <div className="border-t border-neutral-700 pt-6 text-center text-neutral-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Green Earth 3D BioWorks Private Limited. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
