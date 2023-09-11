import Header from "@/components/header/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutData } from "@/model/layout-data";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geonhyo",
  description: "All About Geonhyo with Portfolio & Dev & Blog",
};

// Load Common Data on Layout
const getData = async (): Promise<LayoutData> => {
  // 1. TodayNum
  return {
    todayNum: 15,
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: LayoutData = await getData();
  return (
    <html lang="kr">
      <body className={`${inter.className} bg-background`}>
        <Header todayNum={data.todayNum} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
