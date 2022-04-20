import React from "react";

import styled from "styled-components";

// --- Components --- //

export const PageContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export const WidthContainer = ({ children }) => {
  return <StyledWidthContainer>{children}</StyledWidthContainer>;
};

// --- Styless --- //

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.darkBackground};
  display: flex;
  flex-direction: column;
  padding: 60px 10px 0px 10px;
  min-height: 100vh;
  width: 100%;
  h1 {
    margin: 25px 0px;
    text-align: center;
  }
`;

const StyledWidthContainer = styled.div`
  max-width: 900px;
  margin: 0px auto;
`;
