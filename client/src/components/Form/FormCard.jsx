import React from "react";
import styled from "styled-components";

// --- Component --- //

const FormCard = ({ children }) => {
  return <StyledFormCard>{children}</StyledFormCard>;
};

export default FormCard;

// --- Component --- //

const StyledFormCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 25px auto 0px auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;

  h2 {
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

  .submit-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
  }
`;
