import React from "react";

import useColorModeContext from "../hooks/useColorModeContext";
import useScrollSpy from "../hooks/useScrollSpy";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import { socials } from "../constants/contact";
import { navItems } from "../constants/nav";

import Profile from "../assets/img/profile-120x120.webp";
import SwitchThemeMode from "./SwitchThemeMode";

export interface NavbarProps {
  onClose?: () => void;
}
export default function Navbar(props: NavbarProps) {
  const { onClose } = props;
  const activeId = useScrollSpy();
  const { toggleColorMode, colorMode } = useColorModeContext();

  const switchThemeModeId = `switch-theme-mode-${React.useId()}`;

  return (
    <Box component="header">
      <Toolbar sx={{ py: 1, justifyContent: "center" }}>
        <Avatar alt="Avatar de Santiago" src={Profile} sx={{ width: 100, height: 100 }} />
      </Toolbar>

      <Divider />
      <Box component="nav">
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={item.href} onClick={onClose} selected={`#${activeId}` === item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.primary} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />

      <Stack direction="row" spacing={1} py={1} justifyContent="center">
        {socials.slice(0, -1).map((social, index) => (
          <IconButton
            key={index}
            href={social.href}
            target="_blank"
            sx={{
              "&:hover": {
                color: "common.white",
                backgroundColor: social.bgcolor,
              },
            }}
          >
            {social.icon}
          </IconButton>
        ))}
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="center" py={1}>
        <Box component="label" htmlFor={switchThemeModeId} display="none" aria-hidden>
          Cambiar tema
        </Box>
        <SwitchThemeMode id={switchThemeModeId} onClick={toggleColorMode} checked={colorMode === "dark"} />
      </Stack>
    </Box>
  );
}
