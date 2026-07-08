# Spizespices Pvt Ltd — Complete SEO Implementation Plan

**Senior Next.js Developer · Technical SEO Expert · SEO Content Strategist**
**Audit Date:** July 2026 | **Framework:** Next.js App Router | **Stack:** React 19, TypeScript, Tailwind CSS v4

---

## Executive Summary

Spizespices Pvt Ltd is an Idukki, Kerala-based premium spice company with a well-designed Next.js 15 (App Router) website. The visual quality of the site is high-grade, but the SEO foundation is **critically underdeveloped**. The site currently has:

- **Zero structured data (JSON-LD)** — no Organization, LocalBusiness, Product, or BreadcrumbList schemas
- **No sitemap.xml or robots.txt** — Google cannot efficiently discover or prioritize pages
- **No Twitter Card metadata** anywhere on the site
- **Broken canonical URL** — `https://spizespices.example.com` placeholder never updated to the real domain
- **About page has no metadata export at all** — renders completely without a unique title/description
- **Web manifest still reads "MyWebSite" / "MySite"** — placeholder data left in place
- **Images served unoptimized** — `images: { unoptimized: true }` in next.config.mjs kills Core Web Vitals
- **Blog pages link to non-existent routes** — all 3 blog cards on the homepage return 404
- **Footer links to /products, /blog, /exports, /contact** — all pages that do not exist in the router

Despite these weaknesses, the site has an excellent content foundation: strong B2B value propositions, real certifications (FSSAI, ISO, Spices Board India), director profiles, and a clearly defined service area in Idukki.

---

## Current SEO Score (Estimated)

| Category | Score | Assessment |
|---|---|---|
| Technical SEO | 22/100 | Critical deficiencies |
| On-Page Metadata | 35/100 | Root + Wholesale only |
| Structured Data | 0/100 | Completely absent |
| Content Depth | 28/100 | No blog, no dedicated product pages |
| Internal Linking | 15/100 | Broken links in footer and blog |
| Image SEO | 40/100 | Some alt text, but unoptimized serving |
| Local SEO | 10/100 | Address only in footer, no schema |
| International SEO | 5/100 | No hreflang, no export-country pages |
| Mobile SEO | 60/100 | Responsive design, good UX |
| Core Web Vitals | 45/100 | `images: unoptimized`, many client components |

**Overall Estimated Score: ~26/100**

---

## Strengths

1. **Next.js App Router** — ideal foundation for server-rendered metadata and SEO
2. **Root layout has Metadata API** — title, description, keywords, Open Graph, canonical, favicon all present
3. **Wholesale page has its own metadata export** — shows the pattern is understood
4. **Semantic HTML heading hierarchy** exists in most sections (H1 → H2 → H3)
5. **Cloudinary images** for hero, products, why-choose-us — good CDN delivery
6. **Real business information** available: phone, email, address, director names
7. **Google Fonts loaded via next/font** — avoids render-blocking font requests
8. **B2B focus is clear** — forms, WhatsApp integration, certifications listed
9. **Mobile-responsive header/drawer** — superior to most competitor sites
10. **Framer Motion scroll-driven animations** — good UX engagement signal
11. **Vercel Analytics included** — foundation for measuring organic traffic

---

## Weaknesses

1. **Placeholder canonical URL** (`https://spizespices.example.com`) — never updated to the real domain
2. **OG image URL is broken** (`/idukki-cardamom-farms.png` does not exist in `/public`)
3. **No sitemap.ts or robots.ts** in the App Router
4. **About page (`/about/page.tsx`) is `"use client"` with no metadata export** — Google sees the same root title on all pages
5. **No JSON-LD structured data anywhere** — no Organization, LocalBusiness, Product, Breadcrumb, or FAQ schema
6. **Twitter/X Card metadata is entirely absent**
7. **Web manifest brand name is "MyWebSite"** — wrong for PWA discovery
8. **`images: { unoptimized: true }` in next.config.mjs** — disables Next.js image optimization, hurts LCP
9. **Blog section links to `/blog/*` routes that don't exist**
10. **Footer links to `/products`, `/blog`, `/exports`, `/contact`** — all returning 404s
11. **No 404 error page (`not-found.tsx`)** in the app directory
12. **Google Fonts loaded via dynamic `<link>` injection** inside `about/page.tsx` — bypasses next/font optimization, causes FOUT and hurts CLS
13. **`generator: 'v0.app'`** in root metadata — exposes scaffolding tool; remove immediately
14. **Social media links in header and footer are `href="#"`** — no real social profile links
15. **Product pages do not exist** — `/products` returns 404 despite being the primary homepage CTA
16. **HomeAbout section has `ssr: false`** — the company's about text is entirely invisible to Google crawlers

---

## Critical Issues (Fix First — Blocking Organic Indexing)

> [!CAUTION]
> These issues directly prevent Google from correctly indexing and representing the site in search results.

### CRIT-1: No `sitemap.ts` — Google Cannot Efficiently Discover Pages
- **File:** `app/` directory (missing)
- **Impact:** Crawlers must guess the full URL structure. Pages may be missed or deprioritized.
- **Fix:** Create `app/sitemap.ts` exporting all current and future pages with `lastModified`, `changeFrequency`, and `priority`.

### CRIT-2: No `robots.ts` — No Crawl Directives Provided
- **File:** `app/` directory (missing)
- **Impact:** All routes including API endpoints are fully crawlable with no guidance. No sitemap URL is communicated.
- **Fix:** Create `app/robots.ts` allowing `/`, disallowing `/api/`, pointing to the sitemap URL.

