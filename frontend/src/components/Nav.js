import React from "react";
import { StyledNav } from "../styles/Nav";

// --- Component --- //

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <a className="active" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Register</a>
          <button>Login</button>
        </li>
      </ul>
    </StyledNav>
  );
};
