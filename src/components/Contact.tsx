import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import LaunchIcon from "@mui/icons-material/Launch";

import Section from "./Section";

import { socials } from "../constants/contact";
import { sendMessage } from "../services/api";

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      subject: form.get("subject") as string,
      message: form.get("message") as string,
    };
    sendMessage(payload);
  };
  return (
    <Section id="contact">
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          ¡Me encantaría saber de ti! Completa el formulario a continuación para enviarme un mensaje y me pondré en
          contacto contigo lo antes posible.
        </Typography>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <List>
              {socials.map((item, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton aria-label="launch" href={item.href} target="_blank">
                      <LaunchIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: item.bgcolor,
                        color: "common.white",
                      }}
                    >
                      {item.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.primary}
                    secondary={item.secondary}
                    secondaryTypographyProps={{ noWrap: true }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="name"
                    name="name"
                    inputProps={{
                      minLength: 3,
                      maxLength: 50,
                    }}
                    fullWidth
                    label="Tu Nombre"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    name="email"
                    inputProps={{
                      minLength: 3,
                      maxLength: 100,
                    }}
                    fullWidth
                    type="email"
                    label="Tu correo electrónico"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="subject" fullWidth label="Asunto" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    fullWidth
                    multiline
                    rows={4}
                    inputProps={{
                      maxLength: 1000,
                    }}
                    label="Mensaje"
                    placeholder="Escribe tu mensaje aquí"
                    required
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Enviar mensaje
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
