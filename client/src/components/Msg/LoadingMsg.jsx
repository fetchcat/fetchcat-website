import React from "react";
import styled from "styled-components";

// --- Component --- //

const LoadingMsg = ({ msg }) => {
  return <StyledLoadingMsg>{msg}</StyledLoadingMsg>;
};

export default LoadingMsg;

// --- Styles --- //

const StyledLoadingMsg = styled.div`
  color: yellow;
`;
