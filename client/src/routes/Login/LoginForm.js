import React from "react";

import styled from "styled-components";
import Button from "../../components/Button";
import Form from "../../components/Form";

import useLogin from "../../hooks/useLogin";
import validateLogin from "../../helpers/validateLogin";

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  margin: 25px auto 0px auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const LoginForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useLogin(
    submitForm,
    validateLogin
  );
  return (
    <StyledLoginForm>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">
          Email Address
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email && <div className="error">{errors.email}</div>}
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && <div className="error">{errors.password}</div>}
        </label>

        <div className="submit-container">
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </StyledLoginForm>
  );
};

export default LoginForm;
