'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'The Plant', href: '/plant' },
  { label: 'Technology', href: '/technology' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Farmers', href: '/farmers' },
  { label: 'Investors', href: '/investors' },
  { label: 'About', href: '/about' },
  { label: 'Media', href: '/media' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/images/CBG_Logo.png"
            alt="Green Earth 3D BioWorks"
            width={120}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-earth-green ${
                  isActive(link.href)
                    ? 'text-earth-green'
                    : 'text-neutral-700'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`bg-earth-green text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-deep-forest transition-colors ${
                isActive('/contact') ? 'bg-deep-forest' : ''
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-neutral-100 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-white w-full py-4 px-6 border-t border-neutral-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 border-b border-neutral-100 text-sm font-medium transition-colors hover:text-earth-green ${
                isActive(link.href) ? 'text-earth-green' : 'text-neutral-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-earth-green text-white py-3 rounded-lg text-sm font-medium hover:bg-deep-forest transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
