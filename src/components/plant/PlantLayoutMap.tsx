'use client';
import { useState } from 'react';

interface ZoneDef {
  id: string;
  label: string;
  sublabel: string;
  color: string;
  x: number;
  y: number;
  w: number;
  h: number;
  desc: string;
  items: string[];
  circles?: { cx: number; cy: number; r: number }[];
}

const ZONES: ZoneDef[] = [
  {
    id: 'A',
    label: 'FEEDSTOCK',
    sublabel: 'RECEIVING',
    color: '#C9A96E',
    x: 8, y: 8, w: 108, h: 202,
    desc: 'Agricultural residue — paddy straw, corn stalks, sugarcane bagasse — arrives by vehicle, is weighed at the weighbridge, sampled for moisture and contamination, and staged in covered bays before entering the process line.',
    items: ['Vehicle weighbridge', 'Sample collection & QC lab', 'Covered storage bays (500T)', 'Moisture & density testing'],
  },
  {
    id: 'B',
    label: 'PRE-',
    sublabel: 'PROCESSING',
    color: '#6B7F6B',
    x: 128, y: 8, w: 100, h: 202,
    desc: 'Feedstock is shredded to an optimal particle size of 20–40 mm, blended with recycled process water, and conditioned to the correct dry matter concentration before being pumped as slurry into the digesters.',
    items: ['Shredder / chopper unit', 'Mixing & conditioning tank', 'Dry matter adjustment', 'Slurry feed pump'],
  },
  {
    id: 'C',
    label: 'ANAEROBIC',
    sublabel: 'DIGESTERS',
    color: '#047857',
    x: 240, y: 8, w: 164, h: 202,
    desc: 'The heart of the plant: three sealed, heated digesters maintain mesophilic conditions at 37 °C over a 30-day hydraulic retention time, converting organic matter into raw biogas (55–65% CH₄, 35–45% CO₂).',
    items: [
      '3 × 2,000 m³ CSTR digesters',
      'Mesophilic operation (37 °C)',
      '30-day hydraulic retention',
      'Biogas collection dome',
      'Automated slow-speed mixing',
    ],
    circles: [
      { cx: 287, cy: 72, r: 28 },
      { cx: 357, cy: 72, r: 28 },
      { cx: 322, cy: 138, r: 28 },
    ],
  },
  {
    id: 'D',
    label: 'GAS',
    sublabel: 'PURIFICATION',
    color: '#0ea5e9',
    x: 416, y: 8, w: 120, h: 97,
    desc: 'Raw biogas is purified using pressure swing adsorption or water scrubbing to remove CO₂ (to < 2%), H₂S, and moisture — producing pipeline-quality biomethane at ≥ 95% purity.',
    items: ['Water scrubbing column', 'H₂S removal unit', 'CO₂ extraction (PSA/WS)', '≥ 95% CH₄ purity output'],
  },
  {
    id: 'E',
    label: 'COMPRESSION',
    sublabel: '& CASCADE',
    color: '#64748b',
    x: 416, y: 113, w: 120, h: 97,
    desc: 'Purified biomethane is compressed to 200–250 bar in a multi-stage compressor, stored in cascade cylinders, and dispensed directly into OMC tanker trailers for distribution to fuel depots.',
    items: ['Multi-stage compressor', 'Cascade cylinder storage', '200–250 bar operating pressure', 'OMC tanker filling point'],
  },
  {
    id: 'F',
    label: 'DIGESTATE',
    sublabel: 'PROCESSING',
    color: '#C8B89A',
    x: 128, y: 220, w: 276, h: 88,
    desc: 'Nutrient-rich digestate is separated into a solid fraction (bagged as NPK biofertilizer) and a liquid fraction (returned to farmers as liquid organic amendment or recycled as process water).',
    items: ['Solid-liquid separator', 'Liquid digestate storage tank', 'Biofertilizer bagging plant', 'Farmer dispatch & logistics'],
  },
  {
    id: 'G',
    label: 'CONTROL ROOM',
    sublabel: '& UTILITIES',
    color: '#818cf8',
    x: 548, y: 8, w: 224, h: 300,
    desc: 'The SCADA-equipped operational nerve centre: manages all plant systems in real time, monitors safety interlocks, handles utilities (HT power, water, effluent), and maintains the data-logging and reporting infrastructure.',
    items: [
      'SCADA control system',
      'HT/LT electrical substation',
      'Effluent treatment plant',
      'Fire & gas detection system',
      'Emergency shutdown (ESD)',
      'Security & CCTV monitoring',
    ],
  },
];

