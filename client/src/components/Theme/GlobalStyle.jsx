import { createGlobalStyle } from "styled-components";

const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};

export default GlobalStyle;

// --- Global Styles --- //

const StyledGlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-width: 480px;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
  }

  @media (max-width: 700px) {
    .project-info, .skill-container {
        flex-direction: column;
      }
    .skill-container {
      div {
        margin-bottom: 20px;
      }
    }
    .project-links {
      margin-top: 20px;
      width: 100%;
      a {
        justify-content: center;
      }
    }
  }
`;
