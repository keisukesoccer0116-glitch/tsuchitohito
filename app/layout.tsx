import type { Metadata } from "next";
import { Zen_Old_Mincho } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const mincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-base",
});

export const metadata: Metadata = {
  title: "つちとひと",
  description: "暮らしに美しさと豊かさを届ける陶器のオンラインストア",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={mincho.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}