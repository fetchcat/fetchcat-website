import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;

    height: 100vh;
    width: 100%;

  }
  #root {
    display: flex;
    flex-direction: column;
    min-width: 768px;
  }
  `;

export default GlobalStyles;
