import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6200EE",
    },
    secondary: {
      main: "#03DAC6",
    },
    error: {
      main: "#FF0266",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#000000",
      secondary: "#616161",
    },
  },
});

export default lightTheme;
