import NextMuiThemeProvider from "./components/general/next-mui-theme-provider";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import SvgSprite from "./components/general/svg-sprite";
import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import "@/styles/global.scss";

export const metadata: Metadata = {
  title: "پاک",
  description: "",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
