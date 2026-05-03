import Link from "next/link";
import RotatingText from "@/components/RotatingText";
import LiveClock from "@/components/LiveClock";
import FadeIn from "@/components/FadeIn";
import LogoLoop from "@/components/LogoLoop";
import BentoCard from "@/components/BentoCard";
import Magnetic from "@/components/Magnetic";
import ScrollProgress from "@/components/ScrollProgress";
import GradientText from "@/components/GradientText";
import ScrollReveal from "@/components/ScrollReveal";
import ExpandableTimeline, {
  TimelineItem,
} from "@/components/ExpandableTimeline";
import BrandIcon from "@/components/BrandIcon";
import SocialIcon from "@/components/SocialIcon";

const EMAIL = "hi@danieljanda.cz";
const GITHUB_USER = "danieljanda37";
const GITHUB_REPO = "danieljanda-web";
const APPS_SCRIPT_REPO = "apps-script-invoice-pipeline";
const SOCIALS = {
  github: `https://github.com/${GITHUB_USER}`,
  linkedin: "https://linkedin.com/",
  instagram: "https://www.instagram.com/jandadaniel/",
  spotify: "https://open.spotify.com/user/11150452748",
};

const stack = [
  { name: "TypeScript", since: "2020" },
  { name: "Python", since: "2017" },
  { name: "React", since: "2019" },
  { name: "Next.js", since: "2021" },
  { name: "Node.js", since: "2018" },
  { name: "PostgreSQL", since: "2018" },
  { name: "BigQuery", since: "2022" },
  { name: "Docker", since: "2020" },
];

const toolsRow1 = [
  { icon: "make", label: "Make.com" },
  { icon: "googleappsscript", label: "Google Apps Script" },
  { icon: "bigquery", label: "BigQuery" },
  { icon: "googlesheets", label: "Google Sheets" },
  { icon: "chatgpt", label: "ChatGPT" },
  { icon: "claude", label: "Claude" },
  { icon: "gemini", label: "Gemini" },
  { icon: "cursor", label: "Cursor" },
  { icon: "docker", label: "Docker" },
  { icon: "cloudflare", label: "Cloudflare" },
];

const toolsRow2 = [
  { icon: "github", label: "GitHub" },
  { icon: "vercel", label: "Vercel" },
  { icon: "ultralytics", label: "Ultralytics YOLO" },
  { icon: "roboflow", label: "Roboflow" },
  { icon: "ubiquiti", label: "Ubiquiti" },
  { icon: "fortinet", label: "FortiGate" },
  { icon: "synology", label: "Synology" },
  { icon: "trello", label: "Trello" },
  { icon: "notion", label: "Notion" },
];

const czTools = [
  "SmartEmailing",
  "Supportbox",
  "Tabidoo",
  "Raynet",
  "Skidata",
  "Fakturoid",
  "Hikvision",
  "MediaMTX",
  "Freelo",
  "AI Voicebot",
  "AI Chatbot",
];

