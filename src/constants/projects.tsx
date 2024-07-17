import CodoACodo from "../assets/img/projects/codo-a-codo.webp";
import SvCountryApp from "../assets/img/projects/sv-country.webp";
import SvFrontmentorSolutions from "../assets/img/projects/sv-frontendmentor.webp";
import SvCocheriaRatti from "../assets/img/projects/sv-cocheria-ratti.webp";
import Link from "@mui/material/Link";
export const projects = [
  {
    title: "Cochería Ratti",
    description: (
      <>
        Rediseño de la página web de la{" "}
        <Link href="https://cocheriaratti.com.ar/" target="_blank">
          cocheriaratti.com.ar
        </Link>
      </>
    ),
    link: "https://github.com/santiagoarielv98/sv-cocheria-ratti",
    image: SvCocheriaRatti,
    deployed: "https://santiagoarielv98.github.io/sv-cocheria-ratti/",
  },
  {
    title: "Soluciones Frontend Mentor",
    description: "Soluciones a desafíos de Frontend Mentor.",
    link: "https://github.com/santiagoarielv98/sv-frontmentor-solutions",
    image: SvFrontmentorSolutions,
    deployed: "https://santiagoarielv98.github.io/sv-frontmentor-solutions/",
  },
  {
    title: "Integrador Front 2 - Codo a Codo",
    description: "Proyecto integrador del curso de Codo a Codo.",
    link: "https://github.com/santiagoarielv98/codo-a-codo/tree/main/tp-integrador-front-2/codo-a-codo",
    image: CodoACodo,
    deployed: "https://santiagoarielv98.github.io/codo-a-codo/tp-integrador-front-2/codo-a-codo/index.html",
  },
  {
    title: "SV # World",
    description: "Aplicación web para buscar información de países.",
    link: "https://github.com/santiagoarielv98/sv-country-app",
    image: SvCountryApp,
    deployed: "https://sv-country-app.vercel.app/",
  },
];
