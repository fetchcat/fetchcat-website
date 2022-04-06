import styled from "styled-components";

import Button from "../../components/Button";

import { NavLink } from "react-router-dom";

// --- Component --- //

const RegisterSuccess = () => {
  return (
    <StyledRegisterSuccess>
      <h2>Registration Successful!</h2>
      <NavLink to="/login">
        <Button bgColor="cta">Login</Button>
      </NavLink>
    </StyledRegisterSuccess>
  );
};

export default RegisterSuccess;

// --- Styles --- //

const StyledRegisterSuccess = styled.div`
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
`;
