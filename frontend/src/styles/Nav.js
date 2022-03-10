import styled from "styled-components";

// --- Styling --- //

export const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li {
      a {
        text-decoration: none;
        padding: 10px;
        color: ${({ theme }) => theme.colors.light};
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
    button {
      padding: 4px 10px;
      border: none;
      border-radius: 10px;
      color: white;
      font-size: 1em;
      background-color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    }
  }
`;
