import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
<<<<<<< HEAD

import NavBar from "./NavBar";
import SideBar from "./SideBar";
=======

import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
`;

// --- Nav Component --- //
>>>>>>> 9840766758854dd694af3c2876335c2814d6d25f

// --- Component --- //

const Nav = () => {
  const initialWidth = window.innerWidth || 0;
  const [width, setWidth] = useState(initialWidth);

  // Set Width
  useEffect(() => {
    function fetchWidth() {
      setWidth(window.innerWidth);
    }

    // Gets new width
    window.addEventListener("resize", fetchWidth);

    // Cleanup Function
    return () => window.removeEventListener("resize", fetchWidth);
  });

  const Navigation = () => {
    const links = [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Blog",
        path: "/blog",
      },
      {
        title: "Portfolio",
        path: "/portfolio",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Contact",
        path: "/contact",
      },
      {
        title: "Register",
        path: "/register",
      },
      {
        title: "Login",
        path: "/login",
      },
    ];
    return (
      <>
        {links.map((link, idx) => (
          <li key={idx}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </>
    );
  };
  // If width < 700 use sidebar
  return (
    <StyledNav>
      {width > 700 ? (
        <NavBar Navigation={Navigation} />
      ) : (
        <SideBar Navigation={Navigation} />
      )}
    </StyledNav>
  );
};

export default Nav;

// --- Styles --- //

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
`;
