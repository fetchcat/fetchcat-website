import styled from "styled-components";

// --- Component --- //

const NavBar = ({ Navigation }) => {
  return (
    <StyledNavBar>
      <Navigation />
    </StyledNavBar>
  );
};

export default NavBar;

// --- Styles --- //

const StyledNavBar = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  .active {
    border-bottom: solid 5px ${(props) => props.theme.hoverHighlight};
    padding: 5px 10px 0px 10px;
  }
  li {
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 10px 5px 10px;
      min-height: 60px;
      color: ${(props) => props.theme.light};
      &:hover {
        color: ${(props) => props.theme.hoverHighlight};
      }
    }
  }
`;
