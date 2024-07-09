import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InfoIcon from "@mui/icons-material/Info";
import {
  Alert,
  Box,
  Chip,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Typography,
} from "@mui/material";

const contactInfo = [
  {
    icon: <EmailIcon />,
    primary: "Email",
    secondary: "santiagoarielv98@gmail.com",
    href: "mailto:santiagoarielv98@gmail.com",
  },
  {
    icon: <LinkedInIcon />,
    primary: "LinkedIn",
    secondary: "linkedin.com/in/santiagoarielv",
    href: "https://www.linkedin.com/in/santiagoarielv",
  },
  {
    icon: <GitHubIcon />,
    primary: "GitHub",
    secondary: "github.com/santiagoarielv98",
    href: "https://github.com/santiagoarielv98",
  },
  {
    icon: <WhatsAppIcon />,
    primary: "WhatsApp",
    href: "https://wa.me/542202529223",
    secondary: "+54 2202 52-9223",
  },
];

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState<"success" | "error">(
    "success"
  );

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMessage("Se ha copiado el de contenido al portapapeles");
        setSeverity("success");
      })
      .catch(() => {
        () => {
          setMessage("No se ha podido copiar el contenido al portapapeles");
          setSeverity("error");
        };
      })
      .finally(() => {
        setOpen(true);
      });
  };

  return (
    <Container
      sx={{ height: "100%", overflow: "auto", py: 3 }}
      // hidden={value !== index}
      id="vertical-tabpanel-3"
      aria-labelledby="vertical-tab-3"
    >
      <Typography variant="h2" component="h2" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="body1" paragraph>
        Puedes contactarme en las siguientes plataformas
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mb: 2,
          width: "auto",
        }}
      >
        <Chip
          icon={<InfoIcon />}
          label="Toca el icono de la izquierda para copiar el contenido"
          color="default"
          variant="outlined"
          size="small"
          sx={{
            // 12px
            fontSize: "0.75rem",
          }}
        />
        <Chip
          icon={<InfoIcon />}
          label="Toca el icono de la derecha para abrir la enlace"
          color="default"
          variant="outlined"
          size="small"
          sx={{
            // 12px
            fontSize: "0.75rem",
          }}
        />
      </Box>

      <List sx={{ zIndex: 999 }}>
        {contactInfo.map((info, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <IconButton
                onClick={() => handleCopy(info.secondary)}
                aria-label={`Copiar ${info.primary}`}
              >
                {info.icon}
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={info.primary} secondary={info.secondary} />
            <IconButton
              component="a"
              href={info.href}
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ir a ${info.primary}`}
            >
              {info.icon}
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Snackbar
        role="status"
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
