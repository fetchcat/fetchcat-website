import React from "react";
import { Nav } from "./Nav";
import { StyledHeader } from "../styles/Header";

// --- Header --- //

export const Header = ({ title }) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Nav />
    </StyledHeader>
  );
};
