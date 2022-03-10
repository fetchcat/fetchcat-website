import styled from "styled-components";

// --- Styling --- //

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 10px 10px;
  h1 {
    color: white;
    font-size: 1.5em;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
