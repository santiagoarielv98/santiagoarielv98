import React from "react";

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
import Typography from "@mui/material/Typography";

import LaunchIcon from "@mui/icons-material/Launch";

import Section from "./Section";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Snackbar from "@mui/material/Snackbar";
import { socials } from "../constants/contact";
import { sendMessage } from "../services/api";

export default function Contact() {
  const [state, setState] = React.useState({
    message: "",
    open: false,
    severity: "success",
  });
  const [loading, setLoading] = React.useState(false);
  const { open } = state;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const payload = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      subject: form.get("subject") as string,
      message: form.get("message") as string,
    };
    try {
      await sendMessage(payload); // fetch(...) error: {"error":"Rate limit exceeded"}
      setState({ message: "Mensaje enviado con éxito", open: true, severity: "success" });
    } catch (error) {
      setState({ message: "¡Espera un momento! Estás enviando mensajes muy rápido.", open: true, severity: "error" });
    } finally {
      setLoading(false);
      formEl.reset();
    }
  };

  const handleClose = () => {
    setState({ message: "", open: false, severity: "success" });
  };

  return (
    <Section id="contact">
      <Container>         <Typography variant="h3" align="center" sx={{mb: 4}}>
          Contacto
        </Typography>
        {/* <Typography variant="body1" align="center" paragraph> */}
        {/* ¡Me encantaría saber de ti! */}
        {/*  Completa el formulario a continuación para enviarme un mensaje y me pondré
          en contacto contigo lo antes posible.
        </Typography> */}
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
              <ContactForm />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={loading}>
                Enviar mensaje
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          onClose={handleClose}
          message={state.message}
          autoHideDuration={6000}
          color={state.severity}
        />
      </Container>
    </Section>
  );
}

function ContactForm() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="name">Tu Nombre</InputLabel>
          <OutlinedInput
            id="name"
            name="name"
            label="Tu Nombre"
            inputProps={{
              autoComplete: "name",
              minLength: 3,
              maxLength: 50,
            }}
            required
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            name="email"
            label="Email"
            inputProps={{
              autoComplete: "email",
              minLength: 3,
              maxLength: 100,
            }}
            type="email"
            required
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel htmlFor="subject">Asunto</InputLabel>
          <OutlinedInput
            id="subject"
            name="subject"
            label="Asunto"
            inputProps={{
              autoComplete: "subject",
              maxLength: 100,
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel htmlFor="message">Mensaje</InputLabel>
          <OutlinedInput
            id="message"
            name="message"
            label="Mensaje"
            multiline
            rows={4}
            inputProps={{
              minLength: 5,
              maxLength: 1000,
            }}
            placeholder="Escribe tu mensaje aquí"
            required
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
