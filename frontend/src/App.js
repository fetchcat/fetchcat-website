import React from "react";

// --- Theme --- //

import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";

// --- Global Styles --- /

import GlobalStyles from "./styles/Global";

// --- Components --- //

import { Header } from "./components/Header";
import { Container } from "./components/Container";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header title="FetchCat" />
        <Container>
          <div>derp</div>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
