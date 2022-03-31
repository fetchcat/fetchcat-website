import { Nav } from "./Nav/Nav";

import styled from "styled-components";

// --- Styled Header Component --- //

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.secondary};
  h1 {
    color: white;
    font-size: 1.5em;
  }
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  position: fixed;
  left: 0;
  top: 0;
`;

// --- Header Component --- //

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