### CRIT-3: Placeholder Domain in All Canonical/OG URLs
- **File:** [`app/layout.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/app/layout.tsx#L52)
- **Impact:** Every canonical and Open Graph URL reads `spizespices.example.com`. Google may canonicalize to a non-existent domain.
- **Fix:** Add `metadataBase: new URL('https://spizespices.com')` to root layout metadata. All relative URLs resolve automatically.

### CRIT-4: Broken OG Image (`/idukki-cardamom-farms.png` does not exist)
- **File:** [`app/layout.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/app/layout.tsx#L48)
- **Impact:** Social shares on LinkedIn, WhatsApp, Facebook render with no preview image — directly harms CTR.
- **Fix:** Create an OG image `og-image.jpg` (1200×630px) in `/public/` and update the layout reference.

### CRIT-5: About Page Has No SEO Metadata
- **File:** [`app/about/page.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/app/about/page.tsx#L1)
- **Impact:** Google uses the root layout title for `/about` — both pages appear with identical title tag (duplicate title).
- **Fix:** Because `about/page.tsx` is a client component, create a server wrapper in `app/about/layout.tsx` or export metadata there.

### CRIT-6: `images: { unoptimized: true }` in next.config.mjs
- **File:** [`next.config.mjs`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/next.config.mjs#L15)
- **Impact:** All `next/image` components serve uncompressed, full-size images. Major Core Web Vitals (LCP) hit.
- **Fix:** Remove this flag. Configure `images.remotePatterns` for the Cloudinary domain (`res.cloudinary.com`).

### CRIT-7: Zero JSON-LD Structured Data (Entire Site)
- **Impact:** No eligibility for rich results — Product rich snippets, Local Business panel, FAQ rich results, Review stars.
- **Fix:** Implement Organization, LocalBusiness, Product, BreadcrumbList, and FAQ schemas (see Structured Data Plan below).

### CRIT-8: HomeAbout Text Is Invisible to Google
- **File:** [`components/sections/home-about.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/home-about.tsx#L6)
- **Issue:** `dynamic(() => import("@/components/ScrollRevealText"), { ssr: false })` — the full company story paragraph is rendered client-only.
- **Impact:** Google cannot read this content. It's the company's primary "about" paragraph on the homepage.
- **Fix:** Render the text server-side as a static element; apply the scroll animation as a client-side progressive enhancement.

---

## High Priority Tasks

### HIGH-1: Fix All Broken Internal Links
The following pages are linked throughout the site but do not exist as routes:

| Broken Link | Location | Fix |
|---|---|---|
| `/products` | Footer, Product Grid CTA button | Create `app/products/page.tsx` |
| `/blog` | Footer, BlogSection "View all" | Create `app/blog/page.tsx` |
| `/blog/idukki-cardamom-world-famous` | BlogSection card | Create blog post or update link |
| `/blog/health-benefits-cardamom` | BlogSection card | Create blog post or update link |
| `/blog/how-to-store-cardamom` | BlogSection card | Create blog post or update link |
| `/exports` | Footer | Create `app/exports/page.tsx` |
| `/contact` | Footer | Fix to `/#contact` or create standalone page |

### HIGH-2: Twitter Card Metadata Missing on All Pages
- **File:** [`app/layout.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/app/layout.tsx)
- **Fix:** Add `twitter` object to root layout metadata with `card: "summary_large_image"`, `site`, `creator`, title, description, and images.

### HIGH-3: Web Manifest Placeholder Brand
- **File:** [`public/site.webmanifest`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/public/site.webmanifest)
- **Current:** `"name": "MyWebSite"`, `"short_name": "MySite"`, `"theme_color": "#ffffff"`
- **Fix:** Update to `"name": "Spizespices Pvt Ltd"`, `"short_name": "Spizespices"`, `"theme_color": "#14261C"`, `"background_color": "#F5F1E6"`, add `"start_url": "/"`.

### HIGH-4: Remove `generator: 'v0.app'` from Root Metadata
- **File:** [`app/layout.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/app/layout.tsx#L53)
- **Fix:** Delete this field. It exposes internal tooling to crawlers and has no SEO benefit.

### HIGH-5: Add Custom 404 Page
- **File:** `app/not-found.tsx` (missing)
- **Fix:** Create with brand styling, helpful navigation, and a link back to the homepage. Prevents Google from indexing broken 404s.

### HIGH-6: Replace Dynamic Font Loading in About Page
- **File:** [`app/about/page.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/app/about/page.tsx#L19-L31)
- **Issue:** Fonts Fraunces and Manrope are loaded via `document.createElement("link")` injected at runtime — FOUT risk, CLS impact, bypasses next/font caching.
- **Fix:** Load these fonts via `next/font/google` in the root layout and pass CSS variables.

---

## Medium Priority Tasks

### MED-1: Add Per-Page Canonical URLs
Every page beyond the root needs its own canonical. Currently only the root layout has a canonical (pointing to the placeholder domain).

### MED-2: Improve Alt Text Quality

| Image | File | Current Alt Text | Recommended Alt Text |
|---|---|---|---|
| Hero (desktop) | hero.tsx:18 | "Premium Indian spices presentation" | "Fresh green cardamom pods from Idukki, Kerala" |
| Hero (mobile) | hero.tsx:28 | "Premium Indian spices presentation" | "Premium Idukki cardamom and Kerala spices on rustic surface" |
| Logo (header) | site-header.tsx:444 | "Spizespices" | "Spizespices Pvt Ltd — Premium Kerala Spices Logo" |
| Product: Cardamom | product-grid.tsx:71 | "Cardamom" (single word) | "Premium green cardamom pods sourced from Idukki, Kerala" |
| Product: Black Pepper | product-grid.tsx:71 | "Black Pepper" | "Whole black peppercorns from Kerala — direct farm sourcing" |
| Why Choose Us | why-choose-us.tsx:78 | "Assorted spices on a dark slate background" | "Variety of premium Kerala spices: cardamom, pepper, and cloves" |
| Decorative leaves | processing-timeline.tsx:331,338 | `""` (empty) | Correct — keep empty for decorative images |

### MED-3: Add `title` Template for All Pages
**File:** [`app/layout.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/app/layout.tsx)
Change `title: "Spizespices Pvt Ltd | Pure Indian Spices"` to:
```
title: {
  default: "Spizespices Pvt Ltd | Premium Idukki Spices & Cardamom",
  template: "%s | Spizespices Pvt Ltd"
}
```
Every page can then define a short page title and the site name auto-appends.

### MED-4: Social Media Links Must Have Real URLs
- **File:** [`components/site-header.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/site-header.tsx#L673)
- **Issue:** `href="#"` on Facebook, Instagram, YouTube icons
- **Fix:** Link to real social profiles or remove icons until profiles exist.

### MED-5: Add `<address>` Semantic HTML to Footer
- **File:** [`components/site-footer.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/site-footer.tsx#L63-L65)
- **Fix:** Wrap address content in `<address>` tag for correct semantic markup.

---

## Low Priority Tasks

### LOW-1: Change `lang="en"` to `lang="en-IN"`
- **File:** [`app/layout.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/app/layout.tsx#L62)
- Signals Indian English locale; improves local SERP relevance.

### LOW-2: Add `hreflang` Alternates for International SEO
Add to root layout metadata `alternates.languages` for future Arabic and other language variants.

### LOW-3: Add `preconnect` for Third-Party Origins
Add `<link rel="preconnect" href="https://res.cloudinary.com">` to root layout to reduce Cloudinary connection latency.

### LOW-4: Add `rel="noopener noreferrer"` to External Links
- **File:** [`components/sections/b2b-export.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/b2b-export.tsx#L32)
- All `target="_blank"` links (WhatsApp `wa.me` URL) must include `rel="noopener noreferrer"`.

---

## Technical SEO Roadmap

### Phase 1 — Critical Foundation (Week 1–2)
- [ ] Set real production `metadataBase` URL
- [ ] Create `app/sitemap.ts`
- [ ] Create `app/robots.ts`
- [ ] Add OG image to `/public/og-image.jpg` and fix reference
- [ ] Remove `images: { unoptimized: true }` from next.config.mjs
- [ ] Add `images.remotePatterns` for Cloudinary in next.config.mjs
- [ ] Update `public/site.webmanifest` with correct brand info
- [ ] Create `app/not-found.tsx` custom 404 page
- [ ] Remove `generator: 'v0.app'`
- [ ] Add Twitter Card metadata to root layout
- [ ] Fix HomeAbout SSR — render text server-side

### Phase 2 — Metadata & Schema (Week 3–4)
- [ ] Add About page metadata via server wrapper/layout
- [ ] Add `title` template to root layout
- [ ] Add per-page metadata to all pages
- [ ] Implement Organization JSON-LD in root layout
- [ ] Implement LocalBusiness JSON-LD
- [ ] Implement BreadcrumbList on About and Wholesale pages
- [ ] Implement FAQ JSON-LD on Wholesale page

### Phase 3 — Content Pages (Week 5–8)
- [ ] Create `app/products/page.tsx` — full product catalog
- [ ] Create `app/products/cardamom/page.tsx` — flagship product
- [ ] Create `app/products/black-pepper/page.tsx`
- [ ] Create `app/blog/page.tsx` — blog index
- [ ] Create first 3 blog post pages
- [ ] Create `app/exports/page.tsx`
- [ ] Create `app/contact/page.tsx` (standalone)
- [ ] Fix all broken footer/header links

### Phase 4 — Content & Authority (Month 2–3)
- [ ] Publish 6 blog articles (see Blog Roadmap)
- [ ] Create `app/faq/page.tsx` with FAQ schema
- [ ] Create `/idukki-spices` geographic origin page
- [ ] Create `/organic-cardamom` page
- [ ] Create `/cardamom-grades` buyer guide
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools

---

## Content Roadmap

### Immediately Needed Pages (All Currently 404)

| URL | Priority | Notes |
|---|---|---|
| `/products` | 🔴 Critical | Linked from homepage CTA and footer |
| `/products/cardamom` | 🔴 Critical | Flagship product — highest SEO value |
| `/blog` | 🔴 Critical | Linked from footer and homepage |
| `/exports` | 🟡 High | Linked from footer |
| `/contact` | 🟡 High | Linked from footer |
| `/products/black-pepper` | 🟡 High | Second most important product |
| `/products/cloves` | 🟠 Medium | |
| `/products/cinnamon` | 🟠 Medium | |
| `/products/nutmeg` | 🟠 Medium | |
| `/faq` | 🟠 Medium | FAQ schema eligibility |
| `/idukki-spices` | 🟠 Medium | Local/geo SEO landing page |
| `/organic-cardamom` | 🟢 Low | Premium buyer segment |
| `/cardamom-grades` | 🟢 Low | B2B buyer education |
| `/export-guide` | 🟢 Low | International buyer funnel |

### Blog Topics (Priority Order)

| # | Title | Target Keyword | Intent | Suggested URL |
|---|---|---|---|---|
| 1 | Why Idukki Cardamom Is World-Famous | "Idukki cardamom" | Informational | `/blog/idukki-cardamom-world-famous` |
| 2 | Health Benefits of Cardamom — Science-Backed | "cardamom health benefits" | Informational | `/blog/health-benefits-cardamom` |
| 3 | How to Store Cardamom to Preserve Freshness | "how to store cardamom" | Informational | `/blog/how-to-store-cardamom` |
| 4 | Green Cardamom vs Black Cardamom: Complete Guide | "green vs black cardamom" | Informational | `/blog/green-vs-black-cardamom` |
| 5 | How to Grade Cardamom: 4mm to 9mm Explained | "cardamom grading standards" | Commercial | `/blog/cardamom-grading-guide` |
| 6 | Kerala vs Guatemala Cardamom: Which is Superior? | "Kerala cardamom vs Guatemala" | Informational | `/blog/kerala-vs-guatemala-cardamom` |
| 7 | Complete Guide to Cardamom Export from India | "cardamom export India" | Commercial | `/blog/cardamom-export-guide-india` |
| 8 | FSSAI, ISO, Spices Board India: What Certifications Matter | "cardamom certifications India" | Commercial | `/blog/spice-export-certifications-india` |
| 9 | How to Buy Wholesale Spices from Kerala, India | "wholesale spices Kerala" | Transactional | `/blog/buy-wholesale-spices-kerala` |
| 10 | Organic Cardamom Farming in Idukki: Our Sourcing Story | "organic cardamom Idukki" | Informational | `/blog/organic-cardamom-farming-idukki` |
| 11 | Black Pepper from Kerala: The King of Spices | "black pepper Kerala" | Informational | `/blog/black-pepper-kerala` |
| 12 | The Western Ghats Spice Belt: Origin of India's Finest Spices | "Western Ghats spices" | Informational | `/blog/western-ghats-spice-belt` |

### Advanced Content Pages (Months 2–4)

| Page | Purpose | Target Audience |
|---|---|---|
| `/idukki-spices` | Geographic origin — builds topical authority | B2B buyers, SEO |
| `/cardamom-grades` | Explains 4mm–9mm grading standards | B2B buyers |
| `/export-guide` | Step-by-step for international buyers | International importers |
| `/organic-cardamom` | Organic certification and farming practices | Premium buyers |
| `/bulk-spice-supplier-india` | High-intent landing page for B2B search | Wholesale buyers |
| `/cardamom-for-food-industry` | Landing page for food manufacturers | Food industry B2B |
| `/export/middle-east` | UAE, Saudi, Kuwait market page | Middle East importers |
| `/export/europe` | EU compliance and supply page | European importers |

---

## Keyword Strategy

### Primary Keywords (P1 — Implement Immediately)

| Keyword | Intent | Difficulty | Landing Page |
|---|---|---|---|
| Idukki cardamom | Commercial | Medium | `/products/cardamom` |
| Kerala spices | Commercial/Info | Medium | Homepage |
| cardamom exporter India | Transactional | High | `/exports` |
| green cardamom supplier | Transactional | High | `/wholesale` |
| premium Indian spices | Commercial | Medium | Homepage |
| cardamom wholesale | Transactional | High | `/wholesale` |
| Kerala cardamom exporter | Transactional | Medium | `/exports` |

### Secondary Keywords (P2 — Implement within Month 1)

| Keyword | Intent | Difficulty | Landing Page |
|---|---|---|---|
| black pepper Kerala | Commercial | Medium | `/products/black-pepper` |
| spice exporters India | Commercial | High | `/exports` |
| Idukki spices | Informational | Low | `/idukki-spices` |
| Kerala spice wholesale | Transactional | Medium | `/wholesale` |
| organic cardamom India | Commercial | Medium | `/organic-cardamom` |
| bulk cardamom supplier | Transactional | High | `/wholesale` |
| Spices Board India certified | Informational | Low | `/exports` |
| FSSAI certified spices | Commercial | Low | `/exports` or `/about` |

### Long-Tail Keywords (P1–P2 — High conversion potential)

| Keyword | Intent | Difficulty | Landing Page |
|---|---|---|---|
| buy cardamom wholesale from Kerala | Transactional | Low | `/wholesale` |
| cardamom export price per kg India | Commercial | Low | `/wholesale` |
| Idukki green cardamom wholesale price | Transactional | Low | `/wholesale` |
| ISO certified cardamom exporter Kerala | Commercial | Low | `/exports` |
| organic cardamom exporter Idukki | Transactional | Low | `/organic-cardamom` |
| where to buy Idukki cardamom in bulk | Transactional | Very Low | `/wholesale` |
| how much does cardamom cost wholesale India | Transactional | Low | `/wholesale` |
| cardamom grading 8mm Kerala | Commercial | Very Low | `/cardamom-grades` |
| Kerala spice supplier for food industry | Commercial | Low | `/cardamom-for-food-industry` |

### Keyword Clusters by Topic

**Cluster 1 — Cardamom Product**
green cardamom, cardamom pods, Elettaria cardamomum, queen of spices India, cardamom aroma Kerala, cardamom essential oil

**Cluster 2 — Idukki Origin**
Idukki cardamom, Idukki spices, Idukki Kerala farming, Western Ghats spices, hill station spices India, Munnar cardamom

**Cluster 3 — B2B Wholesale/Export**
cardamom exporter, spice wholesale India, bulk spice supplier, MOQ spices India, B2B spice supplier Kerala, export cardamom FOB

**Cluster 4 — Certification & Quality**
FSSAI certified spices, Spices Board India, ISO certified spice exporter, APEDA registered exporter, organic cardamom NPOP

**Cluster 5 — Local Kerala SEO**
Kerala spice company, buy Kerala spices, best spice brand Kerala, agribusiness Kerala, cardamom company Idukki

**Cluster 6 — Other Products**
black pepper Kerala, cloves Kerala, cinnamon India, nutmeg Kerala, spice blends India, Kerala pepper exporter

---

## Metadata Plan (Per Page)

### Root Layout — `app/layout.tsx`

```
metadataBase: new URL('https://spizespices.com')
title:
  default: "Spizespices Pvt Ltd | Premium Idukki Spices & Cardamom"
  template: "%s | Spizespices Pvt Ltd"
description: "Premium Idukki cardamom and Kerala spices sourced directly from farms.
  Export-ready with FSSAI, ISO, and Spices Board India certifications.
  B2B wholesale and international exports."
keywords: ["Idukki cardamom", "Kerala spices", "cardamom exporter India",
  "green cardamom supplier", "spice wholesale Kerala", "Kerala black pepper",
  "Indian spice exporter"]
openGraph:
  type: "website"
  locale: "en_IN"
  siteName: "Spizespices Pvt Ltd"
  images: [{ url: "/og-image.jpg", width: 1200, height: 630,
    alt: "Fresh green cardamom pods from Idukki, Kerala" }]
twitter:
  card: "summary_large_image"
  site: "@spizespices"
  images: ["/og-image.jpg"]
alternates:
  canonical: "/"
robots:
  index: true, follow: true
  googleBot: { 'max-image-preview': 'large', 'max-snippet': -1 }
```

### Homepage — `app/page.tsx`
```
title: "Pure Indian Spices from Idukki Farms | Cardamom, Pepper, Cloves"
description: "Discover premium cardamom, black pepper, cloves, and authentic Kerala
  spices sourced directly from Idukki farms. Wholesale B2B, export-ready,
  FSSAI & ISO certified. Request a quote today."
alternates: { canonical: "/" }
```

### About — `app/about/page.tsx` (requires server wrapper)
```
title: "About Us — Our Story, Mission & Values"
description: "Spizespices Pvt Ltd is an agribusiness from Idukki, Kerala connecting
  farmers to global markets. Learn about our mission, team, and 7 core values."
alternates: { canonical: "/about" }
openGraph:
  title: "About Spizespices — Growing Trust from the Ground Up"
  url: "/about"
```

### Wholesale — `app/wholesale/page.tsx`
```
title: "Wholesale & Export Inquiry — Bulk Cardamom & Spices"
description: "Request bulk pricing for premium Idukki cardamom, Kerala black pepper,
  cloves, and spice blends. Export-ready with FSSAI, ISO, and Spices Board India
  certifications. Contact our B2B export desk."
keywords: ["cardamom wholesale", "bulk spice supplier", "Kerala spice exporter",
  "B2B cardamom India", "export cardamom price"]
alternates: { canonical: "/wholesale" }
```

### Products — `app/products/page.tsx` (to be created)
```
title: "Our Spices — Cardamom, Black Pepper, Cloves & More"
description: "Browse our complete range of premium Kerala spices: Idukki green
  cardamom, Malabar black pepper, whole cloves, cinnamon, nutmeg, and artisanal
  spice blends. All export-quality."
alternates: { canonical: "/products" }
```

### Cardamom Product — `app/products/cardamom/page.tsx` (to be created)
```
title: "Idukki Green Cardamom — Premium Kerala Cardamom Pods"
description: "Buy premium Idukki green cardamom direct from Kerala farms.
  Bold aroma, rich essential oil content, FSSAI and ISO certified.
  Available in 4mm–9mm grades for wholesale and export."
alternates: { canonical: "/products/cardamom" }
```

---

## Structured Data Plan

### 1. Organization Schema (Root Layout)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Spizespices Pvt Ltd",
  "alternateName": "Spizespices",
  "url": "https://spizespices.com",
  "logo": "https://spizespices.com/images/spizespiceslogo.png",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+91-86067-71827",
    "contactType": "sales",
    "areaServed": ["IN", "AE", "US", "GB", "DE"],
    "availableLanguage": ["English", "Malayalam"]
  }],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Idukki",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "email": "hello@spizespicespvtltd.com"
}
```

### 2. LocalBusiness Schema (Root Layout or Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Spizespices Pvt Ltd",
  "image": "https://spizespices.com/og-image.jpg",
  "telephone": "+91-86067-71827",
  "email": "hello@spizespicespvtltd.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Idukki",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.8499,
    "longitude": 77.0997
  },
  "url": "https://spizespices.com",
  "priceRange": "INR",
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  }]
}
```

### 3. Product Schema (Cardamom Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Idukki Green Cardamom",
  "description": "Premium green cardamom pods sourced directly from farms in Idukki, Kerala. Known as the Queen of Spices, featuring bold aroma and high essential oil content.",
  "brand": { "@type": "Brand", "name": "Spizespices" },
  "manufacturer": { "@type": "Organization", "name": "Spizespices Pvt Ltd" },
  "countryOfOrigin": "India",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Spizespices Pvt Ltd" }
  }
}
```

### 4. BreadcrumbList Schema (About Page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://spizespices.com/" },
    { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://spizespices.com/about" }
  ]
}
```

