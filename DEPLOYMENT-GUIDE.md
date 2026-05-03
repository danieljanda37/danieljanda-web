# Deployment guide

Kompletní návod od „mám hromadu souborů v Documents" po „web běží na danieljanda.cz".

---

## Část 1 — Web na produkci

### Předpoklady

Měl bys mít:
- Lokální projekt v `C:\Users\Janda Daniel\Documents\GitHub\danieljanda-web`
- GitHub Desktop nainstalovaný a přihlášený
- GitHub repo `danieljanda37/danieljanda-web` (zatím prázdné nebo jen s pár commity)
- Účet u Vercel — pokud ještě ne, na [vercel.com](https://vercel.com) → Sign Up → Continue with GitHub

### Krok 1 — Aplikuj poslední změny

V Downloads bys měl mít: `page.tsx`, `BrandIcon.tsx`, `SocialIcon.tsx`, `LogoLoop.tsx`. **Smaž starý SplashCursor** a nakopíruj nové soubory:

```powershell
$src = "$env:USERPROFILE\Downloads"
$dst = "C:\Users\Janda Daniel\Documents\GitHub\danieljanda-web"

# Smaž starý SplashCursor
Remove-Item "$dst\components\SplashCursor.tsx" -Force -ErrorAction SilentlyContinue

# Funkce — vezme nejnovější verzi souboru z Downloads
function Copy-Latest($base, $ext, $target) {
    $f = Get-ChildItem -Path $src -File | Where-Object {
        $_.Name -match "^$([regex]::Escape($base))(\s\(\d+\))?\.$ext$"
    } | Sort-Object LastWriteTime -Descending | Select-Object -First 1
    if ($f) {
        try { Unblock-File $f.FullName } catch {}
        Copy-Item $f.FullName -Destination $target -Force
        Write-Host "OK: $($f.Name) -> $target" -ForegroundColor Green
    } else {
        Write-Host "CHYBI: $base.$ext" -ForegroundColor Yellow
    }
}

Copy-Latest "page" "tsx" "$dst\app\page.tsx"
Copy-Latest "BrandIcon" "tsx" "$dst\components\BrandIcon.tsx"
Copy-Latest "SocialIcon" "tsx" "$dst\components\SocialIcon.tsx"
Copy-Latest "LogoLoop" "tsx" "$dst\components\LogoLoop.tsx"
```

### Krok 2 — Otestuj lokálně

```powershell
cd "C:\Users\Janda Daniel\Documents\GitHub\danieljanda-web"
npm run dev
```

Otevři `http://localhost:3000`. Zkontroluj:

- [ ] **Žádný splash kurzor** — myš nezanechává stopy
- [ ] **Loga v Tools sekci se zobrazují** — ChatGPT, Claude, Gemini, atd.
- [ ] **Open source sekce** je viditelná, link na repo funguje
- [ ] **Mobil** — F12 → ikona telefonu → projet stránku, vše čitelné
- [ ] **Žádné console errory** (kromě phia extension warning, ten ignoruj)

Když je vše OK, zastav server (Ctrl+C, Y).

### Krok 3 — Build test

```powershell
npm run build
```

Tohle simuluje produkční build. Když projde bez errorů, máš jistotu, že to projde i Vercelu. Když selže, řekni — pošlu fix.

### Krok 4 — Commit + push přes GitHub Desktop

1. Otevři **GitHub Desktop**
2. Vlevo uvidíš změněné soubory (page.tsx, BrandIcon.tsx, SocialIcon.tsx, ...)
3. Dole vlevo **Summary**: napiš `feat: open source section, inline brand icons, splash cursor removal`
4. **Description** (volitelné): `Add Apps Script repo reference, replace simpleicons CDN with inline SVG, remove buggy splash cursor effect`
5. **Commit to main**
6. Nahoře **Push origin**

GitHub repo je teď aktualizovaný.

### Krok 5 — Vercel deploy (první nasazení)

Pokud na Vercelu projekt **ještě nemáš**:

1. [vercel.com/new](https://vercel.com/new) → vyber `danieljanda37/danieljanda-web` → **Import**
2. Žádné nastavení neměň, jen klikni **Deploy**
3. Za 60–90 vteřin uvidíš URL typu `danieljanda-web-xyz.vercel.app`

Pokud projekt **už máš**, Vercel detekoval push v kroku 4 a sám rebuilduje. Sleduj v dashboardu.

### Krok 6 — Připojení vlastní domény

Pokud doménu `danieljanda.cz` zatím nemáš spárovanou:

1. V Vercel dashboardu → projekt `danieljanda-web` → **Settings → Domains**
2. **Add** → napiš `danieljanda.cz` → **Add**
3. Vercel ti řekne: „Add these DNS records to your registrar":

```
Type: A     Name: @     Value: 76.76.21.21
Type: CNAME Name: www   Value: cname.vercel-dns.com
```

4. Jdi na [Forpsi](https://forpsi.com) (nebo kde máš doménu zaregistrovanou) → **Domény → danieljanda.cz → DNS záznamy**
5. Přidej oba záznamy
6. Vrať se na Vercel — bude to čekat („Configuring..."). Propagace DNS bývá do 30 minut, max 24h.
7. Až Vercel uvidí, že DNS sedí, dostaneš e-mail „Domain verified" a HTTPS certifikát se automaticky vystaví.

**Otestuj:** otevři `https://danieljanda.cz` v prohlížeči. Funguje.

### Workflow pro budoucí změny

Od teď je to jednoduché:

```
1. Uprav soubor lokálně (page.tsx, atd.)
2. npm run dev → zkontroluj
3. GitHub Desktop → commit → push
4. Vercel auto-deployuje za 30-60s
5. Refresh danieljanda.cz
```

Žádné další FTP, žádné kopírování souborů — git je king.

---

## Část 2 — Apps Script repo na GitHub

Apps Script ZIP, který jsi dostal, obsahuje generic verzi tvého invoice systému. Teď z toho uděláme veřejné GitHub repo, na které odkazuje sekce „Open source" na webu.

### Krok 1 — Rozbal ZIP do správné složky

```powershell
$src = "$env:USERPROFILE\Downloads\apps-script-invoice-pipeline.zip"
$dst = "C:\Users\Janda Daniel\Documents\GitHub"

# Rozbalit
Expand-Archive -Path $src -DestinationPath $dst -Force

# Přejmenovat z apps-script-repo na finální jméno
Rename-Item "$dst\apps-script-repo" "apps-script-invoice-pipeline" -Force
```

Teď máš `C:\Users\Janda Daniel\Documents\GitHub\apps-script-invoice-pipeline\` s celou strukturou.

### Krok 2 — Vytvoř repo na GitHubu

1. [github.com/new](https://github.com/new)
2. **Repository name:** `apps-script-invoice-pipeline`
3. **Description:** `Generic Gmail-based invoice approval workflow built on Google Apps Script`
4. **Public** ✓
5. **DO NOT** initialize with README, .gitignore nebo LICENSE — máš je už lokálně
6. **Create repository**

GitHub ti ukáže instrukce — ignoruj je, použijeme GitHub Desktop.

### Krok 3 — Přidej lokální složku do GitHub Desktop

1. GitHub Desktop → **File → Add Local Repository**
2. **Choose...** → najdi `C:\Users\Janda Daniel\Documents\GitHub\apps-script-invoice-pipeline`
3. GitHub Desktop řekne „This directory does not appear to be a Git repository" → klikni **create a repository**
4. V dialogu:
   - **Name:** `apps-script-invoice-pipeline`
   - **Local Path:** zůstává jak je
   - **Initialize this repository with a README:** NEZAŠKRTÁVAT (máme už README.md)
   - **Git ignore:** None
   - **License:** None (máme LICENSE soubor)
5. **Create repository**

### Krok 4 — První commit + publish

1. GitHub Desktop teď ukazuje všechny soubory ze složky jako „untracked"
2. Vlevo dole **Summary:** `Initial commit — generic email approval pipeline`
3. **Commit to main**
4. Nahoře klikni **Publish repository**
5. V dialogu:
   - **Name:** `apps-script-invoice-pipeline` (musí sedět s GitHub repem)
   - **Keep this code private:** ODŠKRTNI ✗ (chceme public)
6. **Publish repository**

Hotovo, repo je live na `https://github.com/danieljanda37/apps-script-invoice-pipeline`.

### Krok 5 — Vylepši repo (volitelné, ale dělá rozdíl)

Na GitHubu otevři repo a nastav:

1. **About** (vpravo nahoře, ozubené kolečko):
   - Description: `Generic Gmail-based invoice approval workflow built on Google Apps Script`
   - Website: `https://danieljanda.cz`
   - Topics: `apps-script`, `gmail`, `automation`, `approval-workflow`, `google-workspace`, `gmail-addon`
   - Save changes

2. **Vypni Issues a Wiki**, pokud nechceš spravovat (Settings → General → Features)

3. **Pin to your profile**:
   - Profil → **Customize your pins** → vyber `apps-script-invoice-pipeline`
   - Save

### Krok 6 — Web automaticky odkazuje na repo

V `page.tsx` máš konstantu `APPS_SCRIPT_REPO = "apps-script-invoice-pipeline"`. Sekce „Open source" ji používá pro link. **Žádné další úpravy nejsou potřeba.**

Když refreshneš `danieljanda.cz` (nebo lokálně), v sekci Open source uvidíš kartu s odkazem, která vede na `https://github.com/danieljanda37/apps-script-invoice-pipeline`.

---

## Část 3 — Co dál

Až budeš mít obojí live, doporučuju:

### 3.1 — E-mail

Nastav `hi@danieljanda.cz`. Tři možnosti, viz separátní zpráva v konverzaci:
- **Cloudflare Email Routing** — zdarma, jen forwarding do Gmailu
- **Zoho Mail Free** — zdarma, vlastní inbox
- **Google Workspace** — placené, plnohodnotné

### 3.2 — SEO

Po deployi:
1. [Google Search Console](https://search.google.com/search-console) → Add Property → `danieljanda.cz`
2. Verify (Vercel ti dá DNS TXT záznam, nebo HTML soubor)
3. **Sitemaps → Submit** → `sitemap.xml`
4. Za pár dní začneš být v indexu

### 3.3 — Analytics

Volitelné, ale doporučuji [Vercel Analytics](https://vercel.com/analytics) — ve Vercel dashboardu zapneš jedním klikem, zdarma, žádné cookies. Žádný GDPR konzent nepotřebuješ.

### 3.4 — Aktualizace obsahu

Když chceš změnit:
- **Texty** → `app/page.tsx` → push
- **Timeline** → `app/page.tsx`, konstanta `timeline` → push
- **Statistiky v bento** → `app/page.tsx`, hledat „BENTO STATS" sekci → push
- **Sociální linky** → `app/page.tsx`, konstanta `SOCIALS`
- **E-mail** → `app/page.tsx`, konstanta `EMAIL`

Vše dokumentované v `README.md` v webovém repu.

---

## Troubleshooting

### „npm run dev" hlásí error

Podívej se na první řádek erroru. Pokud to je:
- `Cannot find module '@/components/...'` → soubor není v `components/` nebo má překlep v názvu
- `'GradientText' was not found in the export` → nějaký import volá komponentu, která neexistuje. Zkontroluj importy v `page.tsx` proti seznamu souborů v `components/`

### Vercel build selže

V Vercel dashboardu → Project → **Deployments** → klikni na fail deploy → **View Build Logs**. Najdi řádek `Error:` — copy a pošli mi, řeknu co s tím.

### Loga se nezobrazují

`BrandIcon.tsx` má interní mapu `ICONS`. Pokud zadáš `name="X"` který tam není, ukáže se šedý placeholder s `?`. Otevři `BrandIcon.tsx`, najdi konstantu `ICONS`, přidej nový SVG path. Slugy v `page.tsx` musí přesně sedět s klíči v `ICONS`.

### Doména nefunguje (24h+)

Otevři [dnschecker.org](https://dnschecker.org) → napiš `danieljanda.cz` → vyber `A` record. Pokud nikde nesvítí `76.76.21.21`, DNS změna neprošla — kontaktuj Forpsi support.

---

Až budeš mít vše live, dej vědět — můžeme dotáhnout LinkedIn link, OG image testing, nebo začít plánovat Anglická verze.
