import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          left: "inherit",
          right: "1.75rem",
          transformOrigin: "right",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          textAlign: "right",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "IranSans",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
