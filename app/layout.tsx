import NextMuiThemeProvider from "./components/general/next-mui-theme-provider";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import SvgSprite from "./components/general/svg-sprite";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import "@/styles/global.scss";

export const metadata: Metadata = {
  title: "پاک",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <NextMuiThemeProvider>
        <body>
          {children}
          <SvgSprite />
          <Toaster />
        </body>
      </NextMuiThemeProvider>
    </html>
  );
}
