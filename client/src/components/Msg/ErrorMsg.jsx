import React from "react";
import styled from "styled-components";

// --- Component --- //

const ErrorMsg = ({ msg }) => {
  return <StyledErrorMsg>{msg}</StyledErrorMsg>;
};

export default ErrorMsg;

// ---  Styles --- //

const StyledErrorMsg = styled.div`
  color: red;
`;
