import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.scss";

// Base App

import App from "./App";

// Global Axios

import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

// New Root for React v18

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
