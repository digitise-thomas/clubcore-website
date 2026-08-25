import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif, Geist_Mono } from "next/font/google";
import "../globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import SiteChrome from "../components/SiteChrome";

// Soft Nordic typography — same family stack as the Clubcore platform:
// Instrument Serif display titles, Hanken Grotesk body, Geist Mono labels.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL("https://clubcore.dk"),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "da" ? "/" : `/${locale}`,
      languages: {
        da: "/",
        en: "/en",
        de: "/de",
        "x-default": "/",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${hankenGrotesk.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
    >
      <body className="text-ink">
        <GoogleAnalytics gaId="G-KLP9KS09FC" />
        <Script
          defer
          src="https://stats.clubcore.dk/script.js"
          data-website-id="fc5401c6-e418-4e73-a203-fbae8064e6cc"
        />
        <NextIntlClientProvider>
          <SiteChrome>{children}</SiteChrome>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
