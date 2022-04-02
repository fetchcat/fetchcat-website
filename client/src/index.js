import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { ThemeProvider } from "styled-components";

import Theme from "./hooks/useTheme";
import GlobalStyle from "./hooks/useGlobalStyle";

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