const timeline: TimelineItem[] = [
  {
    period: "2019 — současnost",
    company: "SkiResort",
    role: "IT & Systems Manager — SkiResort Černá hora · Pec",
    location: "Krkonoše",
    description:
      "Vedu IT a vývoj v největším lyžařském resortu v Česku — 50 km sjezdovek, 6 propojených areálů, jedna z nejnavštěvovanějších horských destinací střední Evropy.",
    accent: true,
   details: [
  "SkiResort Černá hora · Pec spojuje pod jeden skipas areály Černá hora, Pec pod Sněžkou, Černý Důl, Malá Úpa, Velká Úpa a Svoboda nad Úpou.",
  "Zodpovídám za odbavovací platformu Skidata — stovky turniketů, desítky výdejních automatů a stovky koncových zařízení napříč šesti areály.",
  "Zodpovídám za návrh a rozvoj e-shopu pro online prodej skipasů (skiresortcard.cz), propojeného s výdejem skipasů z automatů sKiosek. E-shop dnes odbaví ~80 % všech lyžařů.",
  "Spravuji platformu, která za sezony pod mojí odpovědností kumulativně odbavila tržby v řádu miliard korun.",
  "Customer journey od první návštěvy webu po naskenování skipasu na turniketu — analýza, návrh a optimalizace. Navrhuji a rozvíjím AI chatbota a voicebota pro samoobslužné odbavení zákazníků a snížení zátěže call centra.",
  "Aktuálně rozvíjím vlastní systém pro detekci nebezpečných situací na sjezdovkách a přepravních zařízeních — strojové vidění (Ultralytics YOLO, Roboflow), pose estimation a predikce pádu, vlastní servery s GPU pro real-time inferenci.",
  "Zodpovídám za síťovou a bezpečnostní infrastrukturu — Hikvision, Ubiquiti, FortiGate, MediaMTX pro zpracování video streamů, Cloudflare na perimetru.",
  "Navrhuji a implementuji marketingové automatizace a datové pipeline — Make, Google Apps Script, BigQuery, Google Sheets, propojení s SmartEmailing, Supportbox, Raynet a Tabidoo.",
],
    link: {
      label: "skiresortcard.cz",
      href: "https://skiresortcard.cz/",
    },
  },
  {
    period: "2016 — 2019",
    company: "Valeo",
    role: "Annotation Specialist / Group Leader",
    location: "Praha · Hostivař",
    description:
      "Anotační workflow pro vývoj autonomních vozidel. Podílel jsem se na projektu Valeo SCALA™ — prvním sériově vyráběném automotive LiDARu na světě.",
    details: [
      "Podílel jsem se na vývoji prvního Valeo SCALA™ LiDARu, který byl v roce 2018 nasazen v Audi A8 — vůbec prvním sériovém voze s LiDARem na světě.",
      "Pokračoval jsem na navazujících generacích pro Daimler/Mercedes-Benz S-Class — druhý vůz na světě s certifikovanou Level 3 autonomií.",
      "Spoluvytvářel jsem pravidla anotace kamerových dat z reálného provozu — různé povětrnostní a světelné podmínky, městské i dálniční scénáře.",
      "Vedl jsem 60člennou anotační skupinu — kontrola kvality dat, nábor, školení, koordinace shift leaderů.",
      "Cestoval jsem do poboček Valeo v Indii (Chennai) a Bukurešti, kde jsem školil týmy stovek anotátorů a sjednocoval pravidla napříč zeměmi.",
    ],
    link: {
      label: "Valeo SCALA™ Lidar",
      href: "https://www.valeo.com/en/valeo-scala-lidar/",
    },
  },
  {
    period: "2012 — 2016",
    company: "Univerzita Hradec Králové",
    role: "Bc. — Fakulta informatiky a managementu",
    location: "Hradec Králové",
    description:
      "Bakalářské studium se zaměřením na aplikovanou informatiku a manažerskou praxi.",
  },
];

const yearsCoding = new Date().getFullYear() - 2014;

const learning = [
  {
    title: "Computer vision pro lyžaře",
    description:
      "Detekce nebezpečných situací na sjezdovkách a přepravních zařízeních. Pomocí pose estimation předvídáme pád dřív, než dopadne — Ultralytics YOLO, Roboflow a vlastní pipeline.",
    tags: ["Ultralytics YOLO", "Roboflow", "Pose estimation"],
  },
  {
    title: "AI chatbot & voicebot",
    description:
      "Stavím samoobslužné odbavení zákazníka pro skiresort.cz — AI agent, který umí odpovědět na 80 % dotazů z call centra. Customer journey od návštěvy webu po skipas na turniketu.",
    tags: ["LLM", "Voice", "Customer journey"],
  },
  {
    title: "Vlastní inferenční servery",
    description:
      "GPU servery pro real-time zpracování desítek video streamů z Hikvision kamer. Docker, MediaMTX, vlastní Python service layer.",
    tags: ["Docker", "MediaMTX", "Python"],
  },
];

