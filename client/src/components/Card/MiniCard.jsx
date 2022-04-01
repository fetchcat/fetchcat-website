import React from "react";

import styled from "styled-components";

// --- Component --- //

const MiniCard = ({ children }) => {
  return <StyledMiniCard>{children}</StyledMiniCard>;
};

export default MiniCard;

// --- Styles --- //

const StyledMiniCard = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  svg {
    height: 50px;
    width: 50px;
  }
`;
