import { Container, Typography, Button, Box, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import { baseUrl } from "../../constants/app";

export default function Home() {
  return (
    <Box
      role="tabpanel"
      // hidden={value !== index}
      id="vertical-tabpanel-0"
      aria-labelledby="vertical-tab-0"
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            pb: 4,
          }}
        >
          <Avatar
            alt="Avatar de usuario"
            src="https://avatars.githubusercontent.com/u/143102582?v=4"
            slotProps={{
              img: {
                width: 150,
                height: 150,
              },
            }}
            sx={{
              width: {
                xs: 50,
                sm: 150,
              },
              height: {
                xs: 50,
                sm: 150,
              },
              display: "block",
            }}
          />
          <Typography
            variant="overline"
            component="h1"
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "2rem",
              },
            }}
          >
            Hola soy Santiago
          </Typography>
        </Box>
        <Typography variant="h2" component="h2" gutterBottom>
          ¡Bienvenido a mi Portafolio!
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          Soy un Desarrollador Full Stack apasionado por la creación de
          aplicaciones web eficientes y de alto rendimiento.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/about"
            aria-label="Conoce más sobre mi"
          >
            Conoce Más
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={baseUrl + "/public/RESUME_SANTIAGO_VILLANUEVA_2024.pdf"}
            download={baseUrl + "/public/RESUME_SANTIAGO_VILLANUEVA_2024.pdf"}
            aria-label="Descargar CV"
          >
            Descargar CV (PDF)
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
