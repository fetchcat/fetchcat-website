import React from "react";

import styled from "styled-components";

// --- Component //

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
