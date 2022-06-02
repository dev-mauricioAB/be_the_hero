import React from "react";

import "./css/global.css";
import "./css/tailwind-globaly.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
