import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
          primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
          },
          secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
          },
          text: {
            primary: colorMode === ColorMode.Light ? "#000" : "#fff",
            secondary: colorMode === ColorMode.Light ? "#000" : "#fff",
          },
          action: {
            active: colorMode === ColorMode.Light ? "#000" : "#fff",
            selected: colorMode === ColorMode.Light ? "#000" : "#fff",
          },
          background: {
            default: colorMode === ColorMode.Light ? "#f2f2f2" : "#121212",
            paper: colorMode === ColorMode.Light ? "#fff" : "#1e1e1e",
          },
        },
        components: {
          MuiListItemButton: {
            styleOverrides: {
              root: {
                borderRadius: 6,
                marginTop: 8,
              },
            },
          },
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
