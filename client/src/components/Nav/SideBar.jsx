import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import styled from "styled-components";

const StyledSideBar = styled.div`
  position: fixed;
  bottom: 0;
  height: 100vh;
  right: -200px;
  width: 200px;
  background-color: ${(props) => props.theme.secondary};
  z-index: 1;
  transition: right 0.5s;
  border-left: solid 5px ${(props) => props.theme.hoverHighlight};

  &.active {
    color: ${(props) => props.theme.primary};
    right: 0px !important;
  }
`;

const StyledSideBarLinks = styled.ul`
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
        color: ${(props) => props.theme.hoverHighlight};
      }
    }
  }
`;

const StyledToggleSwitch = styled.div`
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

// --- SideBar Component --- //

export const SideBar = ({ Navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <StyledSideBar className={menuOpen ? "active" : ""}>
      <StyledToggleSwitch onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <FaBars />}
      </StyledToggleSwitch>
      <StyledSideBarLinks onClick={toggleMenu}>
        <Navigation />
      </StyledSideBarLinks>
    </StyledSideBar>
  );
};
