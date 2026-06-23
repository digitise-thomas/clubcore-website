import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif, Geist_Mono } from 'next/font/google'
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import SiteChrome from "./components/SiteChrome";

// Soft Nordic typography — same family stack as the Clubcore platform:
// Instrument Serif display titles, Hanken Grotesk body, Geist Mono labels.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
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
    <html lang="da" className={`${hankenGrotesk.variable} ${instrumentSerif.variable} ${geistMono.variable}`}>
      <body className="text-ink">
        <GoogleAnalytics gaId="G-KLP9KS09FC" />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
