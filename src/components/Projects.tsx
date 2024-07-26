import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import Section from "../components/Section";

import { projects } from "../constants/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Typography variant="h3" align="center" sx={{ mb: 8 }}>
          Proyectos
        </Typography>
        {/* <Typography variant="body1" align="center" paragraph>
          Aquí encontrarás una selección de mis proyectos más destacados. (Próximamente agregaré tarjetas con detalles
          específicos de cada proyecto.)
        </Typography> */}
      </Container>
      <Container>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} lg={4} sm={6} key={index}>
              <Card key={index}>
                <CardMedia component="img" height="140" image={project.image} alt={project.title} loading="lazy" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={project.link} target="_blank" startIcon={<GitHubIcon />}>
                    Ver código
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href={project.deployed}
                    target="_blank"
                    startIcon={<LaunchIcon />}
                  >
                    Ver demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
