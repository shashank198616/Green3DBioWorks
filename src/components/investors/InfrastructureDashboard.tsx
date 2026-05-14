'use client';
import { useState, useEffect } from 'react';

type TabKey = 'Biomass Utilisation' | 'Fuel Output' | 'Environmental Impact' | 'Operational Ecosystem';

const TABS: TabKey[] = [
  'Biomass Utilisation',
  'Fuel Output',
  'Environmental Impact',
  'Operational Ecosystem',
];

interface StatItem { label: string; value: string; unit: string }
interface BarItem  { label: string; pct: number }

interface TabData {
  stats: StatItem[];
  bars: BarItem[];
  chartTitle: string;
  insight: string;
}

const DATA: Record<TabKey, TabData> = {
  'Biomass Utilisation': {
    chartTitle: 'Feedstock Composition',
    insight:
      '4-crop diversification eliminates single-source seasonal risk across 500+ farm partners',
    stats: [
      { label: 'Daily Intake',      value: '110',     unit: 'TPD'   },
      { label: 'Annual Volume',     value: '108,000', unit: 'T/yr'  },
      { label: 'Partner Farmers',   value: '500+',    unit: ''      },
      { label: 'Feedstock Sources', value: '4',       unit: 'Crops' },
    ],
    bars: [
      { label: 'Paddy Straw',       pct: 42 },
      { label: 'Napier Grass',      pct: 30 },
      { label: 'Corn Stover',       pct: 16 },
      { label: 'Sugarcane Bagasse', pct: 12 },
    ],
  },
  'Fuel Output': {
    chartTitle: 'Quarterly Production (% of Capacity)',
    insight:
      'SATAT LoI guarantees 100% offtake of all produced CBG at government-notified prices',
    stats: [
      { label: 'Daily Output',      value: '10',    unit: 'TPD'   },
      { label: 'Annual Production', value: '3,000+',unit: 'T/yr'  },
      { label: 'Methane Content',   value: '98%+',  unit: ''      },
      { label: 'Compression',       value: '250',   unit: 'bar'   },
    ],
    bars: [
      { label: 'Q1 (Jan–Mar)', pct: 72 },
      { label: 'Q2 (Apr–Jun)', pct: 88 },
      { label: 'Q3 (Jul–Sep)', pct: 94 },
      { label: 'Q4 (Oct–Dec)', pct: 91 },
    ],
  },
  'Environmental Impact': {
    chartTitle: 'CO₂e Reduction by Source (%)',
    insight:
      'Each tonne processed avoids ~0.044 T CO₂e through methane capture and burning prevention combined',
    stats: [
      { label: 'CO₂ Avoided',      value: '1,200',  unit: 'T/yr'  },
      { label: 'Fossil Fuel Saved', value: '3,000',  unit: 'T/yr'  },
      { label: 'Residue Diverted',  value: '27,000', unit: 'T/yr'  },
      { label: 'Carbon Intensity',  value: '−65%',   unit: ''      },
    ],
    bars: [
      { label: 'Methane Capture',      pct: 38 },
      { label: 'Fossil Displacement',  pct: 33 },
      { label: 'Burning Prevented',    pct: 22 },
      { label: 'Soil Carbon Gain',     pct: 7  },
    ],
  },
  'Operational Ecosystem': {
    chartTitle: 'Revenue Stream Contribution (%)',
    insight:
      'Biofertilizer and carbon credits provide compounding upside as SATAT-anchored CBG revenue de-risks the base case',
    stats: [
      { label: 'CBG Revenue',   value: '₹13.8', unit: 'Cr/yr'      },
      { label: 'Biofertilizer', value: '₹2.4',  unit: 'Cr/yr'      },
      { label: 'System Uptime', value: '99.5%', unit: 'target'      },
      { label: 'SATAT Status',  value: 'Active',unit: 'Engagement'  },
    ],
    bars: [
      { label: 'CBG Offtake',       pct: 78 },
      { label: 'Biofertilizer Sales',pct: 14 },
      { label: 'Process Energy',    pct: 6  },
      { label: 'Carbon Credits',    pct: 2  },
    ],
  },
};

function BarRow({ label, pct, index }: { label: string; pct: number; index: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), index * 120 + 80);
    return () => clearTimeout(t);
  }, [pct, index]);

  const labelInside = width > 18;

  return (
    <div className="flex items-center gap-4 group">
      <p className="text-[11px] text-white/45 w-36 shrink-0 text-right leading-tight group-hover:text-white/70 transition-colors duration-200">
        {label}
      </p>
      <div className="relative flex-1 h-8 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full flex items-center justify-end pr-3"
          style={{
            width: `${width}%`,
            transition: 'width 620ms cubic-bezier(0.22, 0.61, 0.36, 1)',
            background: 'linear-gradient(90deg, #047857 0%, #C9A96E 100%)',
          }}
        >
          {labelInside && (
            <span className="text-[10px] font-black text-white/95 tabular-nums">{pct}%</span>
          )}
        </div>
        {!labelInside && pct > 0 && (
          <span
            className="absolute top-1/2 -translate-y-1/2 text-[10px] font-black text-white/55 tabular-nums"
            style={{ left: `calc(${width}% + 8px)` }}
          >
            {pct}%
          </span>
        )}
      </div>
    </div>
  );
}

export default function InfrastructureDashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>('Biomass Utilisation');
  const [chartKey, setChartKey] = useState(0);

  const handleTab = (tab: TabKey) => {
    setActiveTab(tab);
    setChartKey(k => k + 1);
  };

  const data = DATA[activeTab];

  return (
    <div
      className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      style={{ background: '#0c1910' }}
    >
      {/* Tab bar */}
      <div className="flex border-b border-white/10 overflow-x-auto">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => handleTab(tab)}
            className={`shrink-0 px-5 py-4 text-[10px] font-bold tracking-[0.18em] uppercase transition-all duration-200 whitespace-nowrap border-b-2 ${
              activeTab === tab
                ? 'text-champagne-gold border-champagne-gold bg-white/5'
                : 'text-white/35 border-transparent hover:text-white/60 hover:bg-white/3'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 border-b border-white/10">
        {data.stats.map(stat => (
          <div key={stat.label} className="p-5 md:p-6">
            <p className="text-xl md:text-2xl font-black text-white leading-none mb-1 tabular-nums">
              {stat.value}
              {stat.unit && (
                <span className="text-xs font-medium text-white/35 ml-1.5">{stat.unit}</span>
              )}
            </p>
            <p className="text-[10px] text-white/35 tracking-wide uppercase font-semibold mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="p-7 md:p-10" key={chartKey}>
        <div className="flex items-start justify-between gap-6 mb-8">
          <p className="text-[10px] text-champagne-gold/70 font-bold tracking-[0.22em] uppercase shrink-0">
            {data.chartTitle}
          </p>
          <p className="text-[10px] text-white/28 font-medium leading-relaxed hidden md:block text-right max-w-xs">
            {data.insight}
          </p>
        </div>

        <div className="space-y-4">
          {data.bars.map((bar, i) => (
            <BarRow key={bar.label} label={bar.label} pct={bar.pct} index={i} />
          ))}
        </div>

        <p className="mt-6 text-[10px] text-white/30 leading-relaxed md:hidden">
          {data.insight}
        </p>
      </div>
    </div>
  );
}
