import HeaderBarWrapper from "@/components/share/HeaderBar";
import { cn } from "@/lib/utils";
import { Viewport } from "next";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <HeaderBarWrapper>{children}</HeaderBarWrapper>
      </body>
    </html>
  );
}
