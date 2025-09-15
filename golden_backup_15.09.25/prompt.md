You are designing and developing a bold, modern marketing site for Vfood (https://www.vfi.co.ke), a Kenyan exporter of premium farm produce (avocados, tea, mangos, roses, coffee, sliced vegetables) and importer of quality packaged foods (spaghetti, biscuits). Primary audiences:

UK importers purchasing Kenyan produce (exports audience)
UK food exporters supplying packaged goods into Kenya (imports audience)
Overall goals:

Deliver a visually striking, contemporary experience with a “fresh, artistic vibe” reminiscent of UI patterns seen on 21st.dev (expressive layout, kinetic typography, tasteful motion).
Create a fast, intuitive decision gate on the Landing Page to route users immediately to the right Home page (Exports vs Imports).
Build two distinct, audience-specific Home pages with clear storytelling, modern components, and inventive product showcases that go beyond traditional grids.
Ensure professional polish, wow-factor color splashes (avoid typical green/beige), creative font pairings, and impeccable responsiveness.
No database backend at this stage; all inquiries handled via a simple Contact form that emails Vfood. However, structure the site so a product database/CMS can be added later with minimal refactor.
Deliverables

Fully responsive website (desktop, tablet, mobile) with modern, clean code and semantic HTML.
Pages:
Landing Page (decision gate: Exports vs Imports)
Home – Exports
Export Page
About Us
Home – Imports
Services
Vfood UK
Contact Us
Component library and tokens (colors, type, spacing) to support future scale and a product database.
Basic form-to-email handler (serverless endpoint or email service). No database.
Brand and design direction

Visual vibe: premium, vibrant, confident, global trade excellence.
Color: bold splashes; avoid conventional agro green/beige dominance. Suggested palette (tune to photos/art direction):
Primary: Deep Aubergine #2A063A; Cobalt Blue #1F4FFF
Accent: Electric Coral #FF5A5F; Saffron #FFC139
Neutrals: Charcoal #0C0C0D; Ink #111318; Off-White #F7F5F2
Gradients: Cobalt→Coral; Aubergine→Saffron subtle noise/film grain overlay for depth
Typography (creative pairings; pick one set and stick to it):
Set A: Display — Unbounded or Clash Display; Body — Inter or Manrope; Mono/Accent — JetBrains Mono
Set B (Google-only): Headings — Bebas Neue or Saira Condensed; Body — Work Sans or Outfit; Accent — Space Mono
Use mixed sizes/weights and kinetic type for emphasis; maintain accessibility and legibility.
Art direction:
Macro product photography with dramatic lighting. Abstract crops, diagonal masks, subtle glass surfaces.
Layered shapes, organic blobs, grain textures, and grid/guide overlays for a “crafted” aesthetic.
Motion: micro-interactions, parallax layers, scrolling marquees, text reveals. Keep tasteful and performance-friendly.
Information architecture and routing

Global nav:
Exports, Imports, Products, Services, About, Vfood UK, Contact
Quick audience toggle (persistent) to switch context between Exports and Imports.
Breadcrumbs on deeper pages. Sticky top nav with minimal chrome.
Page-by-page requirements

Landing Page (decision gate)
Goal: immediate choice with near-zero friction.
Layout: 50/50 split hero (full-bleed). Left panel “We Export Kenya’s Best to the UK.” Right panel “We Import Quality Foods into Kenya.”
Each panel: large kinetic headline, one-sentence value prop, primary CTA button.
Motion: hover-tilt, masked imagery reveal, or subtle color wash on focus.
Secondary: if the user scrolls, show two mini-stories (Exports vs Imports) with 2–3 key proof points each, then repeat the CTAs.
Accessibility: both panels keyboard-focusable; Enter activates selection.
Home – Exports (for UK importers)
Hero: bold headline (e.g., “Kenya’s Finest, Delivered Fresh to the UK”), cinematic product collage (avocado macro + tea mist + rose petals + coffee beans), confident CTA “Explore Export Capabilities”.
About Us teaser: 2–3 lines about Vfood quality, standards, certifications. CTA → About Us.
Products snapshot (cards; link to Products):
Avocados, Tea, Flowers, Coffee, Sliced Vegetables
Non-rectangular crops, diagonal edges, or masked shapes. Include origin notes, seasonality badges, and logistics icons.
Export section (single prominent product/logistics card):
Callouts: Cold chain, QC, UK compliance, traceability, lead times, packaging formats. CTA → Export Page.
Services (3 cards with subtle stagger animation):
Warehouse & Cold Chain
Cloud Kitchen
HoReCa Services
Each card has iconography, 2–3 bullet benefits, learn more → Services.
Trust signals: partner logos (grayscale), certifications, on-time performance stats.
Sticky “Request a Quote” mini-form trigger.
Export Page
Deep dive: harvesting standards, post-harvest handling, cold-chain flow, carton specs, Incoterms, shipping windows, QA.
Interactive timeline: farm → packhouse → air/sea freight → UK delivery.
Downloadable specs (placeholder links). CTA to Contact pre-filled “Exports”.
FAQ module (accordion) for UK importers (MoQs, lead times, inspection, documentation).
About Us
Storytelling: Vfood mission, a Kenyan roots, UK relationships, sustainability notes.
Leadership/headshots (tasteful, not corporate cliche).
Certifications and compliance grid.
CSR/sustainability ribbons or cards with impact metrics.
CTA to Contact.
Home – Imports (for UK food exporters to Kenya)
Hero: “Bring Your Quality Foods to Kenyan Shelves.” Use packaged foods textures (pasta curves, biscuit patterns).
Market value prop: route-to-market, regulatory guidance, on-the-ground distribution.
Highlight categories: spaghetti, biscuits, canned goods (placeholder), beverages (placeholder).
“How we help” steps: Compliance, Testing, Pricing, Logistics, Retail Placement.
Vfood UK callout: bridge operations between UK/Kenya. CTA → Vfood UK.
CTA: “Partner with Us” → Contact pre-filled “Imports”.
Services
Three feature sections:
Warehouse & Cold Chain: capacity, temperature bands, monitoring, locations.
Cloud Kitchen: product R&D, sampling sessions, menu co-creation for HoReCa.
HoReCa Services: supply programs, service tiers, support model.
Each with images, icons, bullet value list, and “Discuss Your Needs” CTA.
Vfood UK
Purpose: credibility and proximity for UK partners.
Content: UK point-of-contact, sample logistics, compliance familiarity, time zone service, case snippets.
Callouts: local tastings, retail buyer intros, documentation readiness (UK/EU).
CTA: “Start a UK Conversation” (pre-filled).
Contact Us
Simple form → email Vfood. Fields:
Full Name, Company, Role, Email, Phone, Country, Topic (Exports, Imports, Services, General), Message
Consent checkbox for contact/GDPR.
Upon submit: success state with response time SLA and links back to relevant pages.
Optionally expose email/phone as text for trust. Add Google Map embed placeholder if desired.
“Break-the-mould” UI modules to include

Product Marquee: horizontally scrolling produce with masked edges; tap/hover reveals specs.
Sticky Scroll Story: pin text while product stages animate in (farm → pack → ship → deliver).
Diagonal Grid Gallery: alternating angles, parallax on scroll.
Spec Sheets as Cards: flipping panels with quick-view highlights and “Download full spec”.
Texture Overlays: grain/noise + subtle glass morph for cards or headers.
Bold accent bars and kinetic typography (intro words animate subtly on load).
Navigation and UX

Persistent audience toggle (Exports | Imports) in the header.
Clear primary CTAs per audience.
Short, skimmable copy; icon-supported bullet points.
Footer with quick links, compliance notes, contact.
Accessibility

WCAG 2.1 AA contrast; focus states; skip-to-content.
Reduced motion preference respected.
Semantic headings; alt text for images; descriptive link labels.
Performance and SEO

Core Web Vitals optimized: lazy-load media, responsive images, prefetch critical routes.
Metadata per page (title/description, Open Graph/Twitter).
JSON-LD Organization + Product (for key items) where applicable.
Clean URL structure: / (Landing), /exports, /imports, /products, /export, /services, /about, /uk, /contact
Technical implementation (suggested)

Stack: Next.js (App Router) + React + TypeScript + Tailwind CSS + Framer Motion.
Styling tokens (example):
CSS variables:
:root {
  --color-primary:#2A063A; --color-accent:#FF5A5F; --color-cobalt:#1F4FFF; --color-saffron:#FFC139;
  --ink:#111318; --paper:#F7F5F2;
}
Tailwind theme overrides for colors, font families, container widths, and fluid type scale.
Components:
GateSplit, Hero, ProductCardExperimental, Marquee, StickyScrollSection, ServiceCard, Timeline, CTASection, FAQ, ContactForm.
Data-first structure (future database-ready):
Store product data in JSON/TS objects now, e.g.:
{
  "slug":"avocados",
  "name":"Hass Avocados",
  "seasonality":"Mar–Sep",
  "formats":["4kg","10kg","18kg"],
  "certifications":["GlobalG.A.P","BRC"],
  "heroImage":"images/avocado-hero.jpg",
  "specs":{"avgCaliber":"16–22","storage":"4–6°C"}
}
Map to dynamic routes later with minimal refactor; keep content decoupled from components.
Forms:
Simple serverless function (e.g., Next.js /api/contact) with nodemailer or email API (e.g., SendGrid). No DB. Provide “mailto” fallback if serverless disabled.
Basic spam protection (honeypot/time-based check).
Copy tone and examples

Tone: confident, expert, succinct.
Sample hero lines:
Exports: “Kenya’s finest produce. Delivered fresh to the UK—on time, every time.”
Imports: “Your quality foods, now within Kenya’s reach.”
CTAs: “Explore Exports”, “See Our Products”, “Partner with Us”, “Request a Quote”.
Micro-interactions and motion (tasteful)

200–400ms ease for hover/focus transitions.
Entrance animations: staggered cards, text reveal masks.
Parallax under 12–16px per layer for performance; disable on prefers-reduced-motion.
Compliance and trust

Certifications and QA prominently displayed.
GDPR consent on form; privacy policy link in footer.
Optional cookie banner only if using analytics beyond strictly necessary.
Acceptance criteria

Landing Page clearly splits Exports vs Imports; both paths accessible via keyboard and screen reader.
Distinct Home pages for Exports and Imports with tailored hero, storytelling, and CTAs.
Products showcased with innovative layouts beyond standard grids.
Bold, tasteful color usage consistent with palette and accessible contrast.
Creative font pairings with excellent legibility and fallback stacks.
Clean, semantic, modern code; Lighthouse 90+ Performance, Accessibility, Best Practices, SEO.
No database; Contact form sends email successfully and shows a friendly success state.
Architecture ready to plug in a product database/CMS later with minimal changes.
Assets and placeholders

Use high-res placeholders for product imagery with art direction notes.
Provide SVG icon set for logistics, cold chain, certifications.
Include a compact brand guide (colors, type, spacing, motion) in the repo/docs.
Build it end-to-end according to the above. If any content is missing, use professional placeholders and keep copy succinct.