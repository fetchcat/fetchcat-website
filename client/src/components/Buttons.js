import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 7px 20px;
  border: none;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

export const PrimaryButton = styled(StyledButton)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHighlight};
  }
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CTAButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.ctaHighlight};
  }
  background-color: ${({ theme }) => theme.colors.cta};
`;
