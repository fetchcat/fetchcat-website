import styled from "styled-components";

// --- Component --- //

const button = (props) => {
  return (
    <StyledButton primary={props.primary} onClick={props.button}>
      {props.children}
    </StyledButton>
  );
};

export default button;

// --- Styles --- //

const StyledButton = styled.button`
  padding: 10px 25px;
  border: none;
  font-size: 1em;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.primary ? props.theme.primary : props.theme.cta};
  :hover {
    background-color: ${(props) =>
      props.primary ? props.theme.primaryHighlight : props.theme.ctaHighlight};
  }
`;
