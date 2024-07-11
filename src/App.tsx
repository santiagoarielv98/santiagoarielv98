import { createHashRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

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
      {
        path: "/contact",
        async lazy() {
          return {
            Component: (await import("./pages/Contact/Contact")).default,
          };
        },
      },
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
