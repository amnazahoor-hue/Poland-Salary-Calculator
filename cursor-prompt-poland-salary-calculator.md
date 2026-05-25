# 🚀 CURSOR PROMPT — Poland Salary Calculator (World-Class Next.js + React Website)

---

## 🎯 PROJECT OVERVIEW

Build a **fully functional, SEO-optimized, Polish-language salary calculator website** called **KalkulatorWynagrodzeń** — a $100M-quality fintech tool for Polish employees and HR professionals. The tool computes gross-to-net salary conversion, deducting PIT (income tax), ZUS (social insurance), and health contributions.

**Target:** 550,000 monthly searches | KD 32 | AdSense monetization ready  
**Stack:** Next.js 14 (App Router) + React + TypeScript + Tailwind CSS + Framer Motion  
**Language:** All UI content in **Polish**  
**Tax Logic:** Must follow **Polish tax law 2025** (ZUS rates, PIT brackets, health contribution rules)

---

## 🏗️ TECH STACK & SETUP

```
Framework:     Next.js 14 with App Router
Language:      TypeScript (strict mode)
Styling:       Tailwind CSS + CSS Variables (NO hardcoded hex in component files)
Animation:     Framer Motion
Icons:         Lucide React
Fonts:         Google Fonts — Sora (headings) + DM Sans (body)
Schema:        JSON-LD (Organization, FAQ, Breadcrumb)
Analytics:     Google Analytics 4 + Microsoft Clarity placeholders
SEO:           next/head metadata, OpenGraph, canonical tags, sitemap.xml, robots.txt
```

### Project Structure
```
/app
  /page.tsx                   ← Homepage (all sections)
  /jak-to-dziala/page.tsx     ← How It Works (redirect or section)
  /faq/page.tsx               ← FAQ page
  /o-nas/page.tsx             ← About Us
  /kontakt/page.tsx           ← Contact
  /disclaimer/page.tsx        ← Disclaimer
  /privacy-policy/page.tsx    ← Privacy Policy
  /terms-and-conditions/page.tsx ← T&C
  /sitemap.xml/route.ts       ← Dynamic sitemap
  /robots.txt/route.ts        ← Robots

/components
  /layout
    Header.tsx
    Footer.tsx
    MobileMenu.tsx
  /sections
    HeroSection.tsx
    CalculatorSection.tsx
    HowItWorksSection.tsx
    InfoCardsSection.tsx
    FAQSection.tsx
  /ui
    Button.tsx
    Card.tsx
    Accordion.tsx
    AnimatedCounter.tsx
  /seo
    JsonLd.tsx

/lib
  /calculator.ts              ← ALL tax calculation logic
  /constants.ts               ← Tax rates, brackets

/styles
  /globals.css                ← CSS variables, base styles
```

---

## 🎨 DESIGN SYSTEM — MANDATORY

### CSS Variables (define in globals.css — NO hardcoded hex anywhere else)

```css
:root {
  --color-primary:      #1A3C6E;   /* Deep navy */
  --color-secondary:    #2563EB;   /* Electric blue */
  --color-btn:          #2563EB;
  --color-btn-hover:    #1D4ED8;
  --color-accent:       #10B981;   /* Emerald green */
  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-border:       #E2E8F0;
  --color-success:      #10B981;
  --color-error:        #EF4444;
  --color-bg:           #F8FAFC;
  --color-card-bg:      #FFFFFF;
}
```

### Typography (load via next/font/google)
- **Headings:** Sora, weights: 400, 500, 600, 700
- **Body:** DM Sans, weights: 400, 500, 600, 700

| Element         | Desktop | Mobile | Weight |
|----------------|---------|--------|--------|
| H1 Hero        | 48px    | 32px   | 700    |
| H2 Section     | 36px    | 26px   | 600    |
| H3 Card/FAQ    | 24px    | 20px   | 600    |
| Body Text      | 16px    | 15px   | 400    |
| Small/Caption  | 13px    | 12px   | 400    |
| Button Text    | 15px    | 14px   | 500    |
| Nav Links      | 15px    | 14px   | 500    |

