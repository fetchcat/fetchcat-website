import styled from "styled-components";

// --- NavBar Styles --- //

const StyledNavBar = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  li {
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 10px 5px 10px;
      height: 50px;

      color: ${({ theme }) => theme.colors.light};
      &:hover {
        color: ${({ theme }) => theme.colors.hoverHighlight};
      }
    }
  }

  a.active {
    border-bottom: solid 5px ${({ theme }) => theme.colors.hoverHighlight};
    padding: 5px 10px 0px 10px;
  }
`;

// --- NavBar Component --- //

export const NavBar = ({ Navigation }) => {
  return (
    <StyledNavBar>
      <Navigation />
    </StyledNavBar>
  );
};