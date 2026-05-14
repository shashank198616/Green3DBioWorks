'use client';
import { useState } from 'react';

const CROPS = [
  { id: 'paddy',     name: 'Paddy Straw',        factor: 2.2, color: '#C9A96E', unit: '~2.2 T/acre' },
  { id: 'napier',    name: 'Napier Grass',        factor: 7.5, color: '#047857', unit: '~7.5 T/acre' },
  { id: 'corn',      name: 'Corn / Maize Stover', factor: 1.5, color: '#6B7F6B', unit: '~1.5 T/acre' },
  { id: 'sugarcane', name: 'Sugarcane Bagasse',   factor: 3.0, color: '#C8B89A', unit: '~3.0 T/acre' },
];

const AVAILABILITY = [
  { id: 'high',   label: 'High',   sub: '80%+ residue collectible', factor: 0.85 },
  { id: 'medium', label: 'Medium', sub: '50–80% collectible',       factor: 0.65 },
  { id: 'low',    label: 'Low',    sub: '20–50% collectible',       factor: 0.35 },
];

const PRICE_PER_TONNE = 1200;
const PLANT_ANNUAL_NEED = 33000; // 110 TPD × 300 operating days

function formatIncome(n: number) {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} Lakh`;
  if (n >= 1000)   return `₹${Math.round(n / 1000)}K`;
  return `₹${Math.round(n)}`;
}

export default function BiomassCalculator() {
  const [cropId, setCropId] = useState('paddy');
  const [acres, setAcres] = useState('');
  const [availId, setAvailId] = useState('medium');

  const crop = CROPS.find((c) => c.id === cropId)!;
  const avail = AVAILABILITY.find((a) => a.id === availId)!;
  const landNum = Math.max(0, parseFloat(acres) || 0);

  const annualBiomass = landNum * crop.factor * avail.factor;
  const annualIncome  = annualBiomass * PRICE_PER_TONNE;
  const plantShare    = Math.min((annualBiomass / PLANT_ANNUAL_NEED) * 100, 99.9);
  const hasResult     = landNum > 0;

  return (
    <div className="rounded-3xl border border-earth-beige/40 overflow-hidden bg-white shadow-sm">
      {/* Header bar */}
      <div className="px-6 py-5 bg-earth-green">
        <h3 className="font-bold text-white text-lg">Estimate Your Biomass Potential</h3>
        <p className="text-white/70 text-sm mt-0.5">
          Select your crop and farm size to see your estimated annual contribution.
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-7">
        {/* Step 1 — Crop type */}
        <div>
          <p className="text-xs font-bold text-charcoal uppercase tracking-widest mb-3">
            Step 1 — Crop Type
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {CROPS.map((c) => (
              <button
                key={c.id}
                onClick={() => setCropId(c.id)}
                className="text-left p-3.5 rounded-xl border transition-all duration-200"
                style={{
                  borderColor: cropId === c.id ? c.color : '#e8e0d4',
                  backgroundColor: cropId === c.id ? `${c.color}12` : 'transparent',
                }}
              >
                <div className="w-2 h-2 rounded-full mb-2" style={{ backgroundColor: c.color }} />
                <p className="text-sm font-bold text-charcoal leading-snug">{c.name}</p>
                <p className="text-xs text-muted-sage mt-0.5">{c.unit}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 — Land size */}
        <div>
          <label className="text-xs font-bold text-charcoal uppercase tracking-widest mb-3 block">
            Step 2 — Farm Size (Acres)
          </label>
          <input
            type="number"
            value={acres}
            onChange={(e) => setAcres(e.target.value)}
            placeholder="e.g. 5"
            min="0"
            max="10000"
            className="w-full border border-earth-beige/40 rounded-xl px-4 py-3.5 text-charcoal font-semibold text-lg placeholder:text-earth-beige focus:outline-none focus:border-earth-green transition-colors"
          />
        </div>

        {/* Step 3 — Availability */}
        <div>
          <p className="text-xs font-bold text-charcoal uppercase tracking-widest mb-3">
            Step 3 — Residue Availability
          </p>
          <div className="grid grid-cols-3 gap-2">
            {AVAILABILITY.map((a) => (
              <button
                key={a.id}
                onClick={() => setAvailId(a.id)}
                className="p-3 rounded-xl border text-center transition-all duration-200"
                style={{
                  borderColor: availId === a.id ? '#047857' : '#e8e0d4',
                  backgroundColor: availId === a.id ? '#04785712' : 'transparent',
                }}
              >
                <p className="font-bold text-charcoal text-sm">{a.label}</p>
                <p className="text-[10px] text-muted-sage mt-0.5 leading-tight">{a.sub}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div
          className="rounded-2xl border p-5 transition-all duration-500"
          style={{
            borderColor: hasResult ? '#04785740' : '#e8e0d4',
            backgroundColor: hasResult ? '#04785708' : '#f5f1eb',
          }}
        >
          {hasResult ? (
            <>
              <p className="text-xs font-bold text-earth-green uppercase tracking-widest mb-4">
                Your Estimated Annual Contribution
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-black text-charcoal">
                    {annualBiomass >= 1000
                      ? `${(annualBiomass / 1000).toFixed(1)}K`
                      : Math.round(annualBiomass)}
                  </p>
                  <p className="text-xs text-muted-sage mt-1">tonnes/year</p>
                </div>
                <div className="text-center border-x border-earth-beige/40">
                  <p className="text-2xl md:text-3xl font-black text-earth-green">
                    {formatIncome(annualIncome)}
                  </p>
                  <p className="text-xs text-muted-sage mt-1">est. income</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-black text-champagne-gold">
                    {plantShare < 1
                      ? `${plantShare.toFixed(2)}%`
                      : `${plantShare.toFixed(1)}%`}
                  </p>
                  <p className="text-xs text-muted-sage mt-1">of plant need</p>
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-earth-beige/40 overflow-hidden">
                <div
                  className="h-full rounded-full bg-earth-green transition-all duration-700"
                  style={{ width: `${Math.min(plantShare, 100)}%` }}
                />
              </div>
              <p className="text-xs text-muted-sage mt-3 text-center">
                Based on ₹{PRICE_PER_TONNE.toLocaleString()}/tonne procurement rate.
                Actual rate subject to quality grading at intake.
              </p>
            </>
          ) : (
            <p className="text-sm text-muted-sage text-center py-2">
              Enter your farm size above to see your estimated annual biomass value.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
