<<<<<<< HEAD
import { useState } from "react";
import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// --- Styles --- //

const StyledSideBar = styled.div`
  position: fixed;
  bottom: 0;
  height: 100vh;
  right: -200px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 1;
  transition: right 0.5s;
  border-left: solid 5px ${({ theme }) => theme.colors.hoverHighlight};

  .active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ToggleSwitch = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 99;
`;

const SideBarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  li {
    list-style: none;
    a {
      display: block;
      text-decoration: none;
      color: white;
      padding: 10px 0;
      :hover {
        color: ${({ theme }) => theme.colors.hoverHighlight};
      }
    }
  }
`;

// --- Component --- //

export const SideBar = ({ Navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <StyledSideBar className={menuOpen ? "active" : ""}>
        <ToggleSwitch onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose /> : <FaBars />}
        </ToggleSwitch>
        <SideBarLinks onClick={toggleMenu}>
          <Navigation />
        </SideBarLinks>
      </StyledSideBar>
    </>
  );
};
=======
import React, { useState } from "react";
import SideBarSCSS from "./SideBar.module.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import NavLinks from "./NavLinks";

export default function SideBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => setToggleMenu(!toggleMenu);
  return (
    <nav>
      <div onClick={toggle} className={SideBarSCSS.openClose}>
        {toggleMenu ? <AiOutlineClose /> : <FaBars />}
      </div>

      {toggleMenu && (
        <ul className={SideBarSCSS.sidebar}>
          {NavLinks.map((link) => (
            <li className="items">
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
>>>>>>> f4059aed5fc5d4de853fd4586dd63cceb18f1b63