const services = [
  {
    title: "Konzultace & AI workflow",
    description:
      "Pomohu vám rozmyslet, kde se IT investice vyplatí a kde ne. Praktické nasazení AI nástrojů (Claude, ChatGPT, Cursor, Gemini) tam, kde reálně šetří čas — code review, analýza dat, content workflow. Nezávislé druhé oko nad existující infrastrukturou nebo plánovaným projektem.",
    tags: ["Strategie", "AI tooling", "Code review"],
  },
  {
    title: "Automatizace & customer journey",
    description:
      "Procesy a customer journey, které šetří hodiny denně i klientovi i vám. Make.com, Google Apps Script, custom integrace mezi vašimi systémy — fakturace, e-maily, CRM, e-shop, AI chatbot a voicebot pro samoobslužné odbavení. Specializace na BigQuery, Google Sheets a reporting.",
    tags: ["Make.com", "AI chatbot", "BigQuery"],
  },
  {
    title: "Computer vision & strojové učení",
    description:
      "Vlastní řešení postavená na YOLO, Roboflow a custom inference pipeline pro real-time zpracování video streamů. Detekce objektů, pose estimation, predikce pádů. Od proof of concept po produkční nasazení na vlastním železe.",
    tags: ["YOLO", "Pose estimation", "GPU inference"],
  },
];

const openSource = [
  {
    title: "Email Approval Pipeline",
    repo: APPS_SCRIPT_REPO,
    description:
      "End-to-end workflow pro schvalování faktur (nebo jakýchkoliv dokumentů) postavený čistě na Google Apps Script. Generic, anonymizovaná verze systému, který v produkci běží na SkiResortu napříč 6 areály.",
    tags: ["Apps Script", "Gmail", "Sheets", "Drive"],
    href: `https://github.com/${GITHUB_USER}/${APPS_SCRIPT_REPO}`,
  },
];

