'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  approximate?: boolean;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  approximate = false,
  className = '',
}: Props) {
  const [display, setDisplay] = useState('0');
  const spanRef = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        const multiplier = Math.pow(10, decimals);
        const target = Math.round(end * multiplier);
        const startTime = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = Math.round(eased * target) / multiplier;
          setDisplay(val.toFixed(decimals));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, decimals]);

  return (
    <span ref={spanRef} className={className}>
      {approximate && '~'}{prefix}{display}{suffix}
    </span>
  );
}
