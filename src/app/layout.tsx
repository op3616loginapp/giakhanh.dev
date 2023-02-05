import "@/styles/main.css";
import "@/styles/twemoji.css";

import { FC, PropsWithChildren } from "react";
import { Fira_Code, Inter, Noto_Sans_TC } from "@next/font/google";
import clsx from "clsx";

import Header from "@/ui/Header";
import { ThemeProvider } from "@/lib/next-themes";
import QuickCommand from "@/ui/QuickCommand";
import CustomToaster from "@/ui/CustomToaster";
import Footer from "@/ui/Footer";
import Analytics from "@/ui/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang="en"
      className={clsx(
        inter.variable,
        notoSansTC.variable,
        firaCode.variable,
        "scroll-smooth"
      )}
    >
      <head />
      <body className="overflow-x-hidden bg-primary font-default">
        <ThemeProvider attribute="class">
          <QuickCommand>
            <Header />
            <main className="relative mx-auto max-w-5xl px-8 py-24">
              {children}
            </main>
            <Footer />
            <CustomToaster />
          </QuickCommand>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
