import Box from "@mui/material/Box";

import { Sidebar } from "./components/Sidebar";

import "./App.css";

export default function App() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100%",
        display: "flex",
      }}
    >
      <Sidebar />
      <Box component="main" sx={{ p: 3, overflow: "auto" }}>
        <section id="about">
          <h2>Acerca De</h2>
          <p>
            🚀 Soy un apasionado Desarrollador Full Stack especializado en
            React, TypeScript y NestJS (próximamente con JAVA y Angular), con
            experiencia en la creación de aplicaciones web. Mi enfoque está en
            desarrollar soluciones eficientes y de alto rendimiento, utilizando
            las últimas tecnologías y prácticas de desarrollo.
          </p>
          <p>Mis Habilidades Técnicas van desde:</p>
          <ul>
            <li>
              <strong>Frontend:</strong> Profundo conocimiento en React y
              Angular, creando interfaces de usuario interactivas y responsivas.
            </li>
            <li>
              <strong>Backend:</strong> Experiencia en el desarrollo de APIs con
              NestJS y Java.
            </li>
            <li>
              <strong>Cloud y DB (Base de Datos):</strong> Familiaridad con
              Firebase y AWS, incluyendo AWS Functions y otras herramientas de
              AWS. Implementar y gestionar infraestructuras en la nube.
              Conocimientos en (No) SQL y SQL como MongoDB, MySQL y PostgreSQL
              con el uso de librerías como Sequelize y Mongoose.
            </li>
          </ul>
        </section>

        <section id="projects">
          <h2>Proyectos</h2>
          <p>Aquí puedes ver algunos de mis proyectos destacados:</p>
          <ul>
            <li>
              <a href="https://github.com/tuusuario/proyecto1" target="_blank">
                Proyecto 1
              </a>
              - Descripción breve del proyecto.
            </li>
            <li>
              <a href="https://github.com/tuusuario/proyecto2" target="_blank">
                Proyecto 2
              </a>
              - Descripción breve del proyecto.
            </li>
            <li>
              <a href="https://github.com/tuusuario/proyecto3" target="_blank">
                Proyecto 3
              </a>
              - Descripción breve del proyecto.
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contacto</h2>
          <p>Puedes contactarme a través de las siguientes plataformas:</p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:tuemail@example.com">tuemail@example.com</a>
            </li>
            <li>
              LinkedIn:
              <a href="https://www.linkedin.com/in/tuusuario" target="_blank">
                tuusuario
              </a>
            </li>
            <li>
              GitHub:
              <a href="https://github.com/tuusuario" target="_blank">
                tuusuario
              </a>
            </li>
          </ul>
        </section>
      </Box>
    </Box>
  );
}
