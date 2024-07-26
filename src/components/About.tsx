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
        <Typography variant="h3" align="center" sx={{mb: 4}}>
          Sobre mi
        </Typography>
      </Container>
      <Container>
        <Grid container spacing={2} alignItems="center">
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
          <Grid
            item
            xs={12}
            lg={8}
            sx={{
              mt: 4,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Desarrollador Web (Full Stack)
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Desarrollador con experiencia en React, Angular, Java, Spring Boot, TypeScript y NestJS. Especializado en
              la creación de interfaces de usuario intuitivas y funcionales, así como en la implementación de sistemas
              backend robustos{/*  y escalables */}.
            </Typography>

            <Grid container py={2} mb={2}>
              <Grid item xs={12} md={6}>
                <List dense disablePadding>
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
                <List dense disablePadding>
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
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
