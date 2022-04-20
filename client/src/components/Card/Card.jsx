import React from "react";
import styled from "styled-components";

// --- Component --- //

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;

// --- Component --- //

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 25px auto 0px auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;

  h2,
  h3 {
    margin-bottom: 20px;
  }

  button,
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    border: none;
    font-size: 1.2em;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
    color: white;
    text-decoration: none;
    background-color: ${(props) => props.theme.primary};
    :hover {
      background-color: ${(props) => props.theme.primaryHighlight};
    }
  }

  .error {
    color: ${(props) => props.theme.error};
  }

  .warning {
    color: ${(props) => props.theme.warning};
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
  }
`;
