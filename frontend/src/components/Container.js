import React from "react";
import { StyledContainer } from "../styles/Container";

// --- Container --- //

export const Container = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};
