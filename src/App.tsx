import { createHashRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/:currentSection",
        element: null,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
