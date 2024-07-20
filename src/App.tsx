import { ColorModeProvider } from "./contexts/ColorModeContext";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import ScrollTop from "./components/ScrollTop";

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

export default function App() {
  return (
    <ColorModeProvider>
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
        <ScrollTop>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </MainLayout>
    </ColorModeProvider>
  );
}
