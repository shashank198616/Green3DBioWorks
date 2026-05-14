'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset all scroll-reveal elements on the new page to their hidden state
    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      el.classList.remove('in-view');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Tick after React has committed the new page's DOM
    const id = requestAnimationFrame(() => {
      document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