Additional rules:
- Line height body: 1.6
- Line height headings: 1.2
- Letter spacing H1/H2: -0.02em
- Max paragraph width: 680px
- NO justified text alignment

### Visual Direction
- **Professional, trustworthy, finance/HR aesthetic**
- Deep navy + electric blue + emerald green accent palette
- Clean grid-based layout with generous whitespace
- Subtle background: light mesh gradient or soft geometric SVG pattern (NOT plain white)
- Tool section card: elevated with shadow and border — feels like a real financial instrument
- Deep shadows, glass-morphism touches on cards

---

## 📐 SECTION 1 — WEBSITE PAGES & STRUCTURE

### 1.1 Header (`Header.tsx`)

**Requirements:**
- Sticky (stays fixed on scroll)
- Solid background (NOT transparent on scroll)
- Logo left-aligned, navigation right-aligned
- Nav links: Home, Jak To Działa, FAQ, O Nas, Kontakt + all 4 legal pages in footer only
- Mobile hamburger menu — **MUST close on link click**
- Active nav link visually distinct (color or underline indicator)
- Header background: `var(--color-card-bg)` with subtle bottom border + shadow on scroll

```tsx
// Nav links
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Jak To Działa', href: '/#jak-to-dziala' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'O Nas', href: '/o-nas' },
  { label: 'Kontakt', href: '/kontakt' },
]
```

---

### 1.2 Hero Section (`HeroSection.tsx`)

**Layout:** 2-column on desktop (60/40 split), single column on mobile (image below text)

**Left column:**
- H1: `"Kalkulator Wynagrodzeń — Oblicz Wynagrodzenie Netto"`
- Subheadline (H2-styled paragraph): `"Sprawdź ile zarobisz na rękę. Szybki kalkulator brutto-netto dla umowy o pracę, zlecenie i o dzieło."`
- Short description paragraph
- Primary CTA button → smooth scroll to `#kalkulator`

**Right column:**
- Animated salary illustration (SVG or lottie-style CSS animation showing PLN numbers counting up)
- OR a preview mockup of the calculator card

**Animations (Framer Motion):**
- Animated salary number counter on load (count from 0 to example net salary)
- Staggered entrance animation for left column elements
- Floating/subtle pulse on the right illustration

**Rules:**
- Minimum 80px padding top/bottom
- Only ONE H1 per page (strict SEO)
- Desktop: 60/40 two-column split

---

### 1.3 Tool Section — Salary Calculator (`CalculatorSection.tsx`) ⭐ CORE FEATURE

**ID:** `id="kalkulator"`

**Title (H2):** `"Kalkulator Wynagrodzeń Brutto Netto"`

This is the PRIMARY interactive tool. **Full input validation and error handling required.**

#### Input Fields:

```tsx
// 1. Gross Monthly Salary
<input
  type="number"
  name="wynagrodzenie_brutto"
  placeholder="np. 5000"
  required
  min={1}
  label="Wynagrodzenie Brutto (miesięcznie)"
/>

// 2. Employment Type Dropdown
<select name="typ_umowy">
  <option value="uop">Umowa o pracę</option>
  <option value="zlecenie">Umowa zlecenie</option>
  <option value="dzielo">Umowa o dzieło</option>
</select>

// 3. Tax Relief Toggle (Yes/No)
<toggle name="ulga_podatkowa" label="Ulga podatkowa (kwota wolna od podatku)" />

// 4. PIT Rate Selector
<radioGroup name="stawka_pit">
  <option value={17}>17%</option>
  <option value={32}>32%</option>
</radioGroup>
```

#### Output Display (animated reveal on calculate):

```
┌─────────────────────────────────────────┐
│  💰 Wynagrodzenie Netto: X,XXX.XX PLN   │  ← Large, prominent, emerald color
├─────────────────────────────────────────┤
│  ZUS Pracownik:          XXX.XX PLN     │
│  Składka Zdrowotna:      XXX.XX PLN     │
│  Zaliczka PIT:           XXX.XX PLN     │
│  Łączne odliczenia:      X,XXX.XX PLN  │
└─────────────────────────────────────────┘
```

