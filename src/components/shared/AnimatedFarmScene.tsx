// Animated SVG farm landscape — no 'use client' needed (pure CSS animations, no hooks)
// Replaces static agriculture photos with a living Chhattisgarh paddy-field scene.

interface Props {
  className?: string;
}

// Deterministic stalk rows — no Math.random() (avoids SSR/hydration mismatch)
const ROWS = [
  { baseY: 348, count: 20, hBase: 36, hVar: 18, sw: 2,   erx: 3.5, ery: 2.2, color: '#8A6828', opacity: 0.62 },
  { baseY: 392, count: 26, hBase: 50, hVar: 24, sw: 2.5, erx: 4.5, ery: 2.8, color: '#A07830', opacity: 0.76 },
  { baseY: 448, count: 32, hBase: 66, hVar: 30, sw: 3,   erx: 5.5, ery: 3.4, color: '#BE9438', opacity: 0.88 },
  { baseY: 515, count: 36, hBase: 82, hVar: 40, sw: 3.5, erx: 7,   ery: 4.2, color: '#D0A045', opacity: 1.0  },
] as const;

const DUST = Array.from({ length: 9 }, (_, i) => ({
  cx: 55 + i * 84,
  cy: 415 + (i % 4) * 24,
  r:  1.4 + (i % 2) * 0.6,
  dur: 3.0 + (i % 4) * 0.9,
  delay: i * 0.6,
}));

const SUN_RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

