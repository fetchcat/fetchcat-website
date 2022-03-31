import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-width: 500px;
    height: 100vh;
    font-family: "Poppins", sans-serif;
  }
`;

const theme = {
  primary: "#8560d4",
  secondary: "#262429",
  cta: "#65baa9",
  dark: "#262429",
  medium: "#5d4a82",
  light: "#ffffff",
  darkGrey: "#888888",
  mediumGrey: "#cccccc",
  lightGrey: "#dddddd",
  success: "green",
  warning: "yellow",
  error: "#bd3549",
  hoverHighlight: "#b89cf1",
  primaryHighlight: "#a585e5",
  secondaryHighlight: "#4b4750",
  ctaHighlight: "#7bd4c2",
};

// New Root for React v18

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
