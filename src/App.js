import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Importando Componentes
import Navbar from "./components/Navbar/Navbar";

// Importando as páginas
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";

// Importando CSS
import "./App.css";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "page1",
        element: <Page1 />,
      },
      {
        path: "page2",
        element: <Page2 />,
      },
    ],
  },
]);

export default router; // Exporte o router

