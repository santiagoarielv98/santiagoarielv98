import useColorModeContext from "../hooks/useColorModeContext";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import Fab from "@mui/material/Fab";
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
        maxWidth="md"
      >
        <Typography color="inherit" align="center" variant="h2" component="h1">
          😎 Santiago Villanueva
        </Typography>

        <Typography align="center" variant="h5" sx={{ mt: 4 }}>
          Desarrollador Full Stack
        </Typography>
        <Typography color="inherit" align="center" variant="h6" sx={{ mt: 2, mx: 2 }} paragraph>
          Especializado en crear aplicaciones web de alto rendimiento con tecnologías innovadoras. 🚀
        </Typography>
        <Fab sx={{ mt: 8 }} color="primary" size="small" href="#about">
          <ArrowDownwardIcon />
        </Fab>
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
          filter: "blur(1.5px) brightness(0.4)",
        }}
      />
    </ProductHeroLayoutRoot>
  );
}
