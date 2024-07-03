import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import cocheriaRattiImg from "../../assets/cocheria-ratti.png";
import CodoACodoImg from "../../assets/codo-a-codo.png";
import SvFrontmentorSolutionsImg from "../../assets/sv-frontmentor-solutions.png";
import SvCountryAppImg from "../../assets/sv-country-app.png";

const projects = [
  {
    title: "Cochería Ratti",
    description: "Rediseño de la página web de la cocheriaratti.com.ar",
    link: "https://github.com/santiagoarielv98/sv-cocheria-ratti",
    image: cocheriaRattiImg,
    deployed: "https://santiagoarielv98.github.io/sv-cocheria-ratti/",
  },
  {
    title: "Soluciones Frontend Mentor",
    description: "Soluciones a desafíos de Frontend Mentor.",
    link: "https://github.com/santiagoarielv98/sv-frontmentor-solutions",
    image: SvFrontmentorSolutionsImg,
    deployed: "https://santiagoarielv98.github.io/sv-frontmentor-solutions/",
  },
  {
    title: "Integrador Front 2 - Codo a Codo",
    description: "Proyecto integrador del curso de Codo a Codo.",
    link: "https://github.com/santiagoarielv98/codo-a-codo/tree/main/tp-integrador-front-2/codo-a-codo",
    image: CodoACodoImg,
    deployed:
      "https://santiagoarielv98.github.io/codo-a-codo/tp-integrador-front-2/codo-a-codo/index.html",
  },
  {
    title: "SV # World",
    description: "Aplicación web para buscar información de países.",
    link: "https://github.com/santiagoarielv98/sv-country-app",
    image: SvCountryAppImg,
    deployed: "https://sv-country-app.vercel.app/",
  },
];

const Projects = () => {
  return (
    <Container id="projects" sx={{ height: "100%", overflow: "auto", py: 3 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Proyectos
      </Typography>
      <Typography variant="body1" paragraph>
        Aquí puedes ver algunos de mis proyectos destacados:
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.link}
                  target="_blank"
                >
                  Ver Proyecto
                </Button>
                {project.deployed && (
                  <Button
                    size="small"
                    color="primary"
                    href={project.deployed}
                    target="_blank"
                  >
                    Ver Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        component={Link}
        to="/contact"
      >
        ¡Contáctame!
      </Button>
    </Container>
  );
};

export default Projects;
