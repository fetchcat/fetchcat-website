import { NavLink } from "react-router-dom";

import styled from "styled-components";

import Nav from "./Nav/Nav";

import { GiCat } from "react-icons/gi";

// --- Component --- //

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledLogoNavLink to="/">
        <GiCat />
        <span>{title}</span>
      </StyledLogoNavLink>
      <Nav />
    </StyledHeader>
  );
};

export default Header;

// --- Styles --- //

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.dark};
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 60px;
  position: fixed;
  left: 0;
  top: 0;
`;

const StyledLogoNavLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 1.5em;

  text-decoration: none;
  align-items: center;
  span {
    margin-left: 10px;
  }
  :hover {
    color: ${(props) => props.theme.ctaHighlight};
  }
`;