#### Technical Requirements:
- Loading state visible during calculation
- Empty/invalid submit MUST be blocked with inline error messages
- Error messages displayed inline (not alerts)
- Zero horizontal scroll on mobile
- Real-time OR on-button-click calculation
- Results formatted in PLN (Polish Złoty): `X XXX,XX zł`
- Numbers in output: **animated count-up effect** (Framer Motion)
- Tool card: elevated card with shadow, border, feels premium

---

## 🧮 CALCULATOR LOGIC (`/lib/calculator.ts`)

Implement accurate **Polish tax law 2025** calculations:

```typescript
export interface CalculatorInput {
  grossSalary: number;          // Wynagrodzenie brutto
  employmentType: 'uop' | 'zlecenie' | 'dzielo';
  taxRelief: boolean;           // Ulga podatkowa
  pitRate: 17 | 32;             // Stawka PIT
}

export interface CalculatorResult {
  netSalary: number;            // Wynagrodzenie netto
  zusEmployee: number;          // ZUS pracownik łącznie
  zusRetirement: number;        // Emerytalne: 9.76%
  zusDisability: number;        // Rentowe: 1.5%
  zusSick: number;              // Chorobowe: 2.45%
  healthInsurance: number;      // Składka zdrowotna: 9%
  incomeTax: number;            // Zaliczka PIT
  totalDeductions: number;      // Suma odliczeń
}

// ZUS Rates 2025 (Umowa o pracę)
const ZUS_RATES = {
  retirement: 0.0976,   // Emerytalne
  disability: 0.015,    // Rentowe
  sickness:   0.0245,   // Chorobowe
};

// Health Insurance: 9% of assessment base
const HEALTH_RATE = 0.09;

// Tax relief (kwota wolna od podatku): 300 PLN/month in 2025
const TAX_RELIEF_MONTHLY = 300;

// PIT costs of obtaining income (koszty uzyskania przychodu)
const INCOME_COSTS_UOP = 250; // Standard for UoP
const INCOME_COSTS_ZLECENIE = 0.2; // 20% for zlecenie
const INCOME_COSTS_DZIELO = 0.5;   // 50% for dzieło

export function calculate(input: CalculatorInput): CalculatorResult {
  // Implement full gross-to-net logic
  // Handle all 3 employment types differently
  // Apply correct ZUS, health, PIT rules per type
}
```

**Important notes:**
- For **Umowa o dzieło**: NO ZUS contributions (only PIT with 50% costs)
- For **Umowa zlecenie**: ZUS contributions apply (same as UoP unless student/under 26)
- For **Umowa o pracę**: Full ZUS + health + PIT
- Tax relief (ulga): reduces monthly advance tax by 300 PLN

---

### 1.4 How It Works Section (`HowItWorksSection.tsx`)

**ID:** `id="jak-to-dziala"`  
**H2:** `"Jak Działa Kalkulator?"`

Layout: 3–4 step cards, horizontal on desktop, vertical on mobile

Each card:
- Step number (large, styled)
- Lucide icon
- H3 heading
- Brief description

Steps:
1. **Wpisz swoje wynagrodzenie brutto** — Podaj miesięczną kwotę brutto
2. **Wybierz typ umowy i opcje podatkowe** — Umowa o pracę, zlecenie lub o dzieło
3. **Kliknij Oblicz** — Kalkulator przetworzy dane w ułamku sekundy
4. **Zobacz pełne zestawienie** — Sprawdź netto i wszystkie składki

**Animation:** Staggered fade-in on scroll (Framer Motion `whileInView`)

---

### 1.5 Info Cards Section (`InfoCardsSection.tsx`)

**H2:** `"Dowiedz Się Więcej"`

Layout: 2–3 column card grid, equal height, desktop only. Stacks on mobile.

Each card: H3 heading + description + optional Lucide icon. Content must be SEO-relevant and NOT duplicate Hero copy. All content in Polish.

Cards:
1. **Co to jest ZUS?** — Wyjaśnienie składek na ubezpieczenie społeczne
2. **Jak obliczany jest PIT?** — Podatek dochodowy w Polsce 2025
3. **Brutto vs Netto** — Prosta porównanie wynagrodzeń

