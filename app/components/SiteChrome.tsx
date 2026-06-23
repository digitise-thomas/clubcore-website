"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Routes that supply their own full-page chrome and should render bare,
// without the site-wide sticky header and footer.
const BARE_ROUTES = ["/ai-i-erhvervsfremme"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = BARE_ROUTES.some((route) => pathname?.startsWith(route));

  if (bare) {
    return <>{children}</>;
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-line">
        <div className="flex justify-between items-center px-6 sm:px-10 h-16">
          <Link href="/" className="flex items-center">
            <Image src="/clubcore-logo.png" width={260} height={65} alt="CLUB/CORE" priority className="h-7 w-auto" />
          </Link>
          <nav className="hidden sm:flex gap-8 text-sm text-faint">
            <Link href="#features" className="hover:text-ink transition">Funktioner</Link>
            <Link href="#pricing" className="hover:text-ink transition">Priser</Link>
            <Link href="#faq" className="hover:text-ink transition">FAQ</Link>
          </nav>
          <a
            href="https://app.clubcore.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-sm"
          >
            Log ind
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-line bg-paper">
        <div className="px-6 sm:px-10 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <Image src="/clubcore-logo.png" width={220} height={55} alt="CLUB/CORE" className="h-6 w-auto" />
          <p className="text-sm text-faint">
            © 2026 CLUBCORE · <a href="mailto:thomas@clubcore.dk" className="hover:text-ink transition">thomas@clubcore.dk</a>
          </p>
        </div>
      </footer>
    </>
  );
}
