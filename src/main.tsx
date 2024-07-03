import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "./contexts/ThemeContext.tsx";

import App from "./App.tsx";

import { register } from "swiper/element/bundle";

import "./index.css";

register();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
