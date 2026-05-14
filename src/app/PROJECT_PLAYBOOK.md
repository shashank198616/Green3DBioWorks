# 📘 Green Earth 3D BioWorks — Project Playbook

**Project Name**: Green Earth 3D BioWorks Private Limited  
**Tagline**: Decompose, Digest, Derive (Triple-D Process)  
**Type**: Compressed Biogas (CBG) Plant Website  
**Location**: Chhattisgarh, India  
**Local Project Path**: `C:\MY\Dev\GreenEarth3DBioWorks\`  
**Last Updated**: May 14, 2026

---

## 🎯 BRAND POSITIONING

### The Single Sentence
> "A modern clean-energy infrastructure company building the future of rural circular economy in India."

Not: "A factory company with a website."

### What the Website Must Feel Like
| Feel | Not |
|------|-----|
| Clean | Cluttered |
| Sophisticated | Corporate PSU-style |
| Global | Generic "green leaf" template |
| Eco-industrial | Stock farming imagery everywhere |
| Confident | Government-ish |
| Minimal | Too much text on screen |
| Data-driven | Dense engineering specs upfront |
| Cinematic | Outdated industrial UI |

### Inspiration References
- **Tesla Energy** — storytelling through data, confidence, forward momentum
- **Apple** — minimalism, whitespace, clean hierarchy
- **Modern infrastructure dashboards** — real numbers, real-time feel
- **Sustainability narrative** — human + environmental impact, not just specs

### Emotional Goal
Every visitor should leave thinking:
> *"This is a serious future-facing green infrastructure company."*

The website sells:
- Rural transformation
- Circular economy
- Climate resilience
- Energy independence
- Indian innovation
- Waste-to-wealth

---

## 🎨 DESIGN SYSTEM

### Color Palette

| Color Name | Hex | Usage |
|------------|-----|-------|
| Deep Forest Green | `#014421` | Primary brand, hero overlays |
| Earth Green | `#047857` | CTA buttons, accents |
| Muted Sage | `#6B7F6B` | Secondary text, subtle dividers |
| Earth Beige | `#C8B89A` | Warm section backgrounds, cards |
| Matte Charcoal | `#1C1C1E` | Dark sections, footer, text |
| Soft Ivory | `#F5F1EB` | Light section backgrounds |
| Champagne Gold | `#C9A96E` | Premium accents, stat highlights, hover states |
| Off White | `#F9FAFB` | General background |

**Avoid**: Neon greens, bright gradients, excessive contrast, primary red/blue

### Typography

- **Primary Font**: Inter (Google Fonts)
- **System Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica Neue
- **Font Weights**: 300 (light body), 400 (body), 500 (medium), 600 (semibold), 700 (bold), 800 (display)
- **Letter Spacing**: Tight (-0.5px to -2px for display headings)

#### Type Scale (Responsive)
| Use | Mobile | Tablet | Desktop |
|-----|--------|--------|---------|
| Hero display | `text-4xl` | `text-6xl` | `text-8xl` |
| Section heading | `text-3xl` | `text-4xl` | `text-6xl` |
| Sub-heading | `text-xl` | `text-2xl` | `text-3xl` |
| Body | `text-base` | `text-lg` | `text-xl` |
| Caption/label | `text-sm` | `text-sm` | `text-base` |

### Design Principles

- **Aesthetic**: Tesla Energy meets Apple — data-confident, cinematic minimalism
- **Layout**: Generous whitespace, full-bleed sections, fluid grids
- **Borders**: Subtle (0.5px–1px), often in sage or champagne gold
- **Shadows**: Minimal, soft, dark-mode-aware
- **Border Radius**: 8px–20px (tighter than before — more industrial precision)
- **Glass morphism**: Used sparingly on overlay cards and dashboard panels

---

## 🎬 ANIMATION PHILOSOPHY

### Rules (Resolved)

✅ **DO — Scroll-triggered reveals (Intersection Observer)**
- Section fade-in as element enters viewport
- Animated number counters (count up on scroll-into-view)
- Staggered card appearances

