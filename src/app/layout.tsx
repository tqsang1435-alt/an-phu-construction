import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "An Phú | Thi công hạ tầng và công trình xây dựng",
  description:
    "An Phú tại Mai Phụ, Hà Tĩnh. Giới thiệu năng lực thi công các hạng mục cầu đường, cống thoát nước và hạ tầng kỹ thuật.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${plusJakartaSans.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
