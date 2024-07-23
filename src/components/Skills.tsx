import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

import Section from "./Section";

import Chip from "@mui/material/Chip";
import { skills } from "../constants/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Skills
        </Typography>
        {/* <Typography variant="body1" align="center" paragraph>
          Mis habilidades abarcan tres áreas principales: Frontend, Backend y Cloud. */}
        {/*  A continuación, un vistazo rápido a
          cada una y las tecnologías que manejo. */}
        {/* </Typography> */}
      </Container>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid key={index} item md={4} sm={6} xs={12}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
                <Avatar alt={skill.title} color={skill.color}>
                  {skill.icon}
                </Avatar>
                <Typography variant="h4">{skill.title}</Typography>
                {skill.description && (
                  <Typography variant="body1" paragraph>
                    {skill.description}
                  </Typography>
                )}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <List dense>
                    {skill.tools.map((tool, index) => (
                      <ListItem key={index}>
                        <Chip
                          variant="outlined"
                          avatar={
                            <Avatar
                              src={tool.icon}
                              variant="rounded"
                              slotProps={{
                                img: { loading: "lazy" },
                              }}
                              sx={{
                                filter: tool.inverted
                                  ? (t) => (t.palette.mode === "dark" ? "invert(1)" : undefined)
                                  : undefined,
                              }}
                            />
                          }
                          label={tool.name}
                          sx={{
                            pl: 0.5,
                            borderColor: tool.color,
                            bgcolor: tool.bgColor,
                            color: tool.bgColor ? tool.color : undefined,
                          }}
                        />
                        {/* <ListItemText primary={tool.name} /> */}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <Container>
        <Typography variant="body1" gutterBottom>
          Además, utilizo herramientas como Jira para la gestión de proyectos, Docker para la implementación de
          contenedores y diversas tecnologías para asegurar que cada proyecto sea exitoso desde el inicio hasta el
          final.
        </Typography>
      </Container> */}
    </Section>
  );
}
