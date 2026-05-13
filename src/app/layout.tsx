import '../styles/globals.css';

export const metadata = {
  title: 'Green Earth 3D BioWorks - Biogas Solutions',
  description: 'Sustainable biogas production plant: Decompose, Digest, Derive',
};

export default function RootLayout({ children }) {
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
        <div className="flex flex-col min-h-screen">
          <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img 
                  src="/images/CBG_Logo.png" 
                  alt="Green Earth 3D BioWorks" 
                  className="h-12 w-auto"
                />
              </a>
              <ul className="hidden md:flex gap-8 items-center">
                <li><a href="/" className="hover:text-green-earth transition">Home</a></li>
                <li><a href="/how-it-works" className="hover:text-green-earth transition">How It Works</a></li>
                <li><a href="/about" className="hover:text-green-earth transition">About</a></li>
                <li><a href="/contact" className="bg-green-earth text-white px-6 py-2 rounded hover:bg-green-800 transition">Contact</a></li>
              </ul>
            </nav>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="bg-neutral-900 text-neutral-50 mt-24">
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <img 
                    src="/images/CBG_Logo.png" 
                    alt="Green Earth 3D BioWorks" 
                    className="h-16 w-auto mb-4"
                  />
                  <p className="text-neutral-400 text-sm">Transforming waste into clean energy.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/how-it-works" className="text-neutral-400 hover:text-white transition">How It Works</a></li>
                    <li><a href="/about" className="text-neutral-400 hover:text-white transition">About Us</a></li>
                    <li><a href="/contact" className="text-neutral-400 hover:text-white transition">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-neutral-400 hover:text-white transition">Downloads</a></li>
                    <li><a href="#" className="text-neutral-400 hover:text-white transition">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Contact</h4>
                  <p className="text-neutral-400 text-sm">info@greenearth3d.com</p>
                  <p className="text-neutral-400 text-sm">+91 XXXXXXXXXX</p>
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