**Animation:** Hover lift effect with subtle shadow (Framer Motion `whileHover`)

---

### 1.6 FAQ Section (`FAQSection.tsx`)

**ID:** `id="faq"`  
**H2:** `"Najczęściej Zadawane Pytania"`

- Accordion style, minimum 6 FAQs in Polish
- Only ONE answer open at a time
- Smooth open/close animation (Framer Motion `AnimatePresence`)
- Full width on mobile
- **FAQ schema (JSON-LD) MUST be implemented**

Questions:
1. Jak obliczyć wynagrodzenie netto?
2. Co to jest ZUS i ile wynosi?
3. Czym różni się umowa o pracę od umowy zlecenia?
4. Kiedy stosuje się stawkę PIT 32%?
5. Czy kalkulator uwzględnia ulgę podatkową?
6. Jak działa składka zdrowotna w 2025?

---

### 1.7 Footer (`Footer.tsx`)

- Multi-column layout with logo + short site description
- Nav links to all main sections
- Links to all 4 legal pages (separate pages, NOT modals): Disclaimer, Privacy Policy, Terms & Conditions, Contact
- Copyright year dynamic via JavaScript: `© {new Date().getFullYear()} KalkulatorWynagrodzeń`
- Social media icon links (placeholder URLs acceptable) — use Lucide icons
- Footer stacks on mobile
- Dark background (`var(--color-primary)`) with light text

---

## 📄 SECTION 5 — LEGAL PAGES (ALL MANDATORY)

All 4 pages must be:
- Separate standalone pages (NOT modals)
- Minimum 800 words
- Linked from footer
- Follow main site header/footer layout
- Use proper H1 / H2 / H3 hierarchy

### 5.1 `/disclaimer` — Disclaimer
Include all 8 sections:
1. General Disclaimer
2. Tool Usage Disclaimer
3. Third-Party Links Disclaimer
4. Professional Advice Disclaimer
5. Accuracy of Information
6. Affiliate Disclaimer
7. Errors and Omissions
8. Changes to This Disclaimer + Contact

### 5.2 `/privacy-policy` — Privacy Policy
Include all 9 sections:
1. Introduction
2. Information We Collect
3. How We Use Your Information
4. Cookies
5. Google Analytics and Third-Party Services (mention Microsoft Clarity)
6. Data Retention
7. Your Rights
8. Data Security
9. Changes to This Policy + Contact

### 5.3 `/terms-and-conditions` — Terms & Conditions
Include all 10 sections:
1. Acceptance of Terms
2. Use of Website
3. Intellectual Property
4. Tool Usage Terms
5. Disclaimer of Warranties
6. Limitation of Liability
7. Third-Party Links
8. Modifications to Terms
9. Governing Law
10. Severability + Contact

### 5.4 `/kontakt` — Contact Page
Contact form fields (all required):
- Full Name
- Email Address (validated format)
- Subject
- Message textarea (minimum 20 characters)
- Submit button

On Success: inline confirmation message (no page reload)  
Spam Protection: Honeypot field OR Google reCAPTCHA v3  

Content Sections:
1. Get in Touch (intro)
2. Technical Support instructions
3. General Inquiries
4. Business and Partnership
5. Content or Accuracy Issues
6. Privacy Concerns
7. Response Time note (1–2 business days)

### 5.5 `/o-nas` — About Us
Polish language, minimum 600 words. Include:
- What this tool is and who built it
- Mission: Help Polish employees and HR professionals understand their net salary
- Why this tool is accurate and trustworthy
- Brief team/editorial note
- Commitment to keeping tax rates up to date (ZUS/PIT 2025)
- E-E-A-T signals: mention expertise in Polish tax/payroll systems
- Internal links to legal pages and tool section

**H1:** `"O Nas — Kalkulator Wynagrodzeń"`  
**Target keywords:** kalkulator wynagrodzeń, oblicz netto, ZUS kalkulator

---

## 🔍 SECTION 6 — SEO REQUIREMENTS (Dev Responsibility)

