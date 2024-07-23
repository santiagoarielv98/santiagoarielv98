import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import { backendTools, cloudTools, frontendTools, type Tool } from "./tools";

export interface Skill {
  title: string;
  description?: string;
  icon: JSX.Element;
  tools: Tool[];
  color: "primary" | "secondary" | "info";
}

export const skills: Skill[] = [
  {
    title: "Frontend",
    // description:
    // "Me encanta crear interfaces de usuario interactivas y atractivas que brinden una experiencia intuitiva y fluida. Disfruto del proceso de diseño y desarrollo, asegurándome de que cada detalle esté bien cuidado.",
    icon: <WebIcon />,
    tools: frontendTools,
    color: "primary",
  },
  {
    title: "Backend",
    // description:
    //   "Me especializo en la lógica del servidor y el desarrollo de API, enfocándome en construir soluciones escalables y eficientes. Me apasiona asegurarme de que el backend sea robusto y de alto rendimiento.",
    icon: <StorageIcon />,
    tools: backendTools,
    color: "secondary",
  },
  {
    title: "Cloud",
    // description:
    //   "Tengo experiencia trabajando con servicios en la nube, asegurándome de que las aplicaciones sean accesibles y seguras. Utilizo las mejores prácticas para la implementación y gestión en la nube.",
    icon: <CloudIcon />,
    tools: cloudTools,
    color: "info",
  },
];
