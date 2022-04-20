import styled from "styled-components";

// --- Component --- //

const Button = (props) => {
  return (
    <StyledButton primary={props.primary} onClick={props.button}>
      {props.children}
    </StyledButton>
  );
};

export default Button;

// --- Styles --- //

const StyledButton = styled.button`
  padding: 15px 20px;
  border: none;
  font-size: 1.2em;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  display: flex;
  background-color: ${(props) =>
    props.primary ? props.theme.primary : props.theme.cta};
  :hover {
    background-color: ${(props) =>
      props.primary ? props.theme.primaryHighlight : props.theme.ctaHighlight};
  }
  svg {
    margin-right: 10px;
  }
`;
