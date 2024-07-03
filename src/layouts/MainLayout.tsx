import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function MainLayout() {
  const { currentSection = "home" } = useParams();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Sidebar />
      <Box>{currentSection}</Box>
    </Box>
  );
}
