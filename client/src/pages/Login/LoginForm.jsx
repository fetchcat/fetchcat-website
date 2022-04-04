import React from "react";

import Button from "../../components/Button";
import Form from "../../components/Form/Form";
import FormCard from "../../components/Form/FormCard";

import useLogin from "../../hooks/useLogin";
import validateLogin from "../../helpers/validateLogin";

const LoginForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useLogin(
    submitForm,
    validateLogin
  );
  return (
    <FormCard>
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
    </FormCard>
  );
};

export default LoginForm;
