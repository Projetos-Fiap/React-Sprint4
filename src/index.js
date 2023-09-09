import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App"; // Importe o App.js

createRoot(document.getElementById("root")).render(
  <RouterProvider router={App} /> // Use o App.js como router
);
