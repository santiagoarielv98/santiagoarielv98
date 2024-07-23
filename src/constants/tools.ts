export interface Tool {
  name: string;
  icon: string;
  color: string;
  bgColor?: string;
  textColor?: string;
  inverted?: boolean;
}

export const frontendTools: Tool[] = [
  {
    name: "TypeScript",
    icon: "typescript",
    color: "#007ACC",
  },
  {
    name: "React",
    icon: "react-native",
    color: "#61DAFB",
  },
  {
    name: "Redux",
    icon: "redux",
    color: "#764ABC",
  },
  {
    name: "MUI Core",
    icon: "material-ui",
    color: "#0081CB",
  },
  {
    name: "SASS",
    icon: "sass",
    color: "#CC6699",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    color: "text.primary",
    inverted: true,
  },
  {
    name: "Angular",
    icon: "angularjs",
    color: "#DD0031",
  },
  {
    name: "Figma",
    icon: "figma",
    color: "#F24E1E",
  },
].map(GetIcon);

export const backendTools: Tool[] = [
  {
    name: "Java",
    icon: "java-coffee-cup-logo",
    color: "#007396",
  },
  {
    name: "Spring Boot",
    icon: "spring-logo",
    color: "#6DB33F",
  },
  {
    name: "NestJS",
    icon: "nestjs",
    color: "#E0234E",
  },
  {
    name: "Firebase",
    icon: "firebase",
    color: "#FFCA28",
  },
  {
    name: "AWS",
    icon: "amazon-web-services",
    color: "#232F3E",
  },
  {
    name: "Docker",
    icon: "docker",
    color: "#2496ED",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    color: "#47A248",
  },
  {
    name: "MySQL",
    icon: "mysql-logo",
    color: "#4479A1",
  },
]
  .map(GetIcon)
  .concat({
    name: "PostgreSQL",
    icon: "https://img.icons8.com/?size=24&id=38561&format=png&color=000000",
    color: "#336791",
  });

export const cloudTools: Tool[] = [
  {
    name: "Google Cloud",
    icon: "google-cloud-platform",
    color: "#4285F4",
  },
  {
    name: "Git",
    icon: "git",
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: "github--v1",
    color: "text.primary",
  },
  {
    name: "GitLab",
    icon: "gitlab",
    color: "#FCA326",
  },
].map(GetIcon);

export function GetIcon({ icon, ...rest }: Tool): Tool {
  const base = "https://img.icons8.com/color/24/000000/";
  return { icon: `${base}${icon}.png`, ...rest };
}
