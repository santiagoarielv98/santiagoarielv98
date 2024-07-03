import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

import darkTheme from "../themes/dark-theme";
import lightTheme from "../themes/light-theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: (mode: ThemeMode) => void;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // se declara una constante prefersDarkMode que se encarga de verificar si el sistema operativo del usuario prefiere el modo oscuro
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  /**
   * Función que se encarga de obtener el tema inicial de la aplicación
   * @returns el tema inicial de la aplicación
   */
  const getInitialTheme = (): ThemeMode => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    return prefersDarkMode ? "dark" : "light";
  };

  // se declara una constante themeMode que se encarga de manejar el modo de tema actual
  const [themeMode, setThemeMode] = React.useState(getInitialTheme());

  const theme = React.useMemo(
    () => (themeMode === "dark" ? darkTheme : lightTheme),
    [themeMode]
  );
  /**
   * Función que se encarga de cambiar el tema de la aplicación
   * @param mode el modo de tema al que se quiere cambiar
   */
  const toggleTheme = (mode: ThemeMode) => {
    if (mode === "system") {
      setThemeMode(prefersDarkMode ? "dark" : "light");
      localStorage.removeItem("theme");
    } else {
      setThemeMode(mode);
    }
  };

  React.useEffect(() => {
    // se guarda el modo de tema actual en el localStorage
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ theme: themeMode, toggleTheme }}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
