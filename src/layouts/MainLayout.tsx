import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import { register } from "swiper/element";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

import { Sidebar } from "../components/Sidebar";

import { NAV_ITEMS } from "../constants/nav-items";

import type Swiper from "swiper";
import type { SwiperContainer } from "swiper/element";

const pages = [Home, About, Projects, Contact];

export default function MainLayout() {
  const navigate = useNavigate();
  const swiperRef = React.useRef<SwiperContainer>(null);
  const { currentSection = "" } = useParams();

  React.useEffect(() => {
    register();

    const params = {};

    Object.assign(swiperRef.current!, params);

    swiperRef.current?.initialize();
  }, []);

  React.useEffect(() => {
    swiperRef!.current?.addEventListener("swiperslidechange", (el: unknown) => {
      const [swiper] = (el as CustomEvent).detail as [Swiper];
      const currentSlide = NAV_ITEMS[swiper.activeIndex];
      navigate(currentSlide.href);
    });
  }, [navigate]);

  React.useEffect(() => {
    const currentSlideIndex = NAV_ITEMS.findIndex(
      (item) => item.href === `/${currentSection}`
    );
    swiperRef!.current?.swiper.slideTo(currentSlideIndex);
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
        <swiper-container ref={swiperRef} style={{ height: "100%" }}>
          {pages.map((Page, index) => (
            <swiper-slide key={index}>
              <Container>
                <Page />
              </Container>
            </swiper-slide>
          ))}
        </swiper-container>
      </Box>
    </Box>
  );
}
