import { Link, useParams } from "react-router-dom";

import useMediaQuery from "@mui/material/useMediaQuery";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import { NAV_ITEMS } from "../constants/nav-items";
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function Sidebar() {
  const matches = useMediaQuery("(min-width:600px)");
  const { currentSection = "" } = useParams();
  const currentSlideIndex = NAV_ITEMS.findIndex(
    (item) => item.href === `/${currentSection}`
  );

  return (
    <Box
      sx={{
        borderRight: {
          xs: 0,
          sm: 1,
        },
        borderTop: {
          xs: 1,
        },
        borderColor: {
          sm: "divider",
          xs: "divider",
        },
      }}
    >
      <Tabs
        variant="scrollable"
        scrollButtons={false}
        key={matches ? 1 : 0}
        orientation={matches ? "vertical" : "horizontal"}
        value={currentSlideIndex}
        sx={{
          flexShrink: 0,
          height: {
            sm: "100%",
          },
          py: {
            xs: 0.1,
            sm: 6,
          },
        }}
      >
        {NAV_ITEMS.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            {...a11yProps(index)}
            component={Link}
            to={tab.href}
          />
        ))}
      </Tabs>
    </Box>
  );
}
