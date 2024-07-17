import React from "react";

import { ColorModeProvider } from "./contexts/ColorModeContext";

import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import MainLayout from "./components/MainLayout";
import Hero from "./components/Hero";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Projects = React.lazy(() => import("./components/Projects"));
const Resume = React.lazy(() => import("./components/Resume"));
const Skills = React.lazy(() => import("./components/Skills"));

export default function App() {
  return (
    <ColorModeProvider>
      <MainLayout>
        <Hero />
        <React.Suspense>
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Contact />
          <Footer />
        </React.Suspense>
        <ScrollTop>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </MainLayout>
    </ColorModeProvider>
  );
}
