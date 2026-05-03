import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-mono-geist",
  weight: ["400", "500", "600"],
});

const SITE = {
  name: "Daniel Janda",
  fullName: "Daniel Janda",
  title: "Daniel Janda — Software Developer & IT Specialist",
  description:
    "Daniel Janda — software developer, IT & Systems Manager v největším lyžařském resortu v Česku. Automatizace, AI workflow, computer vision. Z anotace dat pro autonomní vozidla v Praze do horských systémů v Krkonoších.",
  url: "https://danieljanda.cz",
  locale: "cs_CZ",
  email: "hi@danieljanda.cz",
  twitterHandle: "",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s — Daniel Janda",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  keywords: [
    "Daniel Janda",
    "Daniel Janda developer",
    "Daniel Janda IT",
    "Daniel Janda Krkonoše",
    "Daniel Janda SkiResort",
    "Daniel Janda Valeo",
    "software developer Krkonoše",
    "IT specialist Krkonoše",
    "automatizace Make.com",
    "Google Apps Script",
    "computer vision YOLO",
    "freelance developer Česko",
    "freelance vývojář",
    "AI workflow Claude",
    "Next.js developer",
    "TypeScript developer",
  ],
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Daniel Janda — Software Developer & IT Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0b",
};

// JSON-LD structured data — Person schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Janda",
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  jobTitle: "IT & Systems Manager",
  worksFor: {
    "@type": "Organization",
    name: "SkiResort Černá hora · Pec",
    url: "https://www.skiresort.cz/",
  },
  description: SITE.description,
  knowsAbout: [
    "Software Development",
    "TypeScript",
    "Python",
    "Next.js",
    "React",
    "Computer Vision",
    "YOLO",
    "Google Apps Script",
    "Make.com",
    "Process Automation",
    "AI Workflow",
    "BigQuery",
    "Docker",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Univerzita Hradec Králové",
    url: "https://www.uhk.cz/",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Krkonoše",
    addressCountry: "CZ",
  },
  sameAs: [
    "https://github.com/danieljanda37",
    "https://www.instagram.com/jandadaniel/",
    "https://open.spotify.com/user/11150452748",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={mono.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans noise" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
