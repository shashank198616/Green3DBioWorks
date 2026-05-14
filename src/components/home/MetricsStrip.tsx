'use client';

import { useEffect, useRef, useState } from 'react';

interface Metric {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  approximate?: boolean;
  label: string;
  sublabel: string;
}

const METRICS: Metric[] = [
  { end: 10,     suffix: ' TPD',    label: 'CBG Production',       sublabel: 'Tonnes per day'           },
  { end: 108000, approximate: true, label: 'Tonnes Crop Waste',     sublabel: 'Processed per year'       },
  { end: 1200,   label: 'Tonnes CO₂ Reduced',  sublabel: 'Per year'                 },
  { end: 500,    suffix: ' MMBtu',  label: 'Daily Energy Output',   sublabel: 'Gas equivalent'           },
  { end: 995,    decimals: 1,       suffix: '%', label: 'System Uptime', sublabel: 'Operational reliability' },
];

function Counter({ metric, triggered }: { metric: Metric; triggered: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 2200;
    const start = performance.now();
    const raf = requestAnimationFrame(function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * metric.end));
      if (progress < 1) requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [triggered, metric.end]);

  const display = metric.decimals
    ? (count / Math.pow(10, metric.decimals)).toFixed(metric.decimals)
    : count.toLocaleString('en-IN');

  return (
    <>
      {metric.approximate && count > 0 ? '~' : ''}
      {metric.prefix ?? ''}
      {display}
      {metric.suffix ?? ''}
    </>
  );
}

export function MetricsStrip() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-charcoal py-14 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={`text-center ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-champagne-gold tabular-nums leading-none mb-3">
                <Counter metric={m} triggered={triggered} />
              </p>
              <p className="text-white text-sm font-medium">{m.label}</p>
              <p className="text-white/40 text-xs mt-1">{m.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
