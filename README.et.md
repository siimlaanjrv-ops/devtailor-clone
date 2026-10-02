[English](README.md) | **Eesti**

# Devtailor — veebilehe koopia

[devtailor.com](https://www.devtailor.com) (algselt tehtud Framer'iga) pikslitäpne koopia, ehitatud **Next.js 16, React 19, TypeScripti ja Tailwind CSS 4-ga**. Sait eksporditakse täielikult staatilisena ja on üleval Netlifys.

- **Leht:** https://devtailor-clone.netlify.app
- **Lähtekood:** https://github.com/siimlaanjrv-ops/devtailor-clone
- **Lehed:** avaleht, `/projects` (koos filtritega), kõik 11 projekti `/projects/[slug]` all, `/about-us`, `/career`, `/contact` ja oma 404 leht
- **Responsiivsus:** vastab originaalile selle kolmel Framer'i murdepunktil: mobiil (< 810 px), tahvel (810–1199 px) ja lauaarvuti (≥ 1200 px)

## Käivitamine

Vajalik on Node.js 20.9 või uuem.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # staatiline eksport kausta ./out
npx serve out      # lõppversiooni eelvaade
```

| Skript              | Mida teeb                                         |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Arendusserver koos automaatse uuendamisega        |
| `npm run build`     | Kontrollib tüübid ja ekspordib staatilise saidi   |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript)     |
| `npm run typecheck` | Genereerib marsruutide tüübid ja käivitab `tsc`-i |
| `npm run format`    | Vormindab kogu koodi Prettier'iga                 |

## Tehnoloogiad ja miks

| Valik                                       | Miks                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js (App Router)**                    | Mitmelehelisele turundussaidile sobib failipõhine marsruutimine ja buildi ajal ette genereeritud HTML: kiire esimene kuva, hea SEO ja töötab ka ilma JavaScriptita. Tavaline Vite + React SPA saadaks tühja HTML-kesta, vajaks kliendipoolset ruuterit ja Netlify ümbersuunamisreegleid.                                                                   |
| **Staatiline eksport (`output: "export"`)** | Kõik lehed on buildi ajal teada, nii et serverit pole vaja. Netlify jagab CDN-ist tavalisi faile: odavam, kiirem ja käitusajal pole midagi hooldada.                                                                                                                                                                                                       |
| **TypeScript**                              | Tüübitud sisu (`Project`, `Service`, `Sector`) püüab 11 projekti andmetes vead kinni juba kompileerimisel. Marsruutide `params` on tüübitud Next.js-i genereeritud `PageProps` kaudu.                                                                                                                                                                      |
| **Tailwind CSS 4**                          | Pikslitäpsus tähendab sadu mõõdetud väärtusi (`pt-[140px]`, `gap-[63px]`). Tailwind hoiab need märgenduse kõrval, teeb responsiivsed variandid selgelt nähtavaks (`md:` / `lg:`) ja hoiab kõik disainiväärtused ühes `@theme` plokis. CSS Modulesiga oleks visuaalne tulemus sama, aga Tailwindiga saab originaali kiiremini kätte ja kood püsib ühtlasem. |
| **`next/font/local`**                       | Fondid on enda serveris, laaditakse automaatselt ette ja varufondid on suuruse järgi kohandatud, nii et tekst ei hüppa fondi laadimisel.                                                                                                                                                                                                                   |
| **Ilma UI- ja animatsiooniteekideta**       | Kõik, mida sait vajab (kerimisel ilmumine, hover-efektid, logokarussell, mobiilimenüü), on paar rida CSS-i või väike hook. Nii jääb JavaScripti maht väikeseks ja kood loetavaks.                                                                                                                                                                          |

## Projekti struktuur

```
src/
├── app/                      # Marsruudid (App Router)
│   ├── layout.tsx            # Fondid, metaandmed, päis, jalus, küpsiste bänner
│   ├── globals.css           # Tailwind, disainiväärtused, oma utiliidid
│   ├── page.tsx              # Avaleht
│   ├── projects/page.tsx     # Projektide nimekiri filtritega
│   ├── projects/[slug]/      # Projekti mall (genereeritakse kõigile 11 projektile)
│   ├── about-us/, career/, contact/
│   └── not-found.tsx         # Oma 404 leht
├── components/
│   ├── ui/                   # Väikesed ehitusklotsid: Button, Section, SectionHeading, Reveal, …
│   ├── layout/               # Päis (+ mobiilimenüü), jalus, küpsiste bänner, keelevalik
│   ├── sections/             # Korduvad sektsioonid: PageHero, FeatureGrid, StatsSection, CtaBanner, …
│   ├── home/, about/, contact/, projects/   # Lehepõhised komponendid
│   └── icons.tsx             # Originaali ikoonid React-komponentidena
├── data/
│   ├── projects.ts           # Kõik 11 projekti (tüübitud)
│   └── site.ts               # Navigatsioon ja broneerimislingid
├── fonts/                    # Inter + Neue Haas Unica (woff2)
└── lib/cn.ts                 # Klassinimede abifunktsioon
public/images/                # Optimeeritud pildid loetavate nimedega
```

### Kuidas see kokku töötab

- **Sisu on andmetes, mitte mallides.** `src/data/projects.ts` sisaldab iga projekti pealkirja, kokkuvõtet, teenuseid, sektoreid, tehnoloogiaid, küsimusi ja vastuseid ning galeriid. Üks mall (`projects/[slug]/page.tsx`) renderdab kõik 11 lehte. `generateStaticParams` genereerib need ette ja `dynamicParams = false` muudab tundmatu aadressi 404-ks. `/projects` filter ja „See more.“ plokk loevad samast massiivist.
- **Komponendid on kihtidena.** `ui/` sisaldab baaskomponente, mis lehtedest midagi ei tea. `sections/` paneb need kokku sektsioonideks, mis korduvad mitmel lehel (näiteks `StatsSection` on avalehel nelja veeruga ja About-lehel kolme veeruga koos siltidega). Lehepõhistes kaustades on see, mida kasutatakse ainult ühes kohas.
- **Vaikimisi serverikomponendid.** Brauseris töötab ainult viis komponenti: `Header` (menüü olek), `ProjectsExplorer` (filtri olek), `CookieBanner` (localStorage), `HubSpotForm` (välise teenuse skript) ja `Reveal` (IntersectionObserver). Kõik muu jõuab brauserisse puhta HTML-ina.
- **Disainiväärtused** (värvid, fondid, varjud, murdepunktid) on defineeritud üks kord `globals.css` failis `@theme` all ja murdepunktid on originaali järgi 810 px ja 1200 px. Korduvate mustrite jaoks on oma utiliidid: `container-site` (1200 px veerg), `section-y` (64/96 px sektsiooni vahed), `text-copy` (põhiteksti stiil) ja `bg-brand-gradient`.

## Kuidas pikslitäpsus saavutati

Midagi ei mõõdetud silma järgi. Arenduse ajal kasutasin Playwrighti skripte, mis töötasid nii originaali kui ka koopia peal:

1. **Paigutuse väljavõtted:** iga lehe kohta laiustel 1440, 1000 ja 390 px salvestati originaali DOM puuna, kus on iga elemendi asukoht, suurus, paddingud, vahed, värvid, raadiused, varjud ja fondiseaded, koos täislehe kuvatõmmistega.
2. **Sisu väljavõtmine:** projektide lehed, filtrite seosed (milline projekt kuulub millisesse teenusesse ja sektorisse) ja SVG-ikoonid võeti välja programmiliselt, nii et ühtki teksti ei tipitud käsitsi ümber.
3. **Numbriline võrdlus:** iga koopia tekstielement leitakse originaalist sama teksti järgi üles ning võrreldakse asukohta, suurust, fonti ja värvi. Iga üle 2 px erinevus tuuakse välja. Kõik lehed on kõigil kolmel laiusel 1–2 px täpsusega.
4. **Visuaalne võrdlus:** täislehe kuvatõmmised kõrvuti, et näha ka seda, mida numbrid ei näita (taustad, pildid, äärised, hover-olekud).

Mõned mitteilmsed leiud:

- **Fondid.** Originaal kasutab ainult põhitekstis Inter'i alternatiivseid märke (`cv03`, `cv04`, `cv09`, `cv11`, näiteks ühekorruseline „a“). Google Fontsi Inter neid ei sisalda, mistõttu muutus tähtede laius ja mobiilis ka reamurdmine. Koopia kasutab sama Inter 4.0 versiooni nagu originaal.
- **Äärised.** Framer joonistab ääriseid `::after` ülekattena, mis paigutust ei mõjuta. Koopia teeb sama (pseudo-elemendid ja sisemised varjud), nii et kaartide mõõdud jäävad samaks.
- **Võrdse kõrgusega read.** Framer'i ruudustikud kasutavad `grid-auto-rows: 1fr`, mis teeb mobiilis kõik projektikaardid sama kõrgeks kui kõrgeim. Koopia teeb sama `auto-rows-fr` abil.

## Interaktsioonid

- **Rulluva tekstiga nupud:** silt on 24 px kõrguses aknas kaks korda ja libiseb hover'il üles.
- **Projektikaardid:** pilt suureneb 110%-ni ja nooleikoon libiseb sisse ning pöörleb.
- **Kerimisel ilmumine:** elemendid tulevad nähtavale ja tõusevad 30 px (hero'des laskuvad 40 px või kasvavad 90%-lt), nagu originaali Framer'i efektid. `prefers-reduced-motion` korral on need välja lülitatud. Peidetud olek rakendub alles siis, kui JavaScript töötab, nii et ilma JS-ita sisu ei kao.
- **Mobiilimenüü:** animeeritud kõrgus ja hamburgerist rist. Sulgub pärast lingile klõpsamist ja suletud menüü lingid ei ole Tab-klahviga ligipääsetavad.
- **Klientide logokarussell:** ainult CSS-iga lõputu kerimine, servad hajuvad.
- **Küpsiste bänner:** valik salvestatakse `localStorage`-isse ja bänneri saab jaluse „Cookie Settings“ lingiga uuesti avada.
- **Projektide filtrid:** teenuse ja sektori filter `/projects` lehel, samade seostega nagu originaalis.

## Teadlikud erinevused originaalist

Originaalis on mõned vead. Need on parandatud, mitte kopeeritud:

| Originaal                                                                                                                                                                      | Koopia                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| Avalehe nimekirja viimane punkt („Ensure your AI solutions are ethical…“) ja Career lehe viimane eelis (tahvlis) ei muutu kunagi nähtavaks, sest nende animatsioon ei käivitu. | Nähtavad.                                                 |
| Tahvlis on protsessi sammud järjekorras 1, 4, 2, 5, 3, 6.                                                                                                                      | Järjekorras 1–6.                                          |
| Career lehe „See open positions“ on ilma lingita nupp.                                                                                                                         | Avab e-kirja aadressile hello@devtailor.com.              |
| Ettevõtte nimi on kahes kohas kirjas kui „Detavailor“.                                                                                                                         | „Devtailor“.                                              |
| Kõigil põhilehtedel on sama `<title>` ja projektilehtede pealkirjad lõpevad „- My Framer Site“.                                                                                | Igal lehel oma pealkiri, nt „Native TV apps - Devtailor“. |
| Projektilehtedel pole `<h1>` elementi (pealkiri on `<h2>`).                                                                                                                    | `<h1>` sama välimusega.                                   |
| CTA-bännerite pealkiri on `<h3>` kohe lehe `<h1>` järel, `<h2>` tase jääb vahele.                                                                                              | `<h2>` sama välimusega (õige pealkirjade järjekord).      |

Mõni originaali sisu on jäetud samaks ka siis, kui see näib olevat kohatäide. Näiteks AI Procurementi projekti „Visit website“ ja „See app“ nupud viivad framer.com lehele.

## Kvaliteedikontrollid

Mõõdetud avaldatud saidil Lighthouse'iga (avaleht; võrdluseks on originaal mõõdetud samamoodi):

|                | Koopia (mobiil) | Originaal (mobiil) | Koopia (lauaarvuti) | Originaal (lauaarvuti) |
| -------------- | --------------- | ------------------ | ------------------- | ---------------------- |
| Jõudlus        | 89              | 73                 | 100                 | 96                     |
| Ligipääsetavus | 100             | 97                 | 100                 | 97                     |
| Head tavad     | 100             | 100                | 100                 | 100                    |
| SEO            | 100             | 100                | 100                 | 100                    |
| LCP            | 3,7 s           | 5,6 s              | 0,7 s               | 1,3 s                  |
| CLS            | 0               | 0,05               | 0,001               | 0,001                  |

Ligipääsetavus on igal lehel 100. Lisaks kontrolliti igal lehel laiustel 1440 px ja 390 px konsooli vigu, katkiseid pilte, ühe `<h1>` olemasolu, alt-tekste, unikaalseid ID-sid ja horisontaalset ülevoolu.

Nii leiti ja parandati kaks probleemi, mis ilmnesid ainult päris serveris:

- **Hüdratatsiooni viga Netlifys.** Netlify lisab `<head>` sisse kommentaari „hosted on Netlify“, mille tõttu React renderdas iga lehe brauseris uuesti (viga #418). Väike skript eemaldab selle enne hüdratatsiooni.
- **Aeglane LCP mobiilis.** Hero tekst ootas enne nähtavaks muutumist JavaScripti. Ekraani ülaosa animatsioonid käivituvad nüüd puhta CSS-iga kohe laadimisel, mis vähendas LCP elemendi viivitust ligikaudu 1,3 sekundilt 0,17 sekundile.

## Kolmandate osapoolte materjalid

- **Neue Haas Unica W1G** on Monotype'i tasuline kirjatüüp, mille litsents on Devtailoril devtailor.com jaoks. See on kaasas ainult seetõttu, et tegu on Devtailori kodutööga, ja seda ei tohi mujal kasutada.
- **Inter** on SIL Open Font License'i all.
- **Kontaktivorm:** `/contact` lehel on Devtailori enda HubSpoti vorm, täpselt nagu originaalis. **Koopiast saadetud vormid jõuavad Devtailori päris HubSpoti kontole.**
- Kõik pildid, logod ja tekstid kuuluvad Devtailorile ja tema klientidele.

## Avaldamine

`netlify.toml` seadistab kõik: buildi käsk `npm run build`, avaldatav kaust `out`, Node 22 ja räsiga failide pikaajaline vahemällu salvestamine. Netlify serveerib tundmatute aadresside korral automaatselt faili `out/404.html`.

Tasuta paketis lisab Netlify avalikele projektidele märgi „Powered by Netlify“. See katab küpsiste bänneri nupud, mistõttu on märk välja lülitatud (**Project configuration → General → Powered by Netlify badge**) ja `globals.css` failis on varuks CSS-reegel.
