import React from "react";

import useScrollTrigger from "@mui/material/useScrollTrigger";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

interface ScrollTopProps {
  children: React.ReactElement;
}

export default function ScrollTop(props: ScrollTopProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    document.querySelector("#hero")?.scrollIntoView({
      block: "center",
    });
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: "fixed", bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}
