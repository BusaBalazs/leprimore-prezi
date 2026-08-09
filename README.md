# Le Primore Hotel & SPA × MemQRy — Interaktív Prezentáció

Egyoldalas, prémium interaktív webalkalmazás a mellékelt PDF prezentáció
("Le Primore Hotel & SPA - Interaktív QRMB Élmény") struktúráját,
tartalmát és játékmenet-leírását követve.

## Tech stack
- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- GSAP + `@gsap/react` (`useGSAP` hook, `gsap.fromTo`, `ScrollTrigger`)
- `qrcode.react` — valós, működő QR-kód a demó szekcióban

## Indítás

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Amit tartalmaz

- **Header** — Le Primore logó, MemQRy társ-márka jelzés, HU/EN nyelvváltó
  (a megadott stílus-referencia szerint: kör alakú gombbal, hover-invert
  színátmenettel)
- **Hero** — GSAP belépő animáció (`useGSAP` + `gsap.fromTo`), `park.png`
  háttérkép
- **01 / Koncepció** — böngészőalapú élmény, testreszabott arculat
- **02 / Helyszínek** — 3 kártyás rács (szobák, SPA, gasztronómia & park)
- **Kulcsrakész megvalósítás** — nulla operatív teher szekció
- **03 / Szezonalitás** — ünnepi kiadások, chip-lista, automatikus visszaállás
- **04 / Üzleti előnyök** — cross-selling és értékelés-növelés kártyák
- **05 / Interaktív demó** — élő, beolvasható QR-kód
- **Záró CTA** — sötét szekció, kettős márkázással és kontakt gombokkal

Minden szöveg HU/EN nyelven elérhető — lásd `src/i18n/translations.js`.
Scroll-alapú reveal animációk minden szekcióban (`src/components/Reveal.jsx`,
GSAP ScrollTrigger).

Design tokenek a megadott referencia szerint:
`--primary-color #0d4632`, `--accent-color #cbb26a`, `--bg-color #f8f9fa`,
`--text-color #2b2b2b` — lásd `src/index.css` (`@theme` blokk, Tailwind v4).

## Megjegyzés a demó QR-kódról

A QR-kód jelenleg a `https://www.qrmb.hu` címre mutat
(`src/components/Demo.jsx` — `DEMO_URL` konstans), mivel a konkrét
pilot-játék linkje még nincs megadva. Cseréld le a végleges demó URL-re,
amint elkészül.

## Mappastruktúra

```
src/
  components/   — Header, Hero, Concept, Locations, Turnkey, Seasonal,
                  Business, Demo, CTA, Reveal (scroll animáció), Atoms
                  (eyebrow, motívum), Icons
  context/      — LanguageContext (HU/EN állapot)
  i18n/         — translations.js (teljes HU/EN szövegkészlet)
  assets/       — a megküldött képek és logók
```
