import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/site";

// Body font — matches afialt.ru's Manrope (latin + cyrillic)
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

// Display serif — the site's custom uploaded typeface, self-hosted
const display = localFont({
  // woff2 first (smaller, ~98%+ browser support), woff as fallback.
  src: [
    { path: "../../public/fonts/afialt-display.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/afialt-display.woff", weight: "400", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const title = "АФИАЛЬТ — ЖК бизнес-класса в Москве | Старт продаж";
const description =
  "АФИАЛЬТ — ЖК бизнес-класса на северо-востоке Москвы. Ансамбль из семи башен, парки и инфраструктура в шаговой доступности. Актуальные планировки и цены — оставьте заявку.";
const ogImage = `${SITE_URL}/images/27f5679818004e2b9ca25c1d5d3148d9.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: SITE_URL,
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
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: ogImage, alt: "АФИАЛЬТ — панорама района" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/seo/favicon.ico" },
      { url: "/seo/favicon-128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [{ url: "/seo/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#282828",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      telephone: "+7-915-340-44-66",
      image: `${SITE_URL}/images/633029377c2c475f979ea08b64b2dc91.webp`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Алтуфьевское шоссе, д. 11, к. 2",
        addressLocality: "Москва",
        addressCountry: "RU",
      },
      areaServed: "Москва",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "ru-RU",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
