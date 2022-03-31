import React from "react";
import styled from "styled-components";

const StyledLoadingMsg = styled.div`
  color: yellow;
`;

const LoadingMsg = ({ msg }) => {
  return <StyledLoadingMsg>{msg}</StyledLoadingMsg>;
};

export default LoadingMsg;
