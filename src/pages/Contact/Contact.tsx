import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Container id="contact" sx={{ height: "100%", overflow: "auto", py: 3 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="body1" paragraph>
        Puedes contactarme a través de las siguientes plataformas:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText
            primary="Email"
            secondary="santiagoarielv98@gmail.com"
          />
          <IconButton
            component="a"
            href="mailto:santiagoarielv98@gmail.com"
            color="primary"
          >
            <EmailIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary="LinkedIn" secondary="Santiago Villanueva" />
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/tuusuario"
            target="_blank"
            color="primary"
          >
            <LinkedInIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="GitHub" secondary="tuusuario" />
          <IconButton
            component="a"
            href="https://github.com/tuusuario"
            target="_blank"
            color="primary"
          >
            <GitHubIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <WhatsAppIcon />
          </ListItemIcon>
          <ListItemText primary="WhatsApp" secondary="+54 2202 52-9223" />
          <IconButton
            component="a"
            href="https://wa.me/542202529223"
            target="_blank"
            color="primary"
          >
            <WhatsAppIcon />
          </IconButton>
        </ListItem>
      </List>
    </Container>
  );
};

export default Contact;
