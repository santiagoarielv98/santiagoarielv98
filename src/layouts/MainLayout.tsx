import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

import darkTheme from "../themes/dark-theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

const Sidebar = React.lazy(() => import("../components/Sidebar"));

export default function MainLayout() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Box
          component="aside"
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            flexGrow: 1,
            bgcolor: "background.default",
            color: "text.primary",
            flexDirection: {
              xs: "column-reverse",
              sm: "row",
            },
          }}
        >
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
