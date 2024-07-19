import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import Section from "./Section";

import { educations, experiences } from "../constants/resume";

export default function Resume() {
  return (
    <Section id="resume">
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Resumen
        </Typography>
        {/* <Typography variant="body1" align="center" paragraph>
          Aquí encontrarás una visión general de mi trayectoria profesional y educativa */}
        {/* , detallando las experiencias y
          conocimientos que he adquirido a lo largo de mi carrera como desarrollador web Full Stack */}
        {/* . </Typography> */}
      </Container>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Container>
            <Typography variant="h4" gutterBottom>
              Experiencia Laboral
            </Typography>
          </Container>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    paddingRight: 0,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {experience.title}
                  </Typography>
                  {/* year */}
                  <Typography variant="body2">{experience.year}</Typography>
                  {/* description */}
                  <List dense>
                    {experience.details.map((detail, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={detail} />
                      </ListItem>
                    ))}
                  </List>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
        <Grid item xs={12} md={6}>
          <Container>
            <Typography variant="h4" gutterBottom>
              Educación
            </Typography>
          </Container>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {educations.map((education, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" gutterBottom>
                    {education.title}
                  </Typography>
                  {/* year */}
                  <Typography variant="body2">{education.year}</Typography>
                  {/* description */}
                  <List dense>
                    {education.details.map((detail, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={detail} primaryTypographyProps={{ variant: "body2" }} />
                      </ListItem>
                    ))}
                  </List>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Section>
  );
}
