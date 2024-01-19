import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

import { AppWithProviders } from "@/providers/wallet-connect-provider";
import { SiteHeader } from "@/components/site-header";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crowd funding",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("dark", inter.className)}>
        <AppWithProviders>
          <SiteHeader />
          <div className="grid grid-cols-6 min-h-screen container">
            <Sidebar />
            <div className="col-span-5">{children}</div>
          </div>
        </AppWithProviders>
      </body>
    </html>
  );
}
