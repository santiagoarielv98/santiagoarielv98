import useColorModeContext from "../hooks/useColorModeContext";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import HeroDarkBackground from "../assets/img/dark.webp";
import HeroLightBackground from "../assets/img/light.webp";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "100vh",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  "&:before": {
    content: '""',
    position: "absolute",
    zIndex: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}));

export default function ProductHeroLayout() {
  const { colorMode } = useColorModeContext();
  return (
    <ProductHeroLayoutRoot id="hero">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Typography color="inherit" align="center" variant="h2" component="h1">
          Santiago Villanueva
        </Typography>
        <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: { xs: 4, sm: 10 } }} paragraph>
          Soy un desarrollador web full-stack
        </Typography>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          bgcolor: "background.paper",
          objectFit: "cover",
          backgroundImage: `url(${colorMode === "dark" ? HeroDarkBackground : HeroLightBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px) brightness(0.5)",
        }}
      />
    </ProductHeroLayoutRoot>
  );
}
