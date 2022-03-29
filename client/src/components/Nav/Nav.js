import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

// --- Nav Component --- //

export const Nav = () => {
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
    <nav>
      {width > 700 ? (
        <NavBar Navigation={Navigation} />
      ) : (
        <SideBar Navigation={Navigation} />
      )}
    </nav>
  );
};
