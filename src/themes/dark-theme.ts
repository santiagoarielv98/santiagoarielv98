import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BB86FC",
    },
    secondary: {
      main: "#03DAC6",
    },
    error: {
      main: "#CF6679",
    },
    background: {
      default: "#121212",
      paper: "#1D1D1D",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5",
    },
  },
});

export default darkTheme;
