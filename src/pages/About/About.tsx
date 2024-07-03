import {
  Button,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  backEndSkills,
  cloudAndDBSkills,
  frontEndSkills,
} from "../../constants/skills";

const About = () => {
  return (
    <Container id="about" sx={{ height: "100%", overflow: "auto", py: 3 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Acerca De
      </Typography>
      <Typography variant="body1" paragraph>
        🚀 Soy un apasionado Desarrollador Full Stack especializado en React,
        TypeScript y NestJS (próximamente con Java y Angular), con experiencia
        en la creación de aplicaciones web eficientes y de alto rendimiento.
        Comprometido con el uso de las últimas tecnologías y prácticas de
        desarrollo para ofrecer soluciones innovadoras.
      </Typography>
      <Typography variant="h5" component="h3" gutterBottom>
        Mis Habilidades Técnicas van desde:
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h4" gutterBottom>
            Frontend
          </Typography>
          <List>
            {/* <ListItem>
              <ListItemText primary="React, Angular, NextJs, TypeScript, Redux, MUI Core, SASS, Figma" />
            </ListItem> */}
            <ListItem
              sx={{
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {frontEndSkills.map((skill, index) => (
                <Chip key={index} label={skill} />
              ))}
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h4" gutterBottom>
            Backend
          </Typography>
          <List>
            {/* <ListItem>
              <ListItemText primary="NestJs, Java, Spring Boot, Firebase, AWS, Docker" />
            </ListItem> */}
            <ListItem
              sx={{
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {backEndSkills.map((skill, index) => (
                <Chip key={index} label={skill} />
              ))}
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h4" gutterBottom>
            Cloud y DB
          </Typography>
          <List>
            {/* <ListItem>
              <ListItemText primary="Firebase, AWS (incluyendo AWS Functions), MongoDB, MySQL, PostgreSQL, Sequelize, Mongoose" />
            </ListItem> */}
            <ListItem
              sx={{
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {cloudAndDBSkills.map((skill, index) => (
                <Chip key={index} label={skill} />
              ))}
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        component={Link}
        to="/projects"
      >
        !Mira mis Proyectos!
      </Button>
    </Container>
  );
};

export default About;