export default function AnimatedFarmScene({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
      aria-label="Animated Chhattisgarh agricultural landscape"
    >
      <defs>
        <linearGradient id="afs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#6DBCE0" />
          <stop offset="42%"  stopColor="#A8D5B8" />
          <stop offset="100%" stopColor="#C8E4A8" />
        </linearGradient>
        <radialGradient id="afs-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFFDE7" />
          <stop offset="50%"  stopColor="#FFE082" />
          <stop offset="100%" stopColor="#FFE082" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="afs-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#3A2818" />
          <stop offset="100%" stopColor="#221408" />
        </linearGradient>
        <linearGradient id="afs-hill-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#548060" />
          <stop offset="100%" stopColor="#3A6040" />
        </linearGradient>
        <linearGradient id="afs-hill-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#285838" />
          <stop offset="100%" stopColor="#1A4028" />
        </linearGradient>
      </defs>

      {/* ── Sky ──────────────────────────────────────────────────────────── */}
      <rect width="800" height="600" fill="url(#afs-sky)" />

      {/* ── Sun ──────────────────────────────────────────────────────────── */}
      <circle
        cx="668" cy="68" r="34"
        fill="url(#afs-sun)"
        style={{ animation: 'sunGlow 5s ease-in-out infinite' }}
      />
      {SUN_RAYS.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={668 + Math.cos(rad) * 40} y1={68 + Math.sin(rad) * 40}
            x2={668 + Math.cos(rad) * 56} y2={68 + Math.sin(rad) * 56}
            stroke="#FFE082" strokeWidth="2.5" strokeLinecap="round"
            style={{
              animation: 'sunGlow 5s ease-in-out infinite',
              animationDelay: `${i * 0.28}s`,
            }}
          />
        );
      })}

      {/* ── Cloud 1 ──────────────────────────────────────────────────────── */}
      <g style={{ animation: 'cloudDrift 22s ease-in-out infinite alternate' }}>
        <ellipse cx="148" cy="98"  rx="56" ry="19" fill="white" fillOpacity="0.82" />
        <ellipse cx="130" cy="86"  rx="31" ry="23" fill="white" fillOpacity="0.76" />
        <ellipse cx="167" cy="83"  rx="25" ry="21" fill="white" fillOpacity="0.70" />
      </g>

      {/* ── Cloud 2 ──────────────────────────────────────────────────────── */}
      <g style={{ animation: 'cloudDrift 29s ease-in-out infinite alternate-reverse' }}>
        <ellipse cx="455" cy="74"  rx="44" ry="15" fill="white" fillOpacity="0.66" />
        <ellipse cx="440" cy="63"  rx="24" ry="18" fill="white" fillOpacity="0.60" />
        <ellipse cx="468" cy="61"  rx="19" ry="15" fill="white" fillOpacity="0.54" />
      </g>

      {/* ── Far hills ────────────────────────────────────────────────────── */}
      <path
        d="M0,232 C80,202 180,220 278,202 C378,184 478,210 578,194 C678,178 738,206 800,194 L800,600 L0,600Z"
        fill="url(#afs-hill-far)" fillOpacity="0.50"
      />

      {/* ── CBG plant silhouette ──────────────────────────────────────────── */}
      {/* Main shed */}
      <rect x="86"  y="198" width="54"  height="36" rx="2" fill="#122A1A" fillOpacity="0.72" />
      {/* Pitched roof */}
      <polygon points="84,198 113,181 142,198" fill="#0C1E12" fillOpacity="0.72" />
      {/* Chimney stacks */}
      <rect x="108" y="164" width="10" height="19" fill="#122A1A" fillOpacity="0.80" />
      <rect x="126" y="170" width="7"  height="13" fill="#122A1A" fillOpacity="0.68" />
      {/* Digester dome 1 */}
      <ellipse cx="166" cy="220" rx="18" ry="16" fill="#164824" fillOpacity="0.72" />
      <path d="M148,220 A18,16 0 0 1 184,220" fill="#0C1E12" fillOpacity="0.32" />
      {/* Digester dome 2 */}
      <ellipse cx="200" cy="224" rx="13" ry="12" fill="#164824" fillOpacity="0.62" />
      {/* Vent pipe */}
      <rect x="214" y="204" width="5" height="20" fill="#122A1A" fillOpacity="0.58" />
      {/* Pipe connector */}
      <rect x="142" y="218" width="24" height="3" fill="#0C1E12" fillOpacity="0.45" />

      {/* ── Mid hills ────────────────────────────────────────────────────── */}
      <path
        d="M0,292 C68,266 168,284 268,270 C368,256 468,280 578,266 C678,254 738,276 800,264 L800,600 L0,600Z"
        fill="url(#afs-hill-mid)" fillOpacity="0.70"
      />

      {/* ── Ground ───────────────────────────────────────────────────────── */}
      <rect x="0" y="515" width="800" height="85" fill="url(#afs-ground)" />

      {/* ── Crop stalk rows (back → front) ────────────────────────────────
           Each stalk: a rect + seed-head ellipse inside a <g> that sways.
           transform-box:fill-box + transform-origin:50% 100% pivots
           each stalk around its own bottom-center.                        */}
      {ROWS.map((row, rowIdx) =>
        Array.from({ length: row.count }, (_, i) => {
          const x   = 5 + (i / (row.count - 1)) * 790;
          const h   = row.hBase + (i % 7) * (row.hVar / 6);
          const dur = 1.6 + (i % 7) * 0.22 + rowIdx * 0.18;
          const del = ((i * 0.12) + rowIdx * 0.45) % 2.8;

          return (
            <g
              key={`r${rowIdx}-${i}`}
              style={{
                transformBox:    'fill-box',
                transformOrigin: '50% 100%',
                animation:       `stalkSway ${dur}s ease-in-out infinite`,
                animationDelay:  `${del}s`,
              }}
            >
              <rect
                x={x - row.sw / 2} y={row.baseY - h}
                width={row.sw} height={h}
                fill={row.color} fillOpacity={row.opacity}
              />
              {/* Seed / panicle head */}
              <ellipse
                cx={x} cy={row.baseY - h - row.ery}
                rx={row.erx} ry={row.ery}
                fill={row.color} fillOpacity={row.opacity * 0.9}
              />
            </g>
          );
        })
      )}

      {/* ── Floating dust / pollen particles ─────────────────────────────── */}
      {DUST.map((p, i) => (
        <circle
          key={i}
          cx={p.cx} cy={p.cy} r={p.r}
          fill="rgba(208,162,58,0.48)"
          style={{
            animation:      `dustFloat ${p.dur}s ease-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* ── Subtle dark vignette ─────────────────────────────────────────── */}
      <rect width="800" height="600" fill="rgba(0,0,0,0.07)" />
    </svg>
  );
}
