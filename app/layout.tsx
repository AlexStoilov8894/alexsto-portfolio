import type { Metadata } from "next";
import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alexsto — Niche Digital Solutions",
    template: "%s — Alexsto",
  },
  description:
    "Alexsto is a branding studio that blends precision and creativity — building bold, timeless identities and niche digital solutions.",
  metadataBase: new URL("https://alexsto.eu"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Alexsto — Niche Digital Solutions",
    description:
      "Bold, timeless branding designed with precision.",
    url: "https://alexsto.eu",
    siteName: "Alexsto",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} bg-brand-black text-white font-body`}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