export default function Page() {
  return (
    <>
      <ScrollProgress />

      {/* NAV */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.05] bg-[#0a0a0b]/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:h-14 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white sm:text-xs"
          >
            <span className="text-[var(--color-accent)]">~</span>
            <span>daniel-janda</span>
            <span className="text-[var(--color-accent)] animate-pulse">▊</span>
          </Link>
          <ul className="flex items-center gap-0.5 text-[11px] font-medium sm:gap-1 sm:text-xs">
            <li>
              <a
                href="#about"
                className="rounded-md px-2 py-1.5 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white sm:px-3"
              >
                O mně
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="rounded-md px-2 py-1.5 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white sm:px-3"
              >
                Praxe
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hidden rounded-md px-2 py-1.5 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white sm:inline-block sm:px-3"
              >
                Služby
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="ml-1 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-neutral-200 transition-colors hover:border-[var(--color-accent-line)] hover:bg-[var(--color-accent-soft)] hover:text-white sm:px-3"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(236,72,153,0.10), transparent 60%), radial-gradient(ellipse 70% 50% at 80% 80%, rgba(59,130,246,0.06), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-4 pb-8 pt-20 sm:px-8 sm:pb-16 sm:pt-32">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 sm:text-[11px]">
              <span className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-neutral-300">Otevřený projektům</span>
              </span>
              <span className="hidden sm:inline">/</span>
              <span>
                Krkonoše · <LiveClock className="text-neutral-300" />
              </span>
            </div>
          </FadeIn>

          <div className="my-8 flex flex-1 flex-col justify-center sm:my-0 sm:block sm:flex-initial">
            <FadeIn delay={120}>
              <h1 className="font-display text-[clamp(3.5rem,18vw,14rem)] leading-[0.9] text-white">
                <span className="block">Daniel</span>
                <span className="block">
                  <GradientText>Janda</GradientText>
                  <span className="text-[var(--color-accent)]">.</span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={280}>
              <div className="mt-6 flex items-baseline gap-2 font-mono text-xs text-neutral-400 sm:mt-10 sm:gap-3 sm:text-sm">
                <span className="uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  &gt;
                </span>
                <RotatingText
                  words={[
                    "Software developer.",
                    "IT specialist.",
                    "Builder of systems.",
                    "Automation craftsman.",
                  ]}
                  className="text-white"
                />
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-400 sm:mt-8 sm:text-base lg:text-lg">
                Od anotace dat pro autonomní vozidla k IT a vývoji
                v největším horském resortu v Česku. Mezi tím přes deset let
                zkušeností s tím, co v ostrém provozu funguje a co ne.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={560}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                <Magnetic
                  href="#work"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-100 sm:w-auto"
                >
                  Moje praxe
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </Magnetic>
                <Magnetic
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-medium text-neutral-200 backdrop-blur-sm transition-colors hover:border-[var(--color-accent-line)] hover:bg-[var(--color-accent-soft)] hover:text-white sm:w-auto"
                >
                  Napiš mi
                </Magnetic>
              </div>

              <div className="hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600 sm:flex">
                <span>Scroll</span>
                <span className="h-px w-12 bg-gradient-to-r from-neutral-700 to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative border-t border-white/[0.05] py-16 sm:py-32"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <FadeIn>
            <div className="mb-8 flex items-baseline gap-3 sm:mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                01 /
              </span>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Pitch
              </h2>
            </div>
          </FadeIn>

          <ScrollReveal
            className="font-display text-[1.5rem] leading-[1.2] text-white sm:text-3xl lg:text-[2.75rem]"
            baseOpacity={0.18}
          >
            Začínal jsem na anotaci kamerových dat pro autonomní vozidla
            ve Valeu — projekt, který se stal prvním sériovým LiDARem na
            světě. Dnes vedu IT v největším horském resortu v Česku, stavím
            odbavovací platformy, AI agenty pro customer journey a systémy,
            které pomocí strojového vidění hlídají bezpečnost lyžařů na
            sjezdovkách.
          </ScrollReveal>

          <FadeIn delay={120}>
            <div className="mt-10 flex flex-col gap-6 sm:mt-14 sm:flex-row sm:gap-12">
              <p className="max-w-2xl text-sm leading-relaxed text-neutral-400 sm:flex-1 sm:text-base">
                V létě motorka a silničku, v zimě skialpy. Lozím po skalách
                a rád se dívám na svět z dronu. Žiju tam, kde pracuju — v
                Krkonoších.
              </p>
              <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.18em] sm:items-end sm:text-right">
                <span className="text-neutral-600">Languages</span>
                <span className="text-neutral-300">
                  Czech · <span className="text-neutral-500">native</span>
                </span>
                <span className="text-neutral-300">
                  English ·{" "}
                  <span className="text-neutral-500">working proficiency</span>
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BENTO STATS */}
      <section className="relative border-t border-white/[0.05] py-16 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <FadeIn>
            <div className="mb-8 flex items-baseline gap-3 sm:mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                02 /
              </span>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Současnost · v číslech
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            <FadeIn className="lg:col-span-3" delay={60}>
              <BentoCard className="min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
                <div className="flex h-full flex-col justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    /platform_revenue
                  </span>
                  <div>
                    <p className="font-display text-[clamp(2rem,9vw,4rem)] leading-none text-white">
                      <GradientText>1+ mld. Kč</GradientText>
                    </p>
                    <p className="mt-3 max-w-md text-xs leading-relaxed text-neutral-500 sm:text-sm">
                      Tržby kumulativně odbavené přes e-shop a odbavovací
                      systém SkiResort, který spravuji.
                    </p>
                  </div>
                </div>
              </BentoCard>
            </FadeIn>

            <FadeIn className="lg:col-span-2" delay={120}>
              <BentoCard className="min-h-[140px] sm:min-h-[160px]">
                <div className="flex h-full flex-col justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Years_in_tech
                  </span>
                  <div>
                    <p className="font-display text-[clamp(2.5rem,9vw,4.5rem)] leading-none text-white">
                      {yearsCoding}
                      <span className="text-[var(--color-accent)]">+</span>
                    </p>
                    <p className="mt-2 text-xs text-neutral-500">
                      od roku 2014
                    </p>
                  </div>
                </div>
              </BentoCard>
            </FadeIn>

            <FadeIn className="lg:col-span-1" delay={180}>
              <BentoCard className="min-h-[140px] sm:min-h-[160px]">
                <div className="flex h-full flex-col justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Local_time
                  </span>
                  <div>
                    <p className="font-mono text-xl text-white sm:text-2xl">
                      <LiveClock showSeconds={false} />
                    </p>
                    <p className="mt-2 text-xs text-neutral-500">Krkonoše</p>
                  </div>
                </div>
              </BentoCard>
            </FadeIn>

            <FadeIn className="lg:col-span-2" delay={240}>
              <BentoCard className="min-h-[140px] sm:min-h-[160px]">
                <div className="flex h-full flex-col justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    /eshop_share
                  </span>
                  <div>
                    <p className="font-display text-[clamp(2.5rem,9vw,4.5rem)] leading-none text-white">
                      80<span className="text-[var(--color-accent)]">%</span>
                    </p>
                    <p className="mt-2 text-xs text-neutral-500">
                      lyžařů odbaveno online
                    </p>
                  </div>
                </div>
              </BentoCard>
            </FadeIn>

            <FadeIn className="lg:col-span-2" delay={300}>
              <BentoCard className="min-h-[140px] sm:min-h-[160px]">
                <div className="flex h-full flex-col justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    /skiresort_areas
                  </span>
                  <div>
                    <p className="font-display text-[clamp(2.5rem,9vw,4.5rem)] leading-none text-white">
                      6<span className="text-[var(--color-accent)]">×</span>
                    </p>
                    <p className="mt-2 text-xs text-neutral-500">
                      propojených areálů SkiResortu
                    </p>
                  </div>
                </div>
              </BentoCard>
            </FadeIn>

            <FadeIn className="lg:col-span-2" delay={360}>
              <BentoCard className="min-h-[140px] sm:min-h-[160px]">
                <div className="flex h-full flex-col justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    /managed_endpoints
                  </span>
                  <div>
                    <p className="font-display text-[clamp(1.5rem,5.5vw,2rem)] leading-tight text-white">
                      stovky turniketů
                      <br />
                      <span className="text-neutral-500">
                        + tisíce dalších endpointů
                      </span>
                    </p>
                  </div>
                </div>
              </BentoCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section
        id="work"
        className="relative border-t border-white/[0.05] py-16 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <FadeIn>
            <div className="mb-8 flex items-baseline gap-3 sm:mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                03 /
              </span>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Praxe · klikni pro detail
              </h2>
            </div>
          </FadeIn>

          <ExpandableTimeline items={timeline} />
        </div>
      </section>

      {/* CURRENTLY LEARNING */}
      <section
        id="learning"
        className="relative border-t border-white/[0.05] py-16 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <FadeIn>
            <div className="mb-8 flex items-baseline gap-3 sm:mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                04 /
              </span>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Aktuálně buduju
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {learning.map((l, i) => (
                <div
                  key={l.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111113] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-line)] sm:p-7"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(236,72,153,0.10), transparent 60%)",
                    }}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-tight text-white sm:text-2xl">
                        {l.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                        {l.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {l.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative border-t border-white/[0.05] py-16 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <FadeIn>
            <div className="mb-8 flex items-baseline gap-3 sm:mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                05 /
              </span>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Co nabízím
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <p className="mb-10 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:mb-14 sm:text-base">
              Beru vybrané spolupráce, kde mohu přinést konkrétní hodnotu.
              Tady jsou oblasti, ve kterých mám zkušenosti z reálného provozu.
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111113] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-line)] sm:p-7"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(236,72,153,0.12), transparent 60%)",
                    }}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      / 0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-tight text-white sm:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                        {s.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OPEN SOURCE */}
      <section
        id="open-source"
        className="relative border-t border-white/[0.05] py-16 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <FadeIn>
            <div className="mb-8 flex items-baseline gap-3 sm:mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                06 /
              </span>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Open source
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <ul className="grid grid-cols-1 gap-3 sm:gap-4">
              {openSource.map((p) => (
                <li key={p.repo}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111113] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-line)] sm:p-7"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 0%, rgba(236,72,153,0.10), transparent 60%)",
                      }}
                    />
                    <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-8">
                      <div className="sm:col-span-8">
                        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                          <SocialIcon name="github" size={14} />
                          <span>{p.repo}</span>
                        </div>
                        <h3 className="mt-4 font-display text-2xl leading-tight text-white sm:text-3xl">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
                          {p.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-end justify-end sm:col-span-4">
                        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 transition-colors group-hover:text-white">
                          View on GitHub
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          >
                            <path d="M7 7h10v10M7 17 17 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* TOOLS */}
      <section className="relative border-t border-white/[0.05] py-16 sm:py-28">
        <div className="mx-auto mb-8 max-w-6xl px-4 sm:mb-12 sm:px-8">
          <FadeIn>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                07 /
              </span>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Denní chleba
              </h2>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={120}>
          <LogoLoop
            duration={55}
            direction="left"
            items={toolsRow1.map((t) => (
              <div
                key={t.icon}
                className="flex items-center gap-3 text-neutral-500 transition-colors hover:text-white"
                title={t.label}
              >
                <BrandIcon name={t.icon} size={24} />
                <span className="whitespace-nowrap text-sm font-medium">
                  {t.label}
                </span>
              </div>
            ))}
          />
        </FadeIn>

        <div className="h-4" />

        <FadeIn delay={180}>
          <LogoLoop
            duration={70}
            direction="right"
            items={toolsRow2.map((t) => (
              <div
                key={t.icon}
                className="flex items-center gap-3 text-neutral-500 transition-colors hover:text-white"
                title={t.label}
              >
                <BrandIcon name={t.icon} size={24} />
                <span className="whitespace-nowrap text-sm font-medium">
                  {t.label}
                </span>
              </div>
            ))}
          />
        </FadeIn>

        <div className="h-4" />

        <FadeIn delay={240}>
          <LogoLoop duration={50} direction="left" items={czTools} />
        </FadeIn>
      </section>

      {/* STACK */}
      <section className="relative border-t border-white/[0.05] py-16 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <FadeIn>
            <div className="mb-8 flex items-baseline gap-3 sm:mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                08 /
              </span>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Tech stack
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {stack.map((item, i) => (
                <div
                  key={item.name}
                  className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111113] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent-line)] sm:p-5"
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(236,72,153,0.12), transparent 60%)",
                    }}
                  />
                  <div className="relative">
                    <div className="font-display text-base text-white sm:text-xl">
                      {item.name}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                      since {item.since}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/[0.05] py-20 sm:py-40"
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(236,72,153,0.10), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
          <FadeIn>
            <div className="mb-6 flex items-baseline gap-3 sm:mb-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                09 /
              </span>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Kontakt
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h3 className="font-display text-[clamp(3rem,15vw,9rem)] leading-[0.9] text-white">
              Let&apos;s
              <br />
              <GradientText>build</GradientText>
              <span className="text-[var(--color-accent)]">.</span>
            </h3>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-8 max-w-xl sm:mt-14">
              <p className="text-sm leading-relaxed text-neutral-400 sm:text-lg">
                Beru vybrané freelance zakázky a zajímavé spolupráce.
                Nejrychleji mě zastihnete e-mailem.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8">
                <Magnetic
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-100 sm:w-auto"
                >
                  {EMAIL}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M7 7h10v10M7 17 17 7" />
                  </svg>
                </Magnetic>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-[var(--color-accent-line)] hover:bg-[var(--color-accent-soft)] hover:text-white"
                  >
                    <SocialIcon name="github" size={14} />
                    GitHub
                  </a>
                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-[var(--color-accent-line)] hover:bg-[var(--color-accent-soft)] hover:text-white"
                  >
                    <SocialIcon name="linkedin" size={14} />
                    LinkedIn
                  </a>
                  <a
                    href={SOCIALS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-[var(--color-accent-line)] hover:bg-[var(--color-accent-soft)] hover:text-white"
                  >
                    <SocialIcon name="instagram" size={14} />
                    Instagram
                  </a>
                  <a
                    href={SOCIALS.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-[var(--color-accent-line)] hover:bg-[var(--color-accent-soft)] hover:text-white"
                  >
                    <SocialIcon name="spotify" size={14} />
                    Spotify
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.05] py-8 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:gap-3 sm:px-8">
          <div className="flex flex-col gap-1.5 font-mono text-[10px] uppercase tracking-wider text-neutral-600 sm:text-[11px]">
            <span>© {new Date().getFullYear()} Daniel Janda</span>
            <span className="normal-case tracking-normal text-neutral-500">
              Built in Krkonoše.
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-wider text-neutral-600 sm:text-[11px]">
            <a
              href={`https://github.com/${GITHUB_USER}/${GITHUB_REPO}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-neutral-500 transition-colors hover:text-white"
              aria-label="View source on GitHub"
            >
              <SocialIcon name="github" size={14} />
              <span>view source</span>
            </a>
            <span className="text-neutral-700">·</span>
            <span>Next.js · Tailwind · Vercel</span>
          </div>
        </div>
      </footer>
    </>
  );
}
