import FolderIcon from "@mui/icons-material/FolderOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import MailIcon from "@mui/icons-material/MailOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import WorkIcon from "@mui/icons-material/WorkOutline";

export const navItems = [
  { primary: "Home", href: "#hero", icon: <HomeIcon /> },
  { primary: "Sobre Mi", href: "#about", icon: <InfoIcon /> },
  { primary: "Skills", href: "#skills", icon: <SettingsIcon /> },
  { primary: "Resumen", href: "#resume", icon: <WorkIcon /> },
  { primary: "Proyectos", href: "#projects", icon: <FolderIcon /> },
  { primary: "Contacto", href: "#contact", icon: <MailIcon /> },
];
