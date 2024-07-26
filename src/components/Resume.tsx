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
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          Resumen
        </Typography>
      </Container>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Experiencia Laboral
            </Typography>
            <Timeline
              sx={{
                padding: 0,
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {experiences.map((experience, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator
                    sx={{
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
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
            <Typography variant="h4" gutterBottom>
              Educación
            </Typography>
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
                  <TimelineSeparator
                    sx={{
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
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
      </Container>
    </Section>
  );
}
