import React from "react";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { navItems } from "../constants/nav-items";
import { Link } from "react-router-dom";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function Sidebar() {
  const matches = useMediaQuery("(min-width:600px)");
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        borderRight: 1,
        borderColor: "divider",
      }}
    >
      <Tabs
        key={matches ? 1 : 0}
        orientation={matches ? "vertical" : "horizontal"}
        value={value}
        onChange={handleChange}
        centered={!matches}
        sx={{
          flexShrink: 0,
          height: "100%",
          py: {
            xs: 0.1,
            sm: 6,
          },
        }}
      >
        {navItems.map((tab, index) => (
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
