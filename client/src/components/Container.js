import React from "react";

import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.lightGrey};
  width: 100%;
  height: 100%;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
