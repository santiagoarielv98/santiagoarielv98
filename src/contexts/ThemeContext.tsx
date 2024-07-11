import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import darkTheme from "../themes/dark-theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={darkTheme}>{children}</MuiThemeProvider>
    </>
  );
};
