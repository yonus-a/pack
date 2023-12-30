"use client";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/utils/materialTheme";

interface Props {
  children: React.ReactNode;
}

export default function NextMuiThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
