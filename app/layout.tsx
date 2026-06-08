import type { Metadata } from "next";
import { Inter_Tight } from 'next/font/google'
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { GoogleAnalytics } from '@next/third-parties/google'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Medlemsstyringssystem til erhvervsnetværk | CLUBCORE",
  description: "Bygget til erhvervsnetværk og business clubs. CLUBCORE gør det nemt at administrere medlemmer, begivenheder og netværksgrupper på én platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={interTight.variable}>
      <body className="bg-white text-black">
        <GoogleAnalytics gaId="G-KLP9KS09FC" />
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
          <div className="flex justify-between items-center px-6 sm:px-10 h-16">
            <Link href="/" className="flex items-center">
              <Image src="/clubcore-logo.png" width={260} height={65} alt="CLUB/CORE" priority className="h-7 w-auto" />
            </Link>
            <nav className="hidden sm:flex gap-8 text-sm text-neutral-500">
              <Link href="#features" className="hover:text-black transition">Funktioner</Link>
              <Link href="#pricing" className="hover:text-black transition">Priser</Link>
              <Link href="#faq" className="hover:text-black transition">FAQ</Link>
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
        <footer className="border-t border-neutral-200 bg-white">
          <div className="px-6 sm:px-10 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
            <Image src="/clubcore-logo.png" width={220} height={55} alt="CLUB/CORE" className="h-6 w-auto" />
            <p className="text-sm text-neutral-500">
              © 2026 CLUBCORE · <a href="mailto:thomas@digitise.dk" className="hover:text-black transition">thomas@digitise.dk</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
