import { createHashRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

/* const About = React.lazy(() => import("./pages/About/About"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Projects = React.lazy(() => import("./pages/Projects/Projects")); */

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        async lazy() {
          return { Component: (await import("./pages/Home/Home")).default };
        },
      },
      {
        path: "/about",
        lazy: () => import("./pages/About/About"),
      },
      /* {
        path: "/contact",
        lazy: () => import("./pages/Contact/Contact"),
      }, */
      {
        path: "/projects",
        lazy: () => import("./pages/Projects/Projects"),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
