import React from "react";

import { MailLockOutlined } from "@mui/icons-material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const tabs = [
  {
    label: "Tab 1",
    icon: <MailLockOutlined />,
  },
  {
    label: "Tab 2",
    icon: <MailLockOutlined />,
  },
  {
    label: "Tab 3",
    icon: <MailLockOutlined />,
  },
];

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
    <Box>
      <Tabs
        key={matches ? 1 : 0}
        orientation={matches ? "vertical" : "horizontal"}
        value={value}
        onChange={handleChange}
        centered={!matches}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          flexShrink: 0,
          height: "100%",
          py: {
            xs: 0.1,
            sm: 6,
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
