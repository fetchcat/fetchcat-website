import React, { useContext, useState } from "react";

import Button from "../../components/Button";
import Form from "../../components/Form/Form";
import FormCard from "../../components/Form/FormCard";

import useLogin from "../../hooks/useLogin";

const LoginForm = (submitForm) => {
  // const { handleChange, values, handleSubmit, errors } = useLogin(submitForm);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  return (
    <FormCard>
      <Form onSubmit={submitForm(values)}>
        <h2>Login</h2>

        <label htmlFor="email">
          Email Address
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          ></input>
          {/* {errors.email && <div className="error">{errors.email}</div>} */}
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          ></input>
          {/* {errors.password && <div className="error">{errors.password}</div>} */}
        </label>

        <div className="submit-container">
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </FormCard>
  );
};

export default LoginForm;
