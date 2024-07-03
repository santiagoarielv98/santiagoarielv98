import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import Box from "@mui/material/Box";

import { SwiperContainer } from "swiper/element";
import { Sidebar } from "../components/Sidebar";
import { NAV_ITEMS } from "../constants/nav-items";
import Swiper from "swiper";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

export default function MainLayout() {
  const navigate = useNavigate();
  const swiperElRef = React.useRef<SwiperContainer>(null);
  const { currentSection = "" } = useParams();

  React.useEffect(() => {
    swiperElRef!.current!.addEventListener(
      "swiperslidechange",
      (el: unknown) => {
        const [swiper] = (el as CustomEvent).detail as [Swiper];
        const currentSlide = NAV_ITEMS[swiper.activeIndex];
        navigate(currentSlide.href);
      }
    );
  }, [navigate]);

  React.useEffect(() => {
    const currentSlideIndex = NAV_ITEMS.findIndex(
      (item) => item.href === `/${currentSection}`
    );
    swiperElRef!.current!.swiper.slideTo(currentSlideIndex);
  }, [currentSection]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        flexGrow: 1,
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        <swiper-container ref={swiperElRef} style={{ height: "100%" }}>
          <swiper-slide>
            <Home />
          </swiper-slide>
          <swiper-slide>
            <About />
          </swiper-slide>
          <swiper-slide>
            <Projects />
          </swiper-slide>
          <swiper-slide>
            <Contact />
          </swiper-slide>
        </swiper-container>
      </Box>
    </Box>
  );
}