✅ **DO — Hover interactions**
- Card lift: `hover:-translate-y-2 hover:shadow-xl`
- Button shimmer, border highlight
- Icon scale: `hover:scale-110`
- Image subtle zoom: `hover:scale-105`

❌ **DON'T — Parallax / scroll-position movement**
- No elements that move relative to scroll position
- No sticky sections that animate as you scroll through them
- No Framer Motion (causes SSR errors in Next.js App Router)
- No GSAP ScrollTrigger-style parallax

### Implementation Note
Use Intersection Observer API directly or a lightweight utility like `react-intersection-observer`.  
Counter animations: vanilla JS `requestAnimationFrame` — no heavy libs.

---

## 📱 RESPONSIVE DESIGN — MANDATORY

Every component must be built **mobile-first**. The site is a responsive web application, not a desktop site with mobile fallback.

### Breakpoints
| Token | Width | Tailwind |
|-------|-------|---------|
| Mobile | < 640px | default |
| Small tablet | 640px+ | `sm:` |
| Tablet | 768px+ | `md:` |
| Desktop | 1024px+ | `lg:` |
| Wide | 1280px+ | `xl:` |
| Full-bleed | 1536px+ | `2xl:` |

### Rules
- **Navigation**: hamburger/drawer on mobile (`< lg:`), full nav on desktop
- **Grids**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — never fixed columns
- **Padding**: tight on mobile (`px-4 py-8`), generous on desktop (`px-16 py-24`)
- **Typography**: always scaled with responsive modifiers (see type scale above)
- **Images**: always `w-full h-auto` or explicit responsive sizing with `next/image`
- **Touch targets**: min `h-11 w-11` (44px) for all interactive elements
- **No horizontal overflow** at any breakpoint — test from 320px up

---

## 🖼️ IMAGE STANDARDS — MANDATORY

- Use `next/image` for ALL images. Never `<img>` tags.
- **Hero / full-bleed images**: min 1920×1080, high-res, cinematic composition
- **Section / feature images**: min 800×600, sharp, professionally composed
- **Theme**: Chhattisgarh landscapes, paddy fields, biogas infrastructure, rural-industrial, aerial shots, sustainability
- **Palette harmony**: images should complement Deep Forest Green and Earth Beige
- Always provide meaningful `alt` text
- Use `priority` prop on above-the-fold images
- Use `sizes` prop for responsive image loading

#### Curated Search Terms (Unsplash / Pexels)
- "aerial paddy field India"
- "biogas plant aerial industrial"
- "compressed natural gas station"
- "rural India agriculture harvest"
- "sustainable energy India"
- "Chhattisgarh landscape aerial"
- "organic waste processing plant"
- "circular economy agriculture"
- "gas compression industrial"
- "renewable energy infrastructure India"

**Avoid**: generic green leaf clipart, overly saturated stock photos, Western farming imagery, anything that looks like a PowerPoint template

---

## 🗺️ HOMEPAGE STRUCTURE (RECOMMENDED FLOW)

```
1. HERO (Cinematic)
   ↓
2. IMPACT METRICS STRIP (Animated counters)
   ↓
3. INTERACTIVE PLANT JOURNEY ("From Paddy Straw to Green Fuel")
   ↓
4. WHY CBG MATTERS (Storytelling: Problem → Opportunity → Solution → Impact)
   ↓
5. PLANT OVERVIEW (Visual / 3D-style rendering or aerial photography)
   ↓
6. ENVIRONMENTAL IMPACT DASHBOARD
   ↓
7. FARMER ECOSYSTEM
   ↓
8. STAKEHOLDER PATHS (Investor / Government / Farmer / Partner)
   ↓
9. ROADMAP TIMELINE
   ↓
10. MEDIA & UPDATES
    ↓
11. FOOTER
```

---

## 📄 PAGES

