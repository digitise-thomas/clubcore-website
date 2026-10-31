import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import SiteChrome from "../components/SiteChrome";

// ClubCore Glass typography: the system stack (SF Pro on Apple devices) with
// Inter as the fallback elsewhere — same as the platform. Not preloaded, so
// Apple devices never download it. Manrope is only used by the vaerk mockup.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
  preload: false,
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
    <html lang={locale} className={`${inter.variable} ${manrope.variable}`} data-scroll-behavior="smooth">
      <body>
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
