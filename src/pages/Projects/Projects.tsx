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

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción breve del proyecto 1.",
    link: "https://github.com/tuusuario/proyecto1",
    image: "/path/to/project1-image.jpg", // Añade la ruta de la imagen
  },
  {
    title: "Proyecto 2",
    description: "Descripción breve del proyecto 2.",
    link: "https://github.com/tuusuario/proyecto2",
    image: "/path/to/project2-image.jpg",
  },
  {
    title: "Proyecto 3",
    description: "Descripción breve del proyecto 3.",
    link: "https://github.com/tuusuario/proyecto3",
    image: "/path/to/project3-image.jpg",
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