const CONNECTIONS = [
  { x1: 116, y1: 109, x2: 128, y2: 109 },
  { x1: 228, y1: 109, x2: 240, y2: 109 },
  { x1: 404, y1: 57,  x2: 416, y2: 57  },
  { x1: 476, y1: 105, x2: 476, y2: 113 },
  { x1: 322, y1: 210, x2: 322, y2: 220 },
];

const FLOW_LABELS: { x: number; y: number; text: string; color: string }[] = [
  { x: 122, y: 102, text: 'Slurry',   color: '#C9A96E' },
  { x: 234, y: 102, text: 'Slurry',   color: '#6B7F6B' },
  { x: 410, y: 50,  text: 'Biogas',   color: '#0ea5e9' },
  { x: 480, y: 110, text: '↓',        color: '#0ea5e9' },
  { x: 326, y: 216, text: 'Digestate',color: '#C8B89A' },
];

export default function PlantLayoutMap() {
  const [active, setActive] = useState<string>('C');
  const [hovered, setHovered] = useState<string | null>(null);

  const activeZone = ZONES.find((z) => z.id === active)!;

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
      {/* SVG Map */}
      <div className="w-full lg:w-[62%] overflow-x-auto">
        <svg
          viewBox="0 0 780 316"
          className="w-full h-auto min-w-[500px]"
          style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}
          aria-label="Interactive plant layout diagram"
        >
          <defs>
            <marker id="arrowGray" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
              <path d="M0,0 L5,2.5 L0,5 Z" fill="#94a3b8" />
            </marker>
          </defs>

          {/* Connection flow lines */}
          {CONNECTIONS.map((c, i) => (
            <line
              key={i}
              x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeDasharray="3 2"
              markerEnd="url(#arrowGray)"
            />
          ))}

          {/* Flow labels */}
          {FLOW_LABELS.map((fl, i) => (
            <text key={i} x={fl.x} y={fl.y} textAnchor="middle" fill={fl.color} fontSize="6" fontWeight="700" opacity="0.85">
              {fl.text}
            </text>
          ))}

          {/* CBG output indicator */}
          <text x="540" y="154" fill="#047857" fontSize="6.5" fontWeight="700" opacity="0.8">CBG →</text>
          <text x="540" y="164" fill="#047857" fontSize="6" fontWeight="600" opacity="0.6">to OMC</text>

          {/* Zones */}
          {ZONES.map((zone) => {
            const isActive = active === zone.id;
            const isHovered = hovered === zone.id;
            const fillOpacity = isActive ? 0.28 : isHovered ? 0.2 : 0.1;
            const strokeOpacity = isActive ? 1 : isHovered ? 0.7 : 0.35;
            const strokeWidth = isActive ? 2 : 1;

            return (
              <g
                key={zone.id}
                onClick={() => setActive(zone.id)}
                onMouseEnter={() => setHovered(zone.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
                role="button"
                aria-label={`Zone ${zone.id}: ${zone.label} ${zone.sublabel}`}
              >
                {/* Zone rect */}
                <rect
                  x={zone.x} y={zone.y} width={zone.w} height={zone.h}
                  rx="6"
                  fill={zone.color}
                  fillOpacity={fillOpacity}
                  stroke={zone.color}
                  strokeOpacity={strokeOpacity}
                  strokeWidth={strokeWidth}
                  style={{ transition: 'fill-opacity 0.2s, stroke-opacity 0.2s' }}
                />

                {/* Zone ID badge */}
                <circle
                  cx={zone.x + 16} cy={zone.y + 16} r={10}
                  fill={zone.color}
                  fillOpacity={isActive ? 1 : 0.8}
                />
                <text
                  x={zone.x + 16} y={zone.y + 20}
                  textAnchor="middle"
                  fill="white"
                  fontSize="9"
                  fontWeight="800"
                >
                  {zone.id}
                </text>

                {/* Zone name */}
                <text
                  x={zone.x + zone.w / 2} y={zone.y + zone.h - 24}
                  textAnchor="middle"
                  fill="#1C1C1E"
                  fontSize="7.5"
                  fontWeight="700"
                  letterSpacing="0.5"
                  opacity={isActive ? 0.9 : 0.6}
                >
                  {zone.label}
                </text>
                <text
                  x={zone.x + zone.w / 2} y={zone.y + zone.h - 13}
                  textAnchor="middle"
                  fill="#1C1C1E"
                  fontSize="7.5"
                  fontWeight="700"
                  letterSpacing="0.5"
                  opacity={isActive ? 0.9 : 0.6}
                >
                  {zone.sublabel}
                </text>

                {/* Digester circles for Zone C */}
                {zone.circles?.map((c, i) => (
                  <circle
                    key={i}
                    cx={c.cx} cy={c.cy} r={c.r}
                    fill="none"
                    stroke={zone.color}
                    strokeWidth="1.5"
                    strokeDasharray="5 3"
                    opacity={isActive ? 0.7 : 0.35}
                  />
                ))}

                {/* Active zone glow ring */}
                {isActive && (
                  <rect
                    x={zone.x - 2} y={zone.y - 2}
                    width={zone.w + 4} height={zone.h + 4}
                    rx="8"
                    fill="none"
                    stroke={zone.color}
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="6 3"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 px-1">
          {[
            { color: '#C9A96E', label: 'Feedstock flow' },
            { color: '#0ea5e9', label: 'Gas / Product flow' },
            { color: '#C8B89A', label: 'Digestate flow' },
            { color: '#818cf8', label: 'Control & Utilities' },
          ].map((l) => (
            <span key={l.label} className="flex items-center gap-1.5 text-xs text-muted-sage">
              <span className="inline-block w-4 h-0.5 rounded-full" style={{ backgroundColor: l.color }} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="w-full lg:w-[38%] lg:sticky lg:top-24">
        <div
          className="rounded-2xl border p-6 md:p-8 transition-all duration-300"
          style={{ borderColor: activeZone.color + '55', background: activeZone.color + '0d' }}
        >
          {/* Zone badge */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
              style={{ backgroundColor: activeZone.color }}
            >
              {activeZone.id}
            </div>
            <div>
              <p className="font-bold text-charcoal text-lg leading-tight">
                {activeZone.label} {activeZone.sublabel}
              </p>
              <p className="text-xs text-muted-sage uppercase tracking-widest mt-0.5">Zone {activeZone.id}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-sage leading-relaxed mb-5">
            {activeZone.desc}
          </p>

          {/* Equipment list */}
          <p className="text-xs font-bold text-charcoal uppercase tracking-widest mb-3">Key Equipment</p>
          <ul className="space-y-2">
            {activeZone.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: activeZone.color }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Navigation hint */}
          <p className="mt-5 text-xs text-muted-sage/70 border-t border-earth-beige/30 pt-4">
            Click any zone on the map to explore its function.
          </p>
        </div>

        {/* Zone selector pills on mobile / small screens */}
        <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
          {ZONES.map((z) => (
            <button
              key={z.id}
              onClick={() => setActive(z.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-200"
              style={{
                backgroundColor: active === z.id ? z.color : 'transparent',
                borderColor: z.color + '88',
                color: active === z.id ? 'white' : z.color,
              }}
            >
              {z.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
