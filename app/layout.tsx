import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default:
      "Розробка сайтів під ключ | Landing Page, інтернет-магазини та бізнес-сайти",
    template: "%s | Web Studio",
  },
  description: siteConfig.description,
  keywords: [
    "розробка сайтів",
    "сайт під ключ",
    "Landing Page",
    "інтернет-магазин",
    "бізнес-сайт",
    "веб-розробка Україна",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title:
      "Розробка сайтів під ключ | Landing Page, інтернет-магазини та бізнес-сайти",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Web Studio — розробка сайтів під ключ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Розробка сайтів під ключ | Landing Page, інтернет-магазини та бізнес-сайти",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon",
    shortcut: "/icon",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              url: siteConfig.siteUrl,
              description: siteConfig.description,
              inLanguage: siteConfig.language,
              serviceType: [
                "Розробка Landing Page",
                "Розробка інтернет-магазинів",
                "Розробка бізнес-сайтів",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
