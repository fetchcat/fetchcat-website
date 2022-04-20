import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import styled from "styled-components";

// --- Component --- //

const SideBar = ({ Navigation }) => {
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

export default SideBar;

// --- Styles --- //

const StyledSideBar = styled.div`
  position: fixed;
  bottom: 0;
  height: 100vh;
  right: -200px;
  width: 200px;
  background-color: ${(props) => props.theme.dark};
  z-index: 1;
  transition: right 0.5s;
  border-left: solid 5px ${(props) => props.theme.cta};

  &.active {
    color: ${(props) => props.theme.cta};
    right: 0px !important;
  }
`;

const StyledSideBarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  .active {
    color: ${(props) => props.theme.cta};
  }
  li {
    list-style: none;
    a {
      display: block;
      text-decoration: none;
      color: white;
      padding: 10px 0;
      :hover {
        color: ${(props) => props.theme.ctaHighlight};
      }
    }
  }
`;

const StyledToggleSwitch = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 99;
`;
