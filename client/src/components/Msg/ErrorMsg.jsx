import React from "react";
import styled from "styled-components";

const StyledErrorMsg = styled.div`
  color: red;
`;

const ErrorMsg = ({ msg }) => {
  return <StyledErrorMsg>{msg}</StyledErrorMsg>;
};

export default ErrorMsg;
