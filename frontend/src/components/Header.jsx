import { NavLink } from "react-router-dom";

import Nav from "./Nav";

import { GiCat } from "react-icons/gi";

// --- Component --- //

const Header = ({ title }) => {
  return (
    <header className="header">
      <NavLink to="/" className="logo-navlink">
        <GiCat />
        <span>{title}</span>
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
