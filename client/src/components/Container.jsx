import React from "react";

import styled from "styled-components";

<<<<<<< HEAD
// --- Component //
=======
const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.lightGrey};
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  height: 100%;
  width: 100%;
  h1 {
    margin: 25px 0px;
    text-align: center;
  }
`;
>>>>>>> 9840766758854dd694af3c2876335c2814d6d25f

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

// --- Styles //

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.lightGrey};
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  min-height: 100vh;
  width: 100%;
  h1 {
    margin: 25px 0px;
    text-align: center;
  }
`;
