import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { YandexMetrika } from "@/components/YandexMetrika";

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

const title = "АФИАЛЬТ — ЖК бизнес-класса в Отрадном, СВАО | Старт продаж";
const description =
  "Новостройка бизнес-класса АФИАЛЬТ в Отрадном (СВАО, Москва): ансамбль из семи башен у метро Отрадное и Владыкино, школа, детский сад, собственная набережная. Планировки и цены — оставьте заявку.";
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
  verification: {
    google: "08pvJHXejT7NY_8FJvLogyaISukC7efXykFkdomUO_w",
    yandex: "ce19859d24a5b44f",
  },
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
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.853294,
        longitude: 37.579951,
      },
      areaServed: "Москва",
    },
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#residence`,
      name: "ЖК АФИАЛЬТ",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Алтуфьевское шоссе, д. 11, к. 2",
        addressLocality: "Москва",
        addressCountry: "RU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.853294,
        longitude: 37.579951,
      },
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
        <YandexMetrika />
        {children}
      </body>
    </html>
  );
}
