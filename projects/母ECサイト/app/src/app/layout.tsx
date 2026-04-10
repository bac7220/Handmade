import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Handmade Shop | やさしい手仕事のお店",
    description:
        "ひとつひとつ心を込めて作ったハンドメイド作品のお店です。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={`${zenMaru.className} scroll-smooth`}>
            <body className="min-h-screen bg-gray-50 text-gray-700 antialiased">
                {children}
            </body>
        </html>
    );
}
