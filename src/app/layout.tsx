import type { Metadata } from "next";
import "./globals.css";
import { DesktopNav, MobileNav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Tarot Insight",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid grid-rows-[1fr,1fr,auto] antialiased">
        <DesktopNav />
        <div className="max-lg:min-h-[100vh] flex flex-col ">{children}</div>
        <MobileNav />
      </body>
    </html>
  );
}
