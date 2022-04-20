import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Global Theme

import { ThemeProvider } from "styled-components";
import Theme from "./components/Theme/Theme";
import GlobalStyle from "./components/Theme/GlobalStyle";

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
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