### Technical SEO
```tsx
// In layout.tsx / page.tsx metadata
export const metadata: Metadata = {
  title: 'Kalkulator Wynagrodzeń — Oblicz Wynagrodzenie Netto | 2025',
  description: 'Kalkulator brutto netto 2025. Oblicz wynagrodzenie netto dla umowy o pracę, zlecenie i o dzieło. Uwzględnia ZUS, składkę zdrowotną i PIT.',
  keywords: 'kalkulator wynagrodzeń, kalkulator brutto netto, oblicz netto, ZUS kalkulator',
  canonical: 'https://kalkulatorwynagrodzen.pl',
  openGraph: { ... },
  twitter: { ... },
}
```

- HTTPS (SSL ready — use Next.js default)
- HTTP → HTTPS via 301 redirect
- All images in WebP format with ALT tags
- Page load target: under 3 seconds
- Core Web Vitals optimized (LCP, FID, CLS)
- Google Analytics 4 placeholder (`gtag` script)
- Microsoft Clarity placeholder
- `sitemap.xml` — dynamic, includes all pages
- `robots.txt` — no important URLs blocked
- Footer links: Disclaimer, Contact, Privacy Policy, Terms
- HTML, CSS, JS minified (Next.js handles this)
- Lazy loading for images (`loading="lazy"`)
- JS must NOT block above-the-fold content
- Canonical tags on every page

### Schema Markup (JSON-LD)
```tsx
// Homepage: Organization schema
{
  "@type": "Organization",
  "name": "KalkulatorWynagrodzeń",
  "url": "https://kalkulatorwynagrodzen.pl",
  ...
}

// FAQ pages: FAQPage schema
{
  "@type": "FAQPage",
  "mainEntity": [ ... ]
}

// All pages: BreadcrumbList schema
```

### On-Page SEO Rules
- Primary keyword in SEO title, H1, meta description, and first paragraph
- Only ONE H1 per page
- H2 and H3 used in logical hierarchy
- Keywords naturally placed, no stuffing
- Each page has unique meta title and meta description
- Internal links placed within first 4 paragraphs where possible
- No orphan pages
- Open Graph tags configured for social sharing previews

---

## 🎬 SECTION 7 — ANIMATIONS (Framer Motion — ALL REQUIRED)

```tsx
// 1. Hero: animated salary counter on load
<AnimatedCounter from={0} to={4250} duration={1.5} suffix=" zł" />

// 2. Hero: staggered entrance (left column elements)
variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
transition={{ staggerChildren: 0.15 }}

// 3. Tool section: smooth result reveal on calculate
<AnimatePresence>
  {results && <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} />}
</AnimatePresence>

// 4. How It Works: staggered fade-in on scroll
<motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }}
  viewport={{ once: true }} transition={{ delay: index * 0.1 }} />

// 5. Cards: hover lift effect
<motion.div whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }} />

// 6. FAQ accordion: smooth CSS transition (AnimatePresence + height animation)
// 7. CTA button: hover micro-animation (scale or glow)
<motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} />

// 8. Page load: staggered content entrance above the fold
// 9. Numbers in output: animated count-up (AnimatedCounter component)
```

---

## ✅ SECTION 8 — QA ACCEPTANCE CRITERIA

Before any section is considered Done:

| # | Check | Pass Criteria |
|---|-------|--------------|
| 1 | Tool Calculation Accuracy | Gross → Net matches official Polish tax tables 2025 |
| 2 | Input Validation | Empty/invalid submit blocked, error shown inline |
| 3 | Mobile Responsiveness | Zero horizontal scroll, all elements readable |
| 4 | Header Sticky | Stays on top during scroll, solid background |
| 5 | Hamburger Menu | Closes on link click |
| 6 | Legal Pages | All 4 pages live, accessible from footer, min 800 words |
| 7 | About Us Page | Live, linked in nav and footer, min 600 words |
| 8 | FAQ Accordion | One open at a time, smooth animation |
| 9 | FAQ Schema | JSON-LD implemented, passes Rich Results Test |
| 10 | Color Contrast | All combos pass WCAG AA (webaim.org checker) |
| 11 | CSS Variables | No hardcoded hex in component files |
| 12 | Typography | Sora + DM Sans loaded, correct sizes desktop/mobile |
| 13 | Page Speed | Under 3 seconds on GTmetrix/PageSpeed Insights |
| 14 | Analytics | GA4 + Microsoft Clarity placeholders both present |
| 15 | sitemap.xml | Accessible at /sitemap.xml |
| 16 | robots.txt | Present, no important URLs blocked |
| 17 | Contact Form | All fields validate, success message shows, spam protection active |
| 18 | Copyright Year | Dynamic via JS (auto-updates) |
| 19 | Canonical Tags | Implemented on all pages |
| 20 | Open Graph Tags | Configured and previewing correctly |
| 21 | Animations | All smooth, no performance lag on mobile |

