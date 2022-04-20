import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { UserContext } from "../../context/UserContext";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

// --- Component --- //

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const [user] = useContext(UserContext);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Gets new width
    window.addEventListener("resize", handleResize);
    // Cleanup Function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        title: "Contact",
        path: "/contact",
      },
      {
        title: "Register",
        path: "/register",
      },
    ];
    return (
      <>
        {links.map((link, idx) => (
          <li key={idx}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
        {!user.isAuth && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
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
