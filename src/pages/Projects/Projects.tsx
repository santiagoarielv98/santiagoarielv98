import React from "react";

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

import { getProjects } from "../../services/api";

import type { Project } from "../../services/type";

const Projects = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    getProjects().then((response) => {
      setProjects(response?.projects ?? []);
    });
  }, []);

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
