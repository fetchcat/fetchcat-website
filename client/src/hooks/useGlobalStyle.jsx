import { createGlobalStyle } from "styled-components";

const useGlobalStyle = () => {
  return <GlobalStyle />;
};

export default useGlobalStyle;

// --- Global Styles --- //

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
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
  }
`;