---

## 📦 SECTION 9 — DELIVERABLES CHECKLIST

- [ ] Homepage with all sections (Header, Hero, Tool, How It Works, Info Cards, FAQ, Footer)
- [ ] Salary Calculator fully functional (PIT + ZUS + Health deduction logic — 2025 rates)
- [ ] /disclaimer page (min 800 words)
- [ ] /privacy-policy page (min 800 words)
- [ ] /terms-and-conditions page (min 800 words)
- [ ] /kontakt page with working form
- [ ] /o-nas page (min 600 words Polish)
- [ ] sitemap.xml (dynamic)
- [ ] robots.txt
- [ ] All schema JSON-LD implemented
- [ ] Logo SVG (simple: calculator icon + "KW" wordmark in brand colors)
- [ ] Google Analytics 4 + Clarity installed (placeholder)
- [ ] All animations implemented
- [ ] Mobile fully responsive (test at 375px, 768px, 1280px)

---

## 🛠️ IMPORTANT DEV NOTES

1. All page content for legal pages must be written in **Polish language**
2. About Us and all page text must be in **Polish language**
3. Tool calculation logic must follow **Polish tax law 2025** (ZUS rates, PIT brackets, health contribution rules)
4. Competitor site https://obliczumowe.pl/ is for **tool/UX benchmarking only** — do NOT copy design or content
5. Any blocker or question → document it clearly in a `NOTES.md` file
6. CSS Variables are **mandatory** — zero hardcoded colors in components
7. Use `next/font/google` for Sora and DM Sans — do NOT use CDN font links
8. All form submissions: no page reload (use `e.preventDefault()` + fetch or server actions)
9. The calculator card should feel like a **premium financial instrument** — deep shadows, border, elevated card
10. Mobile hamburger: use Framer Motion `AnimatePresence` for smooth open/close

---

## 🎨 LOGO SPECIFICATION

**Concept:** Stylized calculator icon or upward arrow combined with "PLN" or "zł" symbol  
**Wordmark:** "KalkulatorWynagrodzeń" (or short branded name)

| Element | Color |
|---------|-------|
| Icon/Mark | #2563EB |
| Accent in Icon | #10B981 |
| Wordmark Text | #0F172A |
| Footer Version | #FFFFFF |

Required versions (all as SVG components in React):
- Full logo (icon + wordmark horizontal) — desktop header
- Icon-only — favicon and mobile header
- Dark background version — footer
- Light background version — header

Sizes:
| Placement | Width | Height |
|-----------|-------|--------|
| Desktop Header | 160px | 40px |
| Mobile Header | 120px | 32px |
| Footer | 140px | 36px |
| Favicon | 32px | 32px |

---

## 🚀 GETTING STARTED COMMANDS

```bash
npx create-next-app@latest kalkulator-wynagrodzen --typescript --tailwind --eslint --app --src-dir=false
cd kalkulator-wynagrodzen
npm install framer-motion lucide-react
npm run dev
```

Start with:
1. `globals.css` → define all CSS variables
2. `lib/calculator.ts` → implement full tax logic
3. `components/layout/Header.tsx` + `Footer.tsx`
4. `app/page.tsx` → assemble all sections
5. Legal pages
6. SEO (metadata, schema, sitemap, robots)
7. Final QA pass against the checklist above
```
