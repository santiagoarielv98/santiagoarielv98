import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

import { ColorMode } from "../constants/theme";

import type { PaletteMode } from "@mui/material";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  colorMode: "light" as PaletteMode,
});

export interface ColorModeProviderProps {
  children: React.ReactNode;
}

export const ColorModeProvider = (props: ColorModeProviderProps) => {
  const { children } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [colorMode, setColorMode] = React.useState<PaletteMode>(() => {
    const persistedColorMode = localStorage.getItem("colorMode");
    if (persistedColorMode) {
      return persistedColorMode === ColorMode.Dark ? ColorMode.Dark : ColorMode.Light;
    }
    return prefersDarkMode ? ColorMode.Dark : ColorMode.Light;
  });

  const toggleColorMode = () => {
    setColorMode((prevMode) => {
      const newMode = prevMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light;
      localStorage.setItem("colorMode", newMode);
      return newMode;
    });
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
        },
      }),
    [colorMode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, colorMode }}>
      <GlobalStyles
        styles={{
          ":root": {
            scrollBehavior: "smooth",
            textRendering: "optimizeLegibility",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textWrap: "balance",
          },
        }}
      />
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