### Essential Pages (Priority Order)
| # | Page | Route | Status |
|---|------|--------|--------|
| 1 | Home | `/` | 🔄 Redesign required |
| 2 | The Plant | `/plant` | ❌ Build |
| 3 | Technology | `/technology` | ❌ Build |
| 4 | Sustainability Impact | `/sustainability` | ❌ Build |
| 5 | Farmer Ecosystem | `/farmers` | ❌ Build |
| 6 | Partnerships | `/partnerships` | ❌ Build |
| 7 | Investors | `/investors` | ❌ Build |
| 8 | About Us | `/about` | 🔄 Update |
| 9 | Media & Updates | `/media` | ❌ Build |
| 10 | Contact | `/contact` | ✅ Done (minor updates) |

---

## 🎬 HERO SECTION

### Vision
Cinematic aerial video (or high-res photographic fallback):
- Paddy fields at harvest
- Straw collection / feedstock aggregation
- Plant infrastructure
- Gas compression equipment
- Delivery trucks
- Rural Chhattisgarh landscapes

### Overlay Text
**Headline**: "Turning Agricultural Waste Into India's Green Fuel Future"  
**Sub-headline**: "Chhattisgarh's first Compressed Biogas plant — powering India's circular energy economy"

### CTAs (3 buttons)
1. **Explore the Plant** → `/plant`
2. **Partner With Us** → `/partnerships`
3. **Download DPR** → PDF download

### Technical Note
- Use `<video>` with `autoPlay muted loop playsInline` for video hero
- Always provide a high-res fallback `<Image>` for browsers that block autoplay
- Overlay: dark gradient `from-charcoal/70 to-transparent`
- Text: white, tight tracking, large display size

---

## 📊 ANIMATED METRICS STRIP

Immediately below hero. Full-width dark band (charcoal or deep forest green background).

### Metrics to Display
| Metric | Value | Label |
|--------|-------|-------|
| CBG Production | 10 TPD | Tonnes Per Day |
| Crop Waste Processed | ~108,000 | Tonnes/Year |
| CO₂ Reduction | TBD | Tonnes/Year |
| Farmers Connected | TBD | Feedstock Partners |
| Organic Fertilizer | TBD | Tonnes Generated |

- Numbers animate (count up) when strip enters viewport via Intersection Observer
- Use Champagne Gold (`#C9A96E`) for the large numbers
- Labels in Muted Sage or white/70%
- Dividers between metrics: 1px champagne gold or charcoal

---

## 🏭 INTERACTIVE PLANT JOURNEY

**Section Title**: "From Paddy Straw to Green Fuel"

8-step horizontal scroll or tabbed interactive flow:

| Step | Label | Visual |
|------|-------|--------|
| 1 | Farmer Fields | Paddy field aerial |
| 2 | Feedstock Aggregation | Collection trucks, bales |
| 3 | Pre-processing | Shredding / preparation |
| 4 | Anaerobic Digestion | Digester tank illustration |
| 5 | Gas Purification | Membrane/scrubbing unit |
| 6 | Compression | CNG compressor visual |
| 7 | Distribution to OMCs | Tanker trucks, fuel stations |
| 8 | Digestate → Fertilizer | Bags of biofertilizer, farm use |

### Implementation Options (in priority order)
1. **Horizontal scrollable cards** — swipeable on mobile, scroll on desktop
2. **Stepper with animated connector line** — progress bar across top, click-through tabs
3. **Vertical timeline with alternating images** — simpler fallback

Each step: image left/right, number badge, step name, 2-line description, stat or fact.

---

## 📖 STORYTELLING SECTION — "WHY CBG MATTERS"

Immersive narrative flow. Full-bleed sections with large background imagery:

```
PROBLEM
  Stubble burning → air pollution
  Agricultural methane emissions
  Waste with no economic value
  ↓
OPPORTUNITY
  India's bioenergy economy
  SATAT policy framework
  Rural income generation
  ↓
SOLUTION
  GreenEarth 3D CBG ecosystem
  Triple-D Process
  ↓
IMPACT
  Circular economy
  Rural prosperity
  Clean fuel supply
```

Each section: large image background, minimal overlay text, 1–2 stats, forward arrow to next.

---

## 👥 STAKEHOLDER UX PATHS

Homepage branches users into four paths. Display as a card grid or tabbed section:

