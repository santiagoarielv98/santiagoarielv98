import React from "react";

import { MailLockOutlined } from "@mui/icons-material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
/* import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography"; */

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
  /* const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null); */
  const [value, setValue] = React.useState(0);
  /* const [text, setText] = React.useState("Tab 1"); */

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  /* const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    label: string
  ) => {
    setAnchorEl(event.currentTarget);
    setText(label);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  }; */

  /* const open = Boolean(anchorEl); */
  return (
    <Box>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        // aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          flexShrink: 0,
          height: "100%",
          py: 6,
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            /* onMouseEnter={(ev) => handlePopoverOpen(ev, tab.label)}
            onMouseLeave={handlePopoverClose} */
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {/*  <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 2 }}>{text}</Typography>
      </Popover> */}
    </Box>
  );
}
