import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clubcore.dk"),
};

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className="text-ink">
        <GoogleAnalytics gaId="G-KLP9KS09FC" />
        <Script
          defer
          src="https://stats.clubcore.dk/script.js"
          data-website-id="fc5401c6-e418-4e73-a203-fbae8064e6cc"
        />
        {children}
      </body>
    </html>
  );
}
