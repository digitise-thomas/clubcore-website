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
      {/* Floating glass bar — the site's only glass surface, like the platform's sidebar. */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className="glass mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 rounded-pill pl-5 pr-2.5 sm:pl-6 sm:pr-3">
          <Link href="/" className="flex flex-shrink-0 items-center" aria-label="CLUBCORE">
            <Image src="/clubcore-logo.png" width={260} height={65} alt="CLUB/CORE" priority className="h-6 w-auto sm:h-7" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Sektioner">
            <a href="#loesning" className="nav-link">{t("solution")}</a>
            <a href="#ai" className="nav-link">{t("ai")}</a>
            <a href="#app" className="nav-link">{t("app")}</a>
            <a href="#priser" className="nav-link">{t("pricing")}</a>
            <a href="#faq" className="nav-link">{t("faq")}</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="segment" aria-label="Language">
              {LOCALES.map(({ code, label }) => (
                <Link key={code} href="/" locale={code} aria-current={locale === code ? "true" : undefined}>
                  {label}
                </Link>
              ))}
            </div>
            <a
              href="https://app.clubcore.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              {t("login")}
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24 sm:pt-28">{children}</main>

      <footer className="mt-8 border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row sm:px-8">
          <Image src="/clubcore-logo.png" width={220} height={55} alt="CLUB/CORE" className="h-6 w-auto" />
          <p className="caption flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>{tFooter("copy")}</span>
            <span aria-hidden="true">·</span>
            <a href="mailto:thomas@clubcore.dk" className="hover:text-ink transition">thomas@clubcore.dk</a>
            <span aria-hidden="true">·</span>
            <a href="https://vaerk.io" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition">{tFooter("app")}</a>
          </p>
        </div>
      </footer>
    </>
  );
}
