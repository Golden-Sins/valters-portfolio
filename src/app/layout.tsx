import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { meta } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Integration & QA Engineer specializing in API automation, agentic AI / MCP tooling, and iGaming platforms. Portfolio and CV for Valters Upenieks.";

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: `${meta.name} — Integration & QA Engineer`,
  description,
  keywords: [
    "Valters Upenieks",
    "Integration Engineer",
    "QA Automation",
    "MCP",
    "Model Context Protocol",
    "Agentic AI",
    "API Testing",
    "iGaming",
  ],
  authors: [{ name: meta.name, url: meta.siteUrl }],
  openGraph: {
    title: `${meta.name} — Integration & QA Engineer`,
    description,
    url: meta.siteUrl,
    siteName: meta.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${meta.name} — Integration & QA Engineer`,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-ink text-paper font-sans antialiased grain">
        <div aria-hidden className="fixed inset-0 -z-10 bg-dot-grid opacity-40" />
        {children}
      </body>
    </html>
  );
}
