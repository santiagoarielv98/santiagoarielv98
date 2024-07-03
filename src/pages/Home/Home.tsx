import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        // backgroundImage: "url(/path/to/your/image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          ¡Bienvenido a mi Portafolio!
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Soy un Desarrollador Full Stack apasionado por la creación de
          aplicaciones web eficientes y de alto rendimiento.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          component={Link}
          to="/about"
        >
          Conoce Más
        </Button>
      </Container>
    </Box>
  );
}
