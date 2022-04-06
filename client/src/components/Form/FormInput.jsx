import React, { useState } from "react";

import styled from "styled-components";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMsg, invalid, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
    console.log("focus fired");
  };
  return (
    <label>
      {label}
      <StyledInput
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused="maybe"
      />
      <StyledError>{errorMsg}</StyledError>
    </label>
  );
};

export default FormInput;

const StyledError = styled.span`
  color: red;
  display: none;
`;

const StyledInput = styled.input`
  :invalid ~ span {
    display: block;
  }
`;
