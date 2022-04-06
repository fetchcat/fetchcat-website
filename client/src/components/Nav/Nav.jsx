import { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import styled from "styled-components";
import { UserContext } from "../../context/UserContext";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

// --- Component --- //

const Nav = () => {
  const initialWidth = window.innerWidth || 0;
  const [width, setWidth] = useState(initialWidth);

  const [user, setUser] = useContext(UserContext);

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

  const logout = () => {
    setUser({ isAuth: false });
  };

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
    ];
    return (
      <>
        {links.map((link, idx) => (
          <li key={idx}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
        {user.isAuth ? (
          <li>
            <StyledNavLink to="/Dashboard">Dashboard</StyledNavLink>
          </li>
        ) : null}
        {user.isAuth ? (
          <li>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <StyledNavLink to="/login">Login</StyledNavLink>
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

const StyledNavLink = styled(NavLink)`
  :hover {
    color: ${(props) => props.theme.ctaHighlight} !important;
  }
`;
