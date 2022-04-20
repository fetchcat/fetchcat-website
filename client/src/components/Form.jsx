import React from "react";
import styled from "styled-components";

// --- Component --- //

const Form = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;

// --- Styles --- //

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.9em;
    padding: 5px;
    margin: 2px 0 2px 0;
    width: 100%;
    font-size: 1em;
    input {
      padding: 10px;
      margin: 0 0 2px 0;
      width: 100%;
      border: solid 1px #cccccc;
      font-size: 1em;
      background-color: ${(props) => props.theme.background};
    }
    textarea {
      padding: 5px;
      width: 100%;
      border: solid 1px #ccc;
      font-size: 1em;
      height: 150px;
      resize: vertical;
      background-color: ${(props) => props.theme.background};
    }
    .error {
      color: white;
      background-color: ${(props) => props.theme.error};
      text-align: center;
      padding: 4px 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
`;
