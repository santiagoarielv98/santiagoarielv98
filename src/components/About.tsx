import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import Section from "./Section";

import { left, right } from "../constants/about";

import Profile from "../assets/img/profile-350x350.webp";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Sobre mi
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          ¡Hola! Soy Santiago Villanueva, un desarrollador web full stack apasionado por la creación de aplicaciones web
          eficientes y de alto rendimiento. Comprometido con el uso de las últimas tecnologías y prácticas de desarrollo
          para ofrecer soluciones innovadoras. Con experiencia en desarrollo frontend y backend, siempre buscando nuevos
          retos y oportunidades para crecer profesionalmente.
        </Typography>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Avatar
              sx={{
                width: "100%",
                maxWidth: {
                  md: 350,
                  xs: 200,
                },
                aspectRatio: "1/1",
                margin: "auto",
                height: "auto",
              }}
              src={Profile}
              alt="Avatar de Santiago"
            />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Typography variant="h4" gutterBottom align="center">
              Desarrollador Web (Full Stack)
            </Typography>
            <Typography variant="body1" paragraph>
              Desarrollador con experiencia en React, Angular, Java, Spring Boot, TypeScript y NestJS. Especializado en
              la creación de interfaces de usuario intuitivas y funcionales, así como en la implementación de sistemas
              backend robustos y escalables.
            </Typography>

            <Grid container py={2}>
              <Grid item xs={12} md={6}>
                <List dense>
                  {left.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.primary}
                        secondary={item.secondary}
                        secondaryTypographyProps={{
                          noWrap: true,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <List dense>
                  {right.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.primary}
                        secondary={item.secondary}
                        secondaryTypographyProps={{
                          noWrap: true,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
            <Typography variant="body1" gutterBottom>
              Con un enfoque en la mejora continua y la adopción de nuevas tecnologías, he trabajado en proyectos que
              abarcan desde la optimización de interfaces de usuario hasta la implementación de servicios backend
              complejos. Siempre dispuesto a aprender y a colaborar en equipos dinámicos y multidisciplinarios.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
