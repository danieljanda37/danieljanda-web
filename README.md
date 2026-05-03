# danieljanda.cz

Personal portfolio. Next.js 16 (App Router), Tailwind v4, deployed on Vercel.

🌐 **Live:** [danieljanda.cz](https://danieljanda.cz)

---

## Table of contents

- [Stack](#stack)
- [Local development](#local-development)
- [Project structure](#project-structure)
- [Where to update content](#where-to-update-content)
- [Brand manual](#brand-manual)
- [Deployment](#deployment)
- [Voice & tone](#voice--tone)

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Fonts | Satoshi (via Fontshare CDN), JetBrains Mono (Google Fonts) |
| Hosting | Vercel |
| Source control | GitHub |

No external UI libraries. All components are custom and live in `components/`.

---

## Local development

Requirements: **Node.js 20+** and npm.

```bash
git clone https://github.com/danieljanda37/danieljanda-web.git
cd danieljanda-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The dev server has hot reload — saving any file in `app/` or `components/` refreshes automatically. Stop with `Ctrl+C`.

For production build & test:

```bash
npm run build
npm start
```

---

## Project structure

```
danieljanda-web/
├── app/
│   ├── layout.tsx          ← root layout, fonts, metadata, viewport
│   ├── page.tsx            ← všechen obsah stránky (texty, timeline, čísla, sekce)
│   └── globals.css         ← Tailwind import + design tokens (barvy, animace)
├── components/             ← všechny custom komponenty (viz dále)
├── public/                 ← statické soubory (favicon, OG image)
├── next.config.ts
├── tsconfig.json
└── package.json
```

### Komponenty v `components/`

| Soubor | Co dělá |
|---|---|
| `RotatingText.tsx` | Přepínací text v hero sekci (Software developer / IT specialist / …) |
| `LiveClock.tsx` | Živé hodiny v Krkonoších, používá Intl API |
| `FadeIn.tsx` | Wrapper, který fade-inuje obsah při scrollu (IntersectionObserver) |
| `GradientText.tsx` | Animovaný magenta gradient přes text |
| `ScrollReveal.tsx` | Postupné odhalování textu slovo po slovu při scrollu |
| `LogoLoop.tsx` | Nekonečný horizontální marquee (denní chleba sekce) |
| `BentoCard.tsx` | Karta v bento gridu, 3D tilt na hover |
| `TiltCard.tsx` | 3D náklon obecný wrapper (jen desktop) |
| `Magnetic.tsx` | Tlačítko se přitahuje k myši (jen desktop) |
| `ScrollProgress.tsx` | Magenta progress bar nahoře |
| `SplashCursor.tsx` | Jemný splash trail za kurzorem (jen desktop) |
| `ExpandableTimeline.tsx` | Klikatelná časová osa s detaily |
| `SimpleIcon.tsx` | Wrapper pro brand ikony z `simpleicons.org` |

---

## Where to update content

Veškerý obsah stránky je v jednom souboru — **`app/page.tsx`**. Konfigurační konstanty jsou nahoře, ať se snadno hledá.

### Email, sociální sítě, GitHub

Na začátku `page.tsx`:

```tsx
const EMAIL = "hi@danieljanda.cz";
const GITHUB_USER = "danieljanda37";
const GITHUB_REPO = "danieljanda-web";
const SOCIALS = {
  github: `https://github.com/${GITHUB_USER}`,
  linkedin: "https://linkedin.com/",
  instagram: "https://www.instagram.com/jandadaniel/",
  spotify: "https://open.spotify.com/user/11150452748",
};
```

### Timeline (Praxe)

Konstanta `timeline: TimelineItem[]` v `page.tsx`. Každá položka má:

```tsx
{
  period: "2019 — současnost",       // období v monospace
  company: "SkiResort",               // velký nadpis
  role: "IT & Systems Manager — …",   // podtitulek
  location: "Krkonoše",               // vpravo na desktopu
  description: "...",                 // kratký popis (vždy viditelný)
  accent: true,                       // přidá magenta puntík + "current"
  details: ["...", "..."],            // bullety v rozevřeném detailu
  link: { label: "...", href: "..." } // volitelný link (otevírá nové okno)
}
```

Přidání nové položky: zkopíruj existující objekt, uprav. Pořadí v poli = pořadí na stránce (shora dolů).

### Bento čísla (Současnost · v číslech)

Kazdé číslo (1+ mld. Kč, 12+, 80%, 6×) je inline v JSX v `page.tsx`. Najdi sekci `BENTO STATS` a uprav přímo.

`yearsCoding` se počítá automaticky:

```tsx
const yearsCoding = new Date().getFullYear() - 2014;
```

Pokud změníš počáteční rok, uprav `2014`.

### Sekce „Aktuálně buduju"

Konstanta `learning` v `page.tsx`. Každá karta:

```tsx
{
  title: "Computer vision pro lyžaře",
  description: "...",
  tags: ["Tag 1", "Tag 2", "Tag 3"]
}
```

### Sekce „Co nabízím"

Konstanta `services` v `page.tsx`. Stejná struktura jako `learning`.

### Tools loop (Denní chleba)

Tři pole: `toolsRow1`, `toolsRow2`, `czTools`.

První dva s ikonami:
```tsx
{ slug: "make", label: "Make.com" }
```
Slug = identifikátor na [simpleicons.org](https://simpleicons.org). Najdi ikonu, slug je v URL po `/icons/`.

Třetí (`czTools`) jen text.

### Tech stack

Konstanta `stack`:
```tsx
{ name: "TypeScript", since: "2020" }
```

### Hero rotující text

Konstanta `RotatingText words=[…]` v JSX. Stačí přidat/odebrat věty.

---

## Brand manual

### Barvy (CSS variables v `globals.css`)

| Variable | Hex | Použití |
|---|---|---|
| `--color-bg` | `#0a0a0b` | Hlavní pozadí stránky |
| `--color-bg-soft` | `#111113` | Karty, dlaždice |
| `--color-fg` | `#ededee` | Hlavní text |
| `--color-muted` | `#6f6f74` | Sekundární text, popisky |
| `--color-line` | `#1c1c20` | Dělící čáry |
| `--color-accent` | `#ec4899` | Magenta — CTA, akcenty, hover state |
| `--color-accent-soft` | `rgba(236,72,153,0.12)` | Akcent na pozadí (hover) |
| `--color-accent-line` | `rgba(236,72,153,0.32)` | Akcent border |

Změna akcentní barvy = změň `--color-accent` a `--color-accent-line`/`--color-accent-soft` budou ladit automaticky díky stejnému RGB.

### Fonty

- **Satoshi** (sans, font-display) — všechny nadpisy, body text. Načítá se z Fontshare CDN přes `<link>` v `layout.tsx`.
- **JetBrains Mono** (mono) — popisky, časy, tagy, kód. Načítá se z Google Fonts přes `next/font/google`.

Změna fontu: uprav `layout.tsx` (Google import) a `globals.css` (CSS variable `--font-sans` / `--font-mono`).

### Velikosti písma (responsive)

Velké nadpisy používají `clamp()` pro plynulé škálování:

```css
font-size: clamp(min, preferred, max);
```

Příklady použité na stránce:
- Hero jméno: `clamp(3.5rem, 18vw, 14rem)`
- „Let's build" v kontaktu: `clamp(3rem, 15vw, 9rem)`
- Velká čísla v bento: `clamp(2.5rem, 9vw, 4.5rem)`

### Mezery (8px grid)

Tailwind default scale, multiplikuje 4px ale nejčastěji se používá `gap-4` (16px), `gap-8` (32px), `py-16` až `py-32` na sekce.

### Voice & tone

- **Pravdivý a konkrétní.** Žádné buzzwords.
- **Sebevědomý, ne arogantní.** „Postavil jsem", ne „pomohl jsem postavit".
- **Konkrétní čísla, kde lze.** „80 % lyžařů", „60člennou skupinu", „2018 Audi A8".
- **Krátké věty, technický slovník.** Cílová skupina chápe, co je YOLO, REST API, BigQuery.
- **Žádné lži.** Tvrzení musí být ověřitelné.
- **Žádné humor "from the heart".** Pokud vtip, tak suchý, sebeironický, technický.

---

## Deployment

### Workflow

```
local → git push → GitHub → Vercel (auto-deploy)
```

Vercel je napojený na branch `main`. Každý push spustí build a nasazení. Preview deployments jsou automaticky vytvořeny pro PR a non-main brache.

### Doména

`danieljanda.cz` je registrována u Forpsi, DNS A/CNAME záznamy směřují na Vercel:
- `A` pro `@` → `76.76.21.21`
- `CNAME` pro `www` → `cname.vercel-dns.com`

Nastavení v Vercel: **Project Settings → Domains**.

### Email

`hi@danieljanda.cz` je nastaven přes Cloudflare Email Routing → forwarduje do osobního Gmailu. Free.

### Environment variables

Žádné. Stránka je čistě statická.

---

## Roadmap / Backlog

- [ ] OG image (auto-generated přes `opengraph-image.tsx`)
- [ ] Sitemap + robots.txt (`next-sitemap`)
- [ ] Plausible / Vercel Analytics
- [ ] Anglická verze (`/en`)
- [ ] Reálné case studies (Apps Script invoice pipeline, CableGuard, e-shop)
- [ ] Blog / `/notes`

---

## License

Code: MIT (see [LICENSE](LICENSE)).
Content (texts, photos): © Daniel Janda, all rights reserved.

---

Built in Krkonoše.