### For Investors
- ROI projections
- Scale vision and expansion roadmap
- Market opportunity (SATAT framework)
- EBITDA / financial metrics

### For Government
- SATAT policy alignment
- Rural development impact
- Environmental metrics (CO₂ reduction, stubble burning elimination)
- Chhattisgarh economic growth

### For Farmers
- How to become a feedstock partner
- Income opportunities (price per tonne)
- Biofertilizer benefits (return loop)
- Simple registration flow

### For Partners
- EPC / construction
- Technology providers
- Logistics and transport
- Offtake / OMC partnerships

---

## 🌾 FARMER ECOSYSTEM UX

One of the strongest differentiators. Makes the company feel operationally real.

### Feature: "Become a Feedstock Partner"

Simple 4-step form flow:
1. Enter village / district
2. Select crop type (paddy straw, sugarcane, maize, etc.)
3. Estimate residue availability (tonnes/season)
4. Submit contact details

Even with manual backend initially, this creates:
- Operational credibility
- Data collection pipeline
- Community connection narrative

---

## 🔧 TECHNICAL STACK

### Frontend
- **Framework**: Next.js 14.1.0 (App Router)
- **Language**: TypeScript 5.3.0 (strict mode)
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.0
- **Animations**: Intersection Observer (scroll reveals + counters) + CSS hover transitions
- **Images**: `next/image` exclusively
- **Video**: HTML5 `<video>` (hero cinematic)

### Animation Libraries Allowed
- `react-intersection-observer` — lightweight, SSR-safe
- Vanilla JS `requestAnimationFrame` — for counter animations
- CSS transitions / keyframes — for hover states and reveals

### Animation Libraries Banned
- ❌ Framer Motion (SSR errors in App Router)
- ❌ GSAP (overkill, licensing)
- ❌ AOS / ScrollReveal (dated patterns)

### Future Backend (Planned)
- **BFF Layer**: C# ASP.NET Core
- **Database**: DocumentDB (content) + Aurora PostgreSQL (contacts/inquiries)
- **Caching**: Redis (15-min API, 24-hour content)
- **Email**: SendGrid

### Hosting (Planned)
- **Primary**: Vercel (frontend) + AWS (backend)
- **Domain**: TBD
- **CDN**: Vercel Edge Network

---

## 📊 KEY METRICS (CURRENT DATA)

| Metric | Value | Unit |
|--------|-------|------|
| CBG Production | 10 | TPD |
| Crop Waste / Year | ~108,000 | Tonnes |
| Daily Biogas (energy equiv.) | 500 | MMBtu |
| CO₂ Reduction | 1,200 | Tonnes/Year |
| System Uptime | 99.5 | % |
| Optimal Digestion Temp | 37 | °C |
| Retention Time | 30 | Days |
| Methane Content | 55–65 | % |

*CO₂ reduction, farmers connected, and organic fertilizer figures to be confirmed with client.*

---

## 🏗️ COMPONENT ARCHITECTURE

### Key Components to Build
- `HeroVideo` — cinematic video hero with fallback image
- `MetricsStrip` — animated counter strip
- `PlantJourney` — horizontal scroll / stepper (8 steps)
- `StorytellingSection` — full-bleed narrative blocks
- `StakeholderPaths` — 4-card branching UX
- `FarmerForm` — feedstock partner registration
- `ImpactDashboard` — environmental metrics panel
- `RoadmapTimeline` — horizontal/vertical project timeline
- `NavMobile` — hamburger drawer with smooth transitions
- `VideoHeroFallback` — high-res image when video blocked

---

## ✅ CODING STANDARDS

### Component Rules
- Functional components with hooks — no class components
- TypeScript strict mode — no `any` types
- `'use client'` directive only on components that use state/effects
- PascalCase component names
- Named exports: `export function ComponentName()`

### Styling Rules
- Tailwind CSS classes primarily; custom CSS only when Tailwind can't do it
- Mobile-first: default = mobile, scale up with `md:` and `lg:`
- Brand token classes in `tailwind.config.js`
- Hover: `hover:scale-105 transition-all duration-300`
- Focus: always style `focus-visible:` for accessibility

