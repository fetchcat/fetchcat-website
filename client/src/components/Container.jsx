import React from "react";

import styled from "styled-components";

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

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