### 5. FAQ Schema (Wholesale Page)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum order quantity for cardamom export?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our minimum order quantity for export is 100kg. Contact us for custom bulk pricing." }
    },
    {
      "@type": "Question",
      "name": "Do you provide FSSAI and ISO certified spices?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, Spizespices Pvt Ltd supplies FSSAI, ISO, and Spices Board India certified spices for export and domestic wholesale." }
    },
    {
      "@type": "Question",
      "name": "Which countries do you export cardamom to?",
      "acceptedAnswer": { "@type": "Answer", "text": "We export premium Idukki cardamom and Kerala spices to the UAE, Saudi Arabia, USA, UK, Germany, and other markets worldwide." }
    }
  ]
}
```

---

## Internal Linking Plan

### Current Internal Linking Problems

| Link | Source | Problem |
|---|---|---|
| `/products` | Footer, Product Grid CTA | 404 — page does not exist |
| `/blog` | Footer, BlogSection | 404 — page does not exist |
| `/blog/*` (3 cards) | BlogSection | 404 — no blog posts exist |
| `/exports` | Footer | 404 — page does not exist |
| `/contact` | Footer | 404 — only `/#contact` hash exists |
| `/#products` | Header nav | Hash only works on homepage |
| `/#processing` | Header nav | Hash only works on homepage |
| `#contact` | About page button | Relative hash — broken on `/about` |

### Recommended Internal Linking Architecture

```
Homepage (/)
├── /about           (About Us section CTA)
├── /products        (Product Grid "View Full Range")
├── /wholesale       (B2B form "Request a Quote")
├── /blog            (Blog section "View all")
├── /#contact        (Contact section anchor)
└── /exports         (future)

About (/about)
├── /               (breadcrumb)
├── /wholesale      (Mission section CTA — "Get in Touch")
└── /products       (Our Sourcing Story link)

Wholesale (/wholesale)
├── /               (breadcrumb)
├── /products       (product links)
└── /about          (trust/company links)

Products (/products)
├── /products/cardamom
├── /products/black-pepper
├── /products/cloves
├── /wholesale      (each product → "Request Wholesale Quote")
└── /blog           (related blog posts)
```

### Internal Linking Best Practices
- Use keyword-rich descriptive anchor text — NOT "click here" or "read more"
- Every blog post → links to at least one product page + wholesale inquiry CTA
- Add "Related Products" section to each blog post
- Footer must only link to real, existing routes

---

## Image SEO Plan

### Critical Image Fixes

| Issue | File | Fix |
|---|---|---|
| `images: { unoptimized: true }` | next.config.mjs | Remove; add `remotePatterns` for Cloudinary |
| OG image `/idukki-cardamom-farms.png` missing | layout.tsx | Create `og-image.jpg` in `/public/` |
| `/images/exports-bulk-sacks.png` missing | exports.tsx | Add real image or remove component |
| `/images/about-farmers.png` missing | about.tsx | Add real image or remove component |
| Blog images use `/abstract-geometric-shapes.png` placeholder | blog-section.tsx | Replace with real blog images |

### Recommended Image Naming Convention (Keyword-Rich Filenames)
Instead of Cloudinary IDs like `products-cardamom-pods_h4ukyj`, use descriptive public asset names:
- `idukki-green-cardamom-pods.jpg`
- `kerala-spice-farmer-harvesting.jpg`
- `idukki-hills-cardamom-plantation.jpg`
- `spizespices-cardamom-export-packaging.jpg`

### Next.js Image Optimization Configuration
After removing `unoptimized: true`, add to `next.config.mjs`:
```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'res.cloudinary.com' }
  ],
  formats: ['image/avif', 'image/webp'],
}
```

---

## Local SEO Plan

### Google Business Profile (GBP)
**Status:** No GBP link or mention anywhere on the site. This is a priority action for local search visibility.

**Recommended GBP Setup:**
1. Create/claim GBP listing for "Spizespices Pvt Ltd" in Idukki, Kerala
2. Primary category: "Spice Exporter" | Secondary: "Food Producer"
3. Upload high-quality product photos (cardamom pods, processing, farm)
4. Add complete business hours, website URL, phone number
5. Request Google Reviews from existing buyers — even 5 reviews significantly boosts local pack ranking
6. Post weekly updates about harvests, certifications, and export milestones
7. Add all certifications (FSSAI, ISO, Spices Board India) to the business profile

### NAP Consistency (Name, Address, Phone)
Ensure this exact information appears identically everywhere:

**Current Site NAP:**
- Name: Spizespices Pvt Ltd ✓
- Phone: +91 86067 71827 ✓
- Email: hello@spizespicespvtltd.com ✓
- Address: "Idukki, Kerala, India" — needs full street address for full NAP value

**Must match on:**
- Google Business Profile
- IndiaMART listing
- TradeIndia listing
- APEDA registration
- Spices Board India directory
- Any B2B marketplace profiles (Alibaba, Global Sources)

### Local SEO Keywords
- "spice company Idukki" / "cardamom dealer Idukki"
- "spice exporter Idukki Kerala" / "agribusiness Kerala"
- "cardamom auction Idukki" / "Vandanmedu spice market"
- "Kerala cardamom price today" (high search intent)
- "Thekkady spice company" / "Kumily cardamom"

---

## International SEO Plan

### Target Export Markets (Priority Order)
1. **UAE / Middle East** — highest global cardamom consumption per capita; tea culture
2. **USA / Canada** — health food, chai segment, South Asian diaspora
3. **Germany / EU** — organic spice market; strict ETO/pesticide regulations are an opportunity (compliance content)
4. **UK** — large South Asian diaspora, food manufacturing
5. **Saudi Arabia** — significant cardamom consumption

### hreflang Strategy (Current)
Site serves English only. For now, add to root layout metadata:
```
alternates: {
  languages: {
    'en-IN': '/',
    'x-default': '/'
  }
}
```

For future Arabic landing page (UAE/Saudi):
- Create `/ar/` sub-path with Arabic content
- Add `hreflang: "ar-AE"` and `hreflang: "ar-SA"` alternates

### Export Landing Pages (Recommended)

| Page URL | Target Market | Primary Keyword |
|---|---|---|
| `/exports` | All markets — overview | "cardamom exporter India" |
| `/export/middle-east` | UAE, Saudi, Kuwait | "cardamom exporter to UAE" |
| `/export/usa` | United States | "Indian spice supplier USA" |
| `/export/europe` | EU countries | "organic cardamom supplier EU certified" |
| `/export/documentation` | All markets | "cardamom export documentation India" |

---

## Blog Strategy

### Four Content Pillars

| Pillar | Topics | Goal |
|---|---|---|
| Education | Cardamom types, health benefits, storage, cooking | Informational traffic, topical authority |
| Farm & Origin | Idukki stories, Western Ghats, farmer partnerships | EAT signals, trust, brand differentiation |
| B2B Buyer Guides | Grading, export docs, certifications, pricing | Commercial intent, procurement funnel |
| Industry Updates | Cardamom market prices, harvest news, auction reports | Repeat visitors, industry authority |

### Publishing Cadence
- **Month 1–2:** 2 posts/week (build critical content mass — Google needs 15+ posts before authority signals)
- **Month 3–6:** 1 post/week (sustained growth)
- **Month 6+:** 1 post/week + 1 content refresh/month

### Blog URL Structure
Pattern: `/blog/[keyword-rich-slug]` — **no dates in URLs** (avoids staleness perception)

---

## Competitor Insights

### Identified Competitors

| Competitor | Strengths | Weakness | Spizespices Opportunity |
|---|---|---|---|
| **VLC Spices** (vlcspices.com) | Export certifications, detailed product pages | Minimal blog / content | Win with origin storytelling and richer blog |
| **Botanika Bharat** (botanikabharat.com) | Organic focus, export docs | Narrow product range | Broader range, more B2B forms |
| **Highland Spices** (highlandspices.com) | Strong Kerala origin branding | Limited B2B focus | B2B forms and export desk is an advantage |
| **Graamya** (graamya.in) | Strong D2C positioning | Limited export | Own the B2B export space they ignore |
| **TradeIndia/IndiaMART listings** | Domain authority | Generic, no brand story | Own branded searches; outperform with schema |
| **MAS Enterprises** | Established Idukki name | Traditional, dated website | Modern Next.js site is a significant moat |

### Key Competitive Opportunities
1. **No competitor has comprehensive JSON-LD schema** — first to implement Product + LocalBusiness + FAQ schema wins featured snippets
2. **Most competitor blogs are inactive or non-existent** — consistent blogging builds authority fast
3. **"Idukki cardamom" brand ownership** — few competitors own this phrase with a modern, fast site
4. **B2B-specific landing pages** — competitors have generic "contact us" pages, not dedicated export inquiry funnels
5. **FAQ pages with schema** — none identified among competitors; winning FAQ schema = prominent rich results box
6. **Mobile experience** — Spizespices header/mobile drawer is superior UX to most competitors

---

## Page-by-Page Recommendations

### Page 1: Homepage (`/`)

| Field | Current | Recommended |
|---|---|---|
| **H1** | "Pure Indian Spices from our farms to Your Home" | Keep — strong keyword signal |
| **Title** | "Spizespices Pvt Ltd \| Pure Indian Spices" | "Premium Idukki Spices — Cardamom, Pepper & More \| Spizespices Pvt Ltd" |
| **Description** | "Premium Idukki cardamom and Kerala spices. Direct from farms." | "Premium Idukki cardamom and Kerala spices sourced directly from farms. Export-ready with FSSAI, ISO certifications. Wholesale B2B and global exports." |
| **Target Keyword** | — | "Kerala spices", "Idukki cardamom" |
| **Canonical** | `https://spizespices.example.com` (BROKEN) | `https://spizespices.com/` |
| **Structured Data** | None | Organization + LocalBusiness |
| **OG Image** | `/idukki-cardamom-farms.png` (BROKEN) | `/og-image.jpg` |
| **Twitter Card** | Missing | Add `summary_large_image` |
| **Critical Fix** | Blog cards link to 404s | Fix or create blog posts |
| **Critical Fix** | "View Full Range" → `/products` (404) | Create `/products` page |
| **Critical Fix** | HomeAbout section is SSR-disabled | Render text server-side |

### Page 2: About (`/about`)

| Field | Current | Recommended |
|---|---|---|
| **H1** | "About Us" | "About Spizespices — Growing Trust from the Ground Up" |
| **Title** | None (inherits root — DUPLICATE) | "About Us — Our Story, Mission & Values" |
| **Description** | None (inherits root) | "Learn about Spizespices Pvt Ltd — an agribusiness from Idukki, Kerala connecting farmers to global markets with integrity and sustainability." |
| **Target Keyword** | — | "Idukki spice company", "Kerala agribusiness" |
| **Canonical** | Inherits broken placeholder | `/about` |
| **Structured Data** | None | BreadcrumbList + Organization |
| **`"use client"` issue** | Entire page is client-only | Wrap in server layout for metadata |
| **Director LinkedIn links** | `href="#"` | Add real LinkedIn URLs |
| **Missing** | No FAQ, no certification section | Add certification display |
| **Font Loading** | Dynamic `<link>` injection | Move to `next/font/google` |

### Page 3: Wholesale (`/wholesale`)

| Field | Current | Recommended |
|---|---|---|
| **H1** | "Wholesale & Export Inquiry" | "Wholesale & Export Inquiry — Bulk Cardamom & Spices from Kerala" |
| **Title** | "Wholesale & Export Inquiry \| Spizespices Pvt Ltd" | "Wholesale Cardamom & Spice Supplier — B2B Export Inquiry \| Spizespices" |
| **Description** | "Request a wholesale/export quote for Indian spices from Spizespices Pvt Ltd." | "Request bulk pricing for premium Idukki cardamom, black pepper, cloves, and spice blends. Export-ready with FSSAI, ISO, and Spices Board India certification. B2B inquiries welcome from global importers." |
| **Target Keyword** | — | "cardamom wholesale India", "bulk spice exporter Kerala" |
| **Canonical** | None | `/wholesale` |
| **Structured Data** | None | BreadcrumbList + FAQPage |
| **Open Graph** | None | Add |
| **Twitter Card** | None | Add |
| **Form labels** | Placeholder-only inputs | Add `<label>` elements for accessibility |
| **Missing** | No certifications displayed, no phone field | Add certification badges, phone input |

---

### Homepage Section-by-Section SEO Analysis

**Hero Section** — [`components/sections/hero.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/hero.tsx)
- H1 ✓ — "Pure Indian Spices from our farms to Your Home" — good keyword value
- Hero alt text is generic — "Premium Indian spices presentation" → improve
- Both desktop and mobile use same alt text — improve both individually
- CTA "Explore Products" → `#products` (hash anchor, ok on homepage)

**HomeAbout Section** — [`components/sections/home-about.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/home-about.tsx)
- `ssr: false` — **entire company story is invisible to Google crawlers**
- Fix: Render plain text server-side; animate only the per-word split client-side

**WhyChooseUs Section** — [`components/sections/why-choose-us.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/why-choose-us.tsx)
- H2: "Why Choose Us" — acceptable
- H3s: "100% Natural", "Premium Quality", "Export Standards", "Timely Delivery" — good keyword signals
- Add ISO/FSSAI certification badge images with descriptive alt text

**ProcessingTimeline Section** — [`components/sections/processing-timeline.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/processing-timeline.tsx)
- H2: "We Complete every Step Carefully" — **weak SEO value**
- Recommended H2: "From Farm to Global Delivery — Our 6-Step Quality Process"
- H3s: Sourcing, Drying, Grading, Color Sorting, Packaging, Delivery — good keyword signals

**ProductGrid Section** — [`components/sections/product-grid.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/product-grid.tsx)
- H2: "Authentic Spices, Rich in Flavor" — decent
- H3s: Product names — keyword-rich ✓
- `alt={p.name}` is a single word — improve to full descriptive alt text
- "View Full Range" → `/products` (404) — **critical internal link to fix**

**B2BExport Section** — [`components/sections/b2b-export.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/b2b-export.tsx)
- H2: "Supplying to the World" — acceptable
- H3: "Wholesale / Export Inquiry" — good
- Add visible certification logos (FSSAI, ISO, Spices Board) to this section

**Testimonials Section** — [`components/sections/testimonials.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/testimonials.tsx)
- H2: "What Buyers Say" — acceptable
- H3s for person names — correct usage ✓
- No `Review` schema — add in future iteration

**BlogSection** — [`components/sections/blog-section.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/blog-section.tsx)
- H2: "Latest Blogs" — acceptable
- H3s: Blog post titles — good keyword content ✓
- **All 3 blog card links return 404 — fix immediately**
- Blog images use `/abstract-geometric-shapes.png` placeholder — replace with real images

**ContactSection** — [`components/sections/contact-section.tsx`](file:///c:/Users/ALBIN%20SONY/Desktop/spiceriz-1/components/sections/contact-section.tsx)
- H2: "Get in Touch" — acceptable
- Full address not displayed — only phone and email shown
- Add complete address for NAP consistency and local SEO signal
- Form inputs lack `<label>` elements — accessibility and SEO issue

---

## Accessibility Issues Affecting SEO

| Issue | File | Fix |
|---|---|---|
| Social icon links have no `aria-label` | site-header.tsx:673 | Add `aria-label="Follow us on Facebook"` etc. |
| Form inputs use placeholder only, no `<label>` | contact-section.tsx, wholesale/page.tsx | Add proper `<label>` elements with `htmlFor` |
| Color contrast of placeholder text at `opacity: 0.5` | Multiple | Ensure 4.5:1 contrast ratio for WCAG 2.1 AA |
| Director LinkedIn links point to `href="#"` | about/page.tsx:499 | Add real URLs or descriptive fallback |
| `<html lang="en">` is too generic | layout.tsx:62 | Change to `lang="en-IN"` |

---

## Core Web Vitals Assessment

| Metric | Risk Level | Root Cause | Fix |
|---|---|---|---|
| **LCP (Largest Contentful Paint)** | 🔴 HIGH | `images: unoptimized: true` sends full-size images | Remove flag; configure remotePatterns |
| **CLS (Cumulative Layout Shift)** | 🟡 MEDIUM | Framer Motion animations without reserved space | Ensure animated elements have explicit dimensions |
| **INP (Interaction to Next Paint)** | 🟡 MEDIUM | Many client components, heavy JS bundle | Code-split heavy components; defer non-critical JS |
| **TTFB (Time to First Byte)** | 🟢 LOW | Next.js App Router SSR is solid | Maintain server components where possible |

---

## Implementation Priority Matrix

| Priority | Task | File | Effort | SEO Impact |
|---|---|---|---|---|
| 🔴 Critical | Set real `metadataBase` URL | layout.tsx | 2 min | Very High |
| 🔴 Critical | Create `app/sitemap.ts` | (new file) | 30 min | Very High |
| 🔴 Critical | Create `app/robots.ts` | (new file) | 10 min | High |
| 🔴 Critical | Fix OG image path + create file | layout.tsx, /public | 10 min | High |
| 🔴 Critical | Remove `images: unoptimized: true` | next.config.mjs | 5 min | High (LCP) |
| 🔴 Critical | Add About page metadata | about/layout.tsx | 30 min | High |
| 🔴 Critical | Add Organization JSON-LD | layout.tsx | 30 min | High |
| 🔴 Critical | Fix SSR on HomeAbout section | home-about.tsx | 1 hr | High |
| 🔴 Critical | Fix broken blog/footer links | site-footer.tsx, blog-section.tsx | 1 hr | Medium-High |
| 🟡 High | Add Twitter Card metadata | layout.tsx | 15 min | Medium |
| 🟡 High | Fix web manifest | site.webmanifest | 5 min | Low-Medium |
| 🟡 High | Create `app/not-found.tsx` | (new file) | 45 min | Medium |
| 🟡 High | Remove `generator: 'v0.app'` | layout.tsx | 2 min | Low |
| 🟡 High | Add LocalBusiness JSON-LD | layout.tsx | 30 min | High (Local) |
| 🟡 High | Create `/products` page | app/products/page.tsx | 3 hrs | High |
| 🟡 High | Add `title` template | layout.tsx | 10 min | Medium |
| 🟡 High | Fix dynamic font loading in About | about/page.tsx | 30 min | Medium (CLS) |
| 🟠 Medium | Improve alt text on all images | Multiple | 30 min | Medium |
| 🟠 Medium | Create `/blog` page + first posts | app/blog/ | 4–8 hrs | High (long-term) |
| 🟠 Medium | Add per-page canonical URLs | All pages | 1 hr | Medium |
| 🟠 Medium | Add Product JSON-LD schemas | products pages | 1–2 hrs | High |
| 🟠 Medium | Add FAQ JSON-LD on Wholesale | wholesale/page.tsx | 30 min | Medium |
| 🟠 Medium | Add `<label>` to all form inputs | contact-section, wholesale | 30 min | Low-Medium |
| 🟢 Low | Implement `hreflang` | layout.tsx | 30 min | Low-Medium |
| 🟢 Low | Add security headers | next.config.mjs | 30 min | Low |
| 🟢 Low | Add `<address>` semantic tag | site-footer.tsx | 10 min | Low |
| 🟢 Low | Change `lang="en"` to `lang="en-IN"` | layout.tsx | 2 min | Low |
| 🟢 Low | Add `preconnect` for Cloudinary | layout.tsx | 5 min | Low |

---

## Summary

Spizespices Pvt Ltd has an excellent brand, strong visual design, premium products, and real business credentials that make it highly competitive. However, the site is essentially **invisible to Google** in its current state due to missing fundamental technical SEO infrastructure.

**The top 5 actions that will make the biggest immediate impact:**
1. ✅ Set a real production domain as `metadataBase` (2 minutes — unblocks all metadata)
2. ✅ Create `sitemap.ts` and `robots.ts` (40 minutes — enables efficient crawling)
3. ✅ Add Organization + LocalBusiness JSON-LD (1 hour — rich result eligibility)
4. ✅ Fix the 8+ broken internal links, especially blog cards and footer links (1 hour — critical UX and crawlability)
5. ✅ Create a `/products` page with individual product sub-pages (3–4 hours — unlocks the primary commercial conversion funnel)

Once these foundations are in place, executing the blog strategy consistently with the 12 topics outlined above has the potential to establish Spizespices as the **definitive authority on Kerala and Idukki cardamom** in English-language search results within 6–12 months. The competitive window is wide open — no competitor currently dominates with structured data, active blogging, or modern technical SEO on this topic.
