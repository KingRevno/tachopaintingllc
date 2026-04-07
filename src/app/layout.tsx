import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: BUSINESS.seo.defaultTitle,
  description: BUSINESS.seo.defaultDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="font-sans bg-cream text-charcoal min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
