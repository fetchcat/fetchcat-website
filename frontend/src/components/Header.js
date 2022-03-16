import styled from "styled-components";
import { Nav } from "./Nav/Nav";

// --- Header Styles --- //

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 50px;
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
