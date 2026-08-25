"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const LOCALES = [
  { code: "da", label: "DA" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
] as const;

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const locale = useLocale();

  return (
    <>
      <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-line">
        <div className="flex justify-between items-center px-6 sm:px-10 h-16 gap-3">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/clubcore-logo.png" width={260} height={65} alt="CLUB/CORE" priority className="h-7 w-auto" />
          </Link>
          <nav className="hidden lg:flex gap-8 text-sm text-faint">
            <a href="#loesning" className="hover:text-ink transition">{t("solution")}</a>
            <a href="#ai" className="hover:text-ink transition">{t("ai")}</a>
            <a href="#priser" className="hover:text-ink transition">{t("pricing")}</a>
            <a href="#faq" className="hover:text-ink transition">{t("faq")}</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex border border-line-2 rounded-full p-0.5 font-mono text-[0.7rem] tracking-wide">
              {LOCALES.map(({ code, label }) => (
                <Link
                  key={code}
                  href="/"
                  locale={code}
                  className={`px-2 sm:px-2.5 py-1.5 rounded-full transition ${
                    locale === code ? "bg-ink text-card" : "text-faint hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <a
              href="https://app.clubcore.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-sm whitespace-nowrap"
            >
              {t("login")}
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-line bg-paper">
        <div className="px-6 sm:px-10 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <Image src="/clubcore-logo.png" width={220} height={55} alt="CLUB/CORE" className="h-6 w-auto" />
          <p className="text-sm text-faint">
            {tFooter("copy")} · <a href="mailto:thomas@clubcore.dk" className="hover:text-ink transition">thomas@clubcore.dk</a>
          </p>
        </div>
      </footer>
    </>
  );
}
