import type { Metadata } from "next";
import { Varela } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/base-components/footer-section";
import { QueryProvider } from "@/utils/query-provider";
import { TawkToChat } from "@/components/tawk-to-chat";

const varela = Varela({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UDP Care Grants",
  description: "UDP Care Grants website, where help is given to those in need",
  icons: {
    icon: "/icon1.png",
  },
  twitter: {
    title: "UDP Care Grants",
    card: "summary_large_image",
    creator: "",
    site: "",
    images: ["https://www.udpreliefcaregrants.com/udp-preview.png"],
    description:
      "UDP Care Grants website, where help is given to those in need",
  },
  keywords: [
    "UDP",
    "Care",
    "Grants",
    "udpcaregrants",
    "udp relief",
    "udprelief",
    "get grant help",
    "Relief care grants",
    "udp care grants",
  ],
  openGraph: {
    title: "UDP Care Grants",
    description:
      "UDP Care Grants website, where help is given to those in need",
    url: "https://www.udpreliefcaregrants.com",
    images: [
      {
        url: "https://www.udpreliefcaregrants.com/udp-preview.png",
        width: 800,
        height: 600,
      },
    ],
    siteName: "UDP Care Grants",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={varela.className}>
        <TawkToChat />
        <QueryProvider>
          <main className="max-w-[1440px] mx-auto">
            <Navbar />
            {children}
            <FooterSection />
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