### Image Rules
- `import Image from 'next/image'` — never `<img>`
- `priority` on all above-the-fold images
- `sizes` prop for responsive loading
- Meaningful `alt` text always

---

## 🚧 PROJECT STATUS

| Phase | Status | Completion |
|-------|--------|------------|
| Planning & Playbook | ✅ Complete | 100% |
| Design System | 🔄 Updating | 70% |
| Homepage Redesign | 🔄 In Progress | 30% |
| About Page | 🔄 Update needed | 60% |
| How It Works → Plant Journey | 🔄 Rebuild | 10% |
| Contact Page | ✅ Done (minor updates) | 90% |
| New Pages (6 pages) | ❌ Build | 0% |
| Responsive Overhaul | 🔄 In Progress | 20% |
| High-Quality Images | 🔄 In Progress | 10% |
| Animated Metrics Strip | ❌ Build | 0% |
| Stakeholder UX Paths | ❌ Build | 0% |
| Farmer Ecosystem Form | ❌ Build | 0% |
| Backend Development | ❌ Pending | 0% |
| Testing | ❌ Pending | 0% |
| Deployment | ❌ Pending | 0% |

**Overall Frontend Progress**: ~35%

---

## 🚫 WHAT TO AVOID

### Visual / UX
- Generic "green leaf" website templates
- Overly corporate PSU-style layouts
- Western farming stock imagery
- Cluttered dashboards
- Too much text on screen
- Dense engineering specs upfront
- Neon greens or bright gradients
- Government-ish layouts
- Excessive sustainability buzzwords

### Technical
- Framer Motion
- GSAP or ScrollTrigger
- `<img>` instead of `next/image`
- Fixed-width layouts that break on mobile
- Scroll-parallax effects
- Heavy animation libraries
- PDF-heavy content strategy

---

## 📈 NEXT STEPS (PRIORITY ORDER)

### Immediate
1. Homepage redesign — hero, metrics strip, plant journey
2. Responsive overhaul of all existing pages
3. High-quality image integration across all sections
4. Mobile navigation (hamburger drawer)

### Short Term
5. New pages: Plant, Technology, Sustainability Impact, Farmer Ecosystem
6. Stakeholder paths section on homepage
7. Storytelling narrative sections
8. Farmer feedstock form (manual backend initially)

### Medium Term
9. Investors and Partnerships pages
10. Media & Updates page
11. Roadmap timeline component
12. Contact page updates

### Long Term
13. Backend BFF development (C# ASP.NET Core)
14. Database integration
15. Email service (SendGrid)
16. Digital twin / real-time dashboard
17. Production deployment (Vercel + AWS)
18. Analytics & SEO optimization
19. Multi-language support (Hindi)

---

## 💬 USER PREFERENCES

| # | Preference |
|---|-----------|
| 1 | Tesla Energy storytelling + Apple minimalism (cinematic-meets-clean) |
| 2 | **Hover** animations + **scroll-triggered reveals/counters** (NO scroll parallax) |
| 3 | Fluid, layered design with full-bleed sections and overlays |
| 4 | Logo prominently displayed in header, footer, and section cards |
| 5 | Company name first (Green Earth 3D BioWorks), then tagline |
| 6 | Professional, industrial-grade appearance |
| 7 | Fully responsive — beautiful on 320px mobile through 1920px desktop |
| 8 | High-quality aesthetic imagery — Chhattisgarh, biogas, rural-industrial |
| 9 | Stakeholder-specific UX paths (Investor / Government / Farmer / Partner) |
| 10 | Human + environmental impact narrative, not just technical specs |
| 11 | Champagne gold accents for premium stat/metric highlights |

---

## 📝 ENVIRONMENT INFO

- **Local Path**: `C:\MY\Dev\GreenEarth3DBioWorks\`
- **Dev URL**: `http://localhost:3000`
- **Node.js**: 18.17.0+
- **OS**: Windows 11
- **Package Manager**: npm
- **Git Branch**: master

---